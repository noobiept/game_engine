import { Element } from "./element";
import * as Utilities from "@drk4/utilities";

function normalizeElements(args: (Element | Element[])[]) {
    if (args.length === 1 && args[0] instanceof Array) {
        return args[0];
    }

    return args as Element[];
}

export interface CanvasArgs {
    width: number;
    height: number;
}

/**
 * When you call `Game.init()`, a canvas is already added, which you can use to add elements. If you need more than one canvas, then you can create a new canvas object and add to the game.
 *
 * Basic Usage:
 *
 *     const canvas1 = Game.getCanvas();
 *     const canvas2 = new Game.Canvas({
 *             width: 400,
 *             height: 400
 *         });
 *     Game.addCanvas( canvas2 );
 *
 *     const container = new Game.Container();
 *
 *     canvas2.addChild( container );
 *
 * Examples -- `multiple_canvas`
 */
export class Canvas {
    _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;

    protected _width: number;
    protected _height: number;

    protected _children: Element[];

    eventsEnabled: boolean;
    updateOnLoop: boolean; // if it calls the .logic() and .draw() on the game loop (if false, then you need to call it manually)

    constructor(args: CanvasArgs) {
        this._canvas = document.createElement("canvas");
        this._canvas.className = "Game-Canvas";
        const ctx = this._canvas.getContext("2d");

        if (ctx === null) {
            throw new Error("Unable to create 2D canvas context.");
        }

        this._ctx = ctx;

        this._canvas.width = this._width = args.width;
        this._canvas.height = this._height = args.height;

        this._children = [];

        this.eventsEnabled = true;
        this.updateOnLoop = true;
    }

    /**
     * Add elements to this canvas (drawn on top of the current elements).
     * An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).
     *
     *     addChild( element );
     *     addChild( element1, element2 );
     *     addChild( [ element1, element2 ] );
     *
     * Throws if an element was destroyed (with `destroy()`).
     *
     * @param args Either an `Element`, or `...Element` or an `Element[]`
     */
    addChild(children: Element | Element[]): void;
    addChild(...elements: Element[]): void;
    addChild(...args: (Element | Element[])[]) {
        const elements = normalizeElements(args);

        for (const element of elements) {
            element._checkCanBeAdded();
            element._detachFromParent();

            this._children.push(element);
            element._parent_canvas = this;
            element._attach();
        }
    }

    /**
     * Detach elements from this canvas, right away. They're no longer drawn, updated or considered in the collision
     * detection, but they aren't destroyed, so they can be added again later. Elements that aren't directly in this
     * canvas are ignored. To destroy an element, call its `destroy()` method instead.
     *
     *     removeChild( element );
     *     removeChild( element1, element2 );
     *     removeChild( [ element1, element2 ] );
     *
     * @param args Either an `Element` or `...Element` or an `Element[]`
     * @return If any of the elements was in this canvas (and was detached).
     */
    removeChild(children: Element | Element[]): boolean;
    removeChild(...elements: Element[]): boolean;
    removeChild(...args: (Element | Element[])[]) {
        const elements = normalizeElements(args);
        let removed = false;

        for (const element of elements) {
            const index = this._children.indexOf(element);

            if (index < 0) {
                continue;
            }

            this._children.splice(index, 1);
            element._parent_canvas = null;
            element._detach();
            removed = true;
        }

        return removed;
    }

    /**
     * Move an element to the front (drawn on top of the other elements).
     */
    bringToFront(element: Element) {
        const index = this._children.indexOf(element);

        if (index < 0) {
            return;
        }

        this._children.splice(index, 1);
        this._children.push(element);
    }

    /**
     * Move an element to the back (drawn behind the other elements).
     */
    sendToBack(element: Element) {
        const index = this._children.indexOf(element);

        if (index < 0) {
            return;
        }

        this._children.splice(index, 1);
        this._children.unshift(element);
    }

    /**
     * Move an element to a specific draw position (0 is the back, higher values are more to the front).
     */
    setChildIndex(element: Element, index: number) {
        const current = this._children.indexOf(element);

        if (current < 0) {
            return;
        }

        this._children.splice(current, 1);

        if (index < 0) {
            index = 0;
        } else if (index > this._children.length) {
            index = this._children.length;
        }

        this._children.splice(index, 0, element);
    }

    /**
     * Get all the child elements that are in a given x/y position.
     */
    getChildrenIn(x: number, y: number) {
        let all: Element[] = [];
        let elements: Element[];

        for (let a = this._children.length - 1; a >= 0; a--) {
            elements = this._children[a].intersect(x, y);

            if (elements.length > 0) {
                all = all.concat(elements);
            }
        }

        return all;
    }

    /**
     * Update the vertices of all the children elements. Useful for collision detection for example.
     */
    updateVertices() {
        for (let a = this._children.length - 1; a >= 0; a--) {
            this._children[a].updateVertices(0, 0, 1, 1, 0);
        }
    }

    /**
     * Call the logic of the elements added to this canvas (normally on the game loop).
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic(deltaTime: number) {
        // go through a copy, since the logic code can add/remove elements
        const children = this._children.slice();

        for (let a = children.length - 1; a >= 0; a--) {
            const element = children[a];

            // skip the ones that were detached or destroyed in the meantime
            if (
                element._has_logic === true &&
                element._parent_canvas === this &&
                !element._destroyed
            ) {
                element.logic(deltaTime);
            }
        }
    }

    /**
     * Draw all the elements added to the canvas.
     */
    draw() {
        this._ctx.clearRect(0, 0, this._width, this._height);

        const length = this._children.length;

        for (let a = 0; a < length; a++) {
            const element = this._children[a];

            if (element.visible) {
                element.draw(this._ctx);
            }
        }
    }

    /**
     * Receives a mouse event. Move it along to this canvas elements, to see if there's an element that has listeners to it.
     *
     * @param event The mouse event triggered.
     */
    mouseClickEvents(event: MouseEvent) {
        // go through a copy, since the listeners can add/remove elements
        const elements = this._children.slice();
        const rect = this._canvas.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // find the element on the x/y position
        for (let a = elements.length - 1; a >= 0; a--) {
            const element = elements[a];

            if (
                element._parent_canvas === this &&
                element.mouseClickEvents(x, y, event)
            ) {
                break;
            }
        }
    }

    /**
     * Change the canvas dimensions (width/height).
     *
     * @param width The new width.
     * @param height The new Height.
     */
    updateDimensions(width: number, height: number) {
        this._canvas.width = this._width = width;
        this._canvas.height = this._height = height;
    }

    /**
     * Get a random x/y position that is within the canvas.
     *
     * @return The random x/y position.
     */
    getRandomPosition() {
        return {
            x: Utilities.getRandomInt(0, this._width),
            y: Utilities.getRandomInt(0, this._height),
        };
    }

    /**
     * @param x The x position.
     * @param y The y position.
     * @return If this position is located inside the canvas or not.
     */
    isInCanvas(x: number, y: number) {
        if (x < 0 || x > this._width || y < 0 || y > this._height) {
            return false;
        }

        return true;
    }

    /**
     * The canvas width.
     */
    get width() {
        return this._width;
    }

    /**
     * The canvas height.
     */
    get height() {
        return this._height;
    }

    /**
     * @return The canvas html element.
     */
    getHtmlCanvasElement() {
        return this._canvas;
    }

    /**
     * @return The 2d canvas rendering context object.
     */
    getCanvasContext() {
        return this._ctx;
    }

    /**
     * @return The elements added to this canvas.
     */
    getAllChildren() {
        return this._children;
    }
}
