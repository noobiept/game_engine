import { describe, expect, test } from "vitest";
import { Cooldown } from "./cooldown";

/**
 * Use the cooldown on every update for some seconds (with update rates that vary a bit, like a real display).
 * `useFirst` uses it before the update (like a game loop callback, which runs before the elements' logic).
 * Returns how many times it was used.
 */
function useFor(
    cooldown: Cooldown,
    seconds: number,
    refreshRate: number,
    useFirst = false,
) {
    let time = 0;
    let uses = 0;
    let frame = 0;

    const use = () => {
        if (cooldown.isReady()) {
            cooldown.restart();
            uses++;
        }
    };

    while (time < seconds) {
        // +-10% of jitter on the frame time
        const deltaTime = (1 / refreshRate) * (1 + 0.1 * Math.sin(frame++));
        time += deltaTime;

        if (useFirst) {
            use();
            cooldown.update(deltaTime);
        } else {
            cooldown.update(deltaTime);
            use();
        }
    }

    return uses;
}

describe("Cooldown", function () {
    test("starts ready, or waits the interval first with { ready: false }", function () {
        expect(new Cooldown(1).isReady()).toBe(true);

        const cooldown = new Cooldown(1, { ready: false });
        expect(cooldown.isReady()).toBe(false);
        expect(cooldown.remaining).toBe(1);

        cooldown.update(0.6);
        expect(cooldown.isReady()).toBe(false);
        expect(cooldown.remaining).toBeCloseTo(0.4);

        cooldown.update(0.6);
        expect(cooldown.isReady()).toBe(true);
        expect(cooldown.remaining).toBe(0);
    });

    test.each([30, 60, 144])(
        "keeps to the rate at %i updates per second",
        function (refreshRate) {
            // 5 times per second for 60 seconds, plus the first one right away
            // (resetting a counter to the interval instead gives 286 uses at 30 updates per second, 287 at 60 and 298 at 144)
            for (const useFirst of [false, true]) {
                const uses = useFor(
                    new Cooldown(0.2),
                    60,
                    refreshRate,
                    useFirst,
                );

                expect(uses).toBeGreaterThanOrEqual(300);
                expect(uses).toBeLessThanOrEqual(301);
            }
        },
    );

    test("doesn't build up time while it waits to be used", function () {
        const cooldown = new Cooldown(0.25);

        // ready, but not used for a while
        for (let a = 0; a < 64; a++) {
            cooldown.update(1 / 64);
        }

        expect(cooldown.isReady()).toBe(true);
        cooldown.restart();

        // a whole interval until the next use
        for (let a = 0; a < 15; a++) {
            cooldown.update(1 / 64);
            expect(cooldown.isReady()).toBe(false);
        }

        cooldown.update(1 / 64);
        expect(cooldown.isReady()).toBe(true);
    });

    test("keeps the time past the interval when used in the update it got ready", function () {
        const cooldown = new Cooldown(1, { ready: false });

        cooldown.update(1.25);
        cooldown.restart();

        expect(cooldown.remaining).toBeCloseTo(0.75);
    });

    test("is ready at most once per update", function () {
        const cooldown = new Cooldown(0.01, { ready: false });

        cooldown.update(0.25);
        expect(cooldown.isReady()).toBe(true);

        cooldown.restart();
        expect(cooldown.isReady()).toBe(false);
        expect(cooldown.remaining).toBeGreaterThan(0);
        expect(cooldown.remaining).toBeLessThanOrEqual(0.01);
    });

    test("restart() before it's ready waits a whole interval again", function () {
        const cooldown = new Cooldown(1, { ready: false });

        cooldown.update(0.5);
        cooldown.restart();

        expect(cooldown.remaining).toBe(1);
    });

    test("changing the interval uses the time that already passed", function () {
        const cooldown = new Cooldown(1, { ready: false });

        cooldown.update(0.5);
        cooldown.interval = 0.4;
        expect(cooldown.isReady()).toBe(true);

        cooldown.interval = 2;
        expect(cooldown.remaining).toBeCloseTo(1.5);

        // the time it waited counts as well
        const waiting = new Cooldown(1);

        waiting.update(1);
        waiting.update(1);
        waiting.interval = 1.5;
        expect(waiting.isReady()).toBe(true);
    });

    test("an interval of 0 is always ready", function () {
        const cooldown = new Cooldown(0);

        for (let a = 0; a < 3; a++) {
            expect(cooldown.isReady()).toBe(true);
            cooldown.restart();
            cooldown.update(1 / 60);
        }
    });

    test("an Infinity interval isn't ready again once used", function () {
        const cooldown = new Cooldown(Infinity);

        expect(cooldown.isReady()).toBe(true);
        expect(cooldown.remaining).toBe(0);

        cooldown.restart();
        cooldown.update(1000);

        expect(cooldown.isReady()).toBe(false);
        expect(cooldown.remaining).toBe(Infinity);
    });

    test("throws a RangeError for an interval that isn't a number >= 0", function () {
        expect(() => new Cooldown(-1)).toThrow(RangeError);
        expect(() => new Cooldown(NaN)).toThrow(RangeError);

        const cooldown = new Cooldown(1);
        expect(() => (cooldown.interval = -0.5)).toThrow(RangeError);
        expect(cooldown.interval).toBe(1);
    });
});
