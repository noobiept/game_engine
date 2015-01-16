/// <reference path="element.ts" />

module Game
{
export class Rectangle extends Element
    {
    width: number;
    height: number;
    color: string;

    constructor( x, y, width, height, color )
        {
        super( x, y );

        this.width = width;
        this.height = height;
        this.color = color;
        }

    draw( ctx )
        {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect( this.x, this.y, this.width, this.height );
        }

    intersect( x, y )
        {
        if ( Utilities.pointBoxCollision(
                    x,
                    y,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                ))
            {
            return true;
            }

        return false;
        }
    }
}