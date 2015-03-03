/// <reference path="message.ts" />
/// <reference path="component.ts" />
/// <reference path="game_menu.ts" />
/// <reference path="tween.ts" />
/// <reference path="grid.ts" />
/// <reference path="bullet.ts" />
/// <reference path="sprite.ts" />
/// <reference path="text.ts" />
/// <reference path="sound.ts" />
/// <reference path="container.ts" />
/// <reference path="event_dispatcher.ts" />
/// <reference path="preload.ts" />
/// <reference path="element.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="circle.ts" />
/// <reference path="utilities/utilities-1.6.d.ts" />
/// <reference path="typings/tsd.d.ts" />

module Game
{
var CANVAS: HTMLCanvasElement;
var CTX;
var WIDTH: number;
var HEIGHT: number;

var TIME: number;
var ANIMATION_ID: number;

var ELEMENTS: Element[] = [];
var CALLBACKS: { callback: () => any; interval: number; count: number; }[] = [];

export function init( htmlContainer: HTMLElement, canvasWidth: number, canvasHeight: number )
    {
    CANVAS = document.createElement( 'canvas' );
    CANVAS.width = canvasWidth;
    CANVAS.height = canvasHeight;

    CTX = CANVAS.getContext( '2d' );
    WIDTH = canvasWidth;
    HEIGHT = canvasHeight;

    htmlContainer.appendChild( CANVAS );

    Sound.init();
    Bullet.init();

    CANVAS.addEventListener( 'click', mouseEvents );


    var timeHidden = new Date().getTime();

    document.addEventListener( 'visibilitychange', function( event )
        {
        if ( document.hidden )
            {
            timeHidden = new Date().getTime();
            window.cancelAnimationFrame( ANIMATION_ID );
            }

        else
            {
            TIME += new Date().getTime() - timeHidden;
            loop();
            }
        });


    TIME = new Date().getTime();
    loop();
    }


/*
    addElement( element );
    addElement( element1, element2 );
    addElement( [ element1, element2 ] );
 */
export function addElement( args: any )
    {
    var elements = arguments;

    if ( args instanceof Array )
        {
        elements = args;
        }

    var length = elements.length;

    for (var a = 0 ; a < length ; a++)
        {
        ELEMENTS.push( elements[ a ] );
        }
    }


/*
    removeElement( element );
    removeElement( element1, element2 );
    removeElement( [ element1, element2 ] );
 */
export function removeElement( args: any )
    {
    var elements = arguments;

    if ( args instanceof Array )
        {
        elements = args;
        }

    var length = elements.length;

    for (var a = 0 ; a < length ; a++)
        {
        var element = elements[ a ];

        var index = ELEMENTS.indexOf( element );

        if ( index >= 0 )
            {
            ELEMENTS.splice( index, 1 );
            }
        }
    }


/**
    Adds a callback function to be called at a certain interval (or every tick) in the game loop (before the draw phase)

    @param callback - the callback
    @param interval - interval between function calls. If not given then it is called every tick. In seconds.
    @return {Boolean} If it was added successful
 */
export function addToGameLoop( callback: () => any, interval?: number )
    {
    if ( !Utilities.isFunction( callback ) )
        {
        return false;
        }

    if ( !Utilities.isNumber( interval ) || interval <= 0 )
        {
        interval = -1;
        }

    CALLBACKS.push({
            callback: callback,
            interval: interval,
            count: 0
        });

    return true;
    }



/*
    Remove a callback from the game loop
 */
export function removeFromGameLoop( callback: () => any )
    {
    for (var a = CALLBACKS.length - 1 ; a >= 0 ; a--)
        {
        var callInfo = CALLBACKS[ a ];

        if ( callInfo.callback === callback )
            {
            CALLBACKS.splice( a, 1 );
            return true;
            }
        }

    return false;
    }


export function removeAllCallbacks()
    {
    CALLBACKS.length = 0;
    }


export function getRandomPosition()
    {
    return {
            x: Utilities.getRandomInt( 0, WIDTH ),
            y: Utilities.getRandomInt( 0, HEIGHT )
        }
    }


function mouseEvents( event )
    {
    var elements = getElements();
    var canvas = getCanvas();
    var type = event.type;

    var rect = canvas.getBoundingClientRect();
    var x = event.x - rect.left;
    var y = event.y - rect.top;

        // find the element on the x/y position
    for (var a = 0 ; a < elements.length ; a++)
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


function loop()
    {
        // find the delta time
    var now = new Date().getTime();

        // time since the last update (in seconds)
    var delta = (now - TIME) / 1000;

    TIME = now;

        // call any function added to the game loop
    callbacks( delta );

        // call any game logic (from units/etc)
    logic( delta );

        // update all the tweens
    Tween.update( delta );

        // draw all the elements to the canvas
    draw();

    ANIMATION_ID = window.requestAnimationFrame( loop );
    }



function callbacks( deltaTime )
    {
    for (var a = CALLBACKS.length - 1 ; a >= 0 ; a--)
        {
        var call = CALLBACKS[ a ];

        if ( call.interval <= 0 )
            {
            call.callback();
            }

        else
            {
            call.count += deltaTime;

            if ( call.count >= call.interval )
                {
                call.count = 0;
                call.callback();
                }
            }
        }
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

    var length = ELEMENTS.length;

    for (var a = 0 ; a < length ; a++)
        {
        var element = ELEMENTS[ a ];

        if ( element.visible )
            {
            element.draw( CTX );
            }
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


export function updateCanvasDimensions( width, height )
    {
    CANVAS.width = WIDTH = width;
    CANVAS.height = HEIGHT = height;
    }


export function getCanvasContext()
    {
    return CTX;
    }


/*
    Check if a position is located in the canvas
 */
export function isInCanvas( x, y ): boolean
    {
    if ( x < 0 ||
         x > WIDTH ||
         y < 0 ||
         y > HEIGHT )
        {
        return false;
        }

    return true;
    }
}