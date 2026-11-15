// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Movement } from "./movement";
import { Rectangle } from "./rectangle";
import * as Game from "./game";
import { stubCanvasContext } from "../tests/helpers";

const SPEED = 100; // pixels per second

function makeUnit(x = 0, y = 0) {
    const element = new Rectangle({
        x,
        y,
        width: 10,
        height: 10,
        color: "red",
    });
    const movement = new Movement({ element, movementSpeed: SPEED });

    return { element, movement };
}

/**
 * Update the movement for some time, in steps of `delta` seconds.
 */
function run(movement: Movement, seconds: number, delta = 0.01) {
    const steps = Math.round(seconds / delta);

    for (let a = 0; a < steps; a++) {
        movement.logic(delta);
    }
}

describe("Movement.moveTo()", function () {
    test("moves towards the destination at the movement speed, and stops there", function () {
        const { element, movement } = makeUnit(0, 0);
        const callback = vi.fn();

        movement.moveTo(30, 40, callback); // 50 pixels away

        run(movement, 0.25);
        expect(element.x).toBeCloseTo(15);
        expect(element.y).toBeCloseTo(20);
        expect(callback).not.toHaveBeenCalled();

        run(movement, 0.5);
        expect(element.x).toBe(30);
        expect(element.y).toBe(40);
        expect(callback).toHaveBeenCalledTimes(1);

        // it stays there
        run(movement, 1);
        expect(element.x).toBe(30);
        expect(element.y).toBe(40);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("reaches a destination in every direction", function () {
        const directions = [
            [100, 0],
            [-100, 0],
            [0, 100],
            [0, -100],
            [70, -70],
            [-70, 70],
        ];

        for (const [x, y] of directions) {
            // start away from the origin, and go to it (where floating point errors matter the most)
            const { element, movement } = makeUnit(-x, -y);
            const callback = vi.fn();

            movement.moveTo(0, 0, callback);
            run(movement, 2);

            expect([element.x, element.y]).toEqual([0, 0]);
            expect(callback).toHaveBeenCalledTimes(1);
        }
    });

    test("moving to the current position arrives right away", function () {
        const { element, movement } = makeUnit(20, 20);
        const callback = vi.fn();

        movement.moveTo(20, 20, callback);
        run(movement, 0.1);

        expect([element.x, element.y]).toEqual([20, 20]);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("a big time step doesn't go past the destination", function () {
        const { element, movement } = makeUnit(0, 0);

        movement.moveTo(10, 0);
        movement.logic(5);

        expect([element.x, element.y]).toEqual([10, 0]);
    });

    test("clears the queued positions", function () {
        const { element, movement } = makeUnit(0, 0);

        movement.moveTo(10, 0);
        movement.queueMoveTo(10, 10);
        movement.moveTo(0, 10);
        run(movement, 1);

        expect([element.x, element.y]).toEqual([0, 10]);
    });

    test("the callback can start another movement", function () {
        const { element, movement } = makeUnit(0, 0);

        movement.moveTo(10, 0, function () {
            movement.moveTo(10, 10);
        });
        run(movement, 1);

        expect([element.x, element.y]).toEqual([10, 10]);
    });
});

describe("Movement.queueMoveTo()", function () {
    test("goes through the positions in order, calling their callbacks", function () {
        const { element, movement } = makeUnit(0, 0);
        const reached: string[] = [];

        // not moving yet, so the first one starts right away
        movement.queueMoveTo(10, 0, () => reached.push("first"));
        movement.queueMoveTo(10, 10, () => reached.push("second"));
        movement.queueMoveTo(0, 10, () => reached.push("third"));

        run(movement, 0.15);
        expect(reached).toEqual(["first"]);

        run(movement, 1);
        expect(reached).toEqual(["first", "second", "third"]);
        expect([element.x, element.y]).toEqual([0, 10]);
    });
});

describe("Movement.moveLoop()", function () {
    test("keeps going through the positions", function () {
        const { element, movement } = makeUnit(0, 0);
        const reached: string[] = [];

        movement.moveLoop([
            { x: 10, y: 0, callback: () => reached.push("a") },
            { x: 0, y: 0, callback: () => reached.push("b") },
        ]);

        run(movement, 0.45); // 10 pixels take 0.1 seconds

        expect(reached).toEqual(["a", "b", "a", "b"]);
        expect(element.y).toBe(0);
    });
});

describe("Movement.follow()", function () {
    test("moves towards the target, and stays on it once it's reached", function () {
        const { element, movement } = makeUnit(0, 0);
        const target = new Rectangle({
            x: 50,
            y: 0,
            width: 10,
            height: 10,
            color: "blue",
        });

        movement.follow(target);

        run(movement, 0.2);
        expect(element.x).toBeCloseTo(20);
        expect(element.rotation).toBeCloseTo(0);

        run(movement, 1);
        expect([element.x, element.y]).toEqual([50, 0]);

        // it follows the target when it moves
        target.y = 30;
        run(movement, 1);
        expect([element.x, element.y]).toEqual([50, 30]);
    });

    test("calls the callback (or stops) once the target is destroyed", async function () {
        const target = new Rectangle({
            x: 100,
            y: 0,
            width: 10,
            height: 10,
            color: "blue",
        });
        const withCallback = makeUnit(0, 0);
        const withoutCallback = makeUnit(0, 0);
        const callback = vi.fn();

        withCallback.movement.follow(target, callback);
        withoutCallback.movement.follow(target);

        target.destroy();
        run(withCallback.movement, 0.1);
        run(withoutCallback.movement, 0.1);

        expect(callback).toHaveBeenCalled();
        expect(withoutCallback.element.x).toBe(0);
    });
});

describe("Movement.stop() and destroy()", function () {
    test("stop() stops the movement", function () {
        const { element, movement } = makeUnit(0, 0);

        movement.moveTo(100, 0);
        run(movement, 0.1);
        movement.stop();
        const x = element.x;
        run(movement, 1);

        expect(element.x).toBe(x);
    });

    test("destroy() stops the movement and lets go of the element", function () {
        const { element, movement } = makeUnit(0, 0);

        movement.follow(element);
        movement.destroy();

        expect(() => run(movement, 1)).not.toThrow();
        expect(element.x).toBe(0);
    });
});

describe("Movement.moveAngle()", function () {
    beforeEach(function () {
        stubCanvasContext();
        Game.init({ container: document.body, width: 100, height: 100 });
        Game.stopGameLoop();
    });

    afterEach(function () {
        vi.restoreAllMocks();
    });

    test("keeps moving in the angle, and calls the callback once it's out of the canvas", function () {
        const { element, movement } = makeUnit(10, 50);
        const callback = vi.fn();

        movement.moveAngle(0, false, callback);

        run(movement, 0.5);
        expect(element.x).toBeCloseTo(60);
        expect(element.y).toBeCloseTo(50);
        expect(element.rotation).toBe(0);
        expect(callback).not.toHaveBeenCalled();

        run(movement, 0.5);
        expect(callback).toHaveBeenCalled();
    });

    test("accepts the angle in degrees", function () {
        const { element, movement } = makeUnit(50, 10);

        movement.moveAngle(90, true);
        run(movement, 0.2);

        // positive angles are clockwise, so 90 degrees is down
        expect(element.x).toBeCloseTo(50);
        expect(element.y).toBeCloseTo(30);
        expect(element.rotation).toBeCloseTo(Math.PI / 2);
    });
});
