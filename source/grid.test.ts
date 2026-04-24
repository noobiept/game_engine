import { describe, expect, test } from "vitest";
import { Grid } from "./grid";

describe("Grid", function () {
    test("Initialize a grid.", function () {
        const columns = 5;
        const lines = 10;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });
        const internalGrid = grid as Grid & { _grid: (string | null)[][] };

        expect(grid.columns).toEqual(columns);
        expect(grid.lines).toEqual(lines);

        expect(internalGrid._grid.length).toEqual(columns);
        expect(internalGrid._grid[0].length).toEqual(lines);
        expect(internalGrid._grid[0][0]).toEqual(null);
    });

    test("add()", function () {
        const columns = 5;
        const lines = 10;
        const value = "value";

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });
        const internalGrid = grid as Grid & { _grid: (string | null)[][] };

        expect(function () {
            grid.add(value, columns + 10, 0);
        }).toThrow(Error);
        expect(function () {
            grid.add(value, 0, lines + 10);
        }).toThrow(Error);

        const positions = [
            { column: 0, line: 0 },
            { column: Math.floor(columns / 2), line: Math.floor(lines / 2) },
            { column: columns - 1, line: lines - 1 },
        ];

        for (let a = 0; a < positions.length; a++) {
            const column = positions[a].column;
            const line = positions[a].line;

            grid.add(value, column, line);
            expect(internalGrid._grid[column][line]).toEqual(value);
            expect(grid.get(column, line)).toEqual(value);
        }
    });

    test("move()", function () {
        const columns = 5;
        const lines = 10;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        expect(function () {
            grid.move(columns + 10, 0, 0, 0);
        }).toThrow(Error);
        expect(function () {
            grid.move(0, 0, 0, lines + 10);
        }).toThrow(Error);

        const value1 = "value1";
        const value2 = "value2";

        const sourceColumn = 0;
        const sourceLine = 1;
        const destColumn = 2;
        const destLine = 8;

        grid.add(value1, sourceColumn, sourceLine);
        grid.move(sourceColumn, sourceLine, destColumn, destLine);

        expect(grid.get(sourceColumn, sourceLine)).toEqual(null);
        expect(grid.get(destColumn, destLine)).toEqual(value1);

        grid.add(value2, sourceColumn, sourceLine);
        const previous = grid.move(
            destColumn,
            destLine,
            sourceColumn,
            sourceLine,
        );

        expect(previous).toEqual(value2);
        expect(grid.get(sourceColumn, sourceLine)).toEqual(value1);
        expect(grid.get(destColumn, destLine)).toEqual(null);
    });

    test("remove()", function () {
        const columns = 10;
        const lines = 5;
        const value = "value";

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        expect(function () {
            grid.remove(columns, lines);
        }).toThrow(Error);

        const column = 6;
        const line = 3;

        grid.add(value, column, line);

        const previous = grid.remove(column, line);

        expect(previous).toEqual(value);
        expect(grid.get(column, line)).toEqual(null);
    });

    test("get()", function () {
        const columns = 4;
        const lines = 8;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        const invalidPositions = [
            { column: -1, line: 0 },
            { column: 0, line: -1 },
            { column: columns, line: 0 },
            { column: 0, line: lines },
        ];

        for (let a = 0; a < invalidPositions.length; a++) {
            const position = invalidPositions[a];

            expect(function () {
                grid.get(position.column, position.line);
            }).toThrow(Error);
        }

        const value = "value";
        const column = 2;
        const line = 3;

        grid.add(value, column, line);
        expect(grid.get(column, line)).toEqual(value);
    });

    test("isEmpty()", function () {
        const columns = 3;
        const lines = 2;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        const column = 0;
        const line = 0;

        expect(grid.isEmpty(column, line)).toEqual(true);

        grid.add("value", column, line);
        expect(grid.isEmpty(column, line)).toEqual(false);

        grid.remove(column, line);
        expect(grid.isEmpty(column, line)).toEqual(true);
    });

    test("normalizePosition()", function () {
        const columns = 7;
        const lines = 3;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        const middleColumn = Math.floor(columns / 2);
        const middleLine = Math.floor(lines / 2);

        const positions = [
            // lower limit
            {
                givenColumn: -1,
                givenLine: 0,
                expectedColumn: 0,
                expectedLine: 0,
            },
            {
                givenColumn: 0,
                givenLine: -5,
                expectedColumn: 0,
                expectedLine: 0,
            },
            {
                givenColumn: -2,
                givenLine: -4,
                expectedColumn: 0,
                expectedLine: 0,
            },
            // upper limit
            {
                givenColumn: columns,
                givenLine: 0,
                expectedColumn: columns - 1,
                expectedLine: 0,
            },
            {
                givenColumn: 0,
                givenLine: lines,
                expectedColumn: 0,
                expectedLine: lines - 1,
            },
            {
                givenColumn: columns,
                givenLine: lines,
                expectedColumn: columns - 1,
                expectedLine: lines - 1,
            },
            // middle
            {
                givenColumn: middleColumn,
                givenLine: middleLine,
                expectedColumn: middleColumn,
                expectedLine: middleLine,
            },
        ];

        for (let a = 0; a < positions.length; a++) {
            const position = positions[a];
            const normalized = grid.normalizePosition(
                position.givenColumn,
                position.givenLine,
            );

            expect(normalized.column).toEqual(position.expectedColumn);
            expect(normalized.line).toEqual(position.expectedLine);
        }
    });

    test("isInGrid()", function () {
        const columns = 3;
        const lines = 9;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        const positions = [
            { column: -1, line: 0, expect: false },
            { column: 0, line: -1, expect: false },
            { column: -1, line: -2, expect: false },
            { column: 0, line: 0, expect: true },
            { column: columns - 1, line: lines - 1, expect: true },
            { column: columns, line: 0, expect: false },
            { column: 0, line: lines, expect: false },
        ];

        for (let a = 0; a < positions.length; a++) {
            const position = positions[a];
            const result = grid.isInGrid(position.column, position.line);

            expect(result).toEqual(position.expect);
        }
    });

    test("getRandomPosition()", function () {
        const grid = new Grid({
            columns: 8,
            lines: 4,
        });
        const tries = 20;

        for (let a = 0; a < tries; a++) {
            const position = grid.getRandomPosition();

            expect(grid.isInGrid(position.column, position.line)).toEqual(true);
        }
    });

    test("getRandomEmptyPosition()", function () {
        const grid = new Grid({
            columns: 12,
            lines: 8,
        });
        const tries = 20;

        for (let a = 0; a < tries; a++) {
            const position = grid.getRandomEmptyPosition();

            if (position === null) {
                throw new Error("Expected an empty position.");
            }

            expect(grid.isEmpty(position.column, position.line)).toEqual(true);
        }
    });

    test("getRandomEmptyPosition() returns null when the grid is full", function () {
        const grid = new Grid({
            columns: 2,
            lines: 2,
        });

        grid.add("00", 0, 0);
        grid.add("01", 0, 1);
        grid.add("10", 1, 0);
        grid.add("11", 1, 1);

        expect(grid.getRandomEmptyPosition()).toEqual(null);
    });

    test("getEmptyPositions()", function () {
        const grid = new Grid({
            columns: 2,
            lines: 3,
        });
        const value = "value";

        grid.add(value, 0, 0);
        grid.add(value, 1, 2);
        grid.add(value, 1, 1);

        const emptyPositions = [
            { column: 0, line: 1 },
            { column: 0, line: 2 },
            { column: 1, line: 0 },
        ];

        expect(grid.getEmptyPositions()).toEqual(emptyPositions);
    });

    test("getNeighbors()", function () {
        const columns = 10;
        const lines = 10;

        const grid = new Grid({
            columns: columns,
            lines: lines,
        });

        for (let column = 0; column < columns; column++) {
            for (let line = 0; line < lines; line++) {
                grid.add(String(column) + String(line), column, line);
            }
        }

        const positions = [
            // ---- range 1 ----

            // corner positions
            { column: 0, line: 0, neighbors: ["01", "10", "11"] },
            { column: 9, line: 0, neighbors: ["80", "81", "91"] },
            { column: 0, line: 9, neighbors: ["08", "18", "19"] },
            { column: 9, line: 9, neighbors: ["88", "89", "98"] },

            // side positions
            { column: 0, line: 1, neighbors: ["00", "02", "10", "11", "12"] },
            { column: 1, line: 0, neighbors: ["00", "01", "11", "20", "21"] },
            { column: 9, line: 1, neighbors: ["80", "81", "82", "90", "92"] },
            { column: 1, line: 9, neighbors: ["08", "09", "18", "28", "29"] },

            // center position
            {
                column: 5,
                line: 5,
                neighbors: ["44", "45", "46", "54", "56", "64", "65", "66"],
            },
            // ---- range 2 ----
            {
                column: 9,
                line: 9,
                range: 2,
                neighbors: ["77", "78", "79", "87", "88", "89", "97", "98"],
            },
            {
                column: 0,
                line: 8,
                range: 2,
                neighbors: [
                    "06",
                    "07",
                    "09",
                    "16",
                    "17",
                    "18",
                    "19",
                    "26",
                    "27",
                    "28",
                    "29",
                ],
            },
            {
                column: 2,
                line: 2,
                range: 2,
                neighbors: [
                    "00",
                    "01",
                    "02",
                    "03",
                    "04",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "20",
                    "21",
                    "23",
                    "24",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "40",
                    "41",
                    "42",
                    "43",
                    "44",
                ],
            },
        ];

        for (let a = 0; a < positions.length; a++) {
            const position = positions[a];
            const neighbors = grid.getNeighbors(
                position.column,
                position.line,
                position.range,
            );

            expect(neighbors).toEqual(position.neighbors);
        }
    });
});
