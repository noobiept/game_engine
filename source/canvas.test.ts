// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Canvas } from "./canvas";
import { Container } from "./container";
import { Rectangle } from "./rectangle";
import * as CollisionDetection from "./collision-detection/collision_detection";
import { stubCanvasContext } from "../tests/helpers";

function makeRect(x: number, y: number, size = 20) {
    return new Rectangle({ x, y, width: size, height: size, color: "red" });
}

/**
 * A click at a position of the canvas (in jsdom the canvas is at the top left of the page).
 */
function click(canvas: Canvas, x: number, y: number) {
    canvas.mouseClickEvents(
        new MouseEvent("click", { clientX: x, clientY: y }),
    );
}

let canvas: Canvas;

beforeEach(function () {
    stubCanvasContext();
    CollisionDetection.init();
    canvas = new Canvas({ width: 200, height: 100 });
});

afterEach(function () {
    vi.restoreAllMocks();
});

describe("Canvas", function () {
    test("draws the visible elements, from the back to the front", function () {
        const order: string[] = [];
        const back = makeRect(10, 10);
        const hidden = makeRect(10, 10);
        const front = makeRect(10, 10);

        vi.spyOn(back, "draw").mockImplementation(() => order.push("back"));
        vi.spyOn(hidden, "draw").mockImplementation(() => order.push("hidden"));
        vi.spyOn(front, "draw").mockImplementation(() => order.push("front"));
        hidden.visible = false;

        canvas.addChild(back, hidden, front);
        canvas.draw();

        expect(order).toEqual(["back", "front"]);
    });

    test("only calls the logic of the elements that have it", function () {
        const withLogic = makeRect(10, 10);
        const withoutLogic = makeRect(10, 10);
        const logic = vi.spyOn(withLogic, "logic");
        const noLogic = vi.spyOn(withoutLogic, "logic");

        withLogic._has_logic = true;
        canvas.addChild(withLogic, withoutLogic);
        canvas.logic(0.1);

        expect(logic).toHaveBeenCalledWith(0.1);
        expect(noLogic).not.toHaveBeenCalled();
    });

    test("getChildrenIn() finds the elements at a position (front first)", function () {
        const back = makeRect(50, 50, 40);
        const front = makeRect(60, 50, 40);
        const away = makeRect(150, 50, 20);

        canvas.addChild(back, front, away);
        canvas.updateVertices();

        expect(canvas.getChildrenIn(55, 50)).toEqual([front, back]);
        expect(canvas.getChildrenIn(150, 50)).toEqual([away]);
        expect(canvas.getChildrenIn(100, 90)).toEqual([]);
    });

    test("a click goes to the front element under the mouse that listens to it", function () {
        const back = makeRect(50, 50, 40);
        const front = makeRect(55, 50, 40);
        const clicked: string[] = [];

        back.addEventListener("click", () => clicked.push("back"));
        front.addEventListener("click", () => clicked.push("front"));
        canvas.addChild(back, front);
        canvas.updateVertices();

        click(canvas, 55, 50);
        expect(clicked).toEqual(["front"]);

        // only the back element is under this position
        click(canvas, 32, 50);
        expect(clicked).toEqual(["front", "back"]);

        click(canvas, 150, 50);
        expect(clicked).toEqual(["front", "back"]);
    });

    test("a click on a child reaches the container's listener as well (once)", function () {
        const first = makeRect(0, 0, 40);
        const second = makeRect(5, 0, 40);
        const container = new Container({ x: 50, y: 50 });
        const clicked: string[] = [];

        container.addChild(first, second);
        first.addEventListener("click", () => clicked.push("first"));
        second.addEventListener("click", () => clicked.push("second"));
        container.addEventListener("click", () => clicked.push("container"));
        canvas.addChild(container);
        canvas.updateVertices();

        click(canvas, 55, 50);

        expect(clicked).toEqual(["container", "second"]);
    });

    test("a container's listener gets the clicks on its children, even when they don't listen", function () {
        const container = new Container({
            x: 50,
            y: 50,
            children: makeRect(0, 0, 40),
        });
        let clicks = 0;

        container.addEventListener("click", () => clicks++);
        canvas.addChild(container);
        canvas.updateVertices();

        click(canvas, 50, 50);
        click(canvas, 150, 50);

        expect(clicks).toBe(1);
    });

    test("z-order: bringToFront(), sendToBack() and setChildIndex()", function () {
        const a = makeRect(0, 0);
        const b = makeRect(0, 0);
        const c = makeRect(0, 0);
        canvas.addChild(a, b, c);

        canvas.bringToFront(a);
        expect(canvas.getAllChildren()).toEqual([b, c, a]);

        canvas.sendToBack(c);
        expect(canvas.getAllChildren()).toEqual([c, b, a]);

        canvas.setChildIndex(a, 1);
        expect(canvas.getAllChildren()).toEqual([c, a, b]);

        canvas.setChildIndex(c, -5);
        expect(canvas.getAllChildren()).toEqual([c, a, b]);

        // elements that aren't in the canvas are ignored
        canvas.bringToFront(makeRect(0, 0));
        expect(canvas.getAllChildren()).toEqual([c, a, b]);
    });

    test("dimensions and positions", function () {
        expect([canvas.width, canvas.height]).toEqual([200, 100]);
        expect(canvas.getHtmlCanvasElement().width).toBe(200);

        expect(canvas.isInCanvas(0, 0)).toBe(true);
        expect(canvas.isInCanvas(200, 100)).toBe(true);
        expect(canvas.isInCanvas(201, 50)).toBe(false);
        expect(canvas.isInCanvas(50, -1)).toBe(false);

        for (let a = 0; a < 20; a++) {
            const position = canvas.getRandomPosition();
            expect(canvas.isInCanvas(position.x, position.y)).toBe(true);
        }

        canvas.updateDimensions(50, 60);
        expect([canvas.width, canvas.height]).toEqual([50, 60]);
        expect(canvas.getHtmlCanvasElement().height).toBe(60);
    });
});
