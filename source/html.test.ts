// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { HtmlContainer, HtmlElement, Value } from "./html";

describe("HtmlElement", function () {
    test("accepts several css classes in a string (separated by spaces)", function () {
        const element = new HtmlElement({ cssClass: " first  second " });

        expect(element.container.classList.contains("first")).toBe(true);
        expect(element.container.classList.contains("second")).toBe(true);
    });

    test("accepts a list of css classes, ignoring the empty ones", function () {
        const element = new HtmlElement({ cssClass: ["first", "", "a b"] });

        expect([...element.container.classList].sort()).toEqual([
            "Game-Element",
            "a",
            "b",
            "first",
        ]);
    });
});

describe("clear()", function () {
    test("takes the element out of the page, but keeps its html element", function () {
        const value = new Value({ value: 5, preText: "Value:" });
        document.body.appendChild(value.container);

        expect(value.isCleared()).toBe(false);

        value.clear();
        value.clear(); // a second call doesn't throw

        expect(value.isCleared()).toBe(true);
        expect(value.container).toBeInstanceOf(HTMLElement);
        expect(document.body.contains(value.container)).toBe(false);
        expect(value.container.contains(value.element)).toBe(false);
    });

    test("a cleared element isn't added to a container", function () {
        const container = new HtmlContainer();
        const cleared = new HtmlElement();
        const element = new HtmlElement();

        cleared.clear();
        container.addChild(cleared, element);

        expect(container.container.children).toHaveLength(1);
        expect(container.container.firstChild).toBe(element.container);
    });
});
