/// <reference path="container.ts" />
/// <reference path="utilities.ts" />

module Game
{
export interface BulletArgs extends ContainerArgs
    {
        // bullet moves in a fixed direction if an angle is given, until its out of the canvas (in radians)
        // or follows a target, if an Element is given instead
    angleOrTarget: number | Element;
    movement_speed: number;
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
 *             movement_speed: 100
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
    movement_speed: number;
    protected _move_x: number;
    protected _move_y: number;
    protected _target: Element;


    constructor( args: BulletArgs )
        {
        super( args );

            // movement speed argument
        this.movement_speed = args.movement_speed;


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
        this._move_x = Math.cos( angle ) * this.movement_speed;
        this._move_y = Math.sin( angle ) * this.movement_speed;
        this.rotation = angle;
        this.logic = this.fixedLogic;
        }


    /**
     * The bullet will follow the target, until it hits.
     *
     * @param target The element to go to.
     */
    setTarget( target: Element )
        {
        this._target = target;
        this.logic = this.targetLogic;
        }


    /**
     * Logic for when the bullet is moving in a fixed direction.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    fixedLogic( deltaTime: number )
        {
        this.x += this._move_x * deltaTime;
        this.y += this._move_y * deltaTime;

        if ( !Game.getCanvas().isInCanvas( this.x, this.y ) )
            {
            this.remove();
            }
        }

    /**
     * Logic for when the bullet is following a target.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    targetLogic( deltaTime: number )
        {
        var target = this._target;

        var angle = Utilities.calculateAngle( this.x, this.y * -1, target.x, target.y * -1 );

        this.x += Math.cos( angle ) * this.movement_speed * deltaTime;
        this.y += Math.sin( angle ) * this.movement_speed * deltaTime;

        this.rotation = angle;

        if ( CollisionDetection.polygonPolygonList(
                this.getVertices(),
                target.getVertices()
                ))
            {
            this.dispatchEvent( 'collision', {
                    element: this,
                    collidedWith: target
                });
            this.remove();
            }
        }


    /**
     * This is going to assigned to either .fixedLogic() or .targetLogic(), depending on the type of bullet.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime: number )
        {
            // empty
        }


    /**
     * Clear the target reference, before removing.
     * Dispatch the `remove` event as well.
     */
    remove()
        {
        if ( !this._removed )
            {
            this._target = null;
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

        var angleOrTarget;

        if ( this._target )
            {
            angleOrTarget = this._target;
            }

        else
            {
            angleOrTarget = this.rotation;
            }


        var bullet = new Game.Bullet({
                x: this.x,
                y: this.y,
                children: children,
                movement_speed: this.movement_speed,
                angleOrTarget: angleOrTarget
            });
        bullet.opacity = this.opacity;
        bullet.visible = this.visible;
        bullet.scaleX = this.scaleX;
        bullet.scaleY = this.scaleY;

        return bullet;
        }
    }
}