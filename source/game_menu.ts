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

    /*
        add( element );
        add( element1, element2 );
        add( [ element1, element2 ] );

        element is of type 'Component'
     */
    add( args: any )
        {
        var elements = arguments;

        if ( args instanceof Array )
            {
            elements = args;
            }

        var length = elements.length;

        for (var a = 0 ; a < length ; a++)
            {
            var component = elements[ a ];

            this.components.push( component );
            this.container.appendChild( component.container );
            }
        }

    /*
        remove( element );
        remove( element1, element2 );
        remove( [ element1, element2 ] );

        element is of type 'Component'
     */
    remove( args: any )
        {
        var elements = arguments;

        if ( args instanceof Array )
            {
            elements = args;
            }

        var length = elements.length;

        for (var a = 0 ; a < length ; a++)
            {
            var component = elements[ a ];

            var index = this.components.indexOf( component );

            if ( index >= 0 )
                {
                this.components.splice( index, 1 );
                component.clear();
                }
            }
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

            this.addEvents();
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
        click_ref: () => any;

        constructor( args: BooleanArgs )
            {
            var _this = this;

            this.click_ref = function()
                {
                _this.setValue( !_this.value );
                args.callback( _this.value );
                };


                // set properties before this
            super( args );

                // .container only available after super()
            this.element = document.createElement( 'span' );
            this.container.appendChild( this.element );
            this.container.classList.add( 'GameMenu-Boolean' );

            this.setValue( args.value );
            this.addEvents();
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
        isText1: boolean;

        constructor( args: TwoStateArgs )
            {
            var _this = this;

            this.isText1 = true;
            this.click_ref = function()
                {
                if ( _this.isText1 )
                    {
                    _this.element.innerHTML = args.text2;
                    args.callback( _this );
                    }

                else
                    {
                    _this.element.innerHTML = args.text;
                    args.callback2( _this );
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
            callback: (button: MultipleOptions, position: number, htmlElement: HTMLElement) => any;
        }

    export class MultipleOptions extends Component
        {
        elements: HTMLElement[];
        click_ref: () => any;
        selected: HTMLElement;

        constructor( args: MultipleOptionsArgs )
            {
            var _this = this;

            this.click_ref = function()
                {
                var element = this;

                if ( element === _this.selected )
                    {
                    return;
                    }

                var position = _this.elements.indexOf( element );

                _this.select( position );

                args.callback( _this, position, element );
                };


                // set properties before this
            super( args );


                // .container only available after super()
            this.elements = [];

            var length = args.options.length;

            for (var a = 0 ; a < length ; a++)
                {
                var option = document.createElement( 'span' );

                option.innerHTML = args.options[ a ];

                this.container.appendChild( option );
                this.elements.push( option );
                }

            this.container.classList.add( 'GameMenu-MultipleOptions' );
            this.selected = null;
            this.select( 0 );
            this.addEvents();
            }

        select( position )
            {
            var element = this.elements[ position ];

            if ( !element || element === this.selected )
                {
                return;
                }


            if ( this.selected )
                {
                this.selected.classList.remove( 'GameMenu-selected' );
                }

            this.selected = element;
            element.classList.add( 'GameMenu-selected' );
            }

        addEvents()
            {
            for (var a = this.elements.length - 1 ; a >= 0 ; a--)
                {
                this.elements[ a ].addEventListener( 'click', this.click_ref );
                }
            }

        removeEvents()
            {
            for (var a = this.elements.length - 1 ; a >= 0 ; a--)
                {
                this.elements[ a ].removeEventListener( 'click', this.click_ref );
                }
            }

        clear()
            {
            this.removeEvents();
            this.click_ref = null;
            this.elements.length = 0;
            }
        }


    export interface RangeArgs extends ComponentArgs
        {
            min: number;
            max: number;
            value: number;
            step?: number;
            onChange?: (button: Range) => any;
        }

    export class Range extends Component
        {
        value: HTMLElement;
        input: HTMLInputElement;
        current_value: number;
        change_ref: (event) => any;
        input_ref: (event) => any;

        constructor( args: RangeArgs )
            {
            var _this = this;


            if ( typeof args.step === 'undefined' )
                {
                args.step = 1;
                }


            this.change_ref = function( event )
                {
                _this.setValue( parseInt( event.srcElement.value, 10 ) );

                if ( args.onChange )
                    {
                    args.onChange( _this );
                    }
                };
            this.input_ref = function( event )
                {
                _this.value.innerHTML = event.srcElement.value;
                };


                // set properties before this
            super( args );


                // .container only available after super()
            this.input = document.createElement( 'input' );
            this.input.type = 'range';
            this.input.min = args.min.toString();
            this.input.max = args.max.toString();
            this.input.value = args.value.toString();
            this.input.step = args.step.toString();

            this.value = document.createElement( 'span' );

            this.container.classList.add( 'GameMenu-Range' );
            this.container.appendChild( this.input );
            this.container.appendChild( this.value );

            this.setValue( args.value );
            this.addEvents();
            }

        setValue( value )
            {
            if ( value === this.current_value )
                {
                return;
                }

            this.current_value = value;
            this.input.value = value;
            this.value.innerHTML = value;
            }

        getValue()
            {
            return this.current_value;
            }

        addEvents()
            {
            this.input.addEventListener( 'input', this.input_ref );
            this.input.addEventListener( 'change', this.change_ref );
            }

        removeEvents()
            {
            this.input.removeEventListener( 'input', this.input_ref );
            this.input.removeEventListener( 'change', this.change_ref );
            }

        clear()
            {
            this.removeEvents();
            this.change_ref = null;
            this.input_ref = null;
            }
        }
    }
}