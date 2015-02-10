/// <reference path="event_dispatcher.ts" />

module Game
{
export interface ElementArgs extends EventDispatcherArgs
    {
        x?: number;
        y?: number;
    }

export class Element extends EventDispatcher
    {
    x: number;
    y: number;
    width: number;
    height: number;

    _rotation: number;   // in radians (clockwise)
    _container: Container;
    _has_logic: boolean; // to know if we need to run the .logic() method or not
    _removed: boolean;  // a reference to this element may be saved in several places, so we need a way to know if its ok to work on the element or not


    constructor( args?: ElementArgs )
        {
        super( args );

        var x = 0;
        var y = 0;

        if ( typeof args !== 'undefined' )
            {
            if ( typeof args.x !== 'undefined' )
                {
                x = args.x;
                }

            if ( typeof args.y !== 'undefined' )
                {
                y = args.y;
                }
            }


        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this._container = null;
        this._rotation = 0;
        this._has_logic = false;
        this._removed = false;
        }


    /**
        Draws just this element

        @param ctx - canvas context
        @abstract
     */

    drawElement( ctx: CanvasRenderingContext2D )
        {
        throw new Error( 'Implement .drawElement().' );
        }


    /*
        Draws this element, and all of its _children
     */

    draw( ctx: CanvasRenderingContext2D )
        {
        this.drawElement( ctx );
        }


    /*
        Logic code here (runs every tick)
     */

    logic( deltaTime )
        {
            // optional
        }


    /**
        @abstract
     */
    intersect( x: number, y: number, event: Event ): boolean
        {
        throw new Error( 'Implement .intersect().' );
        }


    /**
        @returns - Rotation in radians
     */
    get rotation()
        {
        return this._rotation;
        }

    /**
        @param angle - Rotate by a certain angle (in radians)
     */
    set rotation( angle: number )
        {
        this.rotate( angle, false );
        }

    /**
        @param angle - angle of rotation
        @param degrees - whether the angle provided is in degrees or radians
     */
    rotate( angle: number, degrees?: boolean )
        {
        if ( degrees === true )
            {
            this._rotation = Math.PI / 180 * angle;
            }

        else
            {
            this._rotation = angle;
            }
        }

    remove()
        {
        this._removed = true;

        if ( this._container !== null )
            {
            this._container.removeChild( this );
            }

        else
            {
            Game.removeElement( this );
            }
        }
    }
}