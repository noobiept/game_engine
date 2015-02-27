/// <reference path="component.ts" />

module Game
{
export interface MessageArgs
    {
        container: HTMLElement;
        text: string;
        components?: any;   // Component | Component[]
        timeout?: number;   // remove the message after a certain time (in seconds)
    }

export class Message
    {
    base_container: HTMLElement;
    container: HTMLElement;
    timeout: Utilities.Timeout;
    components: Game.Component[];

    constructor( args )
        {
        var container = document.createElement( 'div' );
        var background = document.createElement( 'div' );
        var text = document.createElement( 'div' );

        container.className = 'Message-container';
        background.className = 'Message-background';
        text.className = 'Message-text';

        text.innerHTML = args.text;

        container.appendChild( background );
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

            for (var a = 0 ; a < length ; a++)
                {
                container.appendChild( components[ a ].container );
                }

            this.components = components;
            }



        args.container.appendChild( container );

        this.base_container = args.container;
        this.container = container;
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
    }
}