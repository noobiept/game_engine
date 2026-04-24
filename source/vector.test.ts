import { describe, expect, test } from "vitest";
import * as Vector from "./vector";

describe("Vector", function () {
    test("add() and subtract()", function () {
        const one = { x: 8, y: -3 };
        const two = { x: -2, y: 5 };

        expect(Vector.add(one, two)).toEqual({ x: 6, y: 2 });
        expect(Vector.subtract(one, two)).toEqual({ x: 10, y: -8 });
    });

    test("magnitude() and multiply()", function () {
        const vector = { x: 3, y: 4 };

        expect(Vector.magnitude(vector)).toEqual(5);
        expect(Vector.multiply(vector, 2)).toEqual({ x: 6, y: 8 });
    });

    test("dotProduct() and projection()", function () {
        const one = { x: 3, y: 4 };
        const two = { x: 5, y: 0 };

        expect(Vector.dotProduct(one, two)).toEqual(15);
        expect(Vector.projection(one, two)).toEqual({ x: 3, y: 0 });
    });

    test("rotate()", function () {
        const result = Vector.rotate(
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            Math.PI / 2,
        );

        expect(result.x).toBeCloseTo(1);
        expect(result.y).toBeCloseTo(2);
    });

    test("normalLeft(), normalRight(), and normalize()", function () {
        const vector = { x: 3, y: 4 };
        const normalized = Vector.normalize(vector);

        expect(Vector.normalLeft(vector)).toEqual({ x: 4, y: -3 });
        expect(Vector.normalRight(vector)).toEqual({ x: -4, y: 3 });
        expect(normalized.x).toBeCloseTo(0.6);
        expect(normalized.y).toBeCloseTo(0.8);
    });
});
