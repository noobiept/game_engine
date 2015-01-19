/// <reference path="element.ts" />

module Game
{
export class Circle extends Element
    {
    radius: number;
    color: string;

    constructor( x, y, radius, color )
        {
        super();

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        }

    drawElement( ctx, refX, refY )
        {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( refX + this.x, refY + this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
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

        if ( Utilities.circlePointCollision(
                    refX + this.x,
                    refY + this.y,
                    this.radius,
                    x,
                    y
                ))
            {
            this.dispatchEvent( event );
            return true;
            }

        return false;
        }
    }
}