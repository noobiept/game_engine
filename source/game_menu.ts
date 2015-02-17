/// <reference path="component.ts" />

module Game
{
export interface GameMenuArgs extends ComponentArgs
    {
        parent: HTMLElement;
    }

export class GameMenu extends Component
    {
    parent: HTMLElement;
    components: Component[];

    constructor( args: GameMenuArgs )
        {
        super( args );

        this.components = [];
        this.parent = args.parent;

        this.parent.appendChild( this.container );
        }

    add( component: Component )
        {
        this.components.push( component );
        this.container.appendChild( component.container );
        }

    remove( component )
        {
        var index = this.components.indexOf( component );

        if ( index >= 0 )
            {
            this.components.splice( index, 1 );
            component.clear();

            return true;
            }

        return false;
        }

    /*
        Removes the game menu, plus all of its components (can't use the menu after this)
     */
    clear()
        {
        for (var a = this.components.length - 1 ; a >= 0 ; a--)
            {
            this.components[ a ].clear();
            }

        this.parent.removeChild( this.container );
        this.components.length = 0;
        }
    }

export module GameMenu
    {
    export interface ValueArgs extends ComponentArgs
        {
            value: any;
        }

    export class Value extends Component
        {
        value: any;

        constructor( args: ValueArgs )
            {
            super( args );

            this.setValue( args.value );
            }

        setValue( value )
            {
            this.value = value;
            this.container.innerHTML = value;
            }

        getValue()
            {
            return this.value;
            }

        clear()
            {
            this.value = null;
            }
        }


    export interface ButtonArgs extends ComponentArgs
        {
            text: string;
            callback: () => any;
        }

    export class Button extends Component
        {
        callback: () => any;

        constructor( args: ButtonArgs )
            {
            super( args );

            this.container.innerHTML = args.text;
            this.callback = args.callback;
            this.container.addEventListener( 'click', args.callback );
            }

        clear()
            {
            this.container.removeEventListener( 'click', this.callback );
            this.callback = null;
            }
        }
    }
}