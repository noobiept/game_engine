/// <reference path="bitmap.ts" />

module Game
{
export interface ScrollingBitmapArgs extends BitmapArgs
    {
    direction: ScrollingBitmapArgs.Direction,
    step: number;
    interval: number;
    }

export module ScrollingBitmapArgs
    {
    export enum Direction
        {
        left, right, top, bottom
        }
    }


/**
 * Basic Usage:
 *
 *     var image = new Game.ScrollingBitmap({
 *             image: Game.Preload.get( 'imageId' ),
 *             direction: Game.ScrollingBitmapArgs.Direction.left,
 *             step: 1,
 *             interval: 0.2
 *         });
 *     Game.addElement( image );
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
 * Examples -- `parallax_scrolling`
 */
export class ScrollingBitmap extends Bitmap
    {
    _count: number;
    _interval: number;
    _step: number;
    _ref_position: number;


    constructor( args: ScrollingBitmapArgs )
        {
        super( args );

        this._has_logic = true;

        this._count = 0;
        this._interval = args.interval;
        this._step = args.step;
        this._ref_position = 0;

        switch( args.direction )
            {
            case ScrollingBitmapArgs.Direction.left:
                this.logic = this._left_logic;
                this.drawElement = this._draw_horizontal;
                break;

            case ScrollingBitmapArgs.Direction.right:
                this.logic = this._right_logic;
                this.drawElement = this._draw_horizontal;
                break;

            case ScrollingBitmapArgs.Direction.top:
                this.logic = this._top_logic;
                this.drawElement = this._draw_vertical;
                break;

            case ScrollingBitmapArgs.Direction.bottom:
                this.logic = this._bottom_logic;
                this.drawElement = this._draw_vertical;
                break;
            }
        }


    _draw_horizontal( ctx: CanvasRenderingContext2D )
        {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha *= this.opacity;
        ctx.translate( this.x, this.y );
        ctx.scale( this.scaleX, this.scaleY );
        ctx.rotate( this._rotation );
        ctx.drawImage(
            this._image,
            this._source_x + this._ref_position,
            this._source_y,
            this._width - this._ref_position,
            this._height,
            -this._half_width,
            -this._half_height,
            this._width - this._ref_position,
            this._height );
        ctx.drawImage(
            this._image,
            this._source_x,
            this._source_y,
            this._ref_position,
            this._height,
            this._half_width - this._ref_position,
            -this._half_height,
            this._ref_position,
            this._height );
        ctx.restore();
        }


    _draw_vertical( ctx: CanvasRenderingContext2D )
        {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha *= this.opacity;
        ctx.translate( this.x, this.y );
        ctx.scale( this.scaleX, this.scaleY );
        ctx.rotate( this._rotation );
        ctx.drawImage(
            this._image,
            this._source_x,
            this._source_y + this._ref_position,
            this._width,
            this._height - this._ref_position,
            -this._half_width,
            -this._half_height,
            this._width,
            this._height - this._ref_position );
        ctx.drawImage(
            this._image,
            this._source_x,
            this._source_y,
            this._width,
            this._ref_position,
            -this._half_width,
            this._half_height - this._ref_position,
            this._width,
            this._ref_position );
        ctx.restore();
        }


    _left_logic( deltaTime: number )
        {
        this._count += deltaTime;

        if ( this._count >= this._interval )
            {
            this._count = 0;
            this._ref_position += this._step;

            if ( this._ref_position >= this._width )
                {
                this._ref_position = 0;
                }
            }
        }


    _right_logic( deltaTime: number )
        {
        this._count += deltaTime;

        if ( this._count >= this._interval )
            {
            this._count = 0;
            this._ref_position -= this._step;

            if ( this._ref_position < 0 )
                {
                this._ref_position = this._width;
                }
            }
        }


    _top_logic( deltaTime: number )
        {
        this._count += deltaTime;

        if ( this._count >= this._interval )
            {
            this._count = 0;
            this._ref_position += this._step;

            if ( this._ref_position >= this._height )
                {
                this._ref_position = 0;
                }
            }
        }


    _bottom_logic( deltaTime: number )
        {
        this._count += deltaTime;

        if ( this._count >= this._interval )
            {
            this._count = 0;
            this._ref_position -= this._step;

            if ( this._ref_position < 0 )
                {
                this._ref_position = this._height;
                }
            }
        }
    }
}