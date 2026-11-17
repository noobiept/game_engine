// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Bullet } from "./bullet";
import { Container } from "./container";
import { Cooldown } from "./cooldown";
import * as Game from "./game";
import { Timeout } from "./game_time";
import { Rectangle } from "./rectangle";
import { ScrollingBitmap, ScrollingBitmapArgs } from "./scrolling_bitmap";
import { Sprite } from "./sprite";
import { Tween } from "./tween";
import { Weapon } from "./weapon";
import {
    createFrameDriver,
    setDocumentHidden,
    stubCanvasContext,
} from "../tests/helpers";

const STEP = 1 / 60;
const image = { width: 80, height: 40 } as unknown as HTMLImageElement;

/**
 * Update the game in steps of 1/60 of a second, and return the step (counted from 1) of each `true` from `check()`.
 */
function stepsWhen(steps: number, check: () => boolean) {
    const found: number[] = [];

    for (let step = 1; step <= steps; step++) {
        Game.step(STEP);

        if (check()) {
            found.push(step);
        }
    }

    return found;
}

let driver: ReturnType<typeof createFrameDriver>;

beforeEach(function () {
    stubCanvasContext();
    driver = createFrameDriver();
    setDocumentHidden(false);

    Game.init({ container: document.body, width: 100, height: 100 });
    Game.stopGameLoop();
});

afterEach(function () {
    Game.stopGameLoop();
    Game.setFixedTimestep(null);
    Game.removeAllCallbacks();
    Tween.removeAll();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

// adding up steps of 1/60 gives a rounding error (30 of them are 0.49999999999999994), which can't cost a step
describe("Timers of a whole number of steps (1/60 of a second)", function () {
    test("a Cooldown is ready on its step (0.5 seconds is 30 steps)", function () {
        const cooldown = new Cooldown(0.5, { ready: false });
        let ready = false;

        Game.addToGameLoop(function (deltaTime) {
            cooldown.update(deltaTime);
            ready = cooldown.isReady();

            if (ready) {
                cooldown.restart(1.5);
            }
        });

        expect(stepsWhen(200, () => ready)).toEqual([30, 120]);
    });

    test("a game loop callback with a delay is called on its step (2 seconds is 120 steps)", function () {
        let called = false;

        Game.addToGameLoop(() => (called = true), { delay: 2 });

        const steps = stepsWhen(250, function () {
            const was = called;
            called = false;
            return was;
        });

        expect(steps).toEqual([120, 240]);
    });

    test("a Timeout is called on its step (1.5 seconds is 90 steps)", function () {
        const timeout = new Timeout();
        let called = false;

        timeout.start(() => (called = true), 1.5);

        expect(stepsWhen(100, () => called).at(0)).toBe(90);
    });

    test("a sprite changes frames on its steps (0.5 seconds is 30 steps)", function () {
        const sprite = new Sprite({
            image,
            frameWidth: 40,
            frameHeight: 40,
            interval: 0.5,
            animations: { once: [0, 1] },
        });
        let ended = false;

        Game.addElement(sprite);
        sprite.addEventListener("animationend", () => (ended = true));
        sprite.play("once", { loop: false });

        // the second frame at 30, then the end at 60
        expect(stepsWhen(70, () => ended).at(0)).toBe(60);
    });

    test("a tween step ends on its step (0.4 seconds is 24 steps)", function () {
        const rect = new Rectangle({ width: 10, height: 10, color: "red" });
        let done = false;

        Game.addElement(rect);
        new Tween(rect)
            .to({ x: 100 }, 0.4)
            .call(() => (done = true))
            .start();

        expect(stepsWhen(30, () => done).at(0)).toBe(24);
    });

    test("a scrolling bitmap scrolls on its steps (0.5 seconds is 30 steps)", function () {
        const scrolling = new ScrollingBitmap({
            image,
            direction: ScrollingBitmapArgs.Direction.left,
            step: 1,
            interval: 0.5,
        });
        const position = () =>
            (scrolling as unknown as { _ref_position: number })._ref_position;
        let last = position();

        Game.addElement(scrolling);

        const steps = stepsWhen(65, function () {
            const moved = position() !== last;
            last = position();
            return moved;
        });

        expect(steps).toEqual([30, 60]);
    });

    test("a weapon fires on its interval's steps (0.5 seconds is 30 steps)", function () {
        const owner = new Rectangle({ width: 10, height: 10, color: "red" });
        const bullets = new Container();
        const weapon = new Weapon({ element: owner, bulletContainer: bullets });

        // the bullets' container isn't in the canvas, so they stay (none leaves the canvas, and is destroyed)
        Game.addToGameLoop((deltaTime) => weapon.logic(deltaTime));
        weapon.forceFire(0, 0, 0.5); // the first bullet right away

        const count = () =>
            bullets.getAllChildren().filter((child) => child instanceof Bullet)
                .length;
        let last = count();

        const steps = stepsWhen(65, function () {
            const fired = count() > last;
            last = count();
            return fired;
        });

        expect(steps).toEqual([30, 60]);
    });

    test("with Game.setFixedTimestep( 1 / 60 ), at 144Hz", function () {
        const cooldown = new Cooldown(2, { ready: false });
        let steps = 0;
        let readyAt = 0;

        Game.setFixedTimestep(STEP);
        Game.addToGameLoop(function (deltaTime) {
            steps++;
            cooldown.update(deltaTime);

            if (cooldown.isReady() && readyAt === 0) {
                readyAt = steps;
            }
        });
        Game.startGameLoop();

        driver.run(144 * 3, 144);

        expect(readyAt).toBe(120);
    });
});
