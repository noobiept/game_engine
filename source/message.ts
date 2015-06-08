/// <reference path="html.ts" />
/// <reference path="utilities/utilities.1.7.0.d.ts" />

module Game
{
export interface MessageArgs extends Game.Html.HtmlContainerArgs
    {
    body: any;               // Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before.
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
    body: Html.HtmlContainer;
    buttons: Html.HtmlContainer;
    background: HTMLElement;
    timeout: Utilities.Timeout;


    constructor( args: MessageArgs )
        {
        super( args );

        this.body = new Game.Html.HtmlContainer({
                cssClass: 'Game-Message-body'
            });

        this.setBody( args.body );
        this.container.classList.add( 'Game-Message-container' );
        this.addChild( this.body );

        this.timeout = null;
        this.background = null;
        this.buttons = null;


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

            this.buttons = new Game.Html.HtmlContainer({
                    cssClass: 'Game-Message-Buttons'
                });


            for (var a = 0 ; a < length ; a++)
                {
                this.buttons.addChild( buttons[ a ] );
                }

            this.addChild( this.buttons );
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
     * @param body Set the body of the message. Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before.
     */
    setBody( body: any )
        {
            // clear previous content
        this.body.removeAllChildren();

            // make sure 'body' is always an array
        if ( !(body instanceof Array) )
            {
            body = [ body ];
            }


        var length = body.length;

        for (var a = 0 ; a < length ; a++)
            {
            var element = body[ a ];

            if ( element instanceof Html.HtmlElement )
                {
                this.body.addChild( element );
                }

            else if ( element instanceof HTMLElement )
                {
                this.body.container.appendChild( element );
                }

                // a string
            else
                {
                var bodyElement = document.createElement( 'div' );
                bodyElement.innerHTML = element;

                this.body.container.appendChild( bodyElement );
                }
            }
        }
    }
}