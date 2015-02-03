module Game
{
export class Element
    {
    x: number;
    y: number;
    width: number;
    height: number;

    _rotation: number;   // in radians (clockwise)
    _container: Container;
    _listeners;
    _has_logic: boolean; // to know if we need to run the .logic() method or not
    _removed: boolean;  // a reference to this element may be saved in several places, so we need a way to know if its ok to work on the element or not


    constructor()
        {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this._container = null;
        this._rotation = 0;
        this._listeners = {};
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


    /*
        'listener' will receive a 'data' argument when its called.
        What 'data' is, depends on the event type.

        type: 'click'
        data: { event: MouseEvent; }

        type: 'collision'
        data: { element: Unit;
                collidedWith: Unit; }

     */
    addEventListener( type: string, listener )
        {
        if ( !this._listeners[ type ] )
            {
            this._listeners[ type ] = [];
            }

        if ( Utilities.isFunction( listener ) )
            {
            if ( this._listeners[ type ].indexOf( listener ) < 0 )
                {
                this._listeners[ type ].push( listener );

                return true;
                }
            }

        return false;
        }


    /*
        Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided)
     */
    removeEventListener( type: string, listener? )
        {
        if ( this._listeners[ type ] )
            {
            if ( typeof listener !== 'undefined' )
                {
                var index = this._listeners[ type ].indexOf( listener );

                if ( index >= 0 )
                    {
                    this._listeners.splice( index, 1 );
                    return true;
                    }
                }

            else
                {
                this._listeners[ type ] = [];
                return true;
                }
            }

        return false;
        }


    removeAllEventListeners()
        {
        this._listeners = {};
        }


    /**
        Dispatches an event, which will trigger the listeners of that event

        @param type - type of the event to dispatch
        @param data - Data to be sent to every listener
     */
    dispatchEvent( type, data? )
        {
        var listeners = this._listeners[ type ];

        if ( listeners )
            {
            for (var a = listeners.length - 1 ; a >= 0 ; a--)
                {
                listeners[ a ]( data );
                }
            }
        }


    hasListeners( type )
        {
        if ( this._listeners[ type ] &&
             this._listeners[ type ].length > 0 )
            {
            return true;
            }

        return false;
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