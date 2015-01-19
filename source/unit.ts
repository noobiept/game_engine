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

    constructor( args )
        {
        super();

        this.movement_speed = args.movement_speed;
        this.is_moving = false;
        this.has_logic = true;
        }

    moveTo( x, y )
        {
        this.is_moving = true;
        this.destination_x = x;
        this.destination_y = y;

        var angleRads = Utilities.calculateAngle( this.x, this.y * -1, x, y * -1 );

        this.move_x = Math.cos( angleRads ) * this.movement_speed;
        this.move_y = Math.sin( angleRads ) * this.movement_speed;
        }

    stop()
        {
        this.is_moving = false;
        }

    queueMoveTo( x, y )
        {

        }

    moveBetween( x1, y1, x2, y2 )
        {

        }

    logic( delta )
        {
        if ( this.is_moving )
            {
            this.x += this.move_x * delta;
            this.y += this.move_y * delta;

            if ( Utilities.pointBoxCollision( this.destination_x, this.destination_y, this.x, this.y, 20, 20 ) )    //HERE
                {
                this.is_moving = false;
                }
            }
        }
    }
}