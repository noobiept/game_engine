// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as Game from "./game";
import { Keyboard } from "./keyboard";
import { Rectangle } from "./rectangle";
import { createFrameDriver, setDocumentHidden } from "../tests/helpers";

/**
 * A canvas context that does nothing, but records where the elements are drawn (`translate()`, `scale()` and
 * `rotate()`).
 */
function recordDrawing() {
    const drawn: {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
    }[] = [];
    const context = new Proxy(
        {},
        {
            get(_target, property) {
                if (property === "translate") {
                    return (x: number, y: number) =>
                        drawn.push({ x, y, scaleX: 1, scaleY: 1, rotation: 0 });
                }

                if (property === "scale") {
                    return (scaleX: number, scaleY: number) => {
                        drawn[drawn.length - 1].scaleX = scaleX;
                        drawn[drawn.length - 1].scaleY = scaleY;
                    };
                }

                if (property === "rotate") {
                    return (rotation: number) => {
                        drawn[drawn.length - 1].rotation = rotation;
                    };
                }

                if (property === "measureText") {
                    return (text: string) => ({ width: text.length * 10 });
                }

                return () => {};
            },
            set() {
                return true;
            },
        },
    );

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
        () => context as any,
    );

    return drawn;
}

let driver: ReturnType<typeof createFrameDriver>;
let drawn: ReturnType<typeof recordDrawing>;

beforeEach(function () {
    drawn = recordDrawing();
    driver = createFrameDriver();
    setDocumentHidden(false);

    Game.init({ container: document.body, width: 100, height: 100 });
});

afterEach(function () {
    Game.stopGameLoop();
    Game.setFixedTimestep(null);
    Game.removeAllCallbacks();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

describe("Game.setFixedTimestep()", function () {
    test("the logic runs in steps of the fixed time, as many as the time that passed calls for", function () {
        const deltas: number[] = [];

        Game.setFixedTimestep(1 / 60);
        Game.addToGameLoop((deltaTime) => deltas.push(deltaTime));

        driver.run(144, 144); // a second at 144Hz
        expect(deltas.length).toBeGreaterThanOrEqual(59);
        expect(deltas.length).toBeLessThanOrEqual(60);
        expect(new Set(deltas)).toEqual(new Set([1 / 60]));

        deltas.length = 0;
        driver.run(60, 60); // a second at 60Hz, a step per frame
        expect(deltas).toHaveLength(60);

        deltas.length = 0;
        driver.run(30, 30); // a second at 30Hz, two steps per frame
        expect(deltas).toHaveLength(60);
    });

    test("the elements are drawn between the last two steps, so they move smoothly", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });

        Game.addElement(rect);
        Game.setFixedTimestep(1 / 30);

        // 1 pixel per step
        Game.addToGameLoop(() => (rect.x += 1));

        driver.run(40, 120); // a third of a second at 120Hz (4 frames per step)

        // after the first step, each frame moves a quarter of a pixel
        const positions = drawn.map((draw) => draw.x).slice(4);
        const moves = positions.slice(1).map((x, a) => x - positions[a]);

        for (const move of moves) {
            expect(move).toBeCloseTo(0.25, 6);
        }

        // the drawing is a step behind the logic
        expect(drawn[drawn.length - 1].x).toBeLessThan(rect.x);
        expect(drawn[drawn.length - 1].x).toBeGreaterThanOrEqual(rect.x - 1);
    });

    test("an element moved with resetInterpolation(), or just added, is drawn where it is", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });
        let teleport = false;

        Game.addElement(rect);
        Game.setFixedTimestep(1 / 30);
        Game.addToGameLoop(function () {
            if (teleport) {
                rect.x = 500;
                rect.resetInterpolation();
                teleport = false;
            }
        });

        driver.run(8, 120);
        teleport = true;
        driver.run(4, 120); // a step happens in one of these frames

        expect(drawn[drawn.length - 1].x).toBe(500);

        const other = new Rectangle({
            x: 50,
            width: 10,
            height: 10,
            color: "blue",
        });

        Game.addElement(other);
        drawn.length = 0;
        driver.run(1, 120);
        expect(drawn[drawn.length - 1].x).toBe(50);
    });

    test("turning the fixed timestep on again draws the elements where they are (not from where they were then)", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });

        Game.addElement(rect);
        Game.setFixedTimestep(1 / 30);
        driver.run(8, 120);

        // moved a long way while it was off
        Game.setFixedTimestep(null);
        Game.addToGameLoop(() => (rect.x = 500));
        driver.run(4, 120);

        Game.setFixedTimestep(1 / 30);
        drawn.length = 0;
        driver.run(2, 120); // no step yet

        expect(drawn.map((draw) => draw.x)).toEqual([500, 500]);
    });

    test("the drawing doesn't jump back when the loop resumes", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });

        Game.addElement(rect);
        Game.setFixedTimestep(1 / 30);
        Game.addToGameLoop(() => (rect.x += 1));

        driver.run(11, 120); // ends between two steps
        const beforePause = drawn[drawn.length - 1].x;

        setDocumentHidden(true);
        setDocumentHidden(false);
        driver.run(1, 120);

        expect(drawn[drawn.length - 1].x).toBeGreaterThanOrEqual(beforePause);
    });

    test("the rotation is drawn the short way around", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });
        let step = 0;

        rect.rotation = 3.1;
        Game.addElement(rect);
        Game.setFixedTimestep(1 / 30);
        Game.addToGameLoop(function () {
            step++;

            if (step === 2) {
                rect.rotation = -3.1; // 0.08 radians further, across the -PI/PI border
            }
        });

        driver.run(12, 120);

        // between the two, it's drawn near PI (not around 0)
        for (const draw of drawn) {
            expect(Math.abs(draw.rotation)).toBeGreaterThan(3);
        }
    });

    test("a scale that changes sign (a flipped sprite) isn't drawn squashed in between", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });
        let step = 0;

        Game.addElement(rect);
        Game.setFixedTimestep(1 / 30);
        Game.addToGameLoop(function () {
            step++;

            if (step === 2) {
                rect.scaleX = -1; // turn left
            }

            if (step === 3) {
                rect.scaleY = 2; // a scale that doesn't change sign is still drawn in between
            }
        });

        driver.run(16, 120);

        expect(
            drawn.map((draw) => draw.scaleX).every((x) => Math.abs(x) === 1),
        ).toBe(true);
        expect(drawn.some((draw) => draw.scaleY > 1 && draw.scaleY < 2)).toBe(
            true,
        );
    });

    test("without a fixed timestep, the logic runs once per frame, with the time that passed", function () {
        const deltas: number[] = [];

        Game.setFixedTimestep(1 / 60);
        Game.setFixedTimestep(null);
        expect(Game.getFixedTimestep()).toBe(null);

        Game.addToGameLoop((deltaTime) => deltas.push(deltaTime));
        driver.run(10, 144);

        expect(deltas).toHaveLength(10);
        expect(deltas[0]).toBeCloseTo(1 / 144, 6);
    });

    test("throws a RangeError for a time that isn't a positive number", function () {
        expect(() => Game.setFixedTimestep(0)).toThrow(RangeError);
        expect(() => Game.setFixedTimestep(-1)).toThrow(RangeError);
        expect(() => Game.setFixedTimestep(NaN)).toThrow(RangeError);
        expect(() => Game.setFixedTimestep(Infinity)).toThrow(RangeError);
    });

    test("a key pressed during frames without a step counts in the next step", function () {
        const controls = new Keyboard({ fire: "Space" });
        const pressed: boolean[] = [];

        Game.setFixedTimestep(1 / 30);
        Game.addToGameLoop(() => pressed.push(controls.wasPressed("fire")));

        driver.run(4, 120); // a step
        document.body.dispatchEvent(
            new KeyboardEvent("keydown", { code: "Space", bubbles: true }),
        );
        driver.run(8, 120); // two more steps

        expect(pressed.filter((value) => value)).toHaveLength(1);

        controls.destroy();
        window.dispatchEvent(new Event("blur"));
    });
});
