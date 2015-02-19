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
                // set properties before this
            super( args );

                // .container only available after super()
            this.element = document.createElement( 'span' );
            this.container.appendChild( this.element );
            this.container.classList.add( 'GameMenu-Value' );

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
            callback: (button: Button) => any;
            text: string;
        }

    export class Button extends Component
        {
        element: HTMLElement;
        text: string;
        callback: (button: Button) => any;
        click_ref: () => any;

        constructor( args: ButtonArgs )
            {
            if ( typeof this.click_ref === 'undefined' )
                {
                this.click_ref = function()
                    {
                    args.callback( _this );
                    };
                }

                // set properties before this
            super( args );

                // .container only available after super()
            var _this = this;

            this.element = document.createElement( 'span' );
            this.element.innerHTML = args.text;

            this.container.classList.add( 'GameMenu-Button' );
            this.container.appendChild( this.element );
            }

        addEvents()
            {
            this.container.addEventListener( 'click', this.click_ref );
            }

        removeEvents()
            {
            this.container.removeEventListener( 'click', this.click_ref );
            }

        clear()
            {
            this.removeEvents();
            this.callback = null;
            this.click_ref = null;
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

        constructor( args: BooleanArgs )
            {
            var _this = this;

            this.callback = args.callback;
            this.click_ref = function()
                {
                _this.setValue( !_this.value );
                _this.callback( _this.value );
                };


                // set properties before this
            super( args );

                // .container only available after super()
            this.element = document.createElement( 'span' );
            this.container.appendChild( this.element );
            this.container.classList.add( 'GameMenu-Boolean' );

            this.setValue( args.value );
            }

        addEvents()
            {
            this.container.addEventListener( 'click', this.click_ref );
            }

        removeEvents()
            {
            this.container.removeEventListener( 'click', this.click_ref );
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
            this.removeEvents();
            this.callback = null;
            this.click_ref = null;
            }
        }


    export interface TwoStateArgs extends ButtonArgs
        {
            callback2: (button: Button) => any;
            text2: string;
        }

    export class TwoState extends Button
        {
        callback2: (button: Button) => any;
        text2: string;
        isText1: boolean;

        constructor( args: TwoStateArgs )
            {
            var _this = this;

            this.callback = args.callback;
            this.callback2 = args.callback2;
            this.text = args.text;
            this.text2 = args.text2;
            this.isText1 = true;

            this.click_ref = function()
                {
                if ( _this.isText1 )
                    {
                    _this.element.innerHTML = _this.text2;
                    _this.callback( _this );
                    }

                else
                    {
                    _this.element.innerHTML = _this.text;
                    _this.callback2( _this );
                    }

                _this.isText1 = !_this.isText1;
                };

                // set properties before this
            super( args );

                // .container only available after super()
            this.container.classList.add( 'GameMenu-TwoState' );
            }
        }


    export interface MultipleOptionsArgs extends ComponentArgs
        {
            options: string[];
            callback: (button: Button, position: number, text: string) => any;
        }

    export class MultipleOptions extends Component
        {
        elements: HTMLElement[];

        constructor( args: MultipleOptionsArgs )
            {
            super( args );
            }
        }
    }
}