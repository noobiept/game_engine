import { describe, expect, test } from "vitest";
import { EventDispatcher } from "./event_dispatcher";

describe("EventDispatcher", function () {
    test("addEventListener() adds each listener once", function () {
        const dispatcher = new EventDispatcher();
        const listener = function () {};

        expect(dispatcher.addEventListener("change", listener)).toEqual(true);
        expect(dispatcher.addEventListener("change", listener)).toEqual(false);
        expect(dispatcher.addEventListener("change", undefined as any)).toEqual(
            false,
        );
        expect(dispatcher.hasListeners("change")).toEqual(true);
    });

    test("addEventListener() accepts async function listeners", function () {
        const dispatcher = new EventDispatcher();
        let called = false;
        const listener = async function () {
            called = true;
        };

        // regression: `isFunction` used to reject async functions, so they
        // couldn't be registered as listeners
        expect(dispatcher.addEventListener("change", listener)).toEqual(true);
        expect(dispatcher.hasListeners("change")).toEqual(true);

        dispatcher.dispatchEvent("change", {});

        expect(called).toEqual(true);
    });

    test("dispatchEvent() calls listeners with data in reverse order", function () {
        const dispatcher = new EventDispatcher();
        const calls: string[] = [];

        dispatcher.addEventListener("change", function (data) {
            calls.push("first:" + data.value);
        });
        dispatcher.addEventListener("change", function (data) {
            calls.push("second:" + data.value);
        });

        dispatcher.dispatchEvent("change", { value: "value" });

        expect(calls).toEqual(["second:value", "first:value"]);
    });

    test("removeEventListener() removes one listener or all listeners", function () {
        const dispatcher = new EventDispatcher();
        const first = function () {};
        const second = function () {};

        dispatcher.addEventListener("change", first);
        dispatcher.addEventListener("change", second);

        expect(dispatcher.removeEventListener("change", first)).toEqual(true);
        expect(dispatcher.removeEventListener("change", first)).toEqual(false);
        expect(dispatcher.hasListeners("change")).toEqual(true);

        expect(dispatcher.removeEventListener("change")).toEqual(true);
        expect(dispatcher.hasListeners("change")).toEqual(false);
        expect(dispatcher.removeEventListener("missing")).toEqual(false);
    });

    test("removeAllEventListeners() clears every event type", function () {
        const dispatcher = new EventDispatcher();

        dispatcher.addEventListener("change", function () {});
        dispatcher.addEventListener("submit", function () {});
        dispatcher.removeAllEventListeners();

        expect(dispatcher.hasListeners("change")).toEqual(false);
        expect(dispatcher.hasListeners("submit")).toEqual(false);
    });
});

describe("EventDispatcher re-entrancy", function () {
    test("a listener that removes an earlier listener doesn't make another one run twice", function () {
        const dispatcher = new EventDispatcher();
        const calls: string[] = [];
        const first = () => calls.push("first");
        const second = () => calls.push("second");
        const third = () => {
            calls.push("third");
            dispatcher.removeEventListener("change", first);
        };

        dispatcher.addEventListener("change", first);
        dispatcher.addEventListener("change", second);
        dispatcher.addEventListener("change", third);

        dispatcher.dispatchEvent("change");

        // called in the reverse order they were added, and 'first' was removed before its turn
        expect(calls).toEqual(["third", "second"]);
    });

    test("removing all the listeners during a dispatch stops the remaining ones", function () {
        const dispatcher = new EventDispatcher();
        const calls: string[] = [];

        dispatcher.addEventListener("change", () => calls.push("first"));
        dispatcher.addEventListener("change", () => {
            calls.push("second");
            dispatcher.removeAllEventListeners();
        });

        dispatcher.dispatchEvent("change");

        expect(calls).toEqual(["second"]);
        expect(dispatcher.hasListeners("change")).toBe(false);
    });

    test("removing the listeners of a type during a dispatch stops the remaining ones", function () {
        const dispatcher = new EventDispatcher();
        const calls: string[] = [];

        dispatcher.addEventListener("change", () => calls.push("first"));
        dispatcher.addEventListener("change", () => {
            calls.push("second");
            dispatcher.removeEventListener("change");
        });

        dispatcher.dispatchEvent("change");

        expect(calls).toEqual(["second"]);
    });

    test("a listener added during a dispatch is only called on the next one", function () {
        const dispatcher = new EventDispatcher();
        const calls: string[] = [];
        const later = () => calls.push("later");

        dispatcher.addEventListener("change", () => {
            calls.push("first");
            dispatcher.addEventListener("change", later);
        });

        dispatcher.dispatchEvent("change");
        expect(calls).toEqual(["first"]);

        dispatcher.dispatchEvent("change");
        expect(calls).toEqual(["first", "later", "first"]);
    });

    test("event types with the name of an object property work like any other", function () {
        const dispatcher = new EventDispatcher();
        const calls: string[] = [];

        expect(dispatcher.hasListeners("constructor")).toBe(false);
        expect(() => dispatcher.dispatchEvent("constructor")).not.toThrow();

        expect(
            dispatcher.addEventListener("__proto__", () => calls.push("proto")),
        ).toBe(true);
        dispatcher.dispatchEvent("__proto__");

        expect(calls).toEqual(["proto"]);
    });
});
