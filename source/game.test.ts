// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as Game from "./game";
import { Rectangle } from "./rectangle";
import {
    createFrameDriver,
    flushMicrotasks,
    setDocumentHidden,
    stubCanvasContext,
} from "../tests/helpers";

let driver: ReturnType<typeof createFrameDriver>;

beforeEach(function () {
    stubCanvasContext();
    driver = createFrameDriver();
    setDocumentHidden(false);

    Game.init({ container: document.body, width: 100, height: 100 });
});

afterEach(function () {
    Game.stopGameLoop();
    Game.disableMouseMoveEvents();
    Game.removeAllCallbacks();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

/**
 * Record the delta time of every update.
 */
function recordUpdates() {
    const deltas: number[] = [];

    Game.addToGameLoop((deltaTime) => deltas.push(deltaTime));

    return deltas;
}

describe("Game loop timing", function () {
    test("updates at the set fps, on a 60Hz display", function () {
        for (const fps of [35, 50, 30]) {
            Game.setFps(fps);
            const deltas = recordUpdates();

            driver.run(600); // 10 seconds

            expect(deltas.length).toBeGreaterThanOrEqual(fps * 10 - 1);
            expect(deltas.length).toBeLessThanOrEqual(fps * 10);

            Game.removeAllCallbacks();
        }
    });

    test("the delta times add up to the time that passed", function () {
        const deltas = recordUpdates();

        driver.run(60);

        const total = deltas.reduce((sum, value) => sum + value, 0);

        // the last update was within a frame of the end
        expect(total).toBeGreaterThan(1 - 1 / 60 - 1e-9);
        expect(total).toBeLessThanOrEqual(1 + 1e-9);
    });

    test("the delta time is limited after a long pause", function () {
        const deltas = recordUpdates();

        driver.frame(5000);
        expect(deltas).toEqual([0.25]);

        Game.setMaxDeltaTime(0.1);
        driver.frame(5000);
        expect(deltas).toEqual([0.25, 0.1]);
    });

    test("setFps() and setMaxDeltaTime() validate the value", function () {
        expect(() => Game.setFps(0)).toThrow(RangeError);
        expect(() => Game.setFps(NaN)).toThrow(RangeError);
        expect(() => Game.setMaxDeltaTime(-1)).toThrow(RangeError);
    });
});

describe("Game loop callbacks", function () {
    test("a callback with a delay keeps to its period", function () {
        let calls = 0;

        Game.addToGameLoop(() => calls++, { delay: 0.1 });
        driver.run(600); // 10 seconds

        expect(calls).toBeGreaterThanOrEqual(99);
        expect(calls).toBeLessThanOrEqual(100);
    });

    test("a timeout is only called once", function () {
        let calls = 0;

        Game.addToGameLoop(() => calls++, { delay: 0.1, interval: false });
        driver.run(60);

        expect(calls).toBe(1);
    });

    test("removing all the callbacks from a callback doesn't break the loop", function () {
        let otherCalls = 0;

        // the callbacks are called last to first, so the second one runs first
        Game.addToGameLoop(() => otherCalls++);
        Game.addToGameLoop(() => Game.removeAllCallbacks());

        expect(() => driver.run(10)).not.toThrow();
        expect(otherCalls).toBe(0);
    });

    test("removeFromGameLoop() removes every time the callback was added", function () {
        let calls = 0;
        const callback = () => calls++;

        Game.addToGameLoop(callback);
        Game.addToGameLoop(callback, { delay: 1 });

        expect(Game.removeFromGameLoop(callback)).toBe(true);
        driver.run(120);

        expect(calls).toBe(0);
        expect(Game.removeFromGameLoop(callback)).toBe(false);
    });
});

describe("Starting and stopping the game loop", function () {
    test("starting the loop again doesn't start a second loop", function () {
        const deltas = recordUpdates();

        Game.startGameLoop();
        Game.startGameLoop();

        expect(driver.pending).toBe(1);

        driver.run(60);
        expect(deltas.length).toBeLessThanOrEqual(35);
    });

    test("the loop pauses while the page is hidden, and resumes when it's visible", function () {
        setDocumentHidden(true);
        expect(Game.isGameLoopRunning()).toBe(false);
        expect(driver.pending).toBe(0);

        setDocumentHidden(false);
        expect(Game.isGameLoopRunning()).toBe(true);
        expect(driver.pending).toBe(1);
    });

    test("a loop stopped with stopGameLoop() isn't restarted when the page becomes visible", function () {
        Game.stopGameLoop();

        setDocumentHidden(true);
        setDocumentHidden(false);

        expect(Game.isGameLoopRunning()).toBe(false);
        expect(driver.pending).toBe(0);

        Game.startGameLoop();
        expect(Game.isGameLoopRunning()).toBe(true);
    });

    test("elements removed while the loop is stopped are still removed", async function () {
        const rect = new Rectangle({ width: 1, height: 1, color: "red" });
        Game.addElement(rect);
        Game.stopGameLoop();

        rect.remove();
        await flushMicrotasks();

        expect(Game.getCanvas().getAllChildren()).toHaveLength(0);
    });

    test("elements removed during an update are taken out at the end of it", function () {
        const rect = new Rectangle({ width: 1, height: 1, color: "red" });
        let inCanvasDuringUpdate: boolean | null = null;

        Game.addElement(rect);
        Game.addToGameLoop(
            () => {
                rect.remove();
                inCanvasDuringUpdate = Game.getCanvas()
                    .getAllChildren()
                    .includes(rect);
            },
            { interval: false },
        );

        driver.run(3);

        expect(inCanvasDuringUpdate).toBe(true);
        expect(Game.getCanvas().getAllChildren()).toHaveLength(0);
    });

    test("init() again replaces the previous game", function () {
        const firstCanvas = Game.getCanvas();
        const rect = new Rectangle({ width: 1, height: 1, color: "red" });
        Game.addElement(rect);

        Game.init({ container: document.body, width: 50, height: 50 });

        expect(Game.getCanvas()).not.toBe(firstCanvas);
        expect(Game.getCanvas().width).toBe(50);
        expect(document.querySelectorAll("#Game-canvasContainer")).toHaveLength(
            1,
        );
        expect(firstCanvas.getAllChildren()).toHaveLength(0);
        expect(driver.pending).toBe(1);

        // the detached element can be added to the new game
        Game.addElement(rect);
        expect(Game.getCanvas().getAllChildren()).toEqual([rect]);
    });
});

describe("Mouse move events", function () {
    test("activating them again doesn't leave an interval behind", function () {
        vi.useFakeTimers({ toFake: ["setInterval", "clearInterval"] });

        Game.activateMouseMoveEvents(10);
        Game.activateMouseMoveEvents(20);
        expect(vi.getTimerCount()).toBe(1);

        Game.disableMouseMoveEvents();
        expect(vi.getTimerCount()).toBe(0);
    });
});
