/// <reference path="element.ts" />

module Game
{
export interface BitmapArgs extends ElementArgs
    {
    image: HTMLImageElement;
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
 * - `mousemove` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 *
 * Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`
 */
export class Bitmap extends Element
    {
    _image: HTMLImageElement;
    _source_x: number;
    _source_y: number;
    _half_width: number;
    _half_height: number;

    constructor( args: BitmapArgs )
        {
        super( args );

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
        ctx.rotate( this._rotation );
        ctx.drawImage( this._image, this._source_x, this._source_y, this.width, this.height,  -this._half_width, -this._half_height, this.width, this.height );
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

        return element;
        }


    get image()
        {
        return this._image;
        }

    set image( newImage: HTMLImageElement )
        {
        this.width = newImage.width;
        this.height = newImage.height;
        this._half_width = newImage.width / 2;
        this._half_height = newImage.height / 2;
        this._image = newImage;
        }
    }
}