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
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 *
 * Examples -- `basic_example`, `bullets`, `clone`, `collision_detection`, `custom_element`, `game_of_life`, `grid`, `mouse_move`, `multiple_canvas`, `preload`, `snake`, `tween`
 */
export class Rectangle extends Element
    {
    color: string;
    half_width: number;
    half_height: number;
    fill: boolean;

    constructor( args: RectangleArgs )
        {
        super( args );

        if ( typeof args.fill === 'undefined' )
            {
            args.fill = true;
            }

        this.fill = args.fill;
        this.width = args.width;
        this.height = args.height;
        this.half_width = args.width / 2;
        this.half_height = args.height / 2;
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
            ctx.fillRect( -this.half_width, -this.half_height, this.width, this.height );
            }

        else
            {
            ctx.strokeStyle = this.color;
            ctx.strokeRect( -this.half_width, -this.half_height, this.width, this.height );
            }
        ctx.restore();
        }


    clone()
        {
        var element = new Game.Rectangle({
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
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