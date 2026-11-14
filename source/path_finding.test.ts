import { describe, expect, test } from "vitest";
import { breadthFirstSearch } from "./path_finding";

describe("PathFinding", function () {
    test("breadthFirstSearch() points passable cells toward the destination", function () {
        const passable = 1;
        const blocked = 0;
        const map = [
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 0],
        ];
        const destination = { column: 0, line: 0 };

        const path = breadthFirstSearch(map, destination, {
            passable: passable,
            blocked: blocked,
        });

        expect(path[0][0]).toEqual(destination);
        expect(path[0][1]).toEqual({ column: 0, line: 0 });
        expect(path[0][3]).toEqual({ column: 2, line: 0 });
        expect(path[2][3]).toEqual({ column: 3, line: 1 });
    });

    test("breadthFirstSearch() leaves blocked and unreachable cells empty", function () {
        const path = breadthFirstSearch(
            [
                [1, 0, 1],
                [1, 0, 1],
                [1, 0, 1],
            ],
            { column: 0, line: 2 },
            { passable: 1, blocked: 0 },
        );

        expect(path[0][1]).toEqual(null);
        expect(path[0][2]).toEqual(null);
        expect(path[1][0]).toEqual({ column: 0, line: 2 });
        expect(path[2][0]).toEqual({ column: 0, line: 2 });
    });
});

describe("PathFinding destination", function () {
    const map = [
        [0, 1, 1],
        [1, 1, 1],
    ];
    const types = { passable: 1, blocked: 0 };

    test("throws when the destination is outside the map", function () {
        expect(() =>
            breadthFirstSearch(map, { column: 0, line: 5 }, types),
        ).toThrow(RangeError);
        expect(() =>
            breadthFirstSearch(map, { column: -1, line: 0 }, types),
        ).toThrow(RangeError);
        expect(() =>
            breadthFirstSearch(map, { column: 0.5, line: 0 }, types),
        ).toThrow(RangeError);
    });

    test("nothing can reach a blocked destination", function () {
        const path = breadthFirstSearch(map, { column: 0, line: 0 }, types);

        expect(path.flat().every((position) => position === null)).toBe(true);
    });

    test("changing the given destination afterwards doesn't change the result", function () {
        const destination = { column: 2, line: 1 };
        const path = breadthFirstSearch(map, destination, types);

        destination.column = 0;

        expect(path[1][2]).toEqual({ column: 2, line: 1 });
        expect(path[1][1]).toEqual({ column: 2, line: 1 });
    });
});
