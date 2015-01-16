/// <reference path="element.ts" />

module Game
{
export class Circle extends Element
    {
    radius: number;
    color: string;

    constructor( x, y, radius, color )
        {
        super( x, y );

        this.radius = radius;
        this.color = color;
        }

    draw( ctx )
        {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
        }

    intersect( x, y )
        {
        if ( Utilities.circlePointCollision(
                    this.x,
                    this.y,
                    this.radius,
                    x,
                    y
                ))
            {
            return true;
            }

        return false;
        }
    }
}