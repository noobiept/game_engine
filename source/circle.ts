/// <reference path="element.ts" />

module Game
{
export class Circle extends Element
    {
    _radius: number;
    color: string;

    constructor( x, y, radius, color )
        {
        super();

        this.x = x;
        this.y = y;
        this._radius = radius;
        this.width = this.height = radius * 2;
        this.color = color;
        }

    set radius( value: number )
        {
        this._radius = value;
        this.width = this.height = value * 2;
        }

    get radius()
        {
        return this._radius;
        }

    drawElement( ctx )
        {
        var refX = 0;
        var refY = 0;

        if ( this.container !== null )
            {
            refX = this.container.x;
            refY = this.container.y;
            }

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.translate( refX + this.x + this._radius, refY + this.y + this._radius );
        ctx.arc( 0, 0, this._radius, 0, 2 * Math.PI );
        ctx.fill();
        ctx.restore();
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
                    this._radius,
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