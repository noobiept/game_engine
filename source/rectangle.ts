/// <reference path="element.ts" />

module Game
{
export class Rectangle extends Element
    {
    color: string;

    constructor( x, y, width, height, color )
        {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        }

    drawElement( ctx )
        {
        var refX = 0;
        var refY = 0;
        var refRotation = 0;

        if ( this._container !== null )
            {
            refX = this._container.x;
            refY = this._container.y;
            refRotation = this._container.rotation;
            }

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.translate( refX + this.x, refY + this.y );
        ctx.rotate( refRotation + this.rotation );
        ctx.fillRect( 0, 0, this.width, this.height );
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
                    refX + this.x,
                    refY + this.y,
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