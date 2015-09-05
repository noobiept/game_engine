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
 * Examples -- `clone`, `parallax_scrolling`
 */
export class ScrollingBitmap extends Bitmap
    {
    private _count: number;     // interval counter
    private _interval: number;  // time between the scroll movement
    private _step: number;      // how many pixels it moves per scroll movement
    private _ref_position: number;  // the current image division point position
    private _direction: ScrollingBitmapArgs.Direction;  // the scrolling direction


    constructor( args: ScrollingBitmapArgs )
        {
        super( args );

        this._has_logic = true;

        this._count = 0;
        this._interval = args.interval;
        this._step = args.step;
        this._ref_position = 0;
        this._direction = args.direction;

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


    /**
     * Used for the horizontal movement (left or right).
     */
    private _draw_horizontal( ctx: CanvasRenderingContext2D )
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


    /**
     * Used for the vertical movement (top or bottom).
     */
    private _draw_vertical( ctx: CanvasRenderingContext2D )
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


    /**
     * Scrolling left logic.
     * Keeps moving the reference position every interval.
     */
    private _left_logic( deltaTime: number )
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


    /**
     * Scrolling right logic.
     * Keeps moving the reference position every interval.
     */
    private _right_logic( deltaTime: number )
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


    /**
     * Scrolling top logic.
     * Keeps moving the reference position every interval.
     */
    private _top_logic( deltaTime: number )
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


    /**
     * Scrolling bottom logic.
     * Keeps moving the reference position every interval.
     */
    private _bottom_logic( deltaTime: number )
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


    /**
     * Get a copy of this object.
     */
    clone()
        {
        var element = new Game.ScrollingBitmap({
                x: this.x,
                y: this.y,
                image: this._image,
                direction: this._direction,
                step: this._step,
                interval: this._interval
            });
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;
        element._count = this._count;
        element._ref_position = this._ref_position;

        return element;
        }
    }
}