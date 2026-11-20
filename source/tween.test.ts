import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { Tween } from "./tween";

describe("Tween", function () {
    beforeEach(function () {
        Tween.removeAll();
    });

    afterEach(function () {
        Tween.removeAll();
    });

    test("to() updates properties over time and removes itself when complete", function () {
        const element = { x: 0, y: 10 };
        const tween = new Tween(element);

        tween.to({ x: 10, y: 30 }, 2).start();

        expect(Tween.getTween(element)).toEqual(tween);

        Tween.update(1);

        expect(element.x).toEqual(5);
        expect(element.y).toEqual(20);

        Tween.update(1);

        expect(element.x).toEqual(10);
        expect(element.y).toEqual(30);
        expect(Tween.getTween(element)).toEqual(null);
    });

    test("to() uses the provided ease function", function () {
        const element = { x: 0 };

        new Tween(element).to({ x: 16 }, 4, Tween.Ease.quadraticIn).start();

        Tween.update(2);

        expect(element.x).toEqual(4);
    });

    test("wait() delays later steps", function () {
        const element = { x: 0 };

        new Tween(element).wait(1).to({ x: 10 }, 1).start();

        Tween.update(0.5);
        expect(element.x).toEqual(0);

        Tween.update(0.5);
        expect(element.x).toEqual(0);

        Tween.update(0.5);
        expect(element.x).toEqual(5);
    });

    test("call() runs callbacks in sequence", function () {
        const element = { x: 0 };
        const calls: string[] = [];

        new Tween(element)
            .call(function () {
                calls.push("first");
            })
            .to({ x: 1 }, 1)
            .call(function () {
                calls.push("second");
            })
            .start();

        expect(calls).toEqual(["first"]);

        Tween.update(1);

        expect(calls).toEqual(["first", "second"]);
    });

    test("removeTweens() removes only tweens for the provided element", function () {
        const one = { x: 0 };
        const two = { x: 0 };

        const oneTween = new Tween(one).wait(1);
        const twoTween = new Tween(two).wait(1);
        oneTween.start();
        twoTween.start();

        Tween.removeTweens(one);

        expect(Tween.getTween(one)).toEqual(null);
        expect(Tween.getTween(two)).toEqual(twoTween);
    });

    test("remove() does not remove another tween when this tween is not active", function () {
        const activeElement = { x: 0 };
        const inactiveElement = { x: 0 };
        const activeTween = new Tween(activeElement).wait(1);
        const inactiveTween = new Tween(inactiveElement);

        activeTween.start();
        inactiveTween.remove();

        expect(Tween.getTween(activeElement)).toEqual(activeTween);
        expect(Tween.getTween(inactiveElement)).toEqual(null);
    });

    test("start() does not register a tween with no steps", function () {
        const emptyElement = { x: 0 };
        const activeElement = { x: 0 };
        const emptyTween = new Tween(emptyElement);
        const activeTween = new Tween(activeElement).wait(1);

        activeTween.start();
        emptyTween.start();

        expect(Tween.getTween(emptyElement)).toEqual(null);
        expect(Tween.getTween(activeElement)).toEqual(activeTween);
    });

    test("override removes existing tweens on the target", function () {
        const element = { x: 0 };

        const first = new Tween(element).to({ x: 10 }, 1);
        first.start();

        expect(Tween._tweens).toHaveLength(1);
        expect(Tween._tweens[0]).toBe(first);

        const second = new Tween(element, { override: true }).to({ x: 20 }, 1);
        second.start();

        // the first tween was removed, only the new one remains
        expect(Tween._tweens).toHaveLength(1);
        expect(Tween._tweens[0]).toBe(second);
        expect(Tween.getTween(element)).toBe(second);
    });

    test('override: "properties" takes only its properties out of the other tweens', function () {
        const block = { x: 0, opacity: 0 };
        const calls: string[] = [];

        // a fade-in and a slide, then another slide while both run
        new Tween(block)
            .to({ opacity: 1, x: 100 }, 0.5)
            .to({ x: 200 }, 0.5) // only x: becomes a wait, so the call keeps its time
            .call(() => calls.push("first done"))
            .start();
        Tween.update(0.25);

        new Tween(block, { override: "properties" })
            .to({ x: -50 }, 0.25)
            .start();

        Tween.update(0.25);
        expect(block.x).toBe(-50);
        expect(block.opacity).toBe(1); // the fade kept going

        // the first tween doesn't move it anymore, but its call still runs on time
        Tween.update(0.4);
        expect(block.x).toBe(-50);
        expect(calls).toEqual([]);

        Tween.update(0.1);
        expect(calls).toEqual(["first done"]);
    });

    test('override: "properties" leaves the object given to to() as it was', function () {
        const target = { x: 100, y: 100 };
        const block = { x: 0, y: 0 };

        new Tween(block).to(target, 1).start();
        new Tween(block, { override: "properties" }).to({ x: 0 }, 1).start();

        expect(target).toEqual({ x: 100, y: 100 });

        Tween.update(1);
        expect(block).toEqual({ x: 0, y: 100 });
    });

    test('a longer older tween doesn\'t take over when a newer one ends (with override: "properties")', function () {
        const block = { x: 0 };

        new Tween(block).to({ x: 1000 }, 10).start();
        Tween.update(1);

        new Tween(block, { override: "properties" }).to({ x: 0 }, 0.5).start();

        for (let a = 0; a < 20; a++) {
            Tween.update(0.1);
        }

        expect(block.x).toBe(0);
    });

    test("override only affects tweens on the same target", function () {
        const one = { x: 0 };
        const two = { x: 0 };

        const oneTween = new Tween(one).wait(1);
        oneTween.start();

        const twoTween = new Tween(two, { override: true }).wait(1);
        twoTween.start();

        expect(Tween.getTween(one)).toEqual(oneTween);
        expect(Tween.getTween(two)).toEqual(twoTween);
    });
});

describe("Tween timing and removal", function () {
    beforeEach(function () {
        Tween.removeAll();
    });

    test("when two tweens set the same property, the newest one's value stays (no jump when the older one ends)", function () {
        const block = { x: 0 };

        new Tween(block).to({ x: 100 }, 0.1).start();
        Tween.update(0.05); // halfway, at 50

        // moved back while the first slide runs
        new Tween(block).to({ x: 0 }, 0.1).start();

        const positions: number[] = [];

        for (let a = 0; a < 8; a++) {
            Tween.update(0.025);
            positions.push(block.x);
        }

        // it goes back smoothly from 50 to 0, without reaching the first target and jumping
        const moves = positions.map(
            (x, a) => x - (a === 0 ? 50 : positions[a - 1]),
        );

        expect(Math.max(...moves)).toBeLessThanOrEqual(0);
        expect(Math.min(...moves)).toBeGreaterThanOrEqual(-12.5 - 1e-9);
        expect(block.x).toBe(0);
    });

    test("the time left over from a step is applied to the next one", function () {
        const element = { x: 0, y: 0 };
        const tween = new Tween(element).to({ x: 10 }, 1).to({ y: 10 }, 1);
        tween.start();

        Tween.update(0.75);
        expect(element).toEqual({ x: 7.5, y: 0 });

        Tween.update(0.75);
        expect(element).toEqual({ x: 10, y: 5 });

        Tween.update(0.5);
        expect(element).toEqual({ x: 10, y: 10 });
        expect(Tween.getTween(element)).toBe(null);
    });

    test("the time left over from a wait is applied to the next step", function () {
        const element = { x: 0 };

        new Tween(element).wait(1).to({ x: 10 }, 1).start();

        Tween.update(1.5);
        expect(element.x).toBe(5);
    });

    test("a step with no duration goes straight to the end value", function () {
        const element = { x: 0 };

        new Tween(element).to({ x: 5 }, 0).start();
        Tween.update(0.016);

        expect(element.x).toBe(5);
    });

    test("removing all the tweens from a call() step doesn't break the update", function () {
        const killer = { n: 0 };
        const other = { n: 0 };

        new Tween(other).to({ n: 1 }, 1).start();
        new Tween(killer)
            .call(() => {})
            .wait(0.1)
            .call(() => Tween.removeAll())
            .start();

        expect(() => Tween.update(0.1)).not.toThrow();

        // the tweens were removed, so nothing else changes
        const value = other.n;
        Tween.update(0.1);
        expect(other.n).toBe(value);
    });

    test("removing a tween updated earlier in the same frame doesn't update another one twice", function () {
        const first = { n: 0 };
        const second = { n: 0 };

        // updated from the oldest to the newest: the 'second' tween runs first and removes the 'first' tween
        new Tween(second)
            .wait(0.1)
            .call(() => Tween.removeTweens(first))
            .to({ n: 1 }, 1)
            .start();
        new Tween(first).to({ n: 1 }, 1).start();

        Tween.update(0.1);

        expect(first.n).toBe(0);
        expect(second.n).toBe(0);
    });

    test("a tween removed from its own call() step doesn't run the remaining steps", function () {
        const element = { x: 0 };
        const tween = new Tween(element);

        tween
            .call(() => tween.remove())
            .to({ x: 10 }, 1)
            .start();

        Tween.update(1);

        expect(element.x).toBe(0);
        expect(Tween.getTween(element)).toBe(null);
    });
});
