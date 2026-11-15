// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Text } from "./text";
import * as Game from "./game";
import { flushMicrotasks, stubCanvasContext } from "../tests/helpers";

beforeEach(function () {
    // the fake context measures 10 pixels per character
    stubCanvasContext();
    Game.init({ container: document.body, width: 100, height: 100 });
    Game.stopGameLoop();
});

afterEach(function () {
    vi.useRealTimers();
    vi.restoreAllMocks();
});

describe("Text", function () {
    test("its dimensions come from the longest line and the number of lines", function () {
        const text = new Text({ text: "hi", fontSize: 20 });

        expect(text.width).toBe(20);
        expect(text.height).toBe(20);

        text.text = "first line\nsecond line\nthird";

        expect(text.width).toBe(110); // "second line"
        expect(text.height).toBe(60);
        expect(text.halfWidth).toBe(55);
    });

    test("the font follows the family and size", function () {
        const text = new Text({ fontFamily: "serif", fontSize: 12 });
        const font = () => (text as unknown as { _font: string })._font;

        expect(font()).toBe("12px serif");

        text.fontSize = 30;
        text.fontFamily = "monospace";

        expect(font()).toBe("30px monospace");
        expect(text.fontSize).toBe(30);
        expect(text.fontFamily).toBe("monospace");
    });

    test("is destroyed once the timeout passes", async function () {
        vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });

        const text = new Text({ text: "bye", timeout: 2 });
        Game.addElement(text);

        vi.advanceTimersByTime(1999);
        expect(text.isDestroyed()).toBe(false);

        vi.advanceTimersByTime(1);
        expect(text.isDestroyed()).toBe(true);

        await flushMicrotasks();
        expect(Game.getCanvas().getAllChildren()).toHaveLength(0);
    });

    test("destroying it before the timeout cancels the timeout", async function () {
        vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });

        const text = new Text({ text: "bye", timeout: 2 });

        text.destroy();
        await flushMicrotasks();

        expect(vi.getTimerCount()).toBe(0);
    });

    test("clone() keeps the text, font, color and the other settings", function () {
        const text = new Text({
            x: 10,
            y: 20,
            text: "hello",
            fontFamily: "serif",
            fontSize: 15,
            color: "red",
            textAlign: "center",
            textBaseline: "middle",
            fill: false,
            category: 4,
        });

        const clone = text.clone();

        expect(clone.text).toBe("hello");
        expect(clone.fontFamily).toBe("serif");
        expect(clone.fontSize).toBe(15);
        expect(clone.color).toBe("red");
        expect(clone.textAlign).toBe("center");
        expect(clone.textBaseline).toBe("middle");
        expect(clone.fill).toBe(false);
        expect(clone.category).toBe(4);
        expect([clone.x, clone.y]).toEqual([10, 20]);
    });
});
