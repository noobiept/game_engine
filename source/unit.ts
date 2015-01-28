module Game
{
export interface UnitArgs
    {
        movement_speed: number;
    }


export class Unit extends Container
    {
    movement_speed: number;

    _is_moving: boolean;
    _move_x: number;
    _move_y: number;
    _move_callback: () => any;
    _destination_x: number;
    _destination_y: number;
    _path: { x: number; y: number; callback?: () => any }[];
    _loop_movement: boolean;
    _loop_path_position: number; // when looping a path, to know what is the current position the unit is going for (the path array position)

    constructor( args: UnitArgs )
        {
        super();

        this._has_logic = true;

        this.movement_speed = args.movement_speed;
        this._is_moving = false;
        this._move_x = 0;
        this._move_y = 0;
        this._move_callback = null;
        this._destination_x = 0;
        this._destination_y = 0;
        this._path = [];
        this._loop_movement = false;
        this._loop_path_position = 0;
        }


    /**
        Clears any previous path, and forces the unit to move to the specified position.
     */
    moveTo( x: number, y: number, callback?: () => any )
        {
        if ( !Utilities.isFunction( callback ) )
            {
            callback = null;
            }

        this._loop_movement = false;
        this._path.length = 0;
        this._path.push({
                x: x,
                y: y,
                callback: callback
            });

        this.moveToNext();
        }

    /**
        Move the next position in the path
     */
    moveToNext()
        {
        var next;

        if ( this._loop_movement )
            {
            this._loop_path_position++;

            if ( this._loop_path_position >= this._path.length )
                {
                this._loop_path_position = 0;
                }

            next = this._path[ this._loop_path_position ];
            }

        else
            {
            next = this._path.shift();
            }


        if ( next )
            {
            var x = next.x;
            var y = next.y;

            this._is_moving = true;
            this._destination_x = x;
            this._destination_y = y;
            this._move_callback = next.callback;

            var angleRads = Utilities.calculateAngle( this.x, this.y * -1, x, y * -1 );

            this._move_x = Math.cos( angleRads ) * this.movement_speed;
            this._move_y = Math.sin( angleRads ) * this.movement_speed;

            return true;
            }

        else
            {
            this._is_moving = false;
            }

        return false;
        }

    stop()
        {
        this._path.length = 0;
        this._is_moving = false;
        this._loop_movement = false;
        }


    queueMoveTo( x: number, y: number, callback?: () => any )
        {
        if ( !Utilities.isFunction( callback ) )
            {
            callback = null;
            }

        this._path.push({
                x: x,
                y: y,
                callback: callback
            });
        }

    moveLoop( path: { x: number; y: number; callback?: () => any }[] )
        {
        this._loop_movement = true;
        this._path = path;
        this._loop_path_position = -1;   // will be added in .moveToNext() and so will start at the 0 position

        this.moveToNext();
        }


    /**
        @param rotation - if not given, then the bullet will have the unit's current rotation angle
     */
    fireBullet( rotation?: number )
        {
        if ( typeof rotation === 'undefined' )
            {
            rotation = this.rotation;
            }

        var shape = new Game.Rectangle( 0, 0, 10, 2, 'blue' );

        var bullet = new Game.Bullet({
                x: this.x + this.width / 2,
                y: this.y + this.height / 2,
                angle: rotation,
                movement_speed: 100
            });
        bullet.addChild( shape );
        }


    logic( delta )
        {
        if ( this._is_moving )
            {
            this.x += this._move_x * delta;
            this.y += this._move_y * delta;

            if ( Utilities.boxBoxCollision( this._destination_x, this._destination_y, 20, 20, this.x, this.y, this.width, this.height ) )
                {
                this.x += this._move_x * delta;
                this.y += this._move_y * delta;

                if ( this._move_callback )
                    {
                    this._move_callback();
                    }

                this.moveToNext();
                }
            }
        }
    }
}