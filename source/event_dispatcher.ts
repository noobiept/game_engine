module Game
{
export interface EventDispatcherArgs
    {

    }

export class EventDispatcher
    {
    _listeners;

    constructor( args?: EventDispatcherArgs )
        {
        this._listeners = {};
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
    }
}