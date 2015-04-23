/// <reference path="html.ts" />

module Game
{
export interface MessageArgs extends Game.Html.HtmlContainerArgs
    {
    text: any;          // string | HTMLElement
    container: HTMLElement;
    buttons?: any;      // HtmlElement | HtmlElement[]
    timeout?: number;   // remove the message after a certain time (in seconds)
    background?: boolean;
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
 *             text: 'Hi there!',
 *             container: container,
 *             background: true,
 *             buttons: button
 *         });
 *
 * Examples -- `message`, `minesweeper`
 */
export class Message extends Game.Html.HtmlContainer
    {
    text: HTMLElement;
    background: HTMLElement;
    timeout: Utilities.Timeout;


    constructor( args: MessageArgs )
        {
        super( args );

        this.text = document.createElement( 'div' );
        this.text.className = 'Game-Message-text';

        this.setText( args.text );

        this.container.appendChild( this.text );
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
                    cssClass: 'Game-Message-Components'
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
    getText()
        {
        return this.text.innerHTML;
        }


    /**
     * @param text New message text. Its either a `string` or an `HTMLElement`.
     */
    setText( text: any )
        {
        if ( text instanceof HTMLElement )
            {
            this.text.innerHTML = '';
            this.text.appendChild( text );
            }

        else
            {
            this.text.innerHTML = text;
            }
        }
    }
}