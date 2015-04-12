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
        ctx.rotate( this.rotation );
        ctx.drawImage( this._image, this._source_x, this._source_y, this.width, this.height,  -this._half_width, -this._half_height, this.width, this.height );
        ctx.restore();
        }


    intersect( x: number, y: number )
        {
        var refX = 0;
        var refY = 0;

        if ( this._container !== null )
            {
            refX = this._container.x;
            refY = this._container.y;
            }

            // see if the x/y position intersects with this element
        if ( Utilities.pointBoxCollision(
                    x,
                    y,
                    refX + this.x - this._half_width,
                    refY + this.y - this._half_height,
                    this.width,
                    this.height
                ))
            {
            return true;
            }

        return false;
        }


    mouseClickEvents( x: number, y: number, event: MouseEvent )
        {
            // see if there's listeners to this particular event type
        if ( !this.hasListeners( event.type ) )
            {
            return false;
            }


        if ( this.intersect( x, y ) )
            {
            this.dispatchEvent( event.type, { event: event } );
            return true;
            }

        return false;
        }


    clone()
        {
        return new Game.Bitmap({
                x: this.x,
                y: this.y,
                image: this._image
            });
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