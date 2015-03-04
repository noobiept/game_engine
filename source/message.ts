/// <reference path="component.ts" />

module Game
{
export interface MessageArgs
    {
        container: HTMLElement;
        text: any;          // string | HTMLElement
        components?: any;   // Component | Component[]
        timeout?: number;   // remove the message after a certain time (in seconds)
    }

export class Message
    {
    base_container: HTMLElement;
    container: HTMLElement;
    text: HTMLElement;
    timeout: Utilities.Timeout;
    components: Game.Component[];

    constructor( args )
        {
        var container = document.createElement( 'div' );
        var text = document.createElement( 'div' );

        container.className = 'Message-container';
        text.className = 'Message-text';

        if ( args.text instanceof HTMLElement )
            {
            text.appendChild( args.text );
            }

        else
            {
            text.innerHTML = args.text;
            }

        container.appendChild( text );


        this.components = null;

        if ( typeof args.components !== 'undefined' )
            {
            var components;

            if ( args.components instanceof Array )
                {
                components = args.components;
                }

            else
                {
                components = [ args.components ];
                }

            var length = components.length;
            var componentsContainer = document.createElement( 'div' );

            componentsContainer.className = 'Message-Components';


            for (var a = 0 ; a < length ; a++)
                {
                componentsContainer.appendChild( components[ a ].container );
                }

            container.appendChild( componentsContainer );

            this.components = components;
            }



        args.container.appendChild( container );

        this.base_container = args.container;
        this.container = container;
        this.text = text;
        this.timeout = null;


        if ( Utilities.isNumber( args.timeout ) )
            {
            this.timeout = new Utilities.Timeout();
            var _this = this;

            this.timeout.start( function()
                {
                _this.remove();
                }, args.timeout * 1000 );
            }
        }


    remove()
        {
        if ( this.timeout )
            {
            this.timeout.clear();
            this.timeout = null;
            }

        if ( this.components )
            {
            for (var a = this.components.length - 1 ; a >= 0 ; a--)
                {
                this.components[ a ].clear();
                }
            }

        this.components = null;


        this.base_container.removeChild( this.container );

        this.base_container = null;
        this.container = null;
        }


    getText()
        {
        return this.text.innerHTML;
        }


    setText( text )
        {
        this.text.innerHTML = text;
        }
    }
}