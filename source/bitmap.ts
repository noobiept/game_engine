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

    draw( ctx )
        {
        ctx.beginPath();
        ctx.drawImage( this.image, this.x, this.y );
        }

    intersect( x, y )
        {
        if ( Utilities.pointBoxCollision(
                    x,
                    y,
                    this.x,
                    this.y,
                    this.image.width,
                    this.image.height
                ))
            {
            return true;
            }

        return false;
        }
    }
}