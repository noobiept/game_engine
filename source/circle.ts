import { Element, ElementArgs } from "./element";
import * as Vector from "./vector";

// number of sides of the polygon used as the circle's shape in the collision detection
const COLLISION_SIDES = 16;

export interface CircleArgs extends ElementArgs {
    radius: number;
    color: string;
}

/**
 * For the collision detection (and the mouse events), the circle is a 16 sided polygon (it's within 2% of the circle's radius).
 *
 * Basic Usage:
 *
 *     const circle = new Game.Circle({
 *             x: 10,
 *             y: 10,
 *             radius: 5,
 *             color: 'blue'
 *         });
 *     Game.addElement( circle );
 *
 * Examples -- `basic_example`, `clone`, `custom_element`, `tower_defense`
 */
export class Circle extends Element {
    color: string;
    protected _radius: number;

    constructor(args: CircleArgs) {
        super(args);

        this._radius = args.radius;
        this._width = this._height = args.radius * 2;
        this._half_width = this._half_height = args.radius;
        this.color = args.color;
    }

    set radius(value: number) {
        this._radius = value;
        this._width = this._height = value * 2;
        this._half_width = this._half_height = value;
    }

    get radius() {
        return this._radius;
    }

    /**
     * Get the global vertices points of this element (a polygon close to the circle).
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

        // a non-uniform scale makes it an ellipse
        const radiusX = this._radius * scaleX * this.scaleX;
        const radiusY = this._radius * scaleY * this.scaleY;
        const angle = this._rotation + rotation;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const vertices = [];

        for (let a = 0; a < COLLISION_SIDES; a++) {
            const theta = (a / COLLISION_SIDES) * 2 * Math.PI;
            const pointX = Math.cos(theta) * radiusX;
            const pointY = Math.sin(theta) * radiusY;

            vertices.push({
                x: center.x + pointX * cos - pointY * sin,
                y: center.y + pointX * sin + pointY * cos,
            });
        }

        this.vertices = vertices;
    }

    drawElement(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha *= this.opacity;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this._rotation);
        ctx.arc(0, 0, this._radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    clone() {
        const element = new Circle({
            x: this.x,
            y: this.y,
            radius: this._radius,
            color: this.color,
        });
        this._copyPropertiesTo(element);

        return element;
    }
}
