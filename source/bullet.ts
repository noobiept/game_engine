/// <reference path="container.ts" />

module Game
{
export interface BulletArgs extends ContainerArgs
    {
        x: number;
        y: number;
        movement_speed: number;

            // bullet moves in a fixed direction if an angle is given, until its out of the canvas
            // or follows a target, if an Element is given instead
        angleOrTarget: any;     // number | Element
        remove?: () => any;     // to have a different function that is called when the bullet is removed
    }


export class Bullet extends Container
    {
    movement_speed: number;
    _move_x: number;
    _move_y: number;
    _target: Element;
    _remove: () => any;


    static _all: Bullet[];
    static _container: Game.Container;

    static init()
        {
        Bullet._all = [];
        Bullet._container = new Game.Container();
        Bullet._container._has_logic = true;

        Game.addElement( Bullet._container );
        }


    constructor( args: BulletArgs )
        {
        super( args );

        this._has_logic = true;

        this.x = args.x;
        this.y = args.y;
        this.movement_speed = args.movement_speed;

            // its an angle
        if ( typeof args.angleOrTarget === 'number' )
            {
            this._move_x = Math.cos( args.angleOrTarget ) * args.movement_speed;
            this._move_y = Math.sin( args.angleOrTarget ) * args.movement_speed;
            this.rotation = args.angleOrTarget;
            this.logic = this.fixedLogic;
            }

            // an Element as the target
        else
            {
            this._target = args.angleOrTarget;
            this.logic = this.targetLogic;
            }


        if ( typeof args.remove === 'undefined' )
            {
            this._remove = this.remove;
            }

        else
            {
            this._remove = args.remove;
            }


        Bullet._container.addChild( this );
        Bullet._all.push( this );
        }


    remove()
        {
        super.remove();

        var index = Bullet._all.indexOf( this );

        Bullet._all.splice( index, 1 );
        Bullet._container.removeChild( this );
        }


    /*
        logic for when the bullet is moving in a fixed direction
     */
    fixedLogic( deltaTime )
        {
        this.x += this._move_x * deltaTime;
        this.y += this._move_y * deltaTime;

        if ( !Game.isInCanvas( this.x, this.y ) )
            {
            this._remove();
            }
        }

    /*
        logic for when the bullet is following a target
     */
    targetLogic( deltaTime )
        {
        var target = this._target;

        var angle = Utilities.calculateAngle( this.x, this.y * -1, target.x, target.y * -1 );

        this.x += Math.cos( angle ) * this.movement_speed * deltaTime;
        this.y += Math.sin( angle ) * this.movement_speed * deltaTime;

        this.rotation = angle;

        if ( Utilities.boxBoxCollision(
                this.x - this.width / 2,
                this.y - this.height / 2,
                this.width,
                this.height,
                target.x - target.width / 2,
                target.y - target.height / 2,
                target.width,
                target.height
                ))
            {
            this._remove();
            }
        }

    logic( deltaTime )
        {
            // this is going to assigned to either .fixedLogic() or .targetLogic(), depending on the type of bullet
        }
    }
}