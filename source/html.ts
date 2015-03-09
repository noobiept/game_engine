module Game
{
export module Html
    {
    export interface HtmlElementArgs
        {
            cssId?: string;
            cssClass?: any;     // string or string[]
            preText?: string;
        }

    export class HtmlElement
        {
        container: HTMLElement;
        isActive: boolean;

        constructor( args?: HtmlElementArgs )
            {
            var container = document.createElement( 'div' );

            container.className = 'Game-Element';


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

                    preText.innerHTML = args.preText;

                    container.appendChild( preText );
                    }
                }


            this.container = container;
            this.isActive = true;
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
                this.addEvents();
                this.container.classList.remove( 'Game-inactive' );
                }

            else
                {
                this.removeEvents();
                this.container.classList.add( 'Game-inactive' );
                }

            this.isActive = yesNo;
            }

        addEvents()
            {
                // implement this if needed
            }

        removeEvents()
            {
                // implement this if needed
            }

        clear()
            {
                // implement this if needed
            }
        }


    export interface HtmlContainerArgs extends HtmlElementArgs
        {
            children?: any;     // HtmlElement or HtmlElement[]
        }

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

        /*
            addChild( element );
            addChild( element1, element2 );
            addChild( [ element1, element2 ] );

            element is of type 'HtmlElement'
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

        /*
            removeChild( element );
            removeChild( element1, element2 );
            removeChild( [ element1, element2 ] );

            element is of type 'Component'
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

        /*
            Removes the game menu, plus all of its components (can't use the menu after this)
         */
        clear()
            {
            for (var a = this._children.length - 1 ; a >= 0 ; a--)
                {
                this._children[ a ].clear();
                }

            this.container.parentNode.removeChild( this.container );
            this._children.length = 0;
            }
        }


    export interface ValueArgs extends HtmlElementArgs
        {
            value: any;
        }

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


    export interface ButtonArgs extends HtmlElementArgs
        {
            callback: (button: Button) => any;
            text: string;
        }

    export class Button extends HtmlElement
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

            this.container.classList.add( 'Game-Button' );
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


    export interface BooleanArgs extends HtmlElementArgs
        {
            value: boolean;
            callback: (value: any) => any;
        }

    export class Boolean extends HtmlElement
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
                args.callback( _this );
                };


                // set properties before this
            super( args );

                // .container only available after super()
            this.element = document.createElement( 'span' );
            this.container.appendChild( this.element );
            this.container.classList.add( 'Game-Boolean' );

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
            this.container.classList.add( 'Game-TwoState' );
            }
        }


    export interface MultipleOptionsArgs extends HtmlElementArgs
        {
            options: string[];
            callback: (button: MultipleOptions, position: number, htmlElement: HTMLElement) => any;
        }

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

            this.container.classList.add( 'Game-MultipleOptions' );
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
                this.selected.classList.remove( 'Game-selected' );
                }

            this.selected = element;
            element.classList.add( 'Game-selected' );
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


    export interface RangeArgs extends HtmlElementArgs
        {
            min: number;
            max: number;
            value: number;
            step?: number;
            onChange?: (button: Range) => any;
        }

    export class Range extends HtmlElement
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

            this.container.classList.add( 'Game-Range' );
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