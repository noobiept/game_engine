import { Vertices } from "./collision-detection/collision_detection";
import type { Canvas } from "./canvas";
import type { Container } from "./container";
import { EventDispatcher } from "./event_dispatcher";
import { EventDispatcherArgs } from "./event_dispatcher";
import * as CollisionDetection from "./collision-detection/collision_detection";
import * as Vector from "./vector";
import * as Game from "./game";
import { Tween } from "./tween";

export interface ElementArgs extends EventDispatcherArgs {
    x?: number;
    y?: number;

    // these are used for collision detection
    // bit identifier, for example: 001, 010, 100, etc (in decimal is 1, 2, 4, 8, 16, etc)
    category?: number;

    // bit flag field, with the category bits above
    // use the bitwise OR operator to set several bits, for example: 2 | 4, sets 0110
    collidesWith?: number;
}

/**
 * Base class for a canvas element. Don't create an object directly — use one of the
 * subclasses (`Rectangle`, `Circle`, `Bitmap`, `Sprite`, `Text`, `Container`, ...).
 *
 * All elements share the same basic API: `x`/`y` is the element's **center**, and you can
 * move, scale, rotate, hide, destroy it, and listen to its events.
 *
 * Basic Usage:
 *
 *     const element = new Game.Rectangle({
 *             x: 50,
 *             y: 50,
 *             width: 20,
 *             height: 20,
 *             color: 'red'
 *         });
 *     Game.addElement( element );
 *
 *     element.x += 10; // move
 *     element.rotateDegrees( 45 ); // rotate
 *     element.scaleX = 2; // scale
 *     element.visible = false; // hide
 *     element.addEventListener( 'click', function() {
 *         element.destroy();
 *     });
 *
 * Taking an element out of the game:
 *
 * - `element.destroy()` **destroys** the element: at the end of the current frame it's taken out of its
 *   container/canvas and out of the collision detection, and its tweens are stopped. Don't add it again
 *   afterwards (it throws). Destroying a container destroys its children as well.
 * - `container.removeChild( element )`, `canvas.removeChild( element )` or `Game.removeElement( element )`
 *   **detach** the element right away: it's no longer drawn, updated or considered in the collision
 *   detection, but it stays usable, so you can add it again later (to the same or another container/canvas).
 *
 * An element only takes part in the collision detection while it's added to a canvas (directly, or through
 * containers).
 *
 * Events:
 *
 * - `click`     -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup`   -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout`  -- `listener( data: { element: Element; } );`
 * - `collision` -- `listener( data: element: Element; collidedWith: Element; bullet?: Bullet; );`
 */
export abstract class Element extends EventDispatcher {
    vertices: Vertices | null;

    opacity: number; // value between 0 and 1
    visible: boolean; // whether the element is drawn or not

    scaleX: number;
    scaleY: number;

    category: number;
    collidesWith: number;

    grid_data: any; // can be used by a grid class that needs to save extra information in the element
    collision_data: any; // can be used by a collision detection algorithm

    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;
    protected _half_width: number;
    protected _half_height: number;

    protected _rotation: number; // in radians (clockwise)
    _container: Container | null; // the container this element was added to
    _parent_canvas: Canvas | null; // the canvas this element was added to (directly, not through a container)
    _attached: boolean; // if it's in a canvas (directly or through containers), which is when it takes part in the collision detection
    _has_logic: boolean; // to know if we need to run the .logic() method or not
    _destroyed: boolean; // a reference to this element may be saved in several places, so we need a way to know if its ok to work on the element or not

    // the state at the start of the last step, with a fixed update rate (see `Game.setFixedTimestep()`), to draw between the steps
    protected _has_previous: boolean;
    protected _previous_x: number;
    protected _previous_y: number;
    protected _previous_rotation: number;
    protected _previous_scale_x: number;
    protected _previous_scale_y: number;
    protected _previous_opacity: number;

    constructor(args?: ElementArgs) {
        super(args);

        let x = 0;
        let y = 0;
        let category = 0;
        let collidesWith = 0;

        if (typeof args !== "undefined") {
            if (typeof args.x !== "undefined") {
                x = args.x;
            }

            if (typeof args.y !== "undefined") {
                y = args.y;
            }

            if (typeof args.category !== "undefined") {
                category = args.category;
            }

            if (typeof args.collidesWith !== "undefined") {
                collidesWith = args.collidesWith;
            }
        }

        this._x = x;
        this._y = y;
        this._width = this._half_width = 0;
        this._height = this._half_height = 0;

        this.visible = true;
        this.opacity = 1;

        this.scaleX = 1;
        this.scaleY = 1;

        this.vertices = null;
        this._rotation = 0;
        this._container = null;
        this._parent_canvas = null;
        this._attached = false;
        this._has_logic = false;
        this._destroyed = false;

        this._has_previous = false;
        this._previous_x = x;
        this._previous_y = y;
        this._previous_rotation = 0;
        this._previous_scale_x = 1;
        this._previous_scale_y = 1;
        this._previous_opacity = 1;

        this.category = category;
        this.collidesWith = collidesWith;
    }

    /**
     * Draws just this element.
     *
     * @param ctx Canvas context.
     */
    abstract drawElement(ctx: CanvasRenderingContext2D): void;

    /**
     * Draws this element, and all of its _children.
     *
     * @param ctx Canvas context.
     */
    draw(ctx: CanvasRenderingContext2D) {
        this.drawElement(ctx);
    }

    /**
     * Apply this element's opacity, position, scale and rotation to the canvas context (used when drawing it).
     * With a fixed update rate (see `Game.setFixedTimestep()`), they're between the ones of the last two steps, so the
     * element moves smoothly on displays that refresh faster than the steps.
     *
     * @param ctx Canvas context.
     */
    protected _applyTransform(ctx: CanvasRenderingContext2D) {
        const alpha = Game._getRenderAlpha();

        if (alpha >= 1 || !this._has_previous) {
            ctx.globalAlpha *= this.opacity;
            ctx.translate(this._x, this._y);
            ctx.scale(this.scaleX, this.scaleY);
            ctx.rotate(this._rotation);
            return;
        }

        // the rotation goes the short way around (from `3.1` to `-3.1` is a small turn, not almost a whole one)
        const turn = this._rotation - this._previous_rotation;
        const shortestTurn =
            turn - 2 * Math.PI * Math.round(turn / (2 * Math.PI));

        ctx.globalAlpha *= lerp(this._previous_opacity, this.opacity, alpha);
        ctx.translate(
            lerp(this._previous_x, this._x, alpha),
            lerp(this._previous_y, this._y, alpha),
        );
        ctx.scale(
            lerp(this._previous_scale_x, this.scaleX, alpha),
            lerp(this._previous_scale_y, this.scaleY, alpha),
        );
        ctx.rotate(this._previous_rotation + shortestTurn * alpha);
    }

    /**
     * Save the current state, at the start of a step (with a fixed update rate, see `Game.setFixedTimestep()`).
     */
    _savePrevious() {
        this._has_previous = true;
        this._previous_x = this._x;
        this._previous_y = this._y;
        this._previous_rotation = this._rotation;
        this._previous_scale_x = this.scaleX;
        this._previous_scale_y = this.scaleY;
        this._previous_opacity = this.opacity;
    }

    /**
     * With a fixed update rate (see `Game.setFixedTimestep()`), the elements are drawn between where they were in
     * the last two steps, so they move smoothly. After moving an element to a new place at once (a respawn, or
     * starting a level), call this to draw it right there, instead of moving there smoothly during the next step.
     * Elements are reset when they're added to a container/canvas.
     */
    resetInterpolation() {
        this._has_previous = false;
    }

    /**
     * Logic code here (runs every update/tick).
     * Set the `_has_logic` property to `true` for this to get called.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic(_deltaTime: number) {
        // optional
    }

    /**
     * Check if the element is within the given x/y position.
     */
    intersect(refX: number, refY: number): Element[] {
        const elements: Element[] = [];
        const vertices = this.vertices;

        // check if the vertices were calculated yet (if the element was added this tick/frame, it won't be)
        if (vertices) {
            if (
                CollisionDetection.polygonPoint(vertices, {
                    x: refX,
                    y: refY,
                })
            ) {
                elements.push(this);
            }
        }

        return elements;
    }

    /**
     * Check collision between two elements.
     */
    checkCollision(other: Element) {
        const vertices = this.getVertices();
        const otherVertices = other.getVertices();

        if (!vertices || !otherVertices) {
            return false;
        }

        return CollisionDetection.polygonPolygonList(vertices, otherVertices);
    }

    mouseClickEvents(x: number, y: number, event: MouseEvent) {
        if (this.hasListeners(event.type)) {
            const elements = this.intersect(x, y);

            if (elements.length > 0) {
                elements[0].dispatchMouseClickEvent(event);

                return true;
            }
        }

        return false;
    }

    dispatchMouseOverEvent() {
        if (this._container) {
            this._container.dispatchMouseOverEvent();
        }

        this.dispatchEvent("mouseover", { element: this });
    }

    dispatchMouseOutEvent() {
        if (this._container) {
            this._container.dispatchMouseOutEvent();
        }

        this.dispatchEvent("mouseout", { element: this });
    }

    dispatchMouseMoveEvent() {
        if (this._container) {
            this._container.dispatchMouseMoveEvent();
        }

        this.dispatchEvent("mousemove", { element: this });
    }

    /**
     * @param event Either a mouse up, mouse down or click event.
     */
    dispatchMouseClickEvent(event: MouseEvent) {
        if (this._container) {
            this._container.dispatchMouseClickEvent(event);
        }

        this.dispatchEvent(event.type, { event: event });
    }

    /**
     * Set the width and height at the same time.
     */
    setDimensions(width: number, height: number) {
        this._width = width;
        this._half_width = width / 2;
        this._height = height;
        this._half_height = height / 2;
    }

    /**
     * Calculates an axis-aligned rectangle from the rotated shape.
     */
    toAxisAligned() {
        const vertices = this.vertices;

        // hasn't calculated the vertices yet
        if (vertices === null || vertices.length === 0) {
            return null;
        }

        const length = vertices.length;
        const firstVertex = vertices[0];
        let minX = firstVertex.x;
        let maxX = minX;
        let minY = firstVertex.y;
        let maxY = minY;

        for (let a = 1; a < length; a++) {
            const vertex = vertices[a];
            const x = vertex.x;
            const y = vertex.y;

            if (x < minX) {
                minX = x;
            } else if (x > maxX) {
                maxX = x;
            }

            if (y < minY) {
                minY = y;
            } else if (y > maxY) {
                maxY = y;
            }
        }

        return {
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY,
        };
    }

    /**
     * @returns Rotation in radians.
     */
    get rotation() {
        return this._rotation;
    }

    /**
     * @param angle Rotation in radians.
     */
    set rotation(angle: number) {
        this._rotation = angle;
    }

    /**
     * Rotate the element to a given angle, in radians.
     *
     * @param radians Rotation in radians.
     */
    rotate(radians: number) {
        this._rotation = radians;
    }

    /**
     * Rotate the element to a given angle, in degrees.
     *
     * @param degrees Rotation in degrees.
     */
    rotateDegrees(degrees: number) {
        this._rotation = (Math.PI / 180) * degrees;
    }

    /**
     * Destroy this element. Right away, it's marked as destroyed (`isDestroyed()` returns `true`), it stops colliding,
     * and its tweens are stopped (so a tween's `.call()` doesn't run for it anymore). At the end of the current frame
     * it's taken out of its container/canvas and out of the collision detection. It's safe to call from the
     * logic/event code.
     *
     * A destroyed element can't be added again. To take an element out of the game and add it back later, use
     * `removeChild()` on its container/canvas (or `Game.removeElement()`) instead.
     */
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;

            Tween.removeTweens(this);
            Game._safeDestroy(this);
        }
    }

    /**
     * Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.
     */
    _destroyNow() {
        this._destroyed = true;
        this._detachFromParent();

        // the tweens added since `destroy()`
        Tween.removeTweens(this);
    }

    /**
     * Tells if this element was destroyed (with `destroy()`).
     * A detached element (with `removeChild()`) isn't destroyed.
     */
    isDestroyed() {
        return this._destroyed;
    }

    /**
     * Take this element out of its container or canvas, if it's in one.
     *
     * @return If it was in a container/canvas.
     */
    _detachFromParent() {
        if (this._container !== null) {
            return this._container.removeChild(this);
        }

        if (this._parent_canvas !== null) {
            return this._parent_canvas.removeChild(this);
        }

        return false;
    }

    /**
     * Called when the element becomes part of a canvas (directly or through containers).
     */
    _attach() {
        if (!this._attached) {
            this._attached = true;

            CollisionDetection.addElement(this);
        }
    }

    /**
     * Called when the element stops being part of a canvas.
     */
    _detach() {
        if (this._attached) {
            this._attached = false;
            this.vertices = null; // they're outdated, and are calculated again when added back

            CollisionDetection.removeElement(this);
        }
    }

    /**
     * Throws if this element can't be added to the given parent (a container or canvas).
     */
    _checkCanBeAdded() {
        if (this._destroyed) {
            throw new Error(
                "Can't add an element that was destroyed. To take an element out of the game and add it back later, use removeChild() instead of destroy().",
            );
        }
    }

    /**
     * Copy the properties that every element has (opacity, visibility, scale, rotation and collision settings) to a clone.
     */
    protected _copyPropertiesTo(element: Element) {
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;
        element.category = this.category;
        element.collidesWith = this.collidesWith;
    }

    /**
     * Create a clone of this element.
     */
    abstract clone(): Element;

    /**
     * Get the global vertices points of this element.
     * The arguments are the compound values from the parent containers.
     */
    updateVertices(
        x: number,
        y: number,
        scaleX: number,
        scaleY: number,
        rotation: number,
    ) {
        const center = Vector.rotate(
            { x: x, y: y },
            { x: x + this._x * scaleX, y: y + this._y * scaleY },
            rotation,
        );

        scaleX *= this.scaleX;
        scaleY *= this.scaleY;

        const left = center.x - this._half_width * scaleX;
        const right = center.x + this._half_width * scaleX;
        const top = center.y - this._half_height * scaleY;
        const bottom = center.y + this._half_height * scaleY;

        const angle = this._rotation + rotation;

        // in clockwise order
        this.vertices = [
            Vector.rotate(center, { x: left, y: top }, angle), // top left
            Vector.rotate(center, { x: right, y: top }, angle), // top right
            Vector.rotate(center, { x: right, y: bottom }, angle), // bottom right
            Vector.rotate(center, { x: left, y: bottom }, angle), // bottom left
        ];
    }

    /**
     * Get the element vertices points. Assumes its a rectangle.
     */
    getVertices(): Vertices[] | null {
        if (this.vertices) {
            return [this.vertices];
        }

        return null;
    }

    /**
     * Let the collision detection know the position changed (some algorithms keep track of the positions).
     */
    protected _positionChanged() {
        CollisionDetection.updateElement(this);
    }

    /**
     * Move the unit to the given x/y position.
     */
    setPosition(x: number, y: number) {
        this._x = x;
        this._y = y;

        this._positionChanged();
    }

    /**
     * Adds to the current position.
     */
    addToPosition(x: number, y: number) {
        this._x += x;
        this._y += y;

        this._positionChanged();
    }

    set x(x: number) {
        this._x = x;

        this._positionChanged();
    }

    get x() {
        return this._x;
    }

    set y(y: number) {
        this._y = y;

        this._positionChanged();
    }

    get y() {
        return this._y;
    }

    get width() {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
        this._half_width = width / 2;
    }

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
        this._half_height = height / 2;
    }

    get halfWidth() {
        return this._half_width;
    }

    get halfHeight() {
        return this._half_height;
    }

    /**
     * The position model is center-origin (`x`/`y` is the center). `left` is the `x` of the left edge
     * (`x - halfWidth`), and setting it moves the element so its left edge is there. With `top`, `right` and
     * `bottom`, it's convenient for top-left based games. They don't consider the rotation or scale.
     */
    get left() {
        return this._x - this._half_width;
    }

    set left(left: number) {
        this.x = left + this._half_width;
    }

    /**
     * The `y` of the top edge (`y - halfHeight`). See `left`.
     */
    get top() {
        return this._y - this._half_height;
    }

    set top(top: number) {
        this.y = top + this._half_height;
    }

    /**
     * The `x` of the right edge (`x + halfWidth`). See `left`.
     */
    get right() {
        return this._x + this._half_width;
    }

    set right(right: number) {
        this.x = right - this._half_width;
    }

    /**
     * The `y` of the bottom edge (`y + halfHeight`). See `left`.
     */
    get bottom() {
        return this._y + this._half_height;
    }

    set bottom(bottom: number) {
        this.y = bottom - this._half_height;
    }

    /**
     * The element's axis-aligned bounding box in top-left form (does not consider rotation or scale).
     * Unlike `toAxisAligned()` (which is rotation-aware and returns min/max), this is the simple
     * top-left box that top-left/grid based ports usually want.
     */
    getBoundingBox() {
        return {
            x: this._x - this._half_width,
            y: this._y - this._half_height,
            width: this._width,
            height: this._height,
        };
    }
}

function lerp(from: number, to: number, alpha: number) {
    return from + (to - from) * alpha;
}
