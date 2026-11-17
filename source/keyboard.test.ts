// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as Game from "./game";
import { Keyboard } from "./keyboard";
import {
    createFrameDriver,
    setDocumentHidden,
    stubCanvasContext,
} from "../tests/helpers";

/**
 * Dispatch a key event (on the page, or on the given element).
 */
function key(
    type: "keydown" | "keyup",
    code: string,
    options?: { key?: string; repeat?: boolean; target?: EventTarget },
) {
    const event = new KeyboardEvent(type, {
        code,
        key: options?.key ?? code,
        repeat: options?.repeat ?? false,
        bubbles: true,
        cancelable: true,
    });

    (options?.target ?? document.body).dispatchEvent(event);

    return event;
}

function makeControls() {
    return new Keyboard({
        left: ["ArrowLeft", "KeyA"],
        right: "ArrowRight",
        fire: "Space",
    });
}

let controls: ReturnType<typeof makeControls>;

beforeEach(function () {
    stubCanvasContext();
    createFrameDriver();
    setDocumentHidden(false);

    Game.init({ container: document.body, width: 100, height: 100 });
    Game.stopGameLoop();

    controls = makeControls();
});

afterEach(function () {
    controls.destroy();
    window.dispatchEvent(new Event("blur")); // let go of the keys
    Game.stopGameLoop();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

describe("Keyboard", function () {
    test("an action is held while any of its keys is held", function () {
        key("keydown", "KeyA");
        expect(controls.isHeld("left")).toBe(true);
        expect(controls.isHeld("right")).toBe(false);

        key("keydown", "ArrowLeft");
        key("keyup", "KeyA");
        expect(controls.isHeld("left")).toBe(true);

        key("keyup", "ArrowLeft");
        expect(controls.isHeld("left")).toBe(false);
    });

    test("wasPressed() and wasReleased() last one update, and a quick tap between two updates isn't lost", function () {
        key("keydown", "Space");
        key("keyup", "Space");

        expect(controls.isHeld("fire")).toBe(false);
        expect(controls.wasPressed("fire")).toBe(true);
        expect(controls.wasReleased("fire")).toBe(true);

        Game.step(1 / 60);
        expect(controls.wasPressed("fire")).toBe(false);
        expect(controls.wasReleased("fire")).toBe(false);
    });

    test("a key held down doesn't count as pressed again (auto-repeat)", function () {
        key("keydown", "Space");
        Game.step(1 / 60);

        key("keydown", "Space", { repeat: true });
        expect(controls.wasPressed("fire")).toBe(false);
        expect(controls.isHeld("fire")).toBe(true);
    });

    test("changing Shift while a key is held doesn't leave it stuck (the keys are codes)", function () {
        key("keydown", "KeyA", { key: "a" });
        key("keyup", "KeyA", { key: "A" });

        expect(controls.isHeld("left")).toBe(false);
    });

    test("the keys are let go when the window loses the focus", function () {
        key("keydown", "ArrowRight");
        window.dispatchEvent(new Event("blur"));

        expect(controls.isHeld("right")).toBe(false);
    });

    test("the keys are let go when the loop pauses, and the ones pressed while paused don't count as pressed", function () {
        Game.startGameLoop();
        key("keydown", "ArrowRight");

        setDocumentHidden(true);
        expect(controls.isHeld("right")).toBe(false);

        key("keydown", "Space");
        setDocumentHidden(false);

        expect(controls.wasPressed("fire")).toBe(false);
        expect(controls.isHeld("fire")).toBe(true);
    });

    test("keys typed in a form field are ignored (but a held key is still let go there)", function () {
        const input = document.createElement("input");
        document.body.appendChild(input);

        key("keydown", "KeyA", { target: input });
        expect(controls.isHeld("left")).toBe(false);

        key("keydown", "KeyA");
        key("keyup", "KeyA", { target: input });
        expect(controls.isHeld("left")).toBe(false);

        input.remove();
    });

    test("the bound keys don't do their default action (unless preventDefault is false)", function () {
        expect(key("keydown", "Space").defaultPrevented).toBe(true);
        expect(key("keyup", "Space").defaultPrevented).toBe(true);
        expect(key("keydown", "KeyZ").defaultPrevented).toBe(false);

        controls.destroy();
        expect(key("keydown", "ArrowDown").defaultPrevented).toBe(false);

        const other = new Keyboard(
            { down: "ArrowDown" },
            { preventDefault: false },
        );
        expect(key("keydown", "ArrowDown").defaultPrevented).toBe(false);
        other.destroy();
    });

    test("setKeys() changes the keys of an action, and getKeys() lists them", function () {
        controls.setKeys("fire", ["Enter", "KeyF"]);

        expect(controls.getKeys("fire")).toEqual(["Enter", "KeyF"]);
        expect(controls.getKeys("left")).toEqual(["ArrowLeft", "KeyA"]);

        key("keydown", "Space");
        expect(controls.isHeld("fire")).toBe(false);

        key("keydown", "KeyF");
        expect(controls.isHeld("fire")).toBe(true);
    });

    test("several objects share the keys (two players on the same keyboard)", function () {
        const player2 = new Keyboard({ left: "KeyJ" });

        key("keydown", "KeyJ");
        expect(player2.isHeld("left")).toBe(true);
        expect(controls.isHeld("left")).toBe(false);

        player2.destroy();
    });
});
