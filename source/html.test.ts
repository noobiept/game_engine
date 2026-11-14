// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { HtmlElement } from "./html";

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
