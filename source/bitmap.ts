/// <reference path="element.ts" />

module Game
{
export class Bitmap extends Element
    {
    image;

    constructor( x, y, image )
        {
        super( x, y );

        this.image = image;
        }

    drawElement( ctx, refX, refY )
        {
        ctx.beginPath();
        ctx.drawImage( this.image, refX + this.x, refY + this.y );
        }

    intersect( x, y, event )
        {
        var refX = 0;
        var refY = 0;

        if ( this.container !== null )
            {
            refX = this.container.x;
            refY = this.container.y;
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