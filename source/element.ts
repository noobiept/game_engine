module Game
{
export class Element
    {
    x: number;
    y: number;
    rotation: number;   // in radians (clockwise)
    listeners;
    container: Container;
    has_logic: boolean; // to know if we need to run the .logic() method or not


    constructor()
        {
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
        this.listeners = {};
        this.container = null;
        this.has_logic = false;
        }


    /**
        Draws just this element

        @param ctx - canvas context
        @param refX - reference x position, from where to draw the element
        @param refY - reference y position
     */

    drawElement( ctx )
        {
        throw new Error( 'Implement .drawElement().' );
        }


    /*
        Draws this element, and all of its children
     */

    draw( ctx )
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


    intersect( x: number, y: number, event: Event )
        {
        throw new Error( 'Implement .intersect().' );
        }


    addEventListener( type: string, listener )
        {
        if ( !this.listeners[ type ] )
            {
            this.listeners[ type ] = [];
            }

        if ( Utilities.isFunction( listener ) )
            {
            if ( this.listeners[ type ].indexOf( listener ) < 0 )
                {
                this.listeners[ type ].push( listener );

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
        if ( this.listeners[ type ] )
            {
            if ( typeof listener !== 'undefined' )
                {
                var index = this.listeners[ type ].indexOf( listener );

                if ( index >= 0 )
                    {
                    this.listeners.splice( index, 1 );
                    return true;
                    }
                }

            else
                {
                this.listeners[ type ] = [];
                return true;
                }
            }

        return false;
        }


    removeAllEventListeners()
        {
        this.listeners = {};
        }


    /*
        Dispatches an event, which will trigger the listeners of that event
     */

    dispatchEvent( event )
        {
        var type = event.type;
        var listeners = this.listeners[ type ];

        if ( listeners )
            {
            for (var a = listeners.length - 1 ; a >= 0 ; a--)
                {
                listeners[ a ]( event );
                }
            }
        }


    rotate( angle: number, degrees?: boolean )
        {
        if ( degrees === true )
            {
            this.rotation = Math.PI / 180 * angle;
            }

        else
            {
            this.rotation = angle;
            }
        }
    }
}