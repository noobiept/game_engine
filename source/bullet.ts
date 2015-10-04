/// <reference path="container.ts" />
/// <reference path="utilities.ts" />

module Game
{
export interface BulletArgs extends ContainerArgs
    {
        // bullet moves in a fixed direction if an angle is given, until its out of the canvas (in radians)
        // or follows a target, if an Element is given instead
    angleOrTarget?: number | Element;
    movementSpeed: number;
    }


/**
 * Basic Usage:
 *
 *     var bulletShape = new Game.Rectangle({
 *             width: 10,
 *             height: 2,
 *             color: 'blue'
 *         });
 *     var bullet = new Game.Bullet({
 *             x: 10,
 *             y: 10,
 *             angleOrTarget: 0,
 *             movementSpeed: 100
 *         });
 *     bullet.addChild( bulletShape );
 *     bullet.addEventListener( 'remove', function( data )
 *         {
 *         console.log( 'Bullet removed!' );
 *         });
 *
 *     Game.addElement( bullet );
 *
 * Events:
 *
 * - `click` -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup` -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 * - `collision` -- `listener( data: { element: Bullet; collidedWith: Element; } );`    // only when it has a set target.
 * - `remove` -- `listener( data: { element: Bullet; };`
 */
export class Bullet extends Container
    {
    movement: Movement;


    constructor( args: BulletArgs )
        {
        super( args );

        if ( typeof args.angleOrTarget === 'undefined' )
            {
            args.angleOrTarget = 0;
            }

        this.movement = new Game.Movement({
                element: this,
                movementSpeed: args.movementSpeed
            });

            // angle or target argument
        var angleOrTarget = args.angleOrTarget;

            // its an angle
        if ( typeof angleOrTarget === 'number' )
            {
            this.setAngle( angleOrTarget );
            }

            // an Element as the target
        else
            {
            this.setTarget( angleOrTarget );
            }
        }


    /**
     * The bullet will travel in a set direction, based on the angle given.
     *
     * @param angle In radians.
     */
    setAngle( angle: number )
        {
        var _this = this;

        this.movement.moveAngle( angle, false, function()
            {
            _this.remove();
            });
        }


    /**
     * The bullet will follow the target, until it hits.
     *
     * @param target The element to go to.
     */
    setTarget( target: Element )
        {
        this.movement.follow( target );
        }


    /**
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime: number )
        {
        this.movement.logic( deltaTime );
        }


    /**
     * Clear the target reference, before removing.
     * Dispatch the `remove` event as well.
     */
    remove()
        {
        if ( !this._removed )
            {
            this.movement.remove();
            this.movement = null;
            this.dispatchEvent( 'remove', { element: this } );

            super.remove();
            }
        }


    /**
     * Create a clone of this element.
     */
    clone()
        {
        var children = [];
        var length = this._children.length;

        for (var a = 0 ; a < length ; a++)
            {
            children.push( this._children[ a ].clone() );
            }

        var bullet = new Game.Bullet({
                x: this.x,
                y: this.y,
                children: children,
                movementSpeed: this.movement.movement_speed
            });
        bullet.opacity = this.opacity;
        bullet.visible = this.visible;
        bullet.scaleX = this.scaleX;
        bullet.scaleY = this.scaleY;

        return bullet;
        }
    }
}