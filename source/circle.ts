/// <reference path="element.ts" />

module Game
{
export class Circle extends Element
    {
    color: string;
    private _radius: number;

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
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );
        ctx.arc( 0, 0, this._radius, 0, 2 * Math.PI );
        ctx.fill();
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

        if ( Utilities.circlePointCollision(
                    refX + this.x,
                    refY + this.y,
                    this._radius,
                    x,
                    y
                ))
            {
            this.dispatchEvent( event.type, { event: event } );
            return true;
            }

        return false;
        }
    }
}