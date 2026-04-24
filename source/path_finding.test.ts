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
