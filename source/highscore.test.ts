// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

const STORAGE = "test_high_score";

/**
 * A new copy of the module (it keeps its state in module variables).
 */
async function loadHighScore() {
    vi.resetModules();

    return await import("./highscore");
}

beforeEach(function () {
    localStorage.clear();
});

afterEach(function () {
    vi.restoreAllMocks();
});

describe("HighScore", function () {
    test("adding a score before init() throws", async function () {
        const HighScore = await loadHighScore();

        expect(() => HighScore.add("easy", 5)).toThrow(/init/);
    });

    test("init() validates the number of scores", async function () {
        const HighScore = await loadHighScore();

        expect(() => HighScore.init(0, STORAGE, true)).toThrow(RangeError);
        expect(() => HighScore.init(2.5, STORAGE, true)).toThrow(RangeError);
    });

    test("keeps the top scores, sorted, and saves them", async function () {
        const HighScore = await loadHighScore();
        HighScore.init(3, STORAGE, false);

        HighScore.add("easy", 5);
        HighScore.add("easy", 10);
        HighScore.add("easy", 1);
        expect(HighScore.add("easy", 7)).toBe(true);
        expect(HighScore.add("easy", 0)).toBe(false); // not in the top 3
        expect(HighScore.add("easy", 7)).toBe(false); // repeated

        expect(HighScore.get("easy")).toEqual([10, 7, 5]);
        expect(JSON.parse(localStorage.getItem(STORAGE) ?? "")).toEqual({
            easy: [10, 7, 5],
        });
    });

    test("invalid json in the storage is ignored", async function () {
        for (const value of ["{", "not json", '{"easy":[1,2']) {
            localStorage.setItem(STORAGE, value);
            const HighScore = await loadHighScore();

            expect(() => HighScore.init(5, STORAGE, true)).not.toThrow();
            expect(HighScore.get("easy")).toBe(undefined);

            HighScore.add("easy", 3);
            expect(HighScore.get("easy")).toEqual([3]);
        }
    });

    test("only valid lists of numbers are loaded", async function () {
        localStorage.setItem(
            STORAGE,
            JSON.stringify({
                easy: "abc",
                normal: [3, "x", 1, 1, null, 2, { a: 1 }],
                hard: 5,
                expert: null,
            }),
        );
        const HighScore = await loadHighScore();
        HighScore.init(5, STORAGE, false);

        expect(HighScore.get("easy")).toBe(undefined);
        expect(HighScore.get("normal")).toEqual([3, 2, 1]);
        expect(HighScore.get("hard")).toBe(undefined);
        expect(HighScore.get("expert")).toBe(undefined);

        expect(() => HighScore.add("easy", 5)).not.toThrow();
        expect(HighScore.get("easy")).toEqual([5]);
    });

    test("saved data that isn't an object is ignored", async function () {
        for (const value of ['"text"', "[1, 2, 3]", "5"]) {
            localStorage.setItem(STORAGE, value);
            const HighScore = await loadHighScore();
            HighScore.init(5, STORAGE, true);

            HighScore.add("easy", 2);

            expect(JSON.parse(localStorage.getItem(STORAGE) ?? "")).toEqual({
                easy: [2],
            });
        }
    });

    test("a saved list with more scores than the limit is cut on load", async function () {
        localStorage.setItem(
            STORAGE,
            JSON.stringify({
                easy: Array.from({ length: 1000 }, (_, index) => index),
            }),
        );
        const HighScore = await loadHighScore();
        HighScore.init(3, STORAGE, true);

        expect(HighScore.get("easy")).toEqual([0, 1, 2]);

        HighScore.add("easy", -1);
        expect(HighScore.get("easy")).toEqual([-1, 0, 1]);
    });

    test("non-finite scores are ignored", async function () {
        const HighScore = await loadHighScore();
        HighScore.init(3, STORAGE, true);

        expect(HighScore.add("easy", NaN)).toBe(false);
        expect(HighScore.add("easy", Infinity)).toBe(false);
        expect(HighScore.get("easy")).toBe(undefined);
    });

    test("get() doesn't return inherited properties", async function () {
        const HighScore = await loadHighScore();
        HighScore.init(3, STORAGE, true);

        expect(HighScore.get("__proto__")).toBe(undefined);
        expect(HighScore.get("toString")).toBe(undefined);
    });

    test("a full storage doesn't stop the score from being added", async function () {
        const HighScore = await loadHighScore();
        HighScore.init(3, STORAGE, true);

        vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
            throw new DOMException("full", "QuotaExceededError");
        });
        const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

        expect(HighScore.add("easy", 1)).toBe(true);
        expect(HighScore.get("easy")).toEqual([1]);
        expect(warn).toHaveBeenCalled();
    });
});
