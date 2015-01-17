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

    drawElement( ctx, refX, refY )
        {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect( refX + this.x, refY + this.y, this.width, this.height );
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
                    this.width,
                    this.height
                ))
            {
            this.dispatchEvent( event )
            return true;
            }

        return false;
        }
    }
}