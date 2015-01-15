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
    }
}