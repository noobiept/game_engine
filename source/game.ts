/// <reference path="rectangle.ts" />
/// <reference path="utilities/utilities-1.5.d.ts" />

module Game
{
var CANVAS: HTMLCanvasElement;
var CTX;
var WIDTH: number;
var HEIGHT: number;

var ELEMENTS = [];
var CALLBACKS = [];

export function init( htmlContainer: HTMLElement, canvasWidth: number, canvasHeight: number )
    {
    CANVAS = document.createElement( 'canvas' );
    CANVAS.width = canvasWidth;
    CANVAS.height = canvasHeight;

    CTX = CANVAS.getContext( '2d' );
    WIDTH = canvasWidth;
    HEIGHT = canvasHeight;

    htmlContainer.appendChild( CANVAS );

    loop();
    }


export function addElement( element )
    {
    ELEMENTS.push( element );
    }

/**
    Adds a callback function to called every tick in the game loop (before the draw phase)

    @param callback {Function} the callback
    @return {Boolean} If it was added successful
 */

export function addToGameLoop( callback )
    {
    if ( !Utilities.isFunction( callback ) )
        {
        return false;
        }

    CALLBACKS.push( callback );

    return true;
    }


function loop()
    {
    for (var a = CALLBACKS.length - 1 ; a >= 0 ; a--)
        {
        CALLBACKS[ a ]();
        }

    draw();

    window.requestAnimationFrame( loop );
    }


function draw()
    {
    CTX.clearRect( 0, 0, WIDTH, HEIGHT );

    for (var a = 0 ; a < ELEMENTS.length ; a++)
        {
        ELEMENTS[ a ].draw( CTX );
        }
    }
}