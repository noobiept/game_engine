import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Preload } from "./preload";

/**
 * A request that the tests finish (with a response or a failure).
 */
class FakeRequest extends EventTarget {
    static all: FakeRequest[] = [];

    url = "";
    status = 0;
    response: any = null;
    responseType = "";
    timeout = 0;

    constructor() {
        super();
        FakeRequest.all.push(this);
    }

    open(_method: string, url: string) {
        this.url = url;
    }

    send() {}

    succeed(response: any, status = 200) {
        this.status = status;
        this.response = response;
        this.dispatchEvent(new Event("load"));
    }

    fail(type: "error" | "abort" | "timeout" = "error") {
        this.dispatchEvent(new Event(type));
    }

    progress(loaded: number, total: number) {
        this.dispatchEvent(
            Object.assign(new Event("progress"), {
                lengthComputable: true,
                loaded,
                total,
            }),
        );
    }
}

function request(url: string) {
    const found = FakeRequest.all.find((item) => item.url === url);

    if (!found) {
        throw new Error(`No request for ${url}`);
    }

    return found;
}

/**
 * Record the events of a preload object.
 */
function record(preload: Preload) {
    const events: { type: string; data: any }[] = [];

    for (const type of ["complete", "error", "abort", "fileload", "progress"]) {
        preload.addEventListener(type, (data) => events.push({ type, data }));
    }

    return events;
}

beforeEach(function () {
    FakeRequest.all = [];
    vi.stubGlobal("XMLHttpRequest", FakeRequest);
});

afterEach(function () {
    vi.unstubAllGlobals();
});

describe("Preload", function () {
    test("a network error still completes the loading (with the file as failed)", function () {
        const preload = new Preload();
        const events = record(preload);

        preload.load("a", "a.json");
        preload.load("b", "b.json");
        request("a.json").fail("error");
        request("b.json").succeed({ value: 1 });

        expect(events.map((event) => event.type)).toEqual([
            "error",
            "fileload",
            "complete",
        ]);
        expect(events[0].data.id).toBe("a");
        expect(events[0].data.event).toBeInstanceOf(Event);
        expect(events[2].data).toEqual({ failedIds: ["a"], loadedIds: ["b"] });
    });

    test("an aborted request or a timeout still completes the loading", function () {
        const preload = new Preload({ timeout: 2 });
        const events = record(preload);

        preload.load("a", "a.json");
        preload.load("b", "b.json");

        expect(request("a.json").timeout).toBe(2000);

        request("a.json").fail("abort");
        request("b.json").fail("timeout");

        expect(events.map((event) => event.type)).toEqual([
            "abort",
            "error",
            "complete",
        ]);
        expect(events[2].data.failedIds).toEqual(["a", "b"]);
    });

    test("an error status is dispatched as an error", function () {
        const preload = new Preload();
        const events = record(preload);

        preload.load("a", "a.json");
        request("a.json").succeed(null, 404);

        expect(events[0]).toEqual({
            type: "error",
            data: { id: "a", status: 404 },
        });
        expect(events[1].data.failedIds).toEqual(["a"]);
    });

    test("any successful status loads the file", function () {
        const preload = new Preload();

        preload.load("a", "a.txt");
        preload.load("b", "b.txt");
        preload.load("c", "c.txt");
        request("a.txt").succeed("a", 204);
        request("b.txt").succeed("b", 304);
        request("c.txt").succeed("c", 0); // file:// protocol

        expect(preload.get("a")).toBe("a");
        expect(preload.get("b")).toBe("b");
        expect(preload.get("c")).toBe("c");
    });

    test("invalid json is dispatched as an error", function () {
        const preload = new Preload();
        const events = record(preload);

        preload.load("a", "a.json");
        preload.load("b", "b.json");
        request("a.json").succeed("{ not json");
        request("b.json").succeed(null); // what the browser gives for invalid json

        const errors = events.filter((event) => event.type === "error");

        expect(errors).toHaveLength(2);
        expect(errors[0].data.error).toBeInstanceOf(SyntaxError);
        expect(errors[1].data.error).toBeInstanceOf(Error);
        expect(preload.get("a")).toBe(undefined);
    });

    test("a listener that throws doesn't stop the loading from completing", function () {
        const preload = new Preload();
        let completed = 0;

        preload.addEventListener("fileload", () => {
            throw new Error("listener error");
        });
        preload.addEventListener("complete", () => completed++);
        preload.load("a", "a.txt");

        // calling the internal method directly, since a request's listener error isn't thrown back to the caller
        expect(() =>
            (
                preload as unknown as {
                    _loaded: (id: string, data: any) => void;
                }
            )._loaded("a", "data"),
        ).toThrow("listener error");
        expect(completed).toBe(1);
    });

    test("the complete event's lists aren't changed afterwards, and more files can be loaded from its listener", function () {
        const preload = new Preload();
        const completed: { failedIds: string[]; loadedIds: string[] }[] = [];

        preload.addEventListener("complete", (data) => {
            completed.push(data);

            if (completed.length === 1) {
                preload.load("b", "b.txt");
            }
        });

        preload.load("a", "a.txt");
        request("a.txt").succeed("a");
        request("b.txt").succeed("b");

        expect(completed).toEqual([
            { failedIds: [], loadedIds: ["a"] },
            { failedIds: [], loadedIds: ["b"] },
        ]);
    });

    test("the progress considers all the files being loaded", function () {
        const preload = new Preload();
        const progress: number[] = [];

        preload.addEventListener("progress", (value) => progress.push(value));
        preload.load("a", "a.txt");
        preload.load("b", "b.txt");

        request("a.txt").progress(50, 100);
        request("b.txt").progress(100, 100);

        expect(progress).toEqual([25, 75]);
    });

    test("ids with the name of an object property are plain ids", function () {
        const preload = new Preload();
        const data = { value: 1 };

        preload.load("__proto__", "a.json");
        request("a.json").succeed(data);

        expect(preload.get("__proto__")).toBe(data);
        expect(preload.get("toString")).toBe(undefined);
        expect(preload.get("value")).toBe(undefined);
    });

    test("getType() uses the file name's extension (ignoring the case and the url's query/hash)", function () {
        expect(Preload.getType("image.PNG")).toBe("image");
        expect(Preload.getType("data.json?v=2")).toBe("json");
        expect(Preload.getType("notes.txt#top")).toBe("text");
        expect(Preload.getType("/steal?q=.json")).toBe(null);
        expect(Preload.getType("folder.v2/file")).toBe(null);
    });
});
