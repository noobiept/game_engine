module Game
{
export class Element
    {
    x: number;
    y: number;

    constructor( x, y )
        {
        this.x = x;
        this.y = y;
        }

    draw( ctx )
        {
        throw new Error( 'Implement this.' );
        }
    }
}