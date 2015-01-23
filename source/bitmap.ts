/// <reference path="element.ts" />

module Game
{
export class Bitmap extends Element
    {
    image;

    constructor( x, y, image )
        {
        super();

        this.x = x;
        this.y = y;
        this.width = image.width;
        this.height = image.height;

        this.image = image;
        }

    drawElement( ctx )
        {
        ctx.save();
        ctx.beginPath();
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );
        ctx.drawImage( this.image, 0, 0 );
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
                    refX + this.x,
                    refY + this.y,
                    this.image.width,
                    this.image.height
                ))
            {
            this.dispatchEvent( event );
            return true;
            }

        return false;
        }
    }
}