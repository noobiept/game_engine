/// <reference path="html.ts" />

module Game
{
export interface MessageArgs extends Game.Html.HtmlContainerArgs
    {
    body: any;               // string | HTMLElement | HTMLElement[] | Html.HtmlElement | Html.HtmlElement[]
    container: HTMLElement; // where the message is going to be added to
    buttons?: any;          // HtmlElement | HtmlElement[]
    timeout?: number;       // remove the message after a certain time (in seconds)
    background?: boolean;   // add a faded background behind the message
    }


/**
 * Basic Usage:
 *
 *     var container = Game.getCanvasContainer();
 *
 *     var button = new Game.Html.Button({
 *             value: 'Ok',
 *             callback: function( button )
 *                 {
 *                 message.clear();
 *                 }
 *         });
 *     var message = new Game.Message({
 *             body: 'Hi there!',
 *             container: container,
 *             background: true,
 *             buttons: button
 *         });
 *
 * Examples -- `message`, `minesweeper`
 */
export class Message extends Game.Html.HtmlContainer
    {
    body: HTMLElement;
    background: HTMLElement;
    timeout: Utilities.Timeout;


    constructor( args: MessageArgs )
        {
        super( args );

        this.body = document.createElement( 'div' );
        this.body.className = 'Game-Message-body';

        this.setBody( args.body );

        this.container.appendChild( this.body );
        this.container.classList.add( 'Game-Message-container' );

        this.timeout = null;
        this.background = null;


        if ( typeof args.buttons !== 'undefined' )
            {
            var buttons;

            if ( args.buttons instanceof Array )
                {
                buttons = args.buttons;
                }

            else
                {
                buttons = [ args.buttons ];
                }

            var length = buttons.length;

            var buttonsContainer = new Game.Html.HtmlContainer({
                    cssClass: 'Game-Message-Buttons'
                });


            for (var a = 0 ; a < length ; a++)
                {
                buttonsContainer.addChild( buttons[ a ] );
                }

            this.addChild( buttonsContainer );
            }


        if ( Utilities.isNumber( args.timeout ) )
            {
            this.timeout = new Utilities.Timeout();
            var _this = this;

            this.timeout.start( function()
                {
                _this.clear();
                }, args.timeout * 1000 );
            }


        if ( args.background === true )
            {
            this.background = document.createElement( 'div' );
            this.background.className = 'Game-Message-background';

            args.container.appendChild( this.background );
            }


        args.container.appendChild( this.container );
        }


    /**
     * Remove the message.
     */
    clear()
        {
        if ( this.timeout )
            {
            this.timeout.clear();
            this.timeout = null;
            }

        if ( this.background )
            {
            this.container.parentNode.removeChild( this.background );
            }

        super.clear();
        }


    /**
     * @return Current message.
     */
    getBody()
        {
        return this.body.innerHTML;
        }


    /**
     * @param body Set the body of the message. Either a `string`, `HTMLElement`, `HTMLElement[]`, `Html.HtmlElement` or `HtmlElement[]`.
     */
    setBody( body: any )
        {
            // clear previous content
        this.body.innerHTML = '';

        if ( body instanceof Array )
            {
            if ( body.length > 0 )
                {
                var first = body[ 0 ];
                var a;
                var length = body.length;

                if ( first instanceof HTMLElement )
                    {
                    for (a = 0 ; a < length ; a++)
                        {
                        this.body.appendChild( body[ a ] );
                        }
                    }

                else
                    {
                    for (a = 0 ; a < length ; a++)
                        {
                        this.body.appendChild( body[ a ].container );
                        }
                    }
                }
            }

        else if ( body instanceof HTMLElement )
            {
            this.body.appendChild( body );
            }

        else if ( body instanceof Html.HtmlElement )
            {
            this.body.appendChild( body.container );
            }

            // string
        else
            {
            this.body.innerHTML = body;
            }
        }
    }
}