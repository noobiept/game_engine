/// <reference path="container.ts" />

module Game
{
export interface BulletArgs
    {
        x: number;
        y: number;
        angle: number;
        movement_speed: number;
    }


export class Bullet extends Container
    {
    movement_speed: number;
    _move_x: number;
    _move_y: number;
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
        super();

        this._has_logic = true;

        this.x = args.x;
        this.y = args.y;
        this.movement_speed = args.movement_speed;
        this._move_x = Math.cos( args.angle ) * args.movement_speed;
        this._move_y = Math.sin( args.angle ) * args.movement_speed;
        this.rotation = args.angle;

        Bullet._container.addChild( this );
        Bullet._all.push( this );
        }


    clear()
        {
        var index = Bullet._all.indexOf( this );

        Bullet._all.splice( index, 1 );
        Bullet._container.removeChild( this );
        }


    logic( deltaTime )
        {
        this.x += this._move_x * deltaTime;
        this.y += this._move_y * deltaTime;

        if ( !Game.isInCanvas( this.x, this.y ) )
            {
            this.clear();
            }
        }
    }
}