/// <reference path="element.ts" />

module Game
{
export interface RectangleArgs extends ElementArgs
    {
        width: number;
        height: number;
        color: string;
    }

export class Rectangle extends Element
    {
    color: string;
    half_width: number;
    half_height: number;

    constructor( args: RectangleArgs )
        {
        super( args );

        this.width = args.width;
        this.height = args.height;
        this.half_width = args.width / 2;
        this.half_height = args.height / 2;
        this.color = args.color;
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
            this.dispatchEvent( event.type, { event: event } );
            return true;
            }

        return false;
        }
    }
}