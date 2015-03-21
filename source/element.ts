/// <reference path="event_dispatcher.ts" />

module Game
{
export interface ElementArgs extends EventDispatcherArgs
    {
        x?: number;
        y?: number;
    }


/**
 * Base class for a canvas element. Don't create an object directly.
 *
 * @abstract
 */
export class Element extends EventDispatcher
    {
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;    // value between 0 and 1
    visible: boolean;    // whether the element is drawn or not

        // optional properties, only for when using a Grid
    column: number;
    line: number;

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


        this.visible = true;
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.opacity = 1;
        this.column = -1;
        this.line = -1;
        this._container = null;
        this._rotation = 0;
        this._has_logic = false;
        this._removed = false;
        }


    /**
     * Draws just this element.
     *
     * @param ctx Canvas context.
     * @abstract
     */
    drawElement( ctx: CanvasRenderingContext2D )
        {
        throw new Error( 'Implement .drawElement().' );
        }


    /**
     * Draws this element, and all of its _children.
     *
     * @param ctx Canvas context.
     */
    draw( ctx: CanvasRenderingContext2D )
        {
        this.drawElement( ctx );
        }


    /**
     * Logic code here (runs every tick).
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime )
        {
            // optional
        }


    /**
     * Check if the x/y position intersects with this element. If so then dispatch the event.
     *
     * @abstract
     */
    intersect( x: number, y: number, event: Event ): boolean
        {
        throw new Error( 'Implement .intersect().' );
        }


    /**
     * @returns Rotation in radians.
     */
    get rotation()
        {
        return this._rotation;
        }


    /**
     * @param angle Rotate by a certain angle (in radians).
     */
    set rotation( angle: number )
        {
        this.rotate( angle, false );
        }


    /**
     * @param angle Angle of rotation.
     * @param degrees Whether the angle provided is in degrees or radians.
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


    /**
     * Remove this element from the either its container or from the canvas.
     */
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


    /**
     * Create a clone of this element.
     *
     * @abstract
     */
    clone(): Element
        {
        throw new Error( 'Implement .clone().' );
        }
    }
}