import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Preload, PreloadError } from "./preload";

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

    test("loadManifest() resolves with the complete data once all the files loaded", async function () {
        const preload = new Preload();
        const promise = preload.loadManifest(
            [
                { id: "a", path: "a.json" },
                { id: "b", path: "b.txt" },
            ],
            "data/",
        );

        request("data/a.json").succeed({ value: 1 });
        request("data/b.txt").succeed("text");

        await expect(promise).resolves.toEqual({
            failedIds: [],
            loadedIds: ["a", "b"],
        });
    });

    test("loadManifest() rejects with the required files that failed (not the optional ones)", async function () {
        const preload = new Preload();
        const events = record(preload);
        const promise = preload.loadManifest([
            { id: "level", path: "level.json" },
            { id: "map", path: "map.json" },
            { id: "music", path: "music.txt", optional: true },
        ]);

        request("level.json").succeed({ value: 1 });
        request("map.json").succeed("x", 404);
        request("music.txt").fail("error");

        const error = await promise.catch((error: unknown) => error);

        expect(error).toBeInstanceOf(PreloadError);
        expect((error as PreloadError).failedIds).toEqual(["map"]);
        expect((error as PreloadError).data.failedIds).toEqual([
            "map",
            "music",
        ]);

        // the events are dispatched as well
        expect(
            events.filter((event) => event.type === "complete"),
        ).toHaveLength(1);
    });

    test("loadManifest() that isn't awaited doesn't give an unhandled rejection (a game that uses the events)", async function () {
        const unhandled: unknown[] = [];
        const onUnhandled = (reason: unknown) => unhandled.push(reason);

        process.on("unhandledRejection", onUnhandled);

        const preload = new Preload();

        preload.loadManifest([{ id: "level", path: "level.json" }]);
        request("level.json").succeed("x", 404);

        // let the rejection be reported, if it's unhandled
        await new Promise((resolve) => setTimeout(resolve, 10));
        process.off("unhandledRejection", onUnhandled);

        expect(unhandled).toEqual([]);
    });

    test("loadManifest() resolves when only optional files failed", async function () {
        const preload = new Preload();
        const promise = preload.loadManifest([
            { id: "level", path: "level.json" },
            { id: "music", path: "music.txt", optional: true },
        ]);

        request("level.json").succeed({ value: 1 });
        request("music.txt").fail("timeout");

        await expect(promise).resolves.toEqual({
            failedIds: ["music"],
            loadedIds: ["level"],
        });
    });

    test("loadManifest() settles even when a complete listener throws", async function () {
        const preload = new Preload();

        preload.addEventListener("complete", () => {
            throw new Error("listener error");
        });

        const promise = preload.loadManifest([{ id: "a", path: "a.txt" }]);

        // calling the internal method directly, since a request's listener error isn't thrown back to the caller
        expect(() =>
            (
                preload as unknown as {
                    _loaded: (id: string, data: any) => void;
                }
            )._loaded("a", "data"),
        ).toThrow("listener error");

        await expect(promise).resolves.toEqual({
            failedIds: [],
            loadedIds: ["a"],
        });
    });

    test("loadManifest() with an empty manifest resolves right away, and an invalid file type throws before loading anything", async function () {
        const preload = new Preload();

        await expect(preload.loadManifest([])).resolves.toEqual({
            failedIds: [],
            loadedIds: [],
        });

        expect(() =>
            preload.loadManifest([
                { id: "a", path: "a.json" },
                { id: "b", path: "b.unknown" },
            ]),
        ).toThrow("Invalid file type");
        expect(FakeRequest.all).toHaveLength(0);
    });

    test("the typed getters return undefined for a missing file, or one of another type", function () {
        const preload = new Preload();

        preload.load("text", "a.txt");
        preload.load("data", "b.json");
        request("a.txt").succeed("hello");
        request("b.json").succeed({ value: 1 });

        expect(preload.getText("text")).toBe("hello");
        expect(preload.getText("data")).toBe(undefined);
        expect(preload.getJson<{ value: number }>("data")?.value).toBe(1);
        expect(preload.getJson("missing")).toBe(undefined);
        expect(preload.getImage("text")).toBe(undefined);
        expect(preload.getAudio("text")).toBe(undefined);
    });
});
