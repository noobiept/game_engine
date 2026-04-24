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
