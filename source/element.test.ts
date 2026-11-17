import { describe, expect, test } from "vitest";
import { Circle } from "./circle";
import { Container } from "./container";
import { Rectangle } from "./rectangle";

describe("Element top-left bounds", function () {
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

    test("left/top/right/bottom can be set, which moves the element", function () {
        const rect = new Rectangle({
            x: 100,
            y: 50,
            width: 20,
            height: 10,
            color: "red",
        });

        rect.left = 0;
        rect.top = 0;
        expect([rect.x, rect.y]).toEqual([10, 5]);

        expect(rect.right).toBe(20);
        expect(rect.bottom).toBe(10);

        rect.right = 200;
        rect.bottom = 100;
        expect([rect.x, rect.y]).toEqual([190, 95]);
        expect([rect.left, rect.top]).toEqual([180, 90]);
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

describe("Element geometry and events", function () {
    function rect(x: number, y: number, width = 20, height = 10) {
        return new Rectangle({ x, y, width, height, color: "red" });
    }

    test("rotation in radians or degrees", function () {
        const element = rect(0, 0);

        element.rotateDegrees(90);
        expect(element.rotation).toBeCloseTo(Math.PI / 2);

        element.rotate(Math.PI);
        expect(element.rotation).toBe(Math.PI);
    });

    test("the vertices follow the position, rotation and scale", function () {
        const element = rect(50, 50);

        element.updateVertices(0, 0, 1, 1, 0);
        expect(element.toAxisAligned()).toEqual({
            minX: 40,
            maxX: 60,
            minY: 45,
            maxY: 55,
        });

        element.rotateDegrees(90);
        element.scaleX = 2;
        element.updateVertices(0, 0, 1, 1, 0);
        const box = element.toAxisAligned();

        // 40 wide (scaled) and 10 tall, turned on its side
        expect(box?.minX).toBeCloseTo(45);
        expect(box?.maxX).toBeCloseTo(55);
        expect(box?.minY).toBeCloseTo(30);
        expect(box?.maxY).toBeCloseTo(70);
    });

    test("a child's vertices follow the container's position, scale and rotation", function () {
        const child = rect(10, 0, 4, 4);
        const container = new Container({ x: 100, y: 100, children: child });

        container.scaleX = container.scaleY = 2;
        container.rotateDegrees(90);
        container.updateVertices(0, 0, 1, 1, 0);

        // 10 to the right of the container, scaled to 20 and rotated to below it
        const box = child.toAxisAligned();
        expect(box?.minX).toBeCloseTo(96);
        expect(box?.maxX).toBeCloseTo(104);
        expect(box?.minY).toBeCloseTo(116);
        expect(box?.maxY).toBeCloseTo(124);

        expect(container.getVertices()).toEqual([child.vertices]);
    });

    test("intersect() checks a position against the element's shape", function () {
        const element = rect(50, 50);

        // before its vertices are calculated (the frame it was added) it doesn't intersect anything
        expect(element.intersect(50, 50)).toEqual([]);

        element.updateVertices(0, 0, 1, 1, 0);

        expect(element.intersect(50, 50)).toEqual([element]);
        expect(element.intersect(59, 54)).toEqual([element]);
        expect(element.intersect(61, 50)).toEqual([]);
    });

    test("the mouse events reach the containers the element is in", function () {
        const child = rect(0, 0);
        const inner = new Container({ children: child });
        const outer = new Container({ children: inner });
        const events: string[] = [];

        for (const [name, element] of [
            ["child", child],
            ["inner", inner],
            ["outer", outer],
        ] as const) {
            element.addEventListener("mouseover", () =>
                events.push(`${name}:over`),
            );
            element.addEventListener("mouseout", () =>
                events.push(`${name}:out`),
            );
        }

        child.dispatchMouseOverEvent();
        child.dispatchMouseOutEvent();

        expect(events).toEqual([
            "outer:over",
            "inner:over",
            "child:over",
            "outer:out",
            "inner:out",
            "child:out",
        ]);
    });
});

function square(x: number, y: number, size = 10) {
    return new Rectangle({ x, y, width: size, height: size, color: "red" });
}

describe("Element.overlaps()", function () {
    test("uses the current positions (not the ones from the start of the update)", function () {
        const player = square(0, 0);
        const car = square(100, 0);

        expect(player.overlaps(car)).toBe(false);

        car.x = 5;
        expect(player.overlaps(car)).toBe(true);
        expect(car.overlaps(player)).toBe(true);

        car.x = 100;
        expect(player.overlaps(car)).toBe(false);
    });

    test("considers the position, scale and rotation of the containers", function () {
        const child = square(10, 0); // 30x30 once scaled, from 115 to 145 (x) and -15 to 15 (y)
        const container = new Container({ x: 100, children: child });

        container.scaleX = 3;
        container.scaleY = 3;

        expect(square(130, 0).overlaps(child)).toBe(true); // the center of the child
        expect(square(130, 30).overlaps(child)).toBe(false); // below it
        expect(square(100, 0).overlaps(child)).toBe(false); // left of it
        expect(child.overlaps(square(150, 0))).toBe(true); // touches its right part

        // a rotated container turns its children around its position
        const arm = square(50, 0);
        const holder = new Container({ x: 100, y: 100, children: arm });

        expect(square(150, 100).overlaps(arm)).toBe(true);

        holder.rotation = Math.PI / 2; // the arm now points down
        expect(square(150, 100).overlaps(arm)).toBe(false);
        expect(square(100, 150).overlaps(arm)).toBe(true);
    });

    test("a circle overlaps as a circle", function () {
        const circle = new Circle({ x: 0, y: 0, radius: 10, color: "red" });

        expect(circle.overlaps(square(9, 9, 2))).toBe(false); // in the corner of its bounding square
        expect(circle.overlaps(square(6, 6, 2))).toBe(true);
    });

    test("a container overlaps through its children", function () {
        const container = new Container({
            children: [square(-50, 0), square(50, 0)],
        });

        expect(container.overlaps(square(0, 0))).toBe(false); // between the children
        expect(container.overlaps(square(50, 0))).toBe(true);
    });

    test("ignores category/collidesWith, and a destroyed element doesn't overlap anything", function () {
        const one = square(0, 0);
        const two = square(5, 0);

        one.category = 1;
        one.collidesWith = 0; // wouldn't collide with anything
        expect(one.overlaps(two)).toBe(true);

        two.destroy();
        expect(one.overlaps(two)).toBe(false);
        expect(two.overlaps(one)).toBe(false);
    });
});
