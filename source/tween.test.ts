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
});
