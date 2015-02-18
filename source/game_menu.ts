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
        element: HTMLElement;

        constructor( args: ValueArgs )
            {
            super( args );

            this.element = document.createElement( 'span' );
            this.container.appendChild( this.element );

            this.setValue( args.value );
            }

        setValue( value )
            {
            if ( value === this.value )
                {
                return;
                }

            this.value = value;
            this.element.innerHTML = value;
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
            callback: (value: any) => any;
            text: string;
        }

    export class Button extends Component
        {
        callback: (value: any) => any;
        isActive: boolean;
        element: HTMLElement;

        constructor( args: ButtonArgs )
            {
            super( args );

            this.element = document.createElement( 'span' );
            this.element.className = 'button';
            this.element.innerHTML = args.text;
            this.callback = args.callback;

            this.setActive( true );

            this.container.appendChild( this.element );
            }

        setActive( yesNo: boolean )
            {
                // already in that state
            if ( yesNo === this.isActive )
                {
                return;
                }

            if ( yesNo === true )
                {
                this.element.addEventListener( 'click', this.callback );
                this.element.classList.remove( 'inactive' );
                }

            else
                {
                this.element.removeEventListener( 'click', this.callback );
                this.element.classList.add( 'inactive' );
                }

            this.isActive = yesNo;
            }

        clear()
            {
            this.callback = null;
            this.element.removeEventListener( 'click', this.callback );
            }
        }


    export interface BooleanArgs extends ComponentArgs
        {
            value: boolean;
            callback: (value: any) => any;
        }

    export class Boolean extends Component
        {
        value: boolean;
        element: HTMLElement;
        click_ref;
        callback: (value: any) => any;
        isActive: boolean;

        constructor( args: BooleanArgs )
            {
            super( args );

            this.element = document.createElement( 'span' );
            this.container.appendChild( this.element );
            this.container.className = 'button';
            this.callback = args.callback;

            this.setValue( args.value );
            this.setActive( true );
            }


        setActive( yesNo: boolean )
            {
                // already in that state
            if ( yesNo === this.isActive )
                {
                return;
                }

            if ( yesNo === true )
                {
                var _this = this;

                this.click_ref = function()
                    {
                    _this.setValue( !_this.value );
                    _this.callback( _this.value );
                    };
                this.container.addEventListener( 'click', this.click_ref );
                this.container.classList.remove( 'inactive' );
                }

            else
                {
                this.container.removeEventListener( 'click', this.click_ref );
                this.container.classList.add( 'inactive' );
                }

            this.isActive = yesNo;
            }

        setValue( value )
            {
            if ( value === this.value )
                {
                return;
                }

            if ( value === true )
                {
                this.element.innerHTML = 'On';
                }

            else
                {
                this.element.innerHTML = 'Off';
                }

            this.value = value;
            }

        getValue()
            {
            return this.value;
            }

        clear()
            {
            this.element.removeEventListener( 'click', this.click_ref );
            this.callback = null;
            this.click_ref = null;
            }
        }
    }
}