// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Message } from "./message";
import { Button, Value } from "./html";

let container: HTMLElement;

beforeEach(function () {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(function () {
    container.remove();
    vi.useRealTimers();
});

function bodyOf(message: Message) {
    return message.container.querySelector(".Game-Message-body") as HTMLElement;
}

describe("Message", function () {
    test("shows the body (a string, an html element, an Html element, or a list of them) as text", function () {
        const paragraph = document.createElement("p");
        paragraph.textContent = "paragraph";

        const message = new Message({
            container,
            body: ["<b>not html</b>", paragraph, new Value({ value: 5 })],
        });
        const body = bodyOf(message);

        expect(container.contains(message.container)).toBe(true);
        expect(body.children).toHaveLength(3);
        expect(body.children[0].textContent).toBe("<b>not html</b>");
        expect(body.querySelector("b")).toBe(null);
        expect(body.children[1]).toBe(paragraph);
        expect(body.children[2].textContent).toBe("5");

        message.setBody("new body");

        expect(body.children).toHaveLength(1);
        expect(body.textContent).toBe("new body");
    });

    test("adds the buttons and the background, and clear() removes everything", function () {
        const button = new Button({ value: "Ok" });
        const message = new Message({
            container,
            body: "Hi",
            buttons: button,
            background: true,
        });

        expect(
            message.container.querySelector(".Game-Message-Buttons")
                ?.firstChild,
        ).toBe(button.container);
        expect(container.querySelector(".Game-Message-background")).not.toBe(
            null,
        );

        message.clear();

        expect(container.children).toHaveLength(0);
        expect(message.isCleared()).toBe(true);
    });

    test("is cleared once the timeout passes", function () {
        vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });

        const message = new Message({ container, body: "Hi", timeout: 1 });

        vi.advanceTimersByTime(999);
        expect(message.isCleared()).toBe(false);

        vi.advanceTimersByTime(1);
        expect(message.isCleared()).toBe(true);
        expect(container.children).toHaveLength(0);
    });

    test("clearing it before the timeout cancels the timeout", function () {
        vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });

        const message = new Message({ container, body: "Hi", timeout: 1 });
        message.clear();

        expect(vi.getTimerCount()).toBe(0);
    });
});
