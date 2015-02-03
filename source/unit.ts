module Game
{
export interface UnitArgs extends ContainerArgs
    {
        movement_speed?: number;
        bullet_movement_speed?: number;
        health?: number;
    }


export class Unit extends Container
    {
        // these will exist independently on every inherited class (not 1 on Unit for all)
    static _all: Unit[];
    static collidesWith: Unit[];

        // :: unit stats :: //
    movement_speed: number;
    bullet_movement_speed: number;
    health: number;

        // :: movement related :: //
    _is_moving: boolean;
    _move_x: number;
    _move_y: number;
    _move_callback: () => any;
    _destination_x: number;
    _destination_y: number;
    _path: { x: number; y: number; callback?: () => any }[];
    _loop_movement: boolean;
    _loop_path_position: number; // when looping a path, to know what is the current position the unit is going for (the path array position)

        // :: bullet related :: //
    _bullet_interval: number;   // time between firing bullets (<0 if its not active)
    _bullet_interval_count: number;
    _angle_or_target: any;

    constructor( args: UnitArgs )
        {
        super( args );

        if ( typeof args.movement_speed === 'undefined' )
            {
            args.movement_speed = 50;
            }

        if ( typeof args.health === 'undefined' )
            {
            args.health = 1;
            }

        if ( typeof args.bullet_movement_speed === 'undefined' )
            {
            args.bullet_movement_speed = 100;
            }

        this._has_logic = true;

        this.movement_speed = args.movement_speed;
        this.bullet_movement_speed = args.bullet_movement_speed;
        this.health = args.health;

        this._is_moving = false;
        this._move_x = 0;
        this._move_y = 0;
        this._move_callback = null;
        this._destination_x = 0;
        this._destination_y = 0;
        this._path = [];
        this._loop_movement = false;
        this._loop_path_position = 0;

        this._bullet_interval = -1;
        this._bullet_interval_count = 0;
        this._angle_or_target = null;

            // init the static variables of the class (if its not yet)
        var constructor = <any> this.constructor;

        if ( typeof constructor._all === 'undefined' )
            {
            constructor._all = [];
            }

        if ( typeof constructor.collidesWith === 'undefined' )
            {
            constructor.collidesWith = [];
            }


        constructor._all.push( this );
        }


    remove()
        {
        super.remove();

        var constructor = <any> this.constructor;
        var all = constructor._all;

        var index = all.indexOf( this );

        all.splice( index, 1 );
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
        @param angleOrTarget {Number|Element} - The angle of the bullet movement. If not given, then the bullet will have the unit's current rotation angle. Can be passed an Element which will work as the target of the bullet (it will follow the target until it hits it).
        @param interval - If you want to keep firing bullets at the same angle (or same target). Pass a positive number for that.
     */
    fireBullet( angleOrTarget?: any, interval?: number )
        {
        if ( typeof angleOrTarget === 'undefined' )
            {
            angleOrTarget = this.rotation;
            }

        if ( Utilities.isNumber( interval ) && interval > 0 )
            {
            this._bullet_interval = interval;
            this._bullet_interval_count = 0;
            this._angle_or_target = angleOrTarget;  // only save the target reference if we're going to continue firing at it
            }

        this._fire( angleOrTarget );
        }


    stopFiring()
        {
        this._bullet_interval = -1;
        this._bullet_interval_count = 0;
        this._angle_or_target = null;
        }

    _fire( angleOrTarget? )
        {
        if ( typeof angleOrTarget === 'undefined' )
            {
            angleOrTarget = this._angle_or_target;
            }

            // if it happens to be a target, need to make sure it hasn't been removed yet
        if ( typeof angleOrTarget !== 'number' )
            {
            if ( angleOrTarget._removed === true )
                {
                this.stopFiring();
                return;
                }
            }

        var shape = new Game.Rectangle( 0, 0, 10, 2, 'blue' );

        var bullet = new Game.Bullet({
                x: this.x,
                y: this.y,
                angleOrTarget: angleOrTarget,
                movement_speed: this.bullet_movement_speed
            });
        bullet.addChild( shape );
        }


    movementLogic( delta )
        {
        if ( this._is_moving )
            {
            this.x += this._move_x * delta;
            this.y += this._move_y * delta;

            if ( Utilities.boxBoxCollision(
                    this._destination_x,
                    this._destination_y,
                    20,
                    20,
                    this.x - this.width / 2,
                    this.y - this.height / 2,
                    this.width,
                    this.height
                    ))
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


    firingLogic( delta )
        {
        if ( this._bullet_interval > 0 )
            {
            this._bullet_interval_count += delta;

            if ( this._bullet_interval_count >= this._bullet_interval )
                {
                this._fire();
                this._bullet_interval_count = 0;
                }
            }
        }


    collisionLogic( delta )
        {
        var constructor = <any> this.constructor;
        var length = constructor.collidesWith.length;

        if ( length > 0 &&
             this.hasListeners( 'collision' ) )
            {
            var x = this.x - this.width / 2;
            var y = this.y - this.height / 2;
            var width = this.width;
            var height = this.height;

            for (var a = 0 ; a < length ; a++)
                {
                var all = constructor.collidesWith[ a ]._all;

                for (var b = all.length - 1 ; b >= 0 ; b--)
                    {
                    var unit = all[ b ];

                    if ( unit === this )
                        {
                        continue;
                        }

                    if ( Utilities.boxBoxCollision(
                                x,
                                y,
                                width,
                                height,
                                unit.x - unit.width / 2,
                                unit.y - unit.height / 2,
                                unit.width,
                                unit.height
                            ))
                        {
                        this.dispatchEvent( 'collision', {
                                element: this,
                                collidedWith: unit
                            });
                        return;
                        }
                    }
                }
            }
        }


    logic( delta )
        {
        this.movementLogic( delta );
        this.firingLogic( delta );
        this.collisionLogic( delta );
        }
    }
}