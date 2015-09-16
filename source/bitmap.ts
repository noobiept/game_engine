/// <reference path="element.ts" />

module Game
{
export interface BitmapArgs extends ElementArgs
    {
    image: HTMLImageElement;

        // the image is assumed to have a 0 angle initial orientation (like this: ->)
        // that can be changed by the value of this argument (in radians)
    angleOffset?: number;
    }


/**
 * Basic Usage:
 *
 *     var bitmap = new Game.Bitmap({
 *             x: 10,
 *             y: 20,
 *             image: Game.Preload.get( 'id' )
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
 * Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`
 */
export class Bitmap extends Element
    {
    protected _image: HTMLImageElement;
    protected _source_x: number;
    protected _source_y: number;
    protected _angle_offset: number;


    constructor( args: BitmapArgs )
        {
        super( args );

        if ( typeof args.angleOffset === 'undefined' )
            {
            args.angleOffset = 0;
            }

        this._angle_offset = args.angleOffset;
        this.image = args.image;
        this._source_x = 0;
        this._source_y = 0;
        }


    drawElement( ctx )
        {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha *= this.opacity;
        ctx.translate( this.x, this.y );
        ctx.scale( this.scaleX, this.scaleY );
        ctx.rotate( this._rotation - this._angle_offset );
        ctx.drawImage( this._image, this._source_x, this._source_y, this._width, this._height,  -this._half_width, -this._half_height, this._width, this._height );
        ctx.restore();
        }


    clone()
        {
        var element = new Game.Bitmap({
                x: this.x,
                y: this.y,
                image: this._image
            });
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;
        element._angle_offset = this._angle_offset;

        return element;
        }


    get image()
        {
        return this._image;
        }


    set image( newImage: HTMLImageElement )
        {
        this._width = newImage.width;
        this._height = newImage.height;
        this._half_width = newImage.width / 2;
        this._half_height = newImage.height / 2;
        this._image = newImage;
        }
    }
}