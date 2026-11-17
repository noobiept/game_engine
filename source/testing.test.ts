// @vitest-environment jsdom
import { afterEach, describe, expect, test } from "vitest";
import * as Game from "./game";
import { Keyboard } from "./keyboard";
import { Preload } from "./preload";
import { Rectangle } from "./rectangle";
import { Tween } from "./tween";
import { resetGame, stubAnimationFrames, stubCanvasContext } from "./testing";

let restore: (() => void)[] = [];

afterEach(function () {
    resetGame();

    for (const undo of restore) {
        undo();
    }

    restore = [];
});

function startGame() {
    restore.push(stubCanvasContext(), stubAnimationFrames());

    Game.init({ container: document.body, width: 100, height: 100 });
    Game.stopGameLoop();
}

describe("@drk4/game-engine/testing", function () {
    test("stubCanvasContext() gives the canvas a 2d context (and puts the original back)", function () {
        const original = HTMLCanvasElement.prototype.getContext;
        const undo = stubCanvasContext();

        expect(stubCanvasContext()).toBe(undo); // only once
        expect(document.createElement("canvas").getContext("2d")).not.toBe(
            null,
        );

        undo();
        expect(HTMLCanvasElement.prototype.getContext).toBe(original);
    });

    test("stubAnimationFrames() never calls back (and puts the originals back)", function () {
        const original = window.requestAnimationFrame;
        const undo = stubAnimationFrames();
        let called = false;

        const id = window.requestAnimationFrame(() => (called = true));

        expect(typeof id).toBe("number");
        expect(called).toBe(false);

        undo();
        expect(window.requestAnimationFrame).toBe(original);
    });

    test("a game can be started and updated with Game.step()", function () {
        startGame();

        const rect = new Rectangle({ width: 10, height: 10, color: "red" });
        Game.addElement(rect);
        Game.addToGameLoop((deltaTime) => (rect.x += 60 * deltaTime));

        Game.step(1 / 60);
        expect(rect.x).toBeCloseTo(1);
    });

    test("resetGame() leaves nothing of the game for the next test", function () {
        startGame();

        const rect = new Rectangle({ width: 10, height: 10, color: "red" });
        let callbacks = 0;
        let pauses = 0;
        const controls = new Keyboard({ fire: "Space" });

        Game.addElement(rect);
        Game.addToGameLoop(() => callbacks++);
        Game.addEventListener("pause", () => pauses++);
        new Tween(rect).to({ x: 100 }, 1).start();
        Game.setFixedTimestep(1 / 30);
        Preload.DATA["level"] = { cars: 3 };
        document.body.dispatchEvent(
            new KeyboardEvent("keydown", { code: "Space", bubbles: true }),
        );

        resetGame();

        // the game is out of the page, and its settings are the defaults
        expect(document.querySelector("#Game-canvasContainer")).toBe(null);
        expect(Game.isGameLoopRunning()).toBe(false);
        expect(Game.getFixedTimestep()).toBe(null);
        expect(Tween.getTween(rect)).toBe(null);
        expect(Object.keys(Preload.DATA)).toEqual([]);
        expect(controls.isHeld("fire")).toBe(false);

        // a new game doesn't run the old game's callbacks or listeners
        startGame();
        Game.step(1 / 60);
        Game.startGameLoop();
        Game.stopGameLoop();

        expect(callbacks).toBe(0);
        expect(pauses).toBe(0);

        // the old Keyboard object doesn't keep its keys from their default action
        const event = new KeyboardEvent("keydown", {
            code: "Space",
            bubbles: true,
            cancelable: true,
        });
        document.body.dispatchEvent(event);
        expect(event.defaultPrevented).toBe(false);
    });

    test("resetGame() works before Game.init() too", function () {
        expect(() => resetGame()).not.toThrow();
    });
});
