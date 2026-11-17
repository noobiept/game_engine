// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as Game from "./game";
import { Stopwatch, Timeout } from "./game_time";
import { Tween } from "./tween";
import {
    createFrameDriver,
    setDocumentHidden,
    stubCanvasContext,
} from "../tests/helpers";

let driver: ReturnType<typeof createFrameDriver>;

beforeEach(function () {
    stubCanvasContext();
    driver = createFrameDriver();
    setDocumentHidden(false);

    Game.init({ container: document.body, width: 100, height: 100 });
    Game.stopGameLoop();
});

afterEach(function () {
    Game.stopGameLoop();
    Game.removeAllCallbacks();
    Tween.removeAll();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

describe("Game.Timeout", function () {
    test("calls the callback once the game time passed", function () {
        const timeout = new Timeout();
        let calls = 0;

        timeout.start(() => calls++, 1);
        expect(timeout.isActive()).toBe(true);

        Game.step(0.5);
        expect(calls).toBe(0);

        Game.step(0.5);
        expect(calls).toBe(1);
        expect(timeout.isActive()).toBe(false);

        Game.step(1);
        expect(calls).toBe(1);
    });

    test("clear() cancels it, and start() again replaces the previous one", function () {
        const timeout = new Timeout();
        const calls: string[] = [];

        timeout.start(() => calls.push("first"), 1);
        timeout.start(() => calls.push("second"), 1);
        Game.step(1);
        expect(calls).toEqual(["second"]);

        timeout.start(() => calls.push("third"), 1);
        timeout.clear();
        Game.step(1);
        expect(calls).toEqual(["second"]);
        expect(timeout.isActive()).toBe(false);
    });

    test("doesn't count the time while the page is hidden", function () {
        const timeout = new Timeout();
        let calls = 0;

        Game.startGameLoop();
        timeout.start(() => calls++, 1);

        driver.run(30); // half a second
        setDocumentHidden(true);
        driver.run(120); // two seconds while hidden (no updates)
        expect(calls).toBe(0);

        setDocumentHidden(false);
        driver.run(29);
        expect(calls).toBe(0);
        driver.run(2);
        expect(calls).toBe(1);
    });

    test("isn't active after removeAllCallbacks() (and can be started again)", function () {
        const timeout = new Timeout();
        let calls = 0;

        timeout.start(() => calls++, 1);
        Game.removeAllCallbacks();
        expect(timeout.isActive()).toBe(false);

        if (!timeout.isActive()) {
            timeout.start(() => calls++, 1);
        }

        Game.step(1);
        expect(calls).toBe(1);
    });

    test("throws a RangeError for a time that isn't a number >= 0", function () {
        expect(() => new Timeout().start(() => {}, -1)).toThrow(RangeError);
    });
});

describe("Game.Stopwatch", function () {
    test("adds up the game time while it's running", function () {
        const stopwatch = new Stopwatch();

        stopwatch.start();
        Game.step(0.25);
        Game.step(0.5);
        expect(stopwatch.getTime()).toBe(0.75);

        stopwatch.stop();
        Game.step(1);
        expect(stopwatch.getTime()).toBe(0.75);
        expect(stopwatch.isRunning()).toBe(false);

        stopwatch.start();
        stopwatch.start(); // only counts once
        Game.step(0.25);
        expect(stopwatch.getTime()).toBe(1);

        stopwatch.reset();
        Game.step(0.5);
        expect(stopwatch.getTime()).toBe(0.5);
        expect(stopwatch.isRunning()).toBe(true);
    });

    test("start() works again after removeAllCallbacks()", function () {
        const stopwatch = new Stopwatch();

        stopwatch.start();
        Game.removeAllCallbacks();
        Game.step(1);
        expect(stopwatch.getTime()).toBe(0);
        expect(stopwatch.isRunning()).toBe(false);

        stopwatch.start();
        Game.step(1);
        expect(stopwatch.getTime()).toBe(1);
    });
});
