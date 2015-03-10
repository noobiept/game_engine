module Game
{
export interface CanvasArgs
    {
        width: number;
        height: number;
    }


export class Canvas
    {
    _canvas: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;

    _width: number;
    _height: number;

    _elements: Element[];

    events_enabled: boolean;
    update_on_loop: boolean;    // if it calls the .logic() and .draw() on the game loop (if false, then you need to call it manually)


    constructor( args: CanvasArgs )
        {
        this._canvas = document.createElement( 'canvas' );
        this._canvas.className = 'Game-Canvas';
        this._ctx = this._canvas.getContext( '2d' );

        this._canvas.width = this._width = args.width;
        this._canvas.height = this._height = args.height;

        this._elements = [];

        this.events_enabled = true;
        this.update_on_loop = true;
        }


    /*
        addElement( element );
        addElement( element1, element2 );
        addElement( [ element1, element2 ] );
     */
    addElement( args: any )
        {
        var elements = arguments;

        if ( args instanceof Array )
            {
            elements = args;
            }

        var length = elements.length;

        for (var a = 0 ; a < length ; a++)
            {
            this._elements.push( elements[ a ] );
            }
        }


    /*
        removeElement( element );
        removeElement( element1, element2 );
        removeElement( [ element1, element2 ] );
    */
    removeElement( args: any )
        {
        var elements = arguments;
        var removed = false;

        if ( args instanceof Array )
            {
            elements = args;
            }

        var length = elements.length;

        for (var a = 0 ; a < length ; a++)
            {
            var element = elements[ a ];

            var index = this._elements.indexOf( element );

            if ( index >= 0 )
                {
                this._elements.splice( index, 1 );
                removed = true;
                }
            }

        return removed;
        }


    logic( deltaTime )
        {
        for (var a = this._elements.length - 1 ; a >= 0 ; a--)
            {
            var element = this._elements[ a ];

            if ( element._has_logic === true )
                {
                element.logic( deltaTime );
                }
            }
        }


    draw()
        {
        this._ctx.clearRect( 0, 0, this._width, this._height );

        var length = this._elements.length;

        for (var a = 0 ; a < length ; a++)
            {
            var element = this._elements[ a ];

            if ( element.visible )
                {
                element.draw( this._ctx );
                }
            }
        }


    mouseEvents( event )
        {
        var elements = this._elements;
        var rect = this._canvas.getBoundingClientRect();

        var x = event.x - rect.left;
        var y = event.y - rect.top;
        var type = event.type;


            // find the element on the x/y position
        for (var a = elements.length - 1 ; a >= 0 ; a--)
            {
            var element = elements[ a ];

                // check if there's listeners on this element
            if ( element.hasListeners( type ) )
                {
                if ( element.intersect( x, y, event ) )
                    {
                    break;
                    }
                }
            }
        }


    updateDimensions( width, height )
        {
        this._canvas.width = this._width = width;
        this._canvas.height = this._height = height;
        }


    getRandomPosition()
        {
        return {
                x: Utilities.getRandomInt( 0, this._width ),
                y: Utilities.getRandomInt( 0, this._height )
            }
        }


    /*
        Check if a position is located in the canvas
     */
    isInCanvas( x, y )
        {
        if ( x < 0 ||
             x > this._width ||
             y < 0 ||
             y > this._height )
            {
            return false;
            }

        return true;
        }


    getWidth()
        {
        return this._width;
        }


    getHeight()
        {
        return this._height;
        }


    getHtmlCanvasElement()
        {
        return this._canvas;
        }


    getCanvasContext()
        {
        return this._ctx;
        }


    getElements()
        {
        return this._elements;
        }
    }
}