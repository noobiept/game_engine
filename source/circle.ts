/// <reference path="element.ts" />

module Game
{
export interface CircleArgs extends ElementArgs
    {
    radius: number;
    color: string;
    }


/**
 * Basic Usage:
 *
 *     var circle = new Game.Circle({
 *             x: 10,
 *             y: 10,
 *             radius: 5,
 *             color: 'blue'
 *         });
 *     Game.addElement( circle );
 *
 * Examples -- `basic_example`, `clone`, `custom_element`, `tower_defense`
 */
export class Circle extends Element
    {
    color: string;
    protected _radius: number;

    constructor( args: CircleArgs )
        {
        super( args );

        this._radius = args.radius;
        this._width = this._height = args.radius * 2;
        this._half_width = this._half_height = args.radius;
        this.color = args.color;
        }


    set radius( value: number )
        {
        this._radius = value;
        this._width = this._height = value * 2;
        this._half_width = this._half_height = value;
        }


    get radius()
        {
        return this._radius;
        }


    drawElement( ctx: CanvasRenderingContext2D )
        {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha *= this.opacity;
        ctx.fillStyle = this.color;
        ctx.translate( this.x, this.y );
        ctx.scale( this.scaleX, this.scaleY );
        ctx.rotate( this._rotation );
        ctx.arc( 0, 0, this._radius, 0, 2 * Math.PI );
        ctx.fill();
        ctx.restore();
        }


    clone()
        {
        var element = new Game.Circle({
                x: this.x,
                y: this.y,
                radius: this._radius,
                color: this.color
            });
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;

        return element;
        }
    }
}