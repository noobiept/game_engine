/// <reference path="element.ts" />

module Game
{
export interface RectangleArgs extends ElementArgs
    {
    width: number;
    height: number;
    color: string;
    fill?: boolean; // fill or stroke
    }


/**
 * Basic Usage:
 *
 *     var rectangle = new Game.Rectangle({
 *             x: 100,
 *             y: 200,
 *             width: 10,
 *             height: 20,
 *             color: 'gray'
 *         });
 *     Game.addElement( rectangle );
 *
 * Events:
 *
 * - `click` -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup` -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 *
 * Examples -- `basic_example`, `bullets`, `clone`, `collision_detection`, `custom_element`, `game_of_life`, `grid`, `mouse_move`, `multiple_canvas`, `preload`, `snake`, `tween`
 */
export class Rectangle extends Element
    {
    color: string;
    fill: boolean;

    constructor( args: RectangleArgs )
        {
        super( args );

        if ( typeof args.fill === 'undefined' )
            {
            args.fill = true;
            }

        this.fill = args.fill;
        this._width = args.width;
        this._height = args.height;
        this._half_width = args.width / 2;
        this._half_height = args.height / 2;
        this.color = args.color;
        }


    /**
     * Draw this element.
     *
     * @param ctx The canvas rendering context.
     */
    drawElement( ctx: CanvasRenderingContext2D )
        {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha *= this.opacity;
        ctx.translate( this.x, this.y );
        ctx.scale( this.scaleX, this.scaleY );
        ctx.rotate( this._rotation );

        if ( this.fill )
            {
            ctx.fillStyle = this.color;
            ctx.fillRect( -this._half_width, -this._half_height, this._width, this._height );
            }

        else
            {
            ctx.strokeStyle = this.color;
            ctx.strokeRect( -this._half_width, -this._half_height, this._width, this._height );
            }
        ctx.restore();
        }


    clone()
        {
        var element = new Game.Rectangle({
                x: this.x,
                y: this.y,
                width: this._width,
                height: this._height,
                color: this.color,
                fill: this.fill
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