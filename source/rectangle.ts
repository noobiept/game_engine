/// <reference path="element.ts" />

module Game
{
export class Rectangle extends Element
    {
    color: string;
    half_width: number;
    half_height: number;

    constructor( x, y, width, height, color )
        {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.half_width = width / 2;
        this.half_height = height / 2;
        this.color = color;
        }

    drawElement( ctx )
        {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );
        ctx.fillRect( -this.half_width, -this.half_height, this.width, this.height );
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
                    refX + this.x - this.half_width,
                    refY + this.y - this.half_height,
                    this.width,
                    this.height
                ))
            {
            this.dispatchEvent( event );
            return true;
            }

        return false;
        }
    }
}