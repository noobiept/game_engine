/// <reference path="element.ts" />

module Game
{
export interface BitmapArgs extends ElementArgs
    {
        image: HTMLImageElement
    }


export class Bitmap extends Element
    {
    image;
    _source_x: number;
    _source_y: number;
    _half_width: number;
    _half_height: number;

    constructor( args: BitmapArgs )
        {
        super( args );

        var image = args.image;

        this.width = image.width;
        this.height = image.height;
        this._half_width = image.width / 2;
        this._half_height = image.height / 2;
        this._source_x = 0;
        this._source_y = 0;

        this.image = image;
        }

    drawElement( ctx )
        {
        ctx.save();
        ctx.beginPath();
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );
        ctx.drawImage( this.image, this._source_x, this._source_y, this.width, this.height,  -this._half_width, -this._half_height, this.width, this.height );
        ctx.restore();
        }

    intersect( x, y, event )
        {
        var refX = 0;
        var refY = 0;

        if ( this._container !== null )
            {
            refX = this._container.x;
            refY = this._container.y;
            }

        if ( Utilities.pointBoxCollision(
                    x,
                    y,
                    refX + this.x - this._half_width,
                    refY + this.y - this._half_height,
                    this.width,
                    this.height
                ))
            {
            this.dispatchEvent( event.type, { event: event } );
            return true;
            }

        return false;
        }
    }
}