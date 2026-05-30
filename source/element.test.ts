import { beforeEach, describe, expect, test } from "vitest";
import { Rectangle } from "./rectangle";
import * as CollisionDetection from "./collision-detection/collision_detection";

describe("Element top-left bounds", function () {
    beforeEach(function () {
        // the Element constructor registers with the collision detection module
        CollisionDetection.init();
    });

    test("left/top return the top-left corner (center-origin minus half size)", function () {
        const rect = new Rectangle({
            x: 100,
            y: 50,
            width: 20,
            height: 10,
            color: "red",
        });

        expect(rect.left).toBe(90); // 100 - 20 / 2
        expect(rect.top).toBe(45); // 50 - 10 / 2
    });

    test("getBoundingBox returns a top-left box", function () {
        const rect = new Rectangle({
            x: 100,
            y: 50,
            width: 20,
            height: 10,
            color: "red",
        });

        expect(rect.getBoundingBox()).toEqual({
            x: 90,
            y: 45,
            width: 20,
            height: 10,
        });
    });

    test("default position (0/0) gives negative top-left for a centered element", function () {
        const rect = new Rectangle({ width: 8, height: 4, color: "blue" });

        expect(rect.left).toBe(-4);
        expect(rect.top).toBe(-2);
        expect(rect.getBoundingBox()).toEqual({
            x: -4,
            y: -2,
            width: 8,
            height: 4,
        });
    });
});
