/// <reference path="container.ts" />

module Game
{
export interface UnitArgs extends ContainerArgs
    {
    movement_speed?: number;
    bullet_movement_speed?: number;
    health?: number;
    bullet_shape?: { classRef: (args: any) => void; args: Object; };
    }


export enum UnitMovement
    {
        stop,           // unit isn't moving
        angle,          // move in a specific direction/angle
        destination,    // move to a x/y position
        loop            // move between some x/y positions
    }


/**
 * Basic Usage:
 *
 *     var unitShape = new Game.Rectangle({
 *             width: 10,
 *             height: 10,
 *             color: 'blue'
 *         });
 *     var unit = new Game.Unit({
 *             x: 100,
 *             y: 100,
 *             movement_speed: 100,
 *             children: unitShape
 *         });
 *     Game.addElement( unit );
 *
 *     unit.moveTo( 300, 100 );
 *     unit.queueMoveTo( 200, 200, function()
 *         {
 *         console.log( 'Done!' );
 *         });
 *
 * Events:
 *
 * - `click` -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup` -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 * - `collision` -- `listener( data: { element: Unit; collidedWith: Unit; } );`
 *
 * Examples -- `2048`, `basic_example`, `bullets`, `collision_detection`, `custom_element`
 */
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
    _movement_type: UnitMovement;
    _is_moving: boolean;
    _move_x: number;
    _move_y: number;
    _move_callback: () => any;
    _destination_x: number;
    _destination_y: number;
    _is_destination_x_diff_positive: boolean;
    _is_destination_y_diff_positive: boolean;
    _path: { x: number; y: number; callback?: () => any }[];
    _loop_path_position: number; // when looping a path, to know what is the current position the unit is going for (the path array position)

        // :: bullet related :: //
    _bullet_interval: number;   // time between firing bullets (<0 if its not active)
    _bullet_interval_count: number;
    _angle_or_target: any;
    _bullets: Bullet[];
    _bullet_shape: { classRef: (args: any) => void; args: Object; };

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

        if ( typeof args.bullet_shape === 'undefined' )
            {
            args.bullet_shape = null;
            }

        this._has_logic = true;

        this.movement_speed = args.movement_speed;
        this.bullet_movement_speed = args.bullet_movement_speed;
        this.health = args.health;

        this._movement_type = UnitMovement.stop;
        this._is_moving = false;
        this._move_x = 0;
        this._move_y = 0;
        this._move_callback = null;
        this._destination_x = 0;
        this._destination_y = 0;
        this._path = [];
        this._loop_path_position = 0;
        this._is_destination_x_diff_positive = false;
        this._is_destination_y_diff_positive = false;

        this._bullet_interval = -1;
        this._bullet_interval_count = 0;
        this._angle_or_target = null;
        this._bullets = [];
        this._bullet_shape = args.bullet_shape;

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


    /**
     * @param animationDuration If this is passed, then the unit's opacity will be animated until it reaches 0, and only then will the unit be removed
     */
    remove( animationDuration?: number )
        {
        if ( typeof animationDuration === 'undefined' )
            {
            this._removeNow();
            }

        else
            {
            var tween = new Tween( this );
            var _this = this;

            tween.to({
                    opacity: 0
                }, animationDuration ).call( function()
                {
                _this._removeNow();
                });
            tween.start();
            }
        }


    /**
     * Remove the unit immediately.
     */
    _removeNow()
        {
        super.remove();

        var constructor = <any> this.constructor;
        var all = constructor._all;

        var index = all.indexOf( this );

        all.splice( index, 1 );
        }


    /**
     * Clears any previous path, and forces the unit to move to the specified position.
     */
    moveTo( x: number, y: number, callback?: () => any )
        {
        if ( !Utilities.isFunction( callback ) )
            {
            callback = null;
            }

        this._movement_type = UnitMovement.destination;
        this._path.length = 0;
        this._path.push({
                x: x,
                y: y,
                callback: callback
            });

        this.movementLogic = this.movementPathLogic;
        this.moveToNext();
        }


    /**
     * Move to the next position in the path.
     */
    moveToNext()
        {
        var next;

        if ( this._movement_type === UnitMovement.loop )
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

            this._is_destination_x_diff_positive = x - this.x > 0;
            this._is_destination_y_diff_positive = y - this.y > 0;


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


    /**
     * Stop moving.
     */
    stop()
        {
        this._movement_type = UnitMovement.stop;
        this._path.length = 0;
        this._is_moving = false;
        }


    /**
     * Add a x/y position to the movement queue.
     *
     * @param x The x position.
     * @param y The y position.
     * @param callback Optional function to be called when it reaches this position.
     */
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


    /**
     * Move continuously between the positions in the path.
     *
     * @param path The path of the movement.
     */
    moveLoop( path: { x: number; y: number; callback?: () => any }[] )
        {
        this._movement_type = UnitMovement.loop;
        this._path = path;
        this._loop_path_position = -1;   // will be added in .moveToNext() and so will start at the 0 position

        this.movementLogic = this.movementPathLogic;
        this.moveToNext();
        }


    /**
     * Move continuously in a specific angle.
     *
     * @angle The angle of the direction. Positive clockwise.
     * @degrees If the `angle` value is in degrees or radians.
     * @callback To be called when it reaches the end of the canvas.
     */
    moveAngle( angle: number, degrees?: boolean, callback?: () => any )
        {
        if ( degrees === true )
            {
            angle = Math.PI / 180 * angle;
            }

        this._movement_type = UnitMovement.angle;
        this._is_moving = true;

        this._move_x = Math.cos( angle ) * this.movement_speed;
        this._move_y = Math.sin( angle ) * this.movement_speed;

        this.rotation = angle;
        this._move_callback = callback;

        this.movementLogic = this.movementAngleLogic;
        }


    /**
     * @param angleOrTarget {Number|Element} The angle of the bullet movement. If not given, then the bullet will have the unit's current rotation angle. Can be passed an Element which will work as the target of the bullet (it will follow the target until it hits it).
     * @param interval If you want to keep firing bullets at the same angle (or same target). Pass a positive number for that.
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


    /**
     * Stop firing bullets (if it was set to fire at a certain interval).
     */
    stopFiring()
        {
        this._bullet_interval = -1;
        this._bullet_interval_count = 0;
        this._angle_or_target = null;
        }


    /**
     * Fire a bullet at a certain angle, or towards a specific target.
     *
     * @param angleOrTarget The angle or target of the bullet.
     */
    _fire( angleOrTarget?: any )
        {
        var _this = this;

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


        var shape;

        if ( this._bullet_shape !== null )
            {
            shape = new this._bullet_shape.classRef( this._bullet_shape.args );
            }

        else
            {
            shape = new Game.Rectangle({
                    width: 10,
                    height: 2,
                    color: 'blue'
                });
            }


        var bullet = new Game.Bullet({
                x: this.x,
                y: this.y,
                angleOrTarget: angleOrTarget,
                movement_speed: this.bullet_movement_speed,
                remove: function()
                    {
                    var index = _this._bullets.indexOf( bullet );

                    _this._bullets.splice( index, 1 );

                    bullet.remove();
                    }
            });
        bullet.addChild( shape );

        this._bullets.push( bullet );
        }


    /**
     * Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.
     *
     * @param delta Time elapsed since the last update.
     */
    movementLogic( delta: number )
        {
            // empty
        }


    /**
     * Deals with movement in a certain direction/angle.
     * Calls the function callback when it reaches the end of the canvas.
     *
     * @param delta Time elapsed since the last update.
     */
    movementAngleLogic( delta: number )
        {
        if ( this._is_moving )
            {
            this.x += this._move_x * delta;
            this.y += this._move_y * delta;

            if ( !Game.getCanvas().isInCanvas( this.x, this.y ) )
                {
                if ( this._move_callback )
                    {
                    this._move_callback();
                    }
                }
            }
        }


    /**
     * Deals with movement to a x/y position.
     * Calls the function callback when it reaches the destination.
     *
     * @param delta Time elapsed since the last update.
     */
    movementPathLogic( delta: number )
        {
        if ( this._is_moving )
            {
            this.x += this._move_x * delta;
            this.y += this._move_y * delta;

            var diffX = this._destination_x - this.x;
            var diffY = this._destination_y - this.y;

                // going from a positive difference to a negative
                // we switch the signal so that we only need to check >= 0 below
            if ( this._is_destination_x_diff_positive )
                {
                diffX *= -1;
                }

            if ( this._is_destination_y_diff_positive )
                {
                diffY *= -1;
                }

                // means we reached the destination
            if ( diffX >= 0 && diffY >= 0 )
                {
                this.x = this._destination_x;
                this.y = this._destination_y;

                if ( this._move_callback )
                    {
                    this._move_callback();
                    }

                this.moveToNext();
                }
            }
        }


    /**
     * You can set the unit to fire bullets at a certain interval. This is the function that deals with that logic.
     *
     * @param delta Time elapsed since the last update.
     */
    firingLogic( delta: number )
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


    /**
     * Logic to determine when a unit has collided with another unit.
     *
     * @param delta Time elapsed since the last update.
     */
    collisionLogic( delta: number )
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

                        // can't collide with itself
                    if ( unit === this )
                        {
                        continue;
                        }

                    var unitWidth = unit.width;
                    var unitHeight = unit.height;
                    var unitX = unit.x - unitWidth / 2;
                    var unitY = unit.y - unitHeight / 2;

                    if ( Utilities.boxBoxCollision(
                            x,     y,     width,     height,
                            unitX, unitY, unitWidth, unitHeight
                            ))
                        {
                        this.dispatchEvent( 'collision', {
                                element: this,
                                collidedWith: unit
                            });
                        return;
                        }


                        // check the bullets as well
                    for (var c = this._bullets.length - 1 ; c >= 0 ; c--)
                        {
                        var bullet = this._bullets[ c ];

                        if ( Utilities.boxBoxCollision(
                                    bullet.x - bullet.width / 2,
                                    bullet.y - bullet.height / 2,
                                    bullet.width,
                                    bullet.height,
                                    unitX,
                                    unitY,
                                    unitWidth,
                                    unitHeight
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
        }


    /**
     * Unit's logic function, that gets called in every update.
     *
     * @param delta Time elapsed since the last update.
     */
    logic( delta: number )
        {
        this.movementLogic( delta );
        this.firingLogic( delta );
        this.collisionLogic( delta );
        }


    /**
     * @return A clone of this unit.
     */
    clone()
        {
        var children = [];
        var length = this._children.length;

        for (var a = 0 ; a < length ; a++)
            {
            children.push( this._children[ a ].clone() );
            }

        var unit = new Game.Unit({
                x: this.x,
                y: this.y,
                children: children,
                movement_speed: this.movement_speed,
                bullet_movement_speed: this.bullet_movement_speed,
                health: this.health,
                bullet_shape: this._bullet_shape
            });
        unit.opacity = this.opacity;
        unit.visible = this.visible;
        unit.scaleX = this.scaleX;
        unit.scaleY = this.scaleY;

        return unit;
        }
    }
}