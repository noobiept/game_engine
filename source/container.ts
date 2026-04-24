import { Element, ElementArgs } from "./element";

function normalizeChildren(args: (Element | Element[])[]) {
    if (args.length === 1 && args[0] instanceof Array) {
        return args[0];
    }

    return args as Element[];
}

export interface ContainerArgs extends ElementArgs {
    children?: Element | Element[];
}

/**
 * Basic Usage:
 *
 *     var container = new Game.Container();
 *
 *     var rectangle = new Game.Rectangle({
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
     *     addChild( element );
     *     addChild( element1, element2 );
     *     addChild( [ element1, element2 ] );
     *
     * @param elements Either `Element` or `...Element` or `Element[]`.
     */
    addChild(children: Element | Element[]): void;
    addChild(...elements: Element[]): void;
    addChild(...elements: (Element | Element[])[]) {
        const children = normalizeChildren(elements);

        const length = children.length;

        for (let a = 0; a < length; a++) {
            const element = children[a];

            this._children.push(element);

            element._container = this;
        }

        this.calculateDimensions();
    }

    /**
     *     removeChild( element );
     *     removeChild( element1, element2 );
     *     removeChild( [ element1, element2 ] );
     *
     * @param args Either `Element` or `...Element` or `Element[]`.
     */
    removeChild(children: Element | Element[]): void;
    removeChild(...elements: Element[]): void;
    removeChild(...args: (Element | Element[])[]) {
        const children = normalizeChildren(args);

        const length = children.length;

        for (let a = 0; a < length; a++) {
            const element = children[a];
            const index = this._children.indexOf(element);

            if (index >= 0) {
                this._children.splice(index, 1);
            }

            element._container = null;
        }
    }

    /**
     * Remove all of this container's children.
     */
    removeAllChildren() {
        for (let a = this._children.length - 1; a >= 0; a--) {
            this._children[a]._container = null;
            this._children[a].remove();
        }

        this._children.length = 0;
    }

    /**
     * Get all the children elements.
     */
    getAllChildren() {
        return this._children;
    }

    /**
     * Make sure the children are removed as well.
     */
    remove() {
        this.removeAllChildren();
        super.remove();
    }

    /**
     * Draw all the elements in the container.
     *
     * @param ctx The canvas rendering context.
     */
    draw(ctx: CanvasRenderingContext2D) {
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
    intersect(x: number, y: number) {
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

    mouseClickEvents(x: number, y: number, event: MouseEvent) {
        let found = false;

        for (let a = this._children.length - 1; a >= 0; a--) {
            if (this._children[a].mouseClickEvents(x, y, event)) {
                found = true;
            }
        }

        return found;
    }

    /**
     * Calculate the width/height of the container (based on the dimensions of the children elements). Doesn't consider the rotations of the elements.
     */
    calculateDimensions() {
        if (this._children.length === 0) {
            this._width = this._height = 0;
            this._half_width = this._half_height = 0;
        }

        const firstChild = this._children[0];
        if (!firstChild) {
            return;
        }

        let leftMost = firstChild.x;
        let rightMost = firstChild.x + firstChild.width;
        let topMost = firstChild.y;
        let bottomMost = firstChild.y + firstChild.height;
        const length = this._children.length;

        for (let a = 1; a < length; a++) {
            const element = this._children[a];

            if (element.x < leftMost) {
                leftMost = element.x;
            } else if (element.x + element.width > rightMost) {
                rightMost = element.x + element.width;
            }

            if (element.y < topMost) {
                topMost = element.y;
            } else if (element.y + element.height > bottomMost) {
                bottomMost = element.y + element.height;
            }
        }

        this._width = rightMost - leftMost;
        this._height = bottomMost - topMost;
        this._half_width = this._width / 2;
        this._half_height = this._height / 2;
    }

    /**
     * Calculates an axis-aligned rectangle from the rotated shape.
     */
    toAxisAligned() {
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
    logic(deltaTime: number) {
        for (let a = this._children.length - 1; a >= 0; a--) {
            const element = this._children[a];

            if (element._has_logic === true) {
                element.logic(deltaTime);
            }
        }
    }

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
    getVertices() {
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
        container.opacity = this.opacity;
        container.visible = this.visible;
        container.scaleX = this.scaleX;
        container.scaleY = this.scaleY;
        container._rotation = this._rotation;

        return container;
    }
}
