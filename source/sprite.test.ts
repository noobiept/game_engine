import { beforeEach, describe, expect, test } from "vitest";
import { Sprite } from "./sprite";
import * as CollisionDetection from "./collision-detection/collision_detection";

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
    beforeEach(function () {
        // the Element constructor registers with the collision detection module
        CollisionDetection.init();
    });

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
