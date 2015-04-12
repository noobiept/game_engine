/// <reference path="canvas.ts" />
/// <reference path="html.ts" />
/// <reference path="highscore.ts" />
/// <reference path="message.ts" />
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
/// <reference path="utilities/utilities.1.7.0.d.ts" />
/// <reference path="typings/tsd.d.ts" />

/**
 * Basic usage:
 *
 *     Game.init( document.body, 400, 400 );
 *
 *     var rect = new Game.Rectangle({
 *             x: 200,
 *             y: 200,
 *             width: 20,
 *             height: 20,
 *             color: 'green'
 *         });
 *     Game.addElement( rect );
 *
 *     Game.addToGameLoop( function()
 *         {
 *         console.log( 'hi' );
 *         }, 1 );
 *
 */
module Game
{
var ALL_CANVAS: Game.Canvas[] = [];
var CANVAS_CONTAINER: HTMLDivElement;

var TIME: number;
var ANIMATION_ID: number;

    // mouse move variables
var MOUSE_MOVE_ID: number;
var ELEMENT_UNDER_MOUSE: Element = null;
var MOUSE_X: number = -1;
var MOUSE_Y: number = -1;

var CALLBACKS: { callback: () => any; interval: number; count: number; }[] = [];


/**
 * Initialize the canvas/game loop/etc.
 *
 * @param htmlContainer The canvas is going to be appended to this element.
 * @param canvasWidth Canvas width.
 * @param canvasHeight Canvas height.
 */
export function init( htmlContainer: HTMLElement, canvasWidth: number, canvasHeight: number )
    {
    CANVAS_CONTAINER = document.createElement( 'div' );
    CANVAS_CONTAINER.id = 'Game-canvasContainer';

    htmlContainer.appendChild( CANVAS_CONTAINER );

    var canvas = new Game.Canvas({
            width: canvasWidth,
            height: canvasHeight
        });
    Game.addCanvas( canvas );


    Sound.init();
    Bullet.init();

    CANVAS_CONTAINER.addEventListener( 'click', clickEvents );


    document.addEventListener( 'visibilitychange', function( event )
        {
        if ( document.hidden )
            {
            stopGameLoop();
            }

        else
            {
            startGameLoop();
            }
        });


    startGameLoop();
    }


/**
 * Starts the game loop. This is called automatically when you initialize the engine (Game.init()).
 * Only useful when you manually stop the loop (with Game.stopGameLoop()) and need to restart it later.
 */
export function startGameLoop()
    {
    TIME = new Date().getTime();
    loop();
    }


/**
 * Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
 */
export function stopGameLoop()
    {
    window.cancelAnimationFrame( ANIMATION_ID );
    }


/**
 * Activate the mouse move events: `mouseout` and `mouseover`.
 *
 * @param interval Interval (in milliseconds) between calls of the function that checks for these events.
 */
export function activateMouseMoveEvents( interval: number )
    {
    ELEMENT_UNDER_MOUSE = null;

    document.body.addEventListener( 'mousemove', updateMousePosition );

    MOUSE_MOVE_ID = window.setInterval( mouseMoveEvents, interval );
    }


/**
 * Disable the mouse move events: `mouseout` and `mouseover`.
 */
export function disableMouseMoveEvents()
    {
    window.clearInterval( MOUSE_MOVE_ID );
    document.body.removeEventListener( 'mousemove', updateMousePosition );
    }


function updateMousePosition( event )
    {
    MOUSE_X = event.clientX;
    MOUSE_Y = event.clientY;
    }


/**
 * Get a canvas object (Game.Canvas). When called without an argument it returns the first one.
 *
 * @param id Id of the canvas, returns the first one (id 0) by default.
 */
export function getCanvas( id?: number )
    {
    if ( typeof id === 'undefined' )
        {
        id = 0;
        }

    return ALL_CANVAS[ id ];
    }


/**
    @param canvas The canvas to be added.
    @param position The desired position of the canvas. The canvas are stacked on the same space. The 0 position, is the one in the back, and the higher the value, the most on top. Keep in mind that the position may not be the same as the returned id. If not provided, then the canvas is added on top (last position).
    @return The id of the canvas. Can be used to retrieve the canvas later on with Game.getCanvas(). The id can be invalidated if there's new canvas added in a specific position.
 */
export function addCanvas( canvas: Game.Canvas, position?: number )
    {
    if ( Utilities.isNumber( position ) )
        {
        if ( position < 0 )
            {
            position = 0;
            }

        else if ( position > ALL_CANVAS.length )
            {
            position = ALL_CANVAS.length;
            }
        }

    else
        {
            // add at the end
        position = ALL_CANVAS.length;
        }


    var previous = ALL_CANVAS[ position ];

    ALL_CANVAS.splice( position, 0, canvas );

    if ( previous )
        {
        CANVAS_CONTAINER.insertBefore( canvas._canvas, previous._canvas );
        }

    else
        {
        CANVAS_CONTAINER.appendChild( canvas._canvas );
        }


    return position;
    }


/**
    Adds an element to a canvas. If 'id' is not given, then its added to the first canvas (the one most to the back).

    @param element Element or Element[] to be added.
    @param id The canvas id.
 */
export function addElement( element: any, id?: number )
    {
    if ( typeof id === 'undefined' )
        {
        id = 0;
        }

    return ALL_CANVAS[ id ].addElement( element );
    }


/**
 * For when you don't know in what canvas the element is in. It will try in all the canvas.
 *
 * @param element Element or Element[] to be removed.
 * @return If the element was removed.
 */
export function removeElement( element: any )
    {
    for (var a = ALL_CANVAS.length - 1 ; a >= 0 ; a--)
        {
        var canvas = ALL_CANVAS[ a ];

        var removed = canvas.removeElement( element );

        if ( removed )
            {
            return true;
            }
        }

    return false;
    }


/**
 * Adds a callback function to be called at a certain interval (or every tick) in the game loop (before the draw phase)
 *
 * @param callback The callback function.
 * @param interval Interval between function calls. If not given then it is called every tick. In seconds.
 * @return If it was added successful.
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


/**
 * Remove a callback from the game loop.
 *
 * @param callback The function to remove.
 * @return If the function was removed or wasn't found.
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


/**
 * Remove all the callbacks from the game loop.
 */
export function removeAllCallbacks()
    {
    CALLBACKS.length = 0;
    }


/**
 * A click event on the canvas was dispatched. We pass it on to the canvas objects.
 *
 * @param event The mouse event fired.
 */
function clickEvents( event: MouseEvent )
    {
    for (var a = ALL_CANVAS.length - 1 ; a >= 0 ; a--)
        {
        var canvas = ALL_CANVAS[ a ];

        if ( canvas.events_enabled )
            {
            canvas.mouseClickEvents( event );
            }
        }
    }


/**
 * Deal with the mouse move events: `mouseout` and `mouseover`.
 */
function mouseMoveEvents()
    {
        // find an element that is under the current x/y position of the mouse
    var element;

    for (var a = ALL_CANVAS.length - 1 ; a >= 0 ; a--)
        {
        var canvas = ALL_CANVAS[ a ];

        if ( canvas.events_enabled )
            {
            var rect = canvas._canvas.getBoundingClientRect();

            var x = MOUSE_X - rect.left;
            var y = MOUSE_Y - rect.top;

            element = canvas.getElement( x, y );

                // found one element, no need to search more
            if ( element )
                {
                break;
                }
            }
        }


    if ( element )
        {
        if ( element !== ELEMENT_UNDER_MOUSE )
            {
            if ( ELEMENT_UNDER_MOUSE )
                {
                ELEMENT_UNDER_MOUSE.dispatchEvent( 'mouseout', { element: ELEMENT_UNDER_MOUSE } );
                }

            element.dispatchEvent( 'mouseover', { element: element } );

            ELEMENT_UNDER_MOUSE = element;
            }
        }

    else
        {
        if ( ELEMENT_UNDER_MOUSE )
            {
            ELEMENT_UNDER_MOUSE.dispatchEvent( 'mouseout', { element: ELEMENT_UNDER_MOUSE } );
            ELEMENT_UNDER_MOUSE = null;
            }
        }
    }



/**
 * The game loop.
 * Updates the game logic, drawn of the canvas, tween update, etc.
 */
function loop()
    {
        // find the delta time
    var now = new Date().getTime();

        // time since the last update (in seconds)
    var delta = (now - TIME) / 1000;

    TIME = now;

        // call any function added to the game loop
    callbacks( delta );

        // update all the tweens
    Tween.update( delta );


    for (var a = ALL_CANVAS.length - 1 ; a >= 0 ; a--)
        {
        var canvas = ALL_CANVAS[ a ];

        if ( canvas.update_on_loop )
            {
                // call any game logic (from units/etc)
            canvas.logic( delta );

                // draw all the elements to the canvas
            canvas.draw();
            }
        }


    ANIMATION_ID = window.requestAnimationFrame( loop );
    }


/**
 * Deal with the callbacks added to the game loop.
 *
 * @param deltaTime Time elapsed since the last update.
 */
function callbacks( deltaTime: number )
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


/**
 * @return The canvas container (an html element).
 */
export function getCanvasContainer()
    {
    return CANVAS_CONTAINER;
    }
}