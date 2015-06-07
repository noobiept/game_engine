module Game
{
/**
 * Basic Usage:
 *
 *     var menu = new Game.Html.HtmlContainer();
 *
 *     var button = new Game.Html.Button({
 *             value: 'click here',
 *             callback: function( button )
 *                 {
 *                 console.log( 'clicked!' );
 *                 }
 *         });
 *     menu.addChild( button );
 *
 *     document.body.appendChild( menu.container );
 *
 * Examples -- `game_menu`, `game_of_life`, `message`, `minesweeper`
 */
export module Html
    {
    export interface HtmlElementArgs
        {
        cssId?: string;
        cssClass?: any;     // string or string[]
        preText?: string;
        }

    /**
     * Generic html element, serves as base for the rest of the classes.
     */
    export class HtmlElement
        {
        container: HTMLElement;
        _is_active: boolean;
        _pre_text: HTMLElement;

        constructor( args?: HtmlElementArgs )
            {
            var container = document.createElement( 'div' );

            container.className = 'Game-Element';

            this.container = container;
            this._is_active = true;
            this._pre_text = null;


            if ( typeof args !== 'undefined' )
                {
                    // add an optional id
                if ( typeof args.cssId !== 'undefined' )
                    {
                    container.id = args.cssId;
                    }

                    // add optional class/classes
                if ( typeof args.cssClass !== 'undefined' )
                    {
                    if ( typeof args.cssClass === 'string' )
                        {
                        container.classList.add( args.cssClass );
                        }

                    else
                        {
                        for (var a = args.cssClass.length - 1 ; a >= 0 ; a--)
                            {
                            container.classList.add( args.cssClass[ a ] );
                            }
                        }
                    }

                    // add optional pre text
                if ( typeof args.preText !== 'undefined' )
                    {
                    var preText = document.createElement( 'span' );

                    preText.className = 'Game-preText';
                    preText.innerHTML = args.preText;

                    container.appendChild( preText );

                    this._pre_text = preText;
                    }
                }
            }


        /**
         * When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.
         *
         * @param yesNo Whether to set it active or not.
         */
        setActive( yesNo: boolean )
            {
                // already in that state
            if ( yesNo === this._is_active )
                {
                return;
                }

            if ( yesNo === true )
                {
                this.addEvents();
                this.container.classList.remove( 'Game-inactive' );
                }

            else
                {
                this.removeEvents();
                this.container.classList.add( 'Game-inactive' );
                }

            this._is_active = yesNo;
            }


        /**
         * Check if the element is active or not currently.
         */
        isActive()
            {
            return this._is_active;
            }


        /**
         * Activates the element's event handlers.
         */
        addEvents()
            {
                // implement this if needed
            }


        /**
         * Deactivate the element's event handlers.
         */
        removeEvents()
            {
                // implement this if needed
            }


        /**
         * Calls this to remove the element.
         */
        clear()
            {
            if ( this._pre_text )
                {
                this.container.removeChild( this._pre_text );
                this._pre_text = null;
                }

            this.container.parentNode.removeChild( this.container );
            this.container = null;
            }
        }


    export interface HtmlContainerArgs extends HtmlElementArgs
        {
        children?: any;     // HtmlElement or HtmlElement[]
        }

    /**
     * Container of the other html elements.
     */
    export class HtmlContainer extends HtmlElement
        {
        _children: HtmlElement[];

        constructor( args?: HtmlContainerArgs )
            {
            super( args );

            this.container.classList.add( 'Game-Container' );
            this._children = [];

            if ( typeof args !== 'undefined' )
                {
                if ( typeof args.children !== 'undefined' )
                    {
                    this.addChild( args.children );
                    }
                }
            }

        /**
         *     addChild( element );
         *     addChild( element1, element2 );
         *     addChild( [ element1, element2 ] );
         *
         * @param args `HtmlElement` or `...HtmlElement` or `HtmlElement[]`.
         */
        addChild( args: any )
            {
            var elements = arguments;

            if ( args instanceof Array )
                {
                elements = args;
                }

            var length = elements.length;

            for (var a = 0 ; a < length ; a++)
                {
                var child = elements[ a ];

                this._children.push( child );
                this.container.appendChild( child.container );
                }
            }

        /**
         *     removeChild( element );
         *     removeChild( element1, element2 );
         *     removeChild( [ element1, element2 ] );
         *
         * @param args `HtmlElement` or `...HtmlElement` or `HtmlElement[]`.
         */
        removeChild( args: any )
            {
            var elements = arguments;

            if ( args instanceof Array )
                {
                elements = args;
                }

            var length = elements.length;

            for (var a = 0 ; a < length ; a++)
                {
                var child = elements[ a ];

                var index = this._children.indexOf( child );

                if ( index >= 0 )
                    {
                    this._children.splice( index, 1 );
                    child.clear();
                    }
                }
            }


        /**
         * Remove all children of this container.
         */
        removeAllChildren()
            {
            for (var a = this._children.length - 1 ; a >= 0 ; a--)
                {
                this._children[ a ].clear();
                }

            this._children.length = 0;

                // there may be other children that are not classes from Game.Html.*, so we just remove the html normally
            while( this.container.lastChild )
                {
                this.container.removeChild( this.container.lastChild );
                }
            }


        /**
         * Removes the container, plus all of its children (can't use the container after this).
         */
        clear()
            {
            this.removeAllChildren();
            super.clear();
            }
        }


    export interface ValueArgs extends HtmlElementArgs
        {
        value: any;
        }

    /**
     * Display a value.
     */
    export class Value extends HtmlElement
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
            this.container.classList.add( 'Game-Value' );

            this.setValue( args.value );
            }


        /**
         * @param value New value to be displayed.
         */
        setValue( value: any )
            {
            if ( value === this.value )
                {
                return;
                }

            this.value = value;
            this.element.innerHTML = value;
            }


        /**
         * @return The current value set.
         */
        getValue()
            {
            return this.value;
            }


        /**
         * Clear the object (don't use it after this).
         */
        clear()
            {
            this.container.removeChild( this.element );
            this.element = null;
            this.value = null;

            super.clear();
            }
        }


    export interface ButtonArgs extends ValueArgs
        {
        callback?: (button: Button) => any;
        }


    /**
     * An html button.
     */
    export class Button extends Value
        {
        click_ref: (event: MouseEvent) => any;

        constructor( args: ButtonArgs )
            {
            var _this = this;


            if ( typeof this.click_ref === 'undefined' )
                {
                this.click_ref = function( event: MouseEvent )
                    {
                    if ( args.callback )
                        {
                        args.callback( _this );
                        }

                    event.stopPropagation();
                    };
                }

                // set properties before this
            super( args );

                // .container only available after super()
            this.container.classList.add( 'Game-Button' );
            this.addEvents();
            }


        /**
         * Add the click event handler.
         */
        addEvents()
            {
            this.container.addEventListener( 'click', this.click_ref );
            }


        /**
         * Remove the click event handler.
         */
        removeEvents()
            {
            this.container.removeEventListener( 'click', this.click_ref );
            }


        /**
         * Clear the object (don't use it after this).
         */
        clear()
            {
            this.removeEvents();
            this.click_ref = null;

            super.clear();
            }
        }


    export interface BooleanArgs extends ButtonArgs
        {
        value: boolean;
        }


    /**
     * A boolean html button (possible values are 'On' or 'Off').
     */
    export class Boolean extends Button
        {
        value: boolean;

        constructor( args: BooleanArgs )
            {
            var _this = this;

            this.click_ref = function( event: MouseEvent )
                {
                _this.setValue( !_this.value );

                if ( args.callback )
                    {
                    args.callback( _this );
                    }

                event.stopPropagation();
                };


                // set properties before this
            super( args );

                // .container only available after super()
            this.container.classList.add( 'Game-Boolean' );
            this.addEvents();
            }


        /**
         * @param value New value of the button. When the value is `true`, the display text is 'On`, and when the value is `false`, the display text will be `Off`.
         */
        setValue( value: boolean )
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


        /**
         * @return The current value that is set.
         */
        getValue()
            {
            return this.value;
            }
        }


    export interface TwoStateArgs extends ButtonArgs
        {
        value2: string;
        callback2?: (button: TwoState) => any;
        }

    /**
     * A button that has 2 states, each state with its own value and callback.
     */
    export class TwoState extends Button
        {
        isValue1: boolean;

        constructor( args: TwoStateArgs )
            {
            var _this = this;

            this.isValue1 = true;
            this.click_ref = function( event: MouseEvent )
                {
                if ( _this.isValue1 )
                    {
                    _this.element.innerHTML = args.value2;

                    if ( args.callback )
                        {
                        args.callback( _this );
                        }
                    }

                else
                    {
                    _this.element.innerHTML = args.value;

                    if ( args.callback2 )
                        {
                        args.callback2( _this );
                        }
                    }

                _this.isValue1 = !_this.isValue1;
                event.stopPropagation();
                };

                // set properties before this
            super( args );

                // .container only available after super()
            this.container.classList.add( 'Game-TwoState' );
            }


        getValue()
            {
            return this.element.innerHTML;
            }
        }


    export interface MultipleOptionsArgs extends HtmlElementArgs
        {
        options: string[];
        callback?: (button: MultipleOptions, position: number, htmlElement: HTMLElement) => any;
        }

    /**
     * Multiple options button.
     */
    export class MultipleOptions extends HtmlElement
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

                if ( args.callback )
                    {
                    args.callback( _this, position, element );
                    }
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

            this.container.classList.add( 'Game-Button' );
            this.container.classList.add( 'Game-MultipleOptions' );
            this.selected = null;
            this.select( 0 );
            this.addEvents();
            }


        /**
         * Select the active option by position.
         *
         * @param position The position to select.
         */
        select( position: number )
            {
            var element = this.elements[ position ];

            if ( !element || element === this.selected )
                {
                return;
                }


            if ( this.selected )
                {
                this.selected.classList.remove( 'Game-selected' );
                }

            this.selected = element;
            element.classList.add( 'Game-selected' );
            }


        /**
         * Get the string value of the currently selected option.
         */
        getValue()
            {
            return this.selected.innerHTML;
            }


        /**
         * add the click event handler on the options.
         */
        addEvents()
            {
            for (var a = this.elements.length - 1 ; a >= 0 ; a--)
                {
                this.elements[ a ].addEventListener( 'click', this.click_ref );
                }
            }


        /**
         * Remove the click event handlers from the options elements.
         */
        removeEvents()
            {
            for (var a = this.elements.length - 1 ; a >= 0 ; a--)
                {
                this.elements[ a ].removeEventListener( 'click', this.click_ref );
                }
            }


        /**
         * Clear the object.
         */
        clear()
            {
            this.removeEvents();
            this.click_ref = null;
            this.selected = null;

            for (var a = this.elements.length - 1 ; a >= 0 ; a--)
                {
                this.container.removeChild( this.elements[ a ] );
                }

            this.elements.length = 0;

            super.clear();
            }
        }


    export interface RangeArgs extends HtmlElementArgs
        {
        min: number;
        max: number;
        value: number;
        step?: number;
        onChange?: (button: Range) => any;
        }


    /**
     * Number range control.
     */
    export class Range extends HtmlElement
        {
        value: HTMLElement;
        input: HTMLInputElement;
        current_value: number;
        change_ref: (event) => any;
        input_ref: (event) => any;
        number_of_decimals: number;

        constructor( args: RangeArgs )
            {
            var _this = this;


            if ( typeof args.step === 'undefined' )
                {
                args.step = 1;
                this.number_of_decimals = 0;
                }

            else
                {
                    // find the number of decimals cases
                var split = args.step.toString().split( '.' );

                if ( split.length > 1 )
                    {
                    this.number_of_decimals = split[ 1 ].length;
                    }

                else
                    {
                    this.number_of_decimals = 0;
                    }
                }


            this.change_ref = function( event )
                {
                _this.setValue( parseFloat( event.target.value ) );

                if ( args.onChange )
                    {
                    args.onChange( _this );
                    }
                };
            this.input_ref = function( event )
                {
                var value = parseFloat( event.target.value );

                _this.value.innerHTML = value.toFixed( _this.number_of_decimals );
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

            this.container.classList.add( 'Game-Range' );
            this.container.appendChild( this.input );
            this.container.appendChild( this.value );

            this.setValue( args.value );
            this.addEvents();
            }


        /**
         * @param value New value to be set.
         */
        setValue( value: number )
            {
            if ( value === this.current_value )
                {
                return;
                }

            var valueStr = value.toFixed( this.number_of_decimals );

            this.current_value = value;
            this.input.value = valueStr;
            this.value.innerHTML = valueStr;
            }

        /**
         * @return Current value that is set.
         */
        getValue()
            {
            return this.current_value;
            }


        /**
         * Add the relevant event handlers.
         */
        addEvents()
            {
            this.input.addEventListener( 'input', this.input_ref );
            this.input.addEventListener( 'change', this.change_ref );
            }


        /**
         * Remove the event handlers.
         */
        removeEvents()
            {
            this.input.removeEventListener( 'input', this.input_ref );
            this.input.removeEventListener( 'change', this.change_ref );
            }


        /**
         * Clear the object.
         */
        clear()
            {
            this.removeEvents();
            this.change_ref = null;
            this.input_ref = null;

            this.container.removeChild( this.value );
            this.container.removeChild( this.input );
            this.value = null;
            this.input = null;

            super.clear();
            }
        }


    export interface TextArgs extends HtmlElementArgs
        {
        placeholder?: string;               // placeholder text, that shows when the input has no text
        callback?: (button: Text) => any;   // to be called when the 'enter' key is pressed (and the input is on focus), or through an optional button
        buttonText?: string;                // adds a button next to the input (which will trigger the callback if clicked)
        }

    /**
     * Text input control.
     */
    export class Text extends HtmlElement
        {
        input: HTMLInputElement;
        button: Button;
        key_ref: (event) => any;

        constructor( args?: TextArgs )
            {
            var _this = this;

            this.button = null;
            this.key_ref = null;

            if ( typeof args === 'undefined' )
                {
                args = {};
                }

                // set properties before this
            super( args );

                // .container only available after super()
                // add the input element
            var input = document.createElement( 'input' );

            input.type = 'text';

            if ( typeof args.placeholder !== 'undefined' )
                {
                input.setAttribute( 'placeholder', args.placeholder );
                }

            this.container.appendChild( input );
            this.input = input;


                // setup the callback function
            if ( typeof args.callback !== 'undefined' )
                {
                this.key_ref = function( event )
                    {
                    var key = event.keyCode;

                    if ( key === Utilities.KEY_CODE.enter )
                        {
                        args.callback( _this );
                        }
                    };
                }


                // add a button if needed
            if ( typeof args.buttonText !== 'undefined' )
                {
                this.button = new Game.Html.Button({
                        value: args.buttonText,
                        callback: function()
                            {
                            args.callback( _this );
                            }
                    });
                this.container.appendChild( this.button.container );
                }


            this.container.classList.add( 'Game-Text' );
            this.addEvents();
            }


        setValue( value: string )
            {
            this.input.value = value;
            }


        getValue()
            {
            return this.input.value;
            }


        addEvents()
            {
            this.input.addEventListener( 'keyup', this.key_ref );

            if ( this.button )
                {
                this.button.addEvents();
                }
            }


        removeEvents()
            {
            this.input.removeEventListener( 'keyup', this.key_ref );

            if ( this.button )
                {
                this.button.removeEvents();
                }
            }


        clear()
            {
            this.removeEvents();
            this.key_ref = null;
            this.container.removeChild( this.input );
            this.input = null;

            if ( this.button )
                {
                this.button.clear();
                this.button = null;
                }

            super.clear();
            }
        }
    }
}