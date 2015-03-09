/// <reference path="html.ts" />

module Game
{
export interface MessageArgs extends Game.Html.HtmlContainerArgs
    {
        text: any;          // string | HTMLElement
        buttons?: any;   // HtmlElement | HtmlElement[]
        timeout?: number;   // remove the message after a certain time (in seconds)
    }

export class Message extends Game.Html.HtmlContainer
    {
    text: HTMLElement;
    timeout: Utilities.Timeout;


    constructor( args: MessageArgs )
        {
        super( args );

        this.text = document.createElement( 'div' );
        this.text.className = 'Game-Message-text';

        this.setText( args.text );

        this.container.appendChild( this.text );
        this.container.classList.add( 'Game-Message-container' );


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


        this.timeout = null;


        if ( Utilities.isNumber( args.timeout ) )
            {
            this.timeout = new Utilities.Timeout();
            var _this = this;

            this.timeout.start( function()
                {
                _this.clear();
                }, args.timeout * 1000 );
            }
        }


    clear()
        {
        if ( this.timeout )
            {
            this.timeout.clear();
            this.timeout = null;
            }

        super.clear();
        }


    getText()
        {
        return this.text.innerHTML;
        }


    setText( text )
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