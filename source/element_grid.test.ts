// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ElementGrid } from "./element_grid";
import { Rectangle } from "./rectangle";
import { Tween } from "./tween";
import * as Game from "./game";
import { flushMicrotasks, stubCanvasContext } from "../tests/helpers";

function makeGrid(
    args: Partial<ConstructorParameters<typeof ElementGrid>[0]> = {},
) {
    return new ElementGrid({ squareSize: 10, columns: 5, lines: 4, ...args });
}

function makeRect() {
    return new Rectangle({ width: 10, height: 10, color: "red" });
}

beforeEach(function () {
    stubCanvasContext();
    Game.init({ container: document.body, width: 100, height: 100 });
    Game.stopGameLoop();
    Tween.removeAll();
});

afterEach(function () {
    vi.restoreAllMocks();
});

describe("ElementGrid", function () {
    test("converts between column/line and x/y positions (the cells' centers)", function () {
        const grid = makeGrid();

        // by default the first cell's center is at half a square
        expect(grid.toCanvas(0, 0)).toEqual({ x: 5, y: 5 });
        expect(grid.toCanvas(2, 3)).toEqual({ x: 25, y: 35 });
        expect(grid.toGrid(25, 35)).toEqual({ column: 2, line: 3 });
        expect(grid.toGrid(27, 33)).toEqual({ column: 2, line: 3 });

        const offset = makeGrid({ refX: 100, refY: 50 });
        expect(offset.toCanvas(1, 1)).toEqual({ x: 110, y: 60 });
        expect(offset.getDimensions()).toEqual({
            x: 100,
            y: 50,
            width: 50,
            height: 40,
        });
    });

    test("doesn't change the arguments object", function () {
        const args = {
            squareSize: 10,
            columns: 2,
            lines: 2,
            background: { color: "gray", fill: false },
        };
        const copy = structuredClone(args);

        new ElementGrid(args);

        expect(args).toEqual(copy);
    });

    test("add() places the element on the cell", function () {
        const grid = makeGrid();
        const rect = makeRect();

        expect(grid.add(rect, 2, 1)).toBe(null);
        expect([rect.x, rect.y]).toEqual([25, 15]);
        expect(rect.grid_data).toEqual({ column: 2, line: 1 });
        expect(grid.get(2, 1)).toBe(rect);
        expect(() => grid.add(makeRect(), 9, 9)).toThrow();
    });

    test("adding to a taken cell replaces the element there, and dispatches a collision", function () {
        const grid = makeGrid();
        const first = makeRect();
        const second = makeRect();
        const collisions: unknown[] = [];

        grid.events.addEventListener("collision", (data) =>
            collisions.push(data),
        );
        grid.add(first, 0, 0);

        expect(grid.add(second, 0, 0)).toBe(first);
        expect(grid.get(0, 0)).toBe(second);
        expect(first.grid_data).toEqual({ column: -1, line: -1 });
        expect(collisions).toEqual([{ element: second, collidedWith: first }]);
    });

    test("a move right away stops a move with a tween that is still running (and keeps the element's other tweens)", function () {
        const grid = makeGrid();
        const rect = makeRect();

        grid.add(rect, 0, 0);
        rect.opacity = 0;
        new Tween(rect).to({ opacity: 1 }, 1).start(); // a fade-in

        grid.move(0, 0, 3, 0, 0.5);
        Tween.update(0.25);

        grid.move(3, 0, 3, 2); // right away
        Tween.update(0.5);

        expect([rect.x, rect.y]).toEqual([35, 25]);
        expect(rect.opacity).toBe(0.75);
    });

    test("move() moves the element right away, or with a tween", function () {
        const grid = makeGrid();
        const rect = makeRect();
        grid.add(rect, 0, 0);

        grid.move(0, 0, 1, 0);
        expect([rect.x, rect.y]).toEqual([15, 5]);
        expect(rect.grid_data).toEqual({ column: 1, line: 0 });
        expect(grid.get(0, 0)).toBe(null);

        grid.move(1, 0, 3, 0, 1);
        expect(rect.grid_data).toEqual({ column: 3, line: 0 });
        expect(rect.x).toBe(15);

        Tween.update(0.5);
        expect(rect.x).toBe(25);

        Tween.update(0.5);
        expect(rect.x).toBe(35);
    });

    test("move() to a taken cell dispatches a collision, and nothing happens for an empty cell or the same position", function () {
        const grid = makeGrid();
        const mover = makeRect();
        const other = makeRect();
        const collisions: unknown[] = [];

        grid.events.addEventListener("collision", (data) =>
            collisions.push(data),
        );
        grid.add(mover, 0, 0);
        grid.add(other, 1, 0);

        expect(grid.move(2, 2, 3, 3)).toBe(null);
        expect(grid.move(0, 0, 0, 0)).toBe(null);
        expect(collisions).toHaveLength(0);

        expect(grid.move(0, 0, 1, 0)).toBe(other);
        expect(other.grid_data).toEqual({ column: -1, line: -1 });
        expect(collisions).toEqual([{ element: mover, collidedWith: other }]);
    });

    test("remove() takes the element out of the grid (it's still in the canvas)", function () {
        const grid = makeGrid();
        const rect = makeRect();
        Game.addElement(rect);
        grid.add(rect, 1, 1);

        expect(grid.remove(1, 1)).toBe(rect);
        expect(grid.get(1, 1)).toBe(null);
        expect(rect.grid_data).toEqual({ column: -1, line: -1 });
        expect(Game.getCanvas().getAllChildren()).toContain(rect);
    });

    test("the background is added to the canvas, and clear() destroys it", async function () {
        const grid = makeGrid({ background: { color: "gray", fill: false } });
        const canvas = Game.getCanvas();
        const background = canvas.getAllChildren()[0] as Rectangle;

        expect(background).toBeInstanceOf(Rectangle);
        expect(background.width).toBe(50);
        expect(background.height).toBe(40);
        // centered on the grid (from 0 to 50 horizontally, 0 to 40 vertically)
        expect([background.x, background.y]).toEqual([25, 20]);

        grid.clear();
        await flushMicrotasks();

        expect(canvas.getAllChildren()).toHaveLength(0);
    });
});
