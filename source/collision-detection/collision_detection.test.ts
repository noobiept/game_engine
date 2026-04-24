import { describe, expect, test } from "vitest";
import * as Game from "../index";

describe("CollisionDetection", function () {
    // polygonPolygonList //
    test("polygonPolygonList()", function () {
        Game.CollisionDetection.init();

        const one = new Game.Rectangle({
            x: 100,
            y: 100,
            width: 20,
            height: 10,
            color: "blue",
        });
        const two = new Game.Rectangle({
            width: 10,
            height: 20,
            color: "red",
        });

        const tests = [
            { rotation1: 0, rotation2: 0, x2: 100, y2: 115, collide: true },
            { rotation1: 0, rotation2: 0, x2: 100, y2: 116, collide: false },
            { rotation1: 0, rotation2: 0, x2: 100, y2: 84, collide: false },
            { rotation1: 0, rotation2: 0, x2: 100, y2: 85, collide: true },
            { rotation1: 0, rotation2: 0, x2: 84, y2: 100, collide: false },
            { rotation1: 0, rotation2: 0, x2: 85, y2: 100, collide: true },
            { rotation1: 0, rotation2: 0, x2: 115, y2: 100, collide: true },
            { rotation1: 0, rotation2: 0, x2: 116, y2: 100, collide: false },
            {
                rotation1: Math.PI / 4,
                rotation2: 0,
                x2: 108,
                y2: 86,
                collide: true,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: 0,
                x2: 109,
                y2: 86,
                collide: false,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: 0,
                x2: 90,
                y2: 113,
                collide: false,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: 0,
                x2: 90,
                y2: 112,
                collide: true,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: -Math.PI / 3,
                x2: 114,
                y2: 115,
                collide: true,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: -Math.PI / 3,
                x2: 115,
                y2: 115,
                collide: false,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: Math.PI / 3,
                x2: 82,
                y2: 94,
                collide: true,
            },
            {
                rotation1: Math.PI / 4,
                rotation2: Math.PI / 3,
                x2: 82,
                y2: 93,
                collide: false,
            },
        ];

        for (let a = 0; a < tests.length; a++) {
            const test = tests[a];

            one.rotation = test.rotation1;
            two.rotation = test.rotation2;
            two.x = test.x2;
            two.y = test.y2;

            one.updateVertices(0, 0, 1, 1, 0);
            two.updateVertices(0, 0, 1, 1, 0);

            const collides = Game.CollisionDetection.polygonPolygonList(
                one.getVertices(),
                two.getVertices(),
            );

            expect(collides).toEqual(test.collide);
        }

        Game.CollisionDetection.clear();
    });

    // polygonPoint //
    test("polygonPoint()", function () {
        Game.CollisionDetection.init();

        const rect = new Game.Rectangle({
            width: 10,
            height: 10,
            color: "red",
        });
        rect.updateVertices(0, 0, 1, 1, 0);

        const tests = [
            { x: -5, y: 0, collide: true },
            { x: -5.1, y: 0, collide: false },
            { x: 4.9, y: 0, collide: true },
            { x: 5.1, y: 0, collide: false },
            { x: 0, y: 4.9, collide: true },
            { x: 0, y: 5.1, collide: false },
            { x: 0, y: -5, collide: true },
            { x: 0, y: -5.1, collide: false },
        ];

        for (let a = 0; a < tests.length; a++) {
            const info = tests[a];
            const vertices = rect.vertices;

            if (vertices === null) {
                throw new Error("Rectangle vertices were not initialized.");
            }

            const collides = Game.CollisionDetection.polygonPoint(vertices, info);

            expect(collides).toEqual(info.collide);
        }

        Game.CollisionDetection.clear();
    });

    // boxBox //
    test("boxBox()", function () {
        let result;
        let expected;

        result = Game.CollisionDetection.boxBox(0, 0, 1, 1, 2, 2, 1, 1);
        expected = false;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.boxBox(0, 0, 2, 1, 2, 0, 1, 4);
        expected = true;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.boxBox(0, 0, 2, 2, 0, 0, 1, 1);
        expected = true;

        expect(result).toEqual(expected);
    });

    // circleCircle //
    test("circleCircle()", function () {
        let result;
        let expected;

        result = Game.CollisionDetection.circleCircle(0, 0, 2, 5, 5, 2);
        expected = false;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.circleCircle(0, 0, 2, 4, 0, 2);
        expected = true;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.circleCircle(0, 0, 4, 0, 0, 2);
        expected = true;

        expect(result).toEqual(expected);
    });

    // circlePoint //
    test("circlePoint()", function () {
        let result;
        let expected;

        result = Game.CollisionDetection.circlePoint(0, 0, 4, 5, 5);
        expected = false;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.circlePoint(0, 0, 4, 4, 0);
        expected = true;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.circlePoint(0, 0, 4, 0, 0);
        expected = true;

        expect(result).toEqual(expected);
    });

    // pointBox //
    test("pointBox()", function () {
        let result;
        let expected;

        result = Game.CollisionDetection.pointBox(0, 0, 2, 2, 10, 10);
        expected = false;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.pointBox(10, 5, 0, 0, 10, 10);
        expected = true;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.pointBox(0, 0, -2, -2, 4, 4);
        expected = true;

        expect(result).toEqual(expected);

        result = Game.CollisionDetection.pointBox(2, 5, 0, 0, 10, 10);
        expected = true;

        expect(result).toEqual(expected);
    });
});
