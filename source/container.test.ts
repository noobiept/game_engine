import { beforeEach, describe, expect, test } from "vitest";
import { Container } from "./container";
import { Rectangle } from "./rectangle";
import * as CollisionDetection from "./collision-detection/collision_detection";

function makeRect() {
    return new Rectangle({ width: 1, height: 1, color: "red" });
}

describe("Container z-order", function () {
    beforeEach(function () {
        // the Element constructor registers with the collision detection module
        CollisionDetection.init();
    });

    test("children keep the order they were added in", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        const c = makeRect();

        container.addChild(a, b, c);

        // assert by reference (the rectangles are structurally identical, so toEqual can't tell them apart)
        const children = container.getAllChildren();
        expect(children).toHaveLength(3);
        expect(children[0]).toBe(a);
        expect(children[1]).toBe(b);
        expect(children[2]).toBe(c);
    });

    test("bringToFront moves a child to the end (front)", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        const c = makeRect();
        container.addChild(a, b, c);

        container.bringToFront(a);

        const children = container.getAllChildren();
        expect(children[0]).toBe(b);
        expect(children[1]).toBe(c);
        expect(children[2]).toBe(a);
    });

    test("sendToBack moves a child to the start (back)", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        const c = makeRect();
        container.addChild(a, b, c);

        container.sendToBack(c);

        const children = container.getAllChildren();
        expect(children[0]).toBe(c);
        expect(children[1]).toBe(a);
        expect(children[2]).toBe(b);
    });

    test("setChildIndex moves a child to a specific position", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        const c = makeRect();
        container.addChild(a, b, c);

        container.setChildIndex(a, 1);

        const children = container.getAllChildren();
        expect(children[0]).toBe(b);
        expect(children[1]).toBe(a);
        expect(children[2]).toBe(c);
    });

    test("setChildIndex clamps an out-of-range index", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        const c = makeRect();
        container.addChild(a, b, c);

        container.setChildIndex(a, 99);

        const children = container.getAllChildren();
        expect(children[0]).toBe(b);
        expect(children[1]).toBe(c);
        expect(children[2]).toBe(a);
    });

    test("reordering an element that isn't a child is a no-op", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        const orphan = makeRect();
        container.addChild(a, b);

        container.bringToFront(orphan);
        container.sendToBack(orphan);
        container.setChildIndex(orphan, 0);

        const children = container.getAllChildren();
        expect(children).toHaveLength(2);
        expect(children[0]).toBe(a);
        expect(children[1]).toBe(b);
    });
});
