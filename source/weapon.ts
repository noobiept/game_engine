/// <reference path="canvas.ts" />
/// <reference path="bullet.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="collision_detection.ts" />

module Game
{
export interface WeaponArgs
    {
    element: Element;       // the associated element
    bulletContainer: Container | Canvas;    // where to add the bullet objects
    fireInterval?: number;      // time between each shot
    damage?: number;
    }


export class Weapon
    {
    element: Element;       // element that owns the weapon (the bullets will be fired from its position, etc)
    damage: number;
    fire_interval: number;  // time between each bullet fire
    protected _is_ready: boolean;
    protected _fire_count: number;
    protected _bullet_types: Bullet[];  // various bullet types that can be fired
    protected _bullet_intervals: { count: number; bulletId: number; interval: number; angleOrTarget: number | Element }[];  // all the firing intervals
    protected _bullets: Bullet[];                       // has all the bullets fired by this weapon
    protected _bullet_container: Container | Canvas;    // where to add the bullet objects


    constructor( args: WeaponArgs )
        {
        if ( typeof args.damage === 'undefined' )
            {
            args.damage = 1;
            }

        if ( typeof args.fireInterval === 'undefined' )
            {
            args.fireInterval = 0;
            }

        this.element = args.element;
        this.damage = args.damage;
        this.fire_interval = args.fireInterval;
        this._fire_count = 0;
        this._is_ready = true;

        var defaultBulletShape = new Game.Rectangle({
                width: 10,
                height: 2,
                color: 'blue'
            });
        var defaultBullet = new Game.Bullet({
                angleOrTarget: 0,
                children: defaultBulletShape,
                movementSpeed: 100
            });
        this._bullet_types = [ defaultBullet ];
        this._bullet_intervals = [];
        this._bullet_container = args.bulletContainer;
        this._bullets = [];
        }


    /**
     * A weapon can potentially fire different types of bullets.
     * To do so, first need to associate a bullet type to the unit, and then later on specify the bullet type in the `.fire()` or `.forceFire()` call, with the returned id from this function.
     *
     * @param bullet A bullet object, to be cloned every time a bullet is fired later on.
     * @return The bullet type id, that identifies this type. Use it when calling `.fire()` or `.forceFire()`.
     */
    addBulletType( bullet: Bullet )
        {
        this._bullet_types.push( bullet );

        return this._bullet_types.length - 1;
        }


    /**
     * Stop firing bullets (if it was set to fire at a certain interval).
     */
    stopFiring()
        {
        this._bullet_intervals.length = 0;
        }


    /**
     * The firing pattern, for example if it fires one bullet in the given direction, or if it fires one in the direction and two to the sides, etc.
     * You can override this in derived classes to easily make different types of weapons.
     * The default is to fire a single bullet in the angle/target given.
     */
    firingPattern( angleOrTarget: number | Element, bulletId: number )
        {
        return this._fire( angleOrTarget, bulletId );
        }


    /**
     * Respects the firing interval (can only fire a bullet once the weapon is ready (the interval has passed)).
     */
    fire( angleOrTarget?: number | Element, bulletId?: number )
        {
        if ( this._is_ready )
            {
            this._fire_count = 0;
            this._is_ready = false;

            if ( typeof bulletId === 'undefined' )
                {
                bulletId = 0;
                }

            if ( typeof angleOrTarget === 'undefined' )
                {
                if ( this.element )
                    {
                    angleOrTarget = this.element.rotation;
                    }

                else
                    {
                    angleOrTarget = 0;
                    }
                }

            return this.firingPattern( angleOrTarget, bulletId );
            }

        return false;
        }


    /**
     * Ignores the firing interval (fires immediately).
     * Can be set to fire at a given interval.
     *
     * @param angleOrTarget Either the `angle` of the bullet movement, or an `Element` which will work as the target of the bullet (it will follow the target until it hits it).
     * @param bulletId The id of the bullet type to fire. See `.addBulletType()` for more information.
     * @param interval If you want to keep firing bullets at the same angle (or same target). Pass a positive number for that.
     */
    forceFire( angleOrTarget?: number | Element, bulletId?: number, interval?: number )
        {
        if ( typeof bulletId === 'undefined' )
            {
            bulletId = 0;
            }

        if ( typeof angleOrTarget === 'undefined' )
            {
            if ( this.element )
                {
                angleOrTarget = this.element.rotation;
                }

            else
                {
                angleOrTarget = 0;
                }
            }

        if ( Utilities.isNumber( interval ) && interval > 0 )
            {
            this._bullet_intervals.push({
                    count: 0,
                    interval: interval,
                    bulletId: bulletId,
                    angleOrTarget: angleOrTarget
                });
            }

        return this.firingPattern( angleOrTarget, bulletId );
        }


    /**
     * Fire a bullet at a certain angle, or towards a specific target.
     *
     * Returns `false` if it failed to fire a bullet (if the target was already removed).
     */
    protected _fire( angleOrTarget: number | Element, bulletId: number )
        {
        var _this = this;

            // if it happens to be a target, need to make sure it hasn't been removed yet
        if ( typeof angleOrTarget !== 'number' )
            {
            if ( angleOrTarget.isRemoved() === true )
                {
                return false;
                }
            }

        var bullet = this._bullet_types[ bulletId ].clone();

        if ( typeof angleOrTarget === 'number' )
            {
            bullet.setAngle( angleOrTarget );
            }

        else
            {
            bullet.setTarget( angleOrTarget );
            }

        if ( this.element )
            {
            bullet.x = this.element.x;
            bullet.y = this.element.y;
            bullet.category = this.element.category;
            bullet.collidesWith = this.element.collidesWith;

            bullet.addEventListener( 'collision', function( data )
                {
                _this.element.dispatchEvent( 'collision', {
                        element: _this.element,
                        bullet: data.element,
                        collidedWith: data.collidedWith
                    });
                });
            }

        bullet.addEventListener( 'remove', function( data )
            {
            var index = _this._bullets.indexOf( bullet );

            _this._bullets.splice( index, 1 );
            });

        this._bullet_container.addChild( bullet );
        this._bullets.push( bullet );

        return true;
        }


    /**
     * Deals with the fire interval logic, and with the set intervals logic.
     */
    logic( deltaTime: number )
        {
            // check if the weapon is ready to be fired
        if ( this._fire_count >= this.fire_interval )
            {
            this._is_ready = true;
            }

            // not yet, keep counting
        else
            {
            this._fire_count += deltaTime;
            }


            // deal with the bullets that may be set to fire at a set interval
        var intervals = this._bullet_intervals;

        if ( intervals.length > 0 )
            {
            for (var a = intervals.length - 1 ; a >= 0 ; a--)
                {
                var interval = intervals[ a ];

                interval.count += deltaTime;

                if ( interval.count >= interval.interval )
                    {
                    var continueFiring = this.firingPattern( interval.angleOrTarget, interval.bulletId );

                        // if its firing at a target, and the target is not available anymore, stop the interval
                    if ( !continueFiring )
                        {
                        intervals.splice( a, 1 );
                        }

                    else
                        {
                        interval.count = 0;
                        }
                    }
                }
            }
        }


    isReady()
        {
        return this._is_ready;
        }


    clone()
        {
        var weapon = new Game.Weapon({
                element: this.element,
                bulletContainer: this._bullet_container,
                fireInterval: this.fire_interval,
                damage: this.damage
            });

            // starts at 1 to ignore the default type
        for (var a = 1 ; a < this._bullet_types.length ; a++)
            {
            weapon._bullet_types.push( this._bullet_types[ a ].clone() );
            }

        return weapon;
        }


    remove()
        {
        var a;

            // remove the bullet types
        for (a = this._bullet_types.length - 1 ; a >= 0 ; a--)
            {
            this._bullet_types[ a ].remove();
            }
        this._bullet_types.length = 0;

            // clear the bullets array
            // don't remove the actual bullets (let them hit their targets/go out of bounds)
        this._bullets.length = 0;

            // clear other variables
        this.element = null;
        this._bullet_intervals.length = 0;
        this._bullet_container = null;
        }
    }
}