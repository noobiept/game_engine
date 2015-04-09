module Game
{
export interface CanvasArgs
    {
        width: number;
        height: number;
    }


/**
 * When you call `Game.init()`, a canvas is already added, which you can use to add elements. If you need more than one canvas, then you can create a new canvas object and add to the game.
 *
 * Basic Usage:
 *
 *     var canvas1 = Game.getCanvas();
 *     var canvas2 = new Game.Canvas({
 *             width: 400,
 *             height: 400
 *         });
 *     Game.addCanvas( canvas2 );
 *
 *     var container = new Game.Container();
 *
 *     canvas2.addElement( container );
 *
 * Examples -- `multiple_canvas`
 */
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


    /**
     *     addElement( element );
     *     addElement( element1, element2 );
     *     addElement( [ element1, element2 ] );
     *
     * @param args Either an `Element`, or `...Element` or an `Element[]`
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


    /**
     *     removeElement( element );
     *     removeElement( element1, element2 );
     *     removeElement( [ element1, element2 ] );
     *
     * @param args Either an `Element` or `...Element` or an `Element[]`
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


    /**
     * Call the logic of the elements added to this canvas (normally on the game loop).
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime: number )
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


    /**
     * Draw all the elements added to the canvas.
     */
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


    /**
     * Check if a mouse event that was triggered is on top of an element (if it intersects it) that is part of this canvas.
     *
     * @param event The mouse event triggered.
     */
    mouseEvents( event: MouseEvent )
        {
        var elements = this._elements;
        var rect = this._canvas.getBoundingClientRect();

        var x = event.x - rect.left;
        var y = event.y - rect.top;


            // find the element on the x/y position
        for (var a = elements.length - 1 ; a >= 0 ; a--)
            {
            var element = elements[ a ];

            if ( element.mouseEvents( x, y, event ) )
                {
                break;
                }
            }
        }


    /**
     * Change the canvas dimensions (width/height).
     *
     * @param width The new width.
     * @param height The new Height.
     */
    updateDimensions( width: number, height: number )
        {
        this._canvas.width = this._width = width;
        this._canvas.height = this._height = height;
        }


    /**
     * Get a random x/y position that is within the canvas.
     *
     * @return The random x/y position.
     */
    getRandomPosition()
        {
        return {
                x: Utilities.getRandomInt( 0, this._width ),
                y: Utilities.getRandomInt( 0, this._height )
            }
        }


    /**
     * @param x The x position.
     * @param y The y position.
     * @return If this position is located inside the canvas or not.
     */
    isInCanvas( x: number, y: number )
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


    /**
     * @return The canvas width.
     */
    getWidth()
        {
        return this._width;
        }


    /**
     * @return The canvas height.
     */
    getHeight()
        {
        return this._height;
        }


    /**
     * @return The canvas html element.
     */
    getHtmlCanvasElement()
        {
        return this._canvas;
        }


    /**
     * @return The 2d canvas rendering context object.
     */
    getCanvasContext()
        {
        return this._ctx;
        }


    /**
     * @return The elements added to this canvas.
     */
    getElements()
        {
        return this._elements;
        }
    }
}