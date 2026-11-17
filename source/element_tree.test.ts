// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Canvas } from "./canvas";
import { Container } from "./container";
import { Element } from "./element";
import { Rectangle } from "./rectangle";
import { Tween } from "./tween";
import { CheckAll } from "./collision-detection/collision_check_all";
import * as CollisionDetection from "./collision-detection/collision_detection";
import * as Game from "./game";
import { flushMicrotasks, stubCanvasContext } from "../tests/helpers";

const PLAYER = 1;
const WALL = 2;

function makeRect(category = 0, collidesWith = 0) {
    return new Rectangle({
        x: 50,
        y: 50,
        width: 10,
        height: 10,
        color: "red",
        category,
        collidesWith,
    });
}

/**
 * A player and a wall at the same position, that collide with each other.
 */
function makePlayerAndWall() {
    return {
        player: makeRect(PLAYER, WALL),
        wall: makeRect(WALL, PLAYER),
    };
}

/**
 * Do what the game loop does: update the vertices, then check the collisions.
 * Returns the number of collision events dispatched.
 */
function countCollisions(canvas: Canvas, ...elements: Element[]) {
    let count = 0;
    const listener = () => count++;

    for (const element of elements) {
        element.addEventListener("collision", listener);
    }

    canvas.updateVertices();
    CollisionDetection.checkCollision();

    for (const element of elements) {
        element.removeEventListener("collision", listener);
    }

    return count;
}

let canvas: Canvas;
let collision: CheckAll;

beforeEach(function () {
    stubCanvasContext();
    collision = new CheckAll();
    CollisionDetection.init(collision);
    canvas = new Canvas({ width: 100, height: 100 });
    Tween.removeAll();
});

afterEach(function () {
    vi.restoreAllMocks();
});

describe("Detaching elements (removeChild)", function () {
    test("Canvas.removeChild() takes the element out of the collision detection, and it can be added again", function () {
        const { player, wall } = makePlayerAndWall();
        canvas.addChild(player, wall);

        expect(countCollisions(canvas, player, wall)).toBe(2);

        expect(canvas.removeChild(wall)).toBe(true);
        expect(wall.isDestroyed()).toBe(false);
        expect(canvas.getAllChildren()).not.toContain(wall);
        expect(countCollisions(canvas, player, wall)).toBe(0);

        canvas.addChild(wall);
        expect(countCollisions(canvas, player, wall)).toBe(2);
    });

    test("Container.removeChild() takes the element out of the collision detection", function () {
        const { player, wall } = makePlayerAndWall();
        const container = new Container({ children: wall });
        canvas.addChild(player, container);

        expect(countCollisions(canvas, player, wall)).toBe(2);

        expect(container.removeChild(wall)).toBe(true);
        expect(countCollisions(canvas, player, wall)).toBe(0);
    });

    test("Game.removeElement() detaches an element from a container as well", function () {
        const { player, wall } = makePlayerAndWall();
        const container = new Container({ children: wall });
        canvas.addChild(player, container);

        expect(Game.removeElement(wall)).toBe(true);
        expect(container.getAllChildren()).toHaveLength(0);
        expect(countCollisions(canvas, player, wall)).toBe(0);
        expect(Game.removeElement(wall)).toBe(false);
    });

    test("removeAllChildren() detaches the children (they're not destroyed)", function () {
        const { player, wall } = makePlayerAndWall();
        const container = new Container({ children: [wall, makeRect()] });
        canvas.addChild(player, container);

        container.removeAllChildren();

        expect(container.getAllChildren()).toHaveLength(0);
        expect(wall.isDestroyed()).toBe(false);
        expect(countCollisions(canvas, player, wall)).toBe(0);

        container.addChild(wall);
        expect(countCollisions(canvas, player, wall)).toBe(2);
    });

    test("removeChild()/addChild()/Game.removeElement() work with the getAllChildren() array that they change", function () {
        const children = [makeRect(), makeRect(), makeRect(), makeRect()];
        const container = new Container({ children });
        const other = new Container();
        canvas.addChild(container, other);

        other.addChild(container.getAllChildren());

        expect(container.getAllChildren()).toHaveLength(0);
        expect(other.getAllChildren()).toEqual(children);

        expect(other.removeChild(other.getAllChildren())).toBe(true);
        expect(other.getAllChildren()).toHaveLength(0);
        expect(collision._elements).toEqual([container, other]);

        canvas.addChild(children);
        expect(Game.removeElement(canvas.getAllChildren())).toBe(true);
        expect(canvas.getAllChildren()).toHaveLength(0);

        canvas.addChild(children);
        expect(canvas.removeChild(canvas.getAllChildren())).toBe(true);
        expect(canvas.getAllChildren()).toHaveLength(0);
    });

    test("detaching a container detaches its children from the collision detection", function () {
        const { player, wall } = makePlayerAndWall();
        const container = new Container({ children: wall });
        canvas.addChild(player, container);

        canvas.removeChild(container);

        expect(collision._elements).toEqual([player]);
        expect(countCollisions(canvas, player, wall)).toBe(0);
    });

    test("an element only takes part in the collision detection while it's in a canvas", function () {
        const rect = makeRect(PLAYER, PLAYER);
        const container = new Container();

        expect(collision._elements).toHaveLength(0);

        container.addChild(rect);
        expect(collision._elements).toHaveLength(0);

        canvas.addChild(container);
        expect(collision._elements).toEqual([container, rect]);
    });

    test("removeChild() of an element that isn't a child doesn't change its parent", function () {
        const owner = new Container();
        const other = new Container();
        const kid = makeRect();
        owner.addChild(kid);
        canvas.addChild(owner, other);

        expect(other.removeChild(kid)).toBe(false);
        expect(kid._container).toBe(owner);
        expect(owner.getAllChildren()).toEqual([kid]);
    });
});

describe("Adding elements", function () {
    test("adding an element to another container/canvas moves it there", function () {
        const first = new Container();
        const second = new Container();
        const child = makeRect();
        canvas.addChild(first, second);

        first.addChild(child);
        second.addChild(child);

        expect(first.getAllChildren()).toHaveLength(0);
        expect(second.getAllChildren()).toEqual([child]);
        expect(child._container).toBe(second);

        canvas.addChild(child);

        expect(second.getAllChildren()).toHaveLength(0);
        expect(child._container).toBe(null);
        expect(canvas.getAllChildren()).toContain(child);
    });

    test("adding a current child again moves it to the front (without duplicating it)", function () {
        const container = new Container();
        const a = makeRect();
        const b = makeRect();
        container.addChild(a, b);

        container.addChild(a);

        expect(container.getAllChildren()).toEqual([b, a]);
    });

    test("a container can't be added to itself, or to one of its children", function () {
        const parent = new Container();
        const child = new Container();
        parent.addChild(child);

        expect(() => parent.addChild(parent)).toThrow();
        expect(() => child.addChild(parent)).toThrow();
    });

    test("a destroyed element can't be added again", async function () {
        const rect = makeRect();
        canvas.addChild(rect);

        rect.destroy();

        expect(() => canvas.addChild(rect)).toThrow(/removeChild/);
        expect(() => new Container().addChild(rect)).toThrow();

        await flushMicrotasks();
    });
});

describe("Destroying elements (destroy)", function () {
    test("destroy() stops the collisions right away, and takes the element out once the current code finishes", async function () {
        const { player, wall } = makePlayerAndWall();
        canvas.addChild(player, wall);
        new Tween(wall).to({ x: 100 }, 1).start();

        wall.destroy();

        expect(wall.isDestroyed()).toBe(true);
        expect(countCollisions(canvas, player, wall)).toBe(0);

        // the game loop isn't running, so it's taken out once the current code finishes
        await flushMicrotasks();

        expect(canvas.getAllChildren()).toEqual([player]);
        expect(collision._elements).toEqual([player]);
        expect(Tween.getTween(wall)).toBe(null);
    });

    test("destroy() stops the tweens right away (a .call() step doesn't run in that frame)", function () {
        const container = new Container({ children: makeRect() });
        const child = container.getAllChildren()[0];
        let calls = 0;

        canvas.addChild(container);
        new Tween(child)
            .to({ x: 100 }, 0.1)
            .call(() => calls++)
            .start();

        // destroying the container destroys the child as well
        container.destroy();
        Tween.update(0.2);

        expect(calls).toBe(0);
        expect(Tween.getTween(child)).toBe(null);
    });

    test("destroying a container destroys its children", async function () {
        const child = makeRect();
        const nested = new Container({ children: makeRect() });
        const container = new Container({ children: [child, nested] });
        canvas.addChild(container);

        container.destroy();

        expect(child.isDestroyed()).toBe(true);
        expect(nested.isDestroyed()).toBe(true);
        expect(nested.getAllChildren()[0].isDestroyed()).toBe(true);

        await flushMicrotasks();

        expect(canvas.getAllChildren()).toHaveLength(0);
        expect(collision._elements).toHaveLength(0);
    });

    test("destroyAllChildren() destroys the children, but keeps the container", async function () {
        const { player, wall } = makePlayerAndWall();
        const nested = new Container({ children: makeRect() });
        const container = new Container({ children: [wall, nested] });
        canvas.addChild(player, container);
        new Tween(wall).to({ x: 100 }, 1).start();

        container.destroyAllChildren();

        expect(container.isDestroyed()).toBe(false);
        expect(wall.isDestroyed()).toBe(true);
        expect(nested.isDestroyed()).toBe(true);
        expect(nested.getAllChildren()[0].isDestroyed()).toBe(true);
        expect(countCollisions(canvas, player, wall)).toBe(0);

        // like destroy(), they're taken out at the end of the frame (once the current code finishes, without the loop)
        expect(container.getAllChildren()).toHaveLength(2);

        await flushMicrotasks();

        expect(container.getAllChildren()).toHaveLength(0);
        expect(canvas.getAllChildren()).toEqual([player, container]);
        expect(collision._elements).toEqual([player, container]);
        expect(Tween.getTween(wall)).toBe(null);

        // the container can still be used
        const other = makeRect(WALL, PLAYER);
        container.addChild(other);
        expect(countCollisions(canvas, player, other)).toBe(2);
    });

    test("a child can destroy its container during the logic", function () {
        const container = new Container();
        const updated: string[] = [];

        class Child extends Rectangle {
            constructor(public name: string) {
                super({ width: 1, height: 1, color: "red" });
                this._has_logic = true;
            }

            logic() {
                updated.push(this.name);

                if (this.name === "killer") {
                    container.destroy();
                }
            }
        }

        container.addChild(new Child("first"), new Child("killer"));
        canvas.addChild(container);

        expect(() => canvas.logic(0.1)).not.toThrow();

        // the children are updated last to first, and once the container is destroyed its children aren't updated anymore
        expect(updated).toEqual(["killer"]);
    });

    test("an element detached during the logic of another isn't updated in that frame", function () {
        const updated: string[] = [];

        class Unit extends Rectangle {
            constructor(
                public name: string,
                public onLogic?: () => void,
            ) {
                super({ width: 1, height: 1, color: "red" });
                this._has_logic = true;
            }

            logic() {
                updated.push(this.name);
                this.onLogic?.();
            }
        }

        const first = new Unit("first");
        const second = new Unit("second");
        const third = new Unit("third", () => canvas.removeChild(first));
        canvas.addChild(first, second, third);

        canvas.logic(0.1);

        expect(updated).toEqual(["third", "second"]);
    });
});

describe("Container", function () {
    test("calculateDimensions() covers all the children (x/y is their center)", function () {
        const container = new Container({
            children: [
                new Rectangle({
                    x: 100,
                    width: 10,
                    height: 10,
                    color: "red",
                }),
                new Rectangle({ x: 0, width: 500, height: 20, color: "red" }),
            ],
        });

        // from -250 to 250 horizontally, and -10 to 10 vertically
        expect(container.width).toBe(500);
        expect(container.height).toBe(20);

        container.removeChild(container.getAllChildren()[1]);

        expect(container.width).toBe(10);
        expect(container.height).toBe(10);
    });

    test("clone() keeps the collision settings (of the container and the children)", function () {
        const container = new Container({
            category: PLAYER,
            collidesWith: WALL,
            children: makeRect(WALL, PLAYER),
        });

        const clone = container.clone();
        const child = clone.getAllChildren()[0];

        expect(clone.category).toBe(PLAYER);
        expect(clone.collidesWith).toBe(WALL);
        expect(child.category).toBe(WALL);
        expect(child.collidesWith).toBe(PLAYER);
    });
});
