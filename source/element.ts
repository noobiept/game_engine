module Game
{
export class Element
    {
    x: number;
    y: number;
    listeners;

    constructor( x, y )
        {
        this.x = x;
        this.y = y;
        this.listeners = {};
        }


    draw( ctx )
        {
        throw new Error( 'Implement this.' );
        }


    intersect( x, y )
        {
        throw new Error( 'Implement this.' );
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
    }
}