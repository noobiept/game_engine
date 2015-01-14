module Game
{
export class Rectangle
    {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor( x, y, width, height )
        {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        }

    draw( ctx )
        {
        ctx.fillStyle = 'green';
        ctx.fillRect( this.x, this.y, this.width, this.height );
        }
    }
}