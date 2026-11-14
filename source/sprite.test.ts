import { describe, expect, test } from "vitest";
import { Sprite } from "./sprite";

// 80x40 sheet with 40x40 frames -> 2 frames per line.
const image = { width: 80, height: 40 } as unknown as HTMLImageElement;

function makeSprite() {
    return new Sprite({
        image: image,
        frameWidth: 40,
        frameHeight: 40,
        interval: 0.1,
        animations: {
            once: [0, 1],
            loopAnim: [0, 1],
        },
    });
}

describe("Sprite", function () {
    test("non-looping animation stops on the last frame and dispatches animationend", function () {
        const sprite = makeSprite();
        const events: { sprite: Sprite; animationId: string }[] = [];

        sprite.addEventListener("animationend", function (data) {
            events.push(data);
        });

        expect(sprite.play("once", { loop: false })).toBe(true);
        expect(sprite._has_logic).toBe(true);

        sprite.logic(0.1); // advance to frame 1 (the last)
        expect(events).toHaveLength(0);
        expect(sprite._has_logic).toBe(true);

        sprite.logic(0.1); // past the end -> stop on the last frame + animationend
        expect(events).toHaveLength(1);
        expect(events[0]).toEqual({ sprite: sprite, animationId: "once" });
        expect(sprite._has_logic).toBe(false);
    });

    test("looping animation wraps around without dispatching animationend", function () {
        const sprite = makeSprite();
        const events: unknown[] = [];

        sprite.addEventListener("animationend", function (data) {
            events.push(data);
        });

        sprite.play("loopAnim"); // loop defaults to true

        sprite.logic(0.1); // frame 1
        sprite.logic(0.1); // wraps back to frame 0
        sprite.logic(0.1); // frame 1

        expect(events).toHaveLength(0);
        expect(sprite._has_logic).toBe(true);
    });

    test("an unknown animation id returns false", function () {
        const sprite = makeSprite();

        expect(sprite.play("does-not-exist")).toBe(false);
    });

    test("reset restarts the current animation from the first frame", function () {
        const sprite = makeSprite();

        sprite.play("loopAnim");
        sprite.logic(0.1); // advance one frame

        const before = (
            sprite as unknown as { _current_animation_position: number }
        )._current_animation_position;
        expect(before).toBe(1);

        sprite.play("loopAnim", { reset: true });

        const after = (
            sprite as unknown as { _current_animation_position: number }
        )._current_animation_position;
        expect(after).toBe(0);
    });
});

describe("Sprite timing", function () {
    // 160x40 sheet with 40x40 frames -> 4 frames
    const wideImage = { width: 160, height: 40 } as unknown as HTMLImageElement;

    // values that are exact in binary floating point, so the sums don't round down
    function makeWalkSprite() {
        return new Sprite({
            image: wideImage,
            frameWidth: 40,
            frameHeight: 40,
            interval: 0.25,
            animations: {
                walk: [0, 1, 2, 3],
            },
        });
    }

    function position(sprite: Sprite) {
        return (sprite as unknown as { _current_animation_position: number })
            ._current_animation_position;
    }

    test("keeps the time past the interval, and advances several frames when several intervals passed", function () {
        const sprite = makeWalkSprite();
        sprite.play("walk");

        sprite.logic(0.375);
        expect(position(sprite)).toBe(1);

        // 0.125 left over + 0.375 = 2 intervals
        sprite.logic(0.375);
        expect(position(sprite)).toBe(3);

        sprite.logic(0.125);
        expect(position(sprite)).toBe(3);
    });

    test("a non-looping animation ends once on its last frame, even when several frames pass at once", function () {
        const sprite = makeWalkSprite();
        let ended = 0;

        sprite.addEventListener("animationend", () => ended++);
        sprite.play("walk", { loop: false });
        sprite.logic(2);

        expect(position(sprite)).toBe(3);
        expect(ended).toBe(1);
        expect(sprite._has_logic).toBe(false);
    });

    test("play() doesn't accept inherited properties as an animation", function () {
        const sprite = makeWalkSprite();

        expect(sprite.play("toString")).toBe(false);
        expect(sprite.play("constructor")).toBe(false);
        expect(sprite.play("__proto__")).toBe(false);
    });

    test("clone() keeps the collision settings, and has its own animations", function () {
        const sprite = new Sprite({
            image: wideImage,
            frameWidth: 40,
            frameHeight: 40,
            animations: { walk: [0, 1] },
            category: 2,
            collidesWith: 4,
        });

        const clone = sprite.clone();
        (
            clone as unknown as { _animations: Record<string, number[]> }
        )._animations.walk.push(3);

        expect(clone.category).toBe(2);
        expect(clone.collidesWith).toBe(4);
        expect(
            (sprite as unknown as { _animations: Record<string, number[]> })
                ._animations.walk,
        ).toEqual([0, 1]);
    });
});
