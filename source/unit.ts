/// <reference path="container.ts" />
/// <reference path="utilities.ts" />

module Game
{
export interface UnitArgs extends ContainerArgs
    {
    movement_speed?: number;
    health?: number;
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
 * - `collision` -- `listener( data: { element: Unit; bullet?: Bullet; collidedWith: Unit; } );`
 *
 * Examples -- `2048`, `basic_example`, `bullets`, `collision_detection`, `custom_element`, `tower_defense`
 */
export class Unit extends Container
    {
        // these will exist independently on every inherited class (not 1 on Unit for all)
    static _all: Unit[];
    static collidesWith: Unit[];

        // :: unit stats :: //
    movement_speed: number;
    health: number;

        // :: movement related :: //
    protected _movement_type: UnitMovement;
    protected _is_moving: boolean;
    protected _move_x: number;
    protected _move_y: number;
    protected _move_callback: () => any;
    protected _destination_x: number;
    protected _destination_y: number;
    protected _is_destination_x_diff_positive: boolean;
    protected _is_destination_y_diff_positive: boolean;
    protected _path: { x: number; y: number; callback?: () => any }[];
    protected _loop_path_position: number; // when looping a path, to know what is the current position the unit is going for (the path array position)

        // :: weapon related :: //
    protected _weapons: Weapon[];


    constructor( args?: UnitArgs )
        {
        super( args );

        if ( typeof args === 'undefined' )
            {
            args = {};
            }

        if ( typeof args.movement_speed === 'undefined' )
            {
            args.movement_speed = 50;
            }

        if ( typeof args.health === 'undefined' )
            {
            args.health = 1;
            }


        this.movement_speed = args.movement_speed;
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

        this._weapons = [];


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
     * Add a weapon to this unit.
     *
     * @param weapon The weapon to be added.
     * @return The weapon id, to be used later to retrieve the weapon object.
     */
    addWeapon( weapon: Weapon )
        {
        this._weapons.push( weapon );

        weapon.element = this;

        return this._weapons.length - 1;
        }


    /**
     * Remove the weapon from this unit.
     */
    removeWeapon( weaponId: number )
        {
        var weapon = this._weapons.splice( weaponId, 1 )[ 0 ];

        weapon.element = null;

        return weapon;
        }


    /**
     * Get a weapon off this unit.
     */
    getWeapon( weaponId: number )
        {
        return this._weapons[ weaponId ];
        }


    /**
     * Get all the weapons.
     * Useful for firing all the weapons at the same time for example.
     */
    getAllWeapons()
        {
        return this._weapons;
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
    protected _removeNow()
        {
        if ( !this._removed )
            {
            super.remove();

            var constructor = <any> this.constructor;
            var all = constructor._all;

            var index = all.indexOf( this );

            all.splice( index, 1 );
            }
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

        if ( !this._is_moving )
            {
            this.moveTo( x, y, callback );
            return;
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
     * Its called in every update. This is going to be assigned to a different movement logic method, depending on the current movement type.
     *
     * @param delta Time elapsed since the last update.
     */
    protected movementLogic( delta: number )
        {
            // empty
        }


    /**
     * Deals with movement in a certain direction/angle.
     * Calls the function callback when it reaches the end of the canvas.
     *
     * @param delta Time elapsed since the last update.
     */
    protected movementAngleLogic( delta: number )
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
    protected movementPathLogic( delta: number )
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

                    // save the callback, since its going to be changed in the method below
                var moveCallback = this._move_callback;
                this.moveToNext();

                    // this function is called after the '.moveToNext()', to allow it to cancel the movement, if needed
                if ( moveCallback )
                    {
                    moveCallback();
                    }
                }
            }
        }


    /**
     * Logic to determine when a unit has collided with another unit.
     *
     * @param delta Time elapsed since the last update.
     */
    protected collisionLogic( delta: number )
        {
        var constructor = <any> this.constructor;
        var length = constructor.collidesWith.length;

        if ( length > 0 &&
             this.hasListeners( 'collision' ) )
            {
            var vertices = this.getVertices();

            for (var a = 0 ; a < length ; a++)
                {
                var all = constructor.collidesWith[ a ]._all;

                    // the 'all' array is only initialized when the first object is created. So add this check for the case when we're checking the collision against a class that doesn't have any object yet
                if ( !all )
                    {
                    continue;
                    }

                for (var b = all.length - 1 ; b >= 0 ; b--)
                    {
                    var unit = all[ b ];

                        // can't collide with itself
                    if ( unit === this )
                        {
                        continue;
                        }

                    var otherVertices = unit.getVertices();

                    if ( CollisionDetection.polygon( vertices, otherVertices ) )
                        {
                        this.dispatchEvent( 'collision', {
                                element: this,
                                collidedWith: unit
                            });
                        return;
                        }


                        // check the weapons/bullets as well
                    for (var c = this._weapons.length - 1 ; c >= 0 ; c--)
                        {
                        if ( this._weapons[ c ].checkCollision( unit ) )
                            {
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

        for (var a = this._weapons.length - 1 ; a >= 0 ; a--)
            {
            this._weapons[ a ].logic( delta );
            }

        this.collisionLogic( delta );
        }


    /**
     * @return A clone of this unit.
     */
    clone()
        {
        var a;
        var children = [];
        var length = this._children.length;

        for (a = 0 ; a < length ; a++)
            {
            children.push( this._children[ a ].clone() );
            }

        var unit = new Game.Unit({
                x: this.x,
                y: this.y,
                children: children,
                movement_speed: this.movement_speed,
                health: this.health
            });
        unit.opacity = this.opacity;
        unit.visible = this.visible;
        unit.scaleX = this.scaleX;
        unit.scaleY = this.scaleY;

        for (a = 0 ; a < this._weapons.length ; a++)
            {
            unit._weapons.push( this._weapons[ a ].clone() );
            }

        return unit;
        }
    }
}