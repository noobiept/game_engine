module Game
{
export class Unit extends Container
    {
    movement_speed: number;
    is_moving: boolean;
    move_x: number;
    move_y: number;
    destination_x: number;
    destination_y: number;
    path: { x: number; y: number; }[];

    constructor( args )
        {
        super();

        this.movement_speed = args.movement_speed;
        this.is_moving = false;
        this.has_logic = true;
        this.path = [];
        }

    /*
        Clears any previous path, and forces the unit to move to the specified position.
     */

    moveTo( x, y )
        {
        this.path.length = 0;
        this.path.push({
                x: x,
                y: y
            });

        this.moveToNext();
        }

    /*
        Move the next position in the path
     */

    moveToNext()
        {
        var next = this.path.shift();

        if ( next )
            {
            var x = next.x;
            var y = next.y;

            this.is_moving = true;
            this.destination_x = x;
            this.destination_y = y;

            var angleRads = Utilities.calculateAngle( this.x, this.y * -1, x, y * -1 );

            this.move_x = Math.cos( angleRads ) * this.movement_speed;
            this.move_y = Math.sin( angleRads ) * this.movement_speed;

            return true;
            }

        else
            {
            this.is_moving = false;
            }

        return false;
        }

    stop()
        {
        this.path.length = 0;
        this.is_moving = false;
        }


    queueMoveTo( x, y )
        {
        this.path.push({
                x: x,
                y: y
            });
        }

    moveLoop( path: { x: number; y: number }[] )
        {
            //HERE
        }

    logic( delta )
        {
        if ( this.is_moving )
            {
            this.x += this.move_x * delta;
            this.y += this.move_y * delta;

            if ( Utilities.boxBoxCollision( this.destination_x, this.destination_y, 20, 20, this.x, this.y, 20, 20 ) )    //HERE
                {
                this.x += this.move_x * delta;
                this.y += this.move_y * delta;

                this.moveToNext();
                }
            }
        }
    }
}