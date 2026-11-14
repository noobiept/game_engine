import { afterEach, describe, expect, test } from "vitest";
import { Rectangle } from "../rectangle";
import { CheckAll } from "./collision_check_all";
import { SpatialPartition } from "./collision_spatial_partition";
import * as CollisionDetection from "./collision_detection";

const CATEGORY = 1;

function makeRect(name: string, x: number, y: number, size = 10) {
    const rect = new Rectangle({
        x,
        y,
        width: size,
        height: size,
        color: "red",
        category: CATEGORY,
        collidesWith: CATEGORY,
    });
    (rect as any).name = name;

    return rect;
}

/**
 * Register the elements, and calculate their vertices (like the game loop does, before checking the collisions).
 */
function register(...elements: Rectangle[]) {
    for (const element of elements) {
        CollisionDetection.addElement(element);
        element.updateVertices(0, 0, 1, 1, 0);
    }
}

/**
 * Check the collisions, and return the dispatched events as `'element->collidedWith'`.
 */
function check(
    elements: Rectangle[],
    onCollision?: (element: Rectangle, other: Rectangle) => void,
) {
    const events: string[] = [];

    for (const element of elements) {
        element.removeAllEventListeners();
        element.addEventListener("collision", function (data) {
            events.push(`${data.element.name}->${data.collidedWith.name}`);
            onCollision?.(data.element, data.collidedWith);
        });
    }

    CollisionDetection.checkCollision();

    return events.sort();
}

afterEach(function () {
    CollisionDetection.init();
});

describe("CheckAll", function () {
    test("removing an element that isn't registered doesn't remove another one", function () {
        CollisionDetection.init(new CheckAll());
        const a = makeRect("a", 0, 0);
        const b = makeRect("b", 0, 0);
        register(a, b);

        CollisionDetection.removeElement(makeRect("stranger", 0, 0));
        CollisionDetection.removeElement(a);
        CollisionDetection.removeElement(a);

        CollisionDetection.addElement(a);

        expect(check([a, b])).toEqual(["a->b", "b->a"]);
    });

    test("adding an element twice doesn't duplicate its collisions", function () {
        CollisionDetection.init(new CheckAll());
        const a = makeRect("a", 0, 0);
        const b = makeRect("b", 0, 0);
        register(a, b);
        CollisionDetection.addElement(a);

        expect(check([a, b])).toEqual(["a->b", "b->a"]);
    });

    test("a collision listener can take elements out of the collision detection", function () {
        CollisionDetection.init(new CheckAll());
        const a = makeRect("a", 0, 0);
        const b = makeRect("b", 0, 0);
        const c = makeRect("c", 0, 0);
        register(a, b, c);

        const events = check([a, b, c], function (element) {
            if (element === a) {
                CollisionDetection.removeElement(c);
            }
        });

        // 'c' was removed on the first collision, so it doesn't collide with anything after that
        expect(events).toEqual(["a->b", "b->a"]);
    });
});

describe("SpatialPartition", function () {
    function init(partitions = 10) {
        CollisionDetection.init(
            new SpatialPartition({
                canvasWidth: 100,
                canvasHeight: 100,
                partitions,
            }),
        );
    }

    test("validates the arguments", function () {
        const args = { canvasWidth: 100, canvasHeight: 100 };

        expect(() => new SpatialPartition({ ...args, partitions: 0 })).toThrow(
            RangeError,
        );
        expect(
            () => new SpatialPartition({ ...args, partitions: 2.5 }),
        ).toThrow(RangeError);
        expect(
            () => new SpatialPartition({ ...args, partitions: NaN }),
        ).toThrow(RangeError);
        expect(
            () =>
                new SpatialPartition({
                    canvasWidth: 0,
                    canvasHeight: 100,
                    partitions: 1,
                }),
        ).toThrow(RangeError);
    });

    test("finds the collisions in the same and in neighbor cells", function () {
        init();
        const a = makeRect("a", 15, 15);
        const b = makeRect("b", 22, 15); // the next cell
        const c = makeRect("c", 80, 80); // far away
        register(a, b, c);

        expect(check([a, b, c])).toEqual(["a->b", "b->a"]);
    });

    test("moving an element in a collision listener doesn't skip or repeat the other collisions", function () {
        init(5); // 20x20 cells
        const p = makeRect("p", 5, 5, 4);
        const t = makeRect("t", 6, 6, 4);
        const q = makeRect("q", 12, 12, 4);
        const s = makeRect("s", 13, 13, 4);
        register(p, t, q, s);

        const events = check([p, t, q, s], function (element) {
            if (element === p) {
                p.x = 90; // move it to another cell
            }
        });

        expect(events).toEqual(["p->t", "q->s", "s->q", "t->p"]);

        // it's in its new cell on the next check
        p.updateVertices(0, 0, 1, 1, 0);
        expect(check([p, t, q, s])).toEqual(["q->s", "s->q"]);
    });

    test("an element removed during a check isn't compared anymore (but both elements of a collision get the event)", function () {
        init(5);
        const a = makeRect("a", 5, 5);
        const b = makeRect("b", 6, 6);
        const c = makeRect("c", 7, 7);
        register(a, b, c);

        // in the order they're dispatched
        const events: string[] = [];

        for (const element of [a, b, c]) {
            element.addEventListener("collision", function (data) {
                events.push(`${data.element.name}->${data.collidedWith.name}`);

                // remove 'c' on the first collision
                CollisionDetection.removeElement(c);
            });
        }

        CollisionDetection.checkCollision();

        // the first collision is dispatched to both elements, then 'c' isn't in any other
        expect(events).toHaveLength(4);
        expect(events.slice(2).join()).not.toContain("c");
        expect(check([a, b, c])).toEqual(["a->b", "b->a"]);
    });

    test("a removed element doesn't come back to the grid when it moves", function () {
        init();
        const a = makeRect("a", 5, 5);
        const b = makeRect("b", 55, 55);
        register(a, b);

        CollisionDetection.removeElement(a);
        a.x = 55;
        a.y = 55;
        a.updateVertices(0, 0, 1, 1, 0);

        expect(check([a, b])).toEqual([]);
    });

    test("an element with a NaN position is ignored (instead of throwing)", function () {
        init();
        const a = makeRect("a", NaN, 5);
        const b = makeRect("b", 5, 5);

        expect(() => register(a, b)).not.toThrow();
        expect(() => check([a, b])).not.toThrow();

        a.x = 5;
        a.updateVertices(0, 0, 1, 1, 0);
        expect(check([a, b])).toEqual(["a->b", "b->a"]);
    });

    test("an element whose center is just outside the canvas still collides with the elements inside", function () {
        init();
        const outside = makeRect("outside", -3, 50); // from -8 to 2
        const inside = makeRect("inside", 4, 50); // from -1 to 9
        register(outside, inside);

        expect(check([outside, inside])).toEqual([
            "inside->outside",
            "outside->inside",
        ]);
    });

    test("clear() empties the grid, and it can still be used", function () {
        const partition = new SpatialPartition({
            canvasWidth: 100,
            canvasHeight: 100,
            partitions: 10,
        });
        CollisionDetection.init(partition);
        const a = makeRect("a", 5, 5);
        const b = makeRect("b", 6, 6);
        register(a, b);

        partition.clear();
        expect(check([a, b])).toEqual([]);

        register(a, b);
        expect(check([a, b])).toEqual(["a->b", "b->a"]);
    });
});
