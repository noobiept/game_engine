import { describe, expect, test } from "vitest";
import { Circle } from "./circle";

function makeCircle(x: number, y: number, radius = 10) {
    const circle = new Circle({
        x,
        y,
        radius,
        color: "blue",
        category: 1,
        collidesWith: 2,
    });
    circle.updateVertices(0, 0, 1, 1, 0);

    return circle;
}

describe("Circle", function () {
    test("collides as a circle, not as its bounding square", function () {
        // the bounding squares overlap on the diagonal, but the circles don't (25.5 apart, the radii add up to 20)
        expect(makeCircle(0, 0).checkCollision(makeCircle(18, 18))).toBe(false);

        expect(makeCircle(0, 0).checkCollision(makeCircle(19, 0))).toBe(true);
        expect(makeCircle(0, 0).checkCollision(makeCircle(13, 13))).toBe(true);
    });

    test("the mouse position is checked against the circle", function () {
        const circle = makeCircle(0, 0);

        expect(circle.intersect(9, 0)).toEqual([circle]);
        expect(circle.intersect(8, 8)).toEqual([]); // inside the bounding square, outside the circle
    });

    test("clone() keeps the collision settings", function () {
        const clone = makeCircle(0, 0).clone();

        expect(clone.category).toBe(1);
        expect(clone.collidesWith).toBe(2);
    });
});
