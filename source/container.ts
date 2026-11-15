import { Element, ElementArgs } from "./element";

/**
 * Get the elements given as `Element`, `...Element` or `Element[]`, in a new array (the given array can be one that
 * changes while the elements are added/removed, like the `getAllChildren()` of the same container).
 */
function normalizeChildren(args: (Element | readonly Element[])[]): Element[] {
    if (args.length === 1 && Array.isArray(args[0])) {
        return (args[0] as readonly Element[]).slice();
    }

    return args as Element[];
}

export interface ContainerArgs extends ElementArgs {
    children?: Element | readonly Element[];
}

/**
 * Groups elements together: the children are drawn and updated with the container, and are moved, scaled and
 * rotated with it (their `x`/`y` is relative to the container).
 *
 * - `addChild()` adds elements. An element that is already in another container/canvas is moved to this one.
 * - `removeChild()` and `removeAllChildren()` **detach** elements right away. They stay usable and can be added again.
 * - `destroyAllChildren()` **destroys** all the children, but keeps the container (see `Element.destroy()`).
 * - `destroy()` **destroys** the container and all of its children.
 *
 * Basic Usage:
 *
 *     const container = new Game.Container();
 *
 *     const rectangle = new Game.Rectangle({
 *             width: 10,
 *             height: 10,
 *             color: 'red'
 *         });
 *     container.addChild( rectangle );
 *
 *     Game.addElement( container );
 *
 * Events:
 *
 * Examples -- `basic_example`, `clone`, `minesweeper`
 */
export class Container extends Element {
    protected _children: Element[];

    constructor(args?: ContainerArgs) {
        super(args);

        this._children = [];
        this._has_logic = true;

        if (typeof args !== "undefined") {
            if (typeof args.children !== "undefined") {
                this.addChild(args.children);
            }
        }
    }

    /**
     * Add elements to this container (drawn on top of the current children).
     * An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).
     *
     *     addChild( element );
     *     addChild( element1, element2 );
     *     addChild( [ element1, element2 ] );
     *
     * Throws if an element was destroyed (with `destroy()`), or when adding a container to itself or to one of its children.
     *
     * @param elements Either `Element` or `...Element` or `Element[]`.
     */
    addChild(children: Element | readonly Element[]): void;
    addChild(...elements: Element[]): void;
    addChild(...elements: (Element | readonly Element[])[]) {
        const children = normalizeChildren(elements);

        for (const element of children) {
            element._checkCanBeAdded();

            if (element === this || this._hasAncestor(element)) {
                throw new Error(
                    "Can't add a container to itself, or to one of its children.",
                );
            }

            element._detachFromParent();

            this._children.push(element);
            element._container = this;

            if (this._attached) {
                element._attach();
            }
        }

        this.calculateDimensions();
    }

    /**
     * Detach elements from this container, right away. They're no longer drawn, updated or considered in the collision
     * detection, but they aren't destroyed, so they can be added again later. Elements that aren't children of this
     * container are ignored. To destroy an element, call its `destroy()` method instead.
     *
     *     removeChild( element );
     *     removeChild( element1, element2 );
     *     removeChild( [ element1, element2 ] );
     *
     * @param args Either `Element` or `...Element` or `Element[]`.
     * @return If any of the elements was a child (and was detached).
     */
    removeChild(children: Element | readonly Element[]): boolean;
    removeChild(...elements: Element[]): boolean;
    removeChild(...args: (Element | readonly Element[])[]) {
        const children = normalizeChildren(args);
        let removed = false;

        for (const element of children) {
            const index = this._children.indexOf(element);

            if (index < 0) {
                continue;
            }

            this._children.splice(index, 1);
            element._container = null;
            element._detach();
            removed = true;
        }

        if (removed) {
            this.calculateDimensions();
        }

        return removed;
    }

    /**
     * Detach all of this container's children, right away (see `removeChild()`).
     * To destroy the children instead, call `destroyAllChildren()` (or `destroy()` to destroy the container as well).
     */
    removeAllChildren() {
        const children = this._children.splice(0);

        for (const element of children) {
            element._container = null;
            element._detach();
        }

        this.calculateDimensions();
    }

    /**
     * Destroy all of this container's children (see `Element.destroy()`), but keep the container. Useful when the
     * container stays in the game, for example a layer that sets the drawing order, and its elements are thrown away
     * (when restarting a level).
     *
     * Like `destroy()`, the children stop colliding right away, but they're only taken out of the container at the end
     * of the frame (until then they're still in `getAllChildren()`).
     */
    destroyAllChildren() {
        for (const child of this._children.slice()) {
            child.destroy();
        }
    }

    /**
     * Get all the children elements (in the drawing order, from the back to the front).
     * It's the container's own list, so it changes when children are added/removed. Copy it (with `slice()`) to keep
     * the current children.
     */
    getAllChildren(): readonly Element[] {
        return this._children;
    }

    /**
     * Tells if the given element is one of the containers this container is in (its parent, the parent's parent, etc).
     */
    protected _hasAncestor(element: Element) {
        let parent = this._container;

        while (parent !== null) {
            if (parent === element) {
                return true;
            }

            parent = parent._container;
        }

        return false;
    }

    override _attach() {
        if (this._attached) {
            return;
        }

        super._attach();

        for (const child of this._children) {
            child._attach();
        }
    }

    override _detach() {
        if (!this._attached) {
            return;
        }

        super._detach();

        for (const child of this._children) {
            child._detach();
        }
    }

    /**
     * Move a child element to the front (drawn on top of the other children).
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
     * Move a child element to the back (drawn behind the other children).
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
     * Move a child element to a specific draw position (0 is the back, higher values are more to the front).
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
     * Destroy the container and all of its children (see `Element.destroy()`).
     * To keep the children, detach them first (with `removeChild()` or `removeAllChildren()`).
     */
    override destroy() {
        if (this._destroyed) {
            return;
        }

        super.destroy();

        // the children are only taken out at the end of the frame (`_children` can't change while the logic is running)
        for (const child of this._children.slice()) {
            child.destroy();
        }
    }

    /**
     * Draw all the elements in the container.
     *
     * @param ctx The canvas rendering context.
     */
    override draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha *= this.opacity;
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this._rotation);

        const length = this._children.length;
        let child;

        for (let a = 0; a < length; a++) {
            child = this._children[a];

            if (child.visible) {
                child.drawElement(ctx);
            }
        }

        ctx.restore();
    }

    /**
     * Normally draws the element, but in the case of the container just draw its children.
     *
     * @param ctx The canvas rendering context.
     */
    drawElement(ctx: CanvasRenderingContext2D) {
        this.draw(ctx); // to allow containers to be inside containers
    }

    /**
     * Check if the given x/y position intersects with any of this container's children. Returns all the elements it intersects.
     */
    override intersect(x: number, y: number) {
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
     * The front child under the mouse that listens to the event gets it (and it reaches this container through it).
     * When no child listens to it, this container gets it if the mouse is over one of its children.
     *
     * @return If an element got the event.
     */
    override mouseClickEvents(x: number, y: number, event: MouseEvent) {
        // go through a copy, since the listeners can add/remove elements
        const children = this._children.slice();

        for (let a = children.length - 1; a >= 0; a--) {
            const child = children[a];

            if (
                child._container === this &&
                child.mouseClickEvents(x, y, event)
            ) {
                return true;
            }
        }

        if (this.hasListeners(event.type) && this.intersect(x, y).length > 0) {
            this.dispatchMouseClickEvent(event);
            return true;
        }

        return false;
    }

    /**
     * Calculate the width/height of the container, from the area its children cover (each child's `x`/`y` is its center).
     * Doesn't consider the scale or rotation of the children. It's called automatically when children are added/removed.
     */
    calculateDimensions() {
        const children = this._children;

        if (children.length === 0) {
            this._width = this._height = 0;
            this._half_width = this._half_height = 0;
            return;
        }

        let left = Infinity;
        let right = -Infinity;
        let top = Infinity;
        let bottom = -Infinity;

        for (const child of children) {
            left = Math.min(left, child.x - child.halfWidth);
            right = Math.max(right, child.x + child.halfWidth);
            top = Math.min(top, child.y - child.halfHeight);
            bottom = Math.max(bottom, child.y + child.halfHeight);
        }

        this._width = right - left;
        this._height = bottom - top;
        this._half_width = this._width / 2;
        this._half_height = this._height / 2;
    }

    /**
     * Calculates an axis-aligned rectangle from the rotated shape.
     */
    override toAxisAligned() {
        const length = this._children.length;

        if (length === 0) {
            return null;
        }

        let minX = this.x;
        let maxX = minX;
        let minY = this.y;
        let maxY = minY;

        for (let a = this._children.length - 1; a >= 0; a--) {
            const rect = this._children[a].toAxisAligned();

            if (rect) {
                if (rect.minX < minX) {
                    minX = rect.minX;
                }

                if (rect.maxX > maxX) {
                    maxX = rect.maxX;
                }

                if (rect.minY < minY) {
                    minY = rect.minY;
                }

                if (rect.maxY > maxY) {
                    maxY = rect.maxY;
                }
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
     * Call the logic of the children elements.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    override logic(deltaTime: number) {
        // go through a copy, since the logic code can add/remove elements
        const children = this._children.slice();

        for (let a = children.length - 1; a >= 0; a--) {
            const element = children[a];

            // skip the ones that were detached or destroyed in the meantime
            if (
                element._has_logic === true &&
                element._container === this &&
                !element._destroyed
            ) {
                element.logic(deltaTime);
            }
        }
    }

    /**
     * Get the global vertices points of this element.
     * The arguments are the compound values from the parent containers.
     */
    override updateVertices(
        x: number,
        y: number,
        scaleX: number,
        scaleY: number,
        rotation: number,
    ) {
        x += this.x * scaleX;
        y += this.y * scaleY;

        scaleX *= this.scaleX;
        scaleY *= this.scaleY;
        rotation += this.rotation;

        for (let a = this._children.length - 1; a >= 0; a--) {
            this._children[a].updateVertices(x, y, scaleX, scaleY, rotation);
        }
    }

    /**
     * Get the element vertices points. Assumes its a rectangle.
     */
    override getVertices() {
        let vertices: NonNullable<ReturnType<Element["getVertices"]>> = [];

        for (let a = this._children.length - 1; a >= 0; a--) {
            const childVertices = this._children[a].getVertices();

            if (childVertices) {
                vertices = vertices.concat(childVertices);
            }
        }

        return vertices;
    }

    /**
     * Clones the container (as well as the children).
     *
     * @return A new cloned container.
     */
    clone() {
        const children = [];
        const length = this._children.length;

        for (let a = 0; a < length; a++) {
            children.push(this._children[a].clone());
        }

        const container = new Container({
            x: this.x,
            y: this.y,
            children: children,
        });
        this._copyPropertiesTo(container);

        return container;
    }
}
