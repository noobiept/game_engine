/// <reference path="container.ts" />
/// <reference path="event_dispatcher.ts" />
/// <reference path="preload.ts" />
/// <reference path="element.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="circle.ts" />
/// <reference path="utilities/utilities-1.6.d.ts" />

module Game
{
var CANVAS: HTMLCanvasElement;
var CTX;
var WIDTH: number;
var HEIGHT: number;

var TIME: number;

var ELEMENTS: Element[] = [];
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

    EventDispatcher.init( CANVAS );

    TIME = new Date().getTime();
    loop();
    }


export function addElement( element: Element )
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
        // find the delta time
    var now = new Date().getTime();

        // time since the last update (in seconds)
    var delta = (now - TIME) / 1000;

    TIME = now;

        // call any function added to the game loop
    for (var a = CALLBACKS.length - 1 ; a >= 0 ; a--)
        {
        CALLBACKS[ a ]();
        }

        // call any game logic (from units/etc)
    logic( delta );

        // draw all the elements to the canvas
    draw();

    window.requestAnimationFrame( loop );
    }


function logic( deltaTime )
    {
    for (var a = ELEMENTS.length - 1 ; a >= 0 ; a--)
        {
        var element = ELEMENTS[ a ];

        if ( element._has_logic === true )
            {
            element.logic( deltaTime );
            }
        }
    }


function draw()
    {
    CTX.clearRect( 0, 0, WIDTH, HEIGHT );

    for (var a = 0 ; a < ELEMENTS.length ; a++)
        {
        ELEMENTS[ a ].draw( CTX );
        }
    }


export function getElements()
    {
    return ELEMENTS;
    }


export function getCanvas()
    {
    return CANVAS;
    }
}