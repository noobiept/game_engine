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
var ELEMENTS_UNDER_MOUSE: Element[] = [];
var MOUSE_X: number = -1;
var MOUSE_Y: number = -1;
var MOUSE_MOVED = false;   // if the mouse moved since the last time we checked

var CALLBACKS: { callback: () => any; delay: number; count: number; isInterval: boolean; }[] = [];


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
    CANVAS_CONTAINER.addEventListener( 'mousedown', clickEvents );
    CANVAS_CONTAINER.addEventListener( 'mouseup', clickEvents );


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
    ELEMENTS_UNDER_MOUSE.length = 0;

    CANVAS_CONTAINER.addEventListener( 'mousemove', updateMousePosition );

    MOUSE_MOVE_ID = window.setInterval( mouseMoveEvents, interval );
    }


/**
 * Disable the mouse move events: `mouseout` and `mouseover`.
 */
export function disableMouseMoveEvents()
    {
    window.clearInterval( MOUSE_MOVE_ID );
    CANVAS_CONTAINER.removeEventListener( 'mousemove', updateMousePosition );
    }


function updateMousePosition( event )
    {
    MOUSE_X = event.clientX;
    MOUSE_Y = event.clientY;

    MOUSE_MOVED = true;
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
 * Adds a callback function to be called at a certain timeout/interval (or every tick) in the game loop (before the draw phase).
 *
 * Sometimes its useful to add a function call through this, for example when you have code that may remove elements, but its called from an event handler (which may try to process the elements that you removed).
 *
 * @param callback The callback function.
 * @param delay Time until the function is called. In seconds.
 * @param isInterval If the function is to be called constantly (every passed `delay`), or just one time (a timeout). Default is an interval.
 * @return If it was added successfully.
 */
export function addToGameLoop( callback: () => any, delay: number,  isInterval?: boolean )
    {
    if ( !Utilities.isFunction( callback ) ||
         !Utilities.isNumber( delay ) )
        {
        return false;
        }

    if ( isInterval !== false )
        {
        isInterval = true;
        }

    CALLBACKS.push({
            callback: callback,
            isInterval: isInterval,
            delay: delay,
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
 * When a mouse event is fired on the canvas, this is called, which will pass it to the canvas objects to check if there's any element that has listeners to it.
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
 * Deal with the mouse move events: `mouseout`, `mouseover` and `mousemove`.
 */
function mouseMoveEvents()
    {
        // find all the elements that are under the current x/y position of the mouse
    var all = [];
    var elements;
    var a, element;

    for (a = ALL_CANVAS.length - 1 ; a >= 0 ; a--)
        {
        var canvas = ALL_CANVAS[ a ];

        if ( canvas.events_enabled )
            {
            var rect = canvas._canvas.getBoundingClientRect();

            var x = MOUSE_X - rect.left;
            var y = MOUSE_Y - rect.top;

            elements = canvas.getElements( x, y );

                // found some elements that are under the x/y position
            if ( elements.length > 0 )
                {
                all = all.concat( elements );
                }
            }
        }


        // found some elements in the mouse x/y position
    if ( all.length > 0 )
        {
            // if the mouse moved since the last time, dispatch the mouse move events for these elements
        if ( MOUSE_MOVED )
            {
            for (a = all.length - 1 ; a >= 0 ; a--)
                {
                all[ a ].dispatchMouseMoveEvent();
                }

            MOUSE_MOVED = false;
            }


        for (a = ELEMENTS_UNDER_MOUSE.length - 1 ; a >= 0 ; a--)
            {
            element = ELEMENTS_UNDER_MOUSE[ a ];

                // check if an element that was under the mouse, is still under, otherwise we need to remove it and dispatch the mouse out event
            if ( all.indexOf( element ) < 0 )
                {
                ELEMENTS_UNDER_MOUSE.splice( a, 1 );

                element.dispatchMouseOutEvent();
                }
            }


        for (a = all.length - 1 ; a >= 0 ; a--)
            {
            element = all[ a ];

                // check if this element was not already with the mouse over before, if it wasn't then it means its new so we dispatch the mouse over event
            if ( ELEMENTS_UNDER_MOUSE.indexOf( element ) < 0 )
                {
                element.dispatchMouseOverEvent();

                ELEMENTS_UNDER_MOUSE.push( element );
                }
            }
        }

    else
        {
        for (a = ELEMENTS_UNDER_MOUSE.length - 1 ; a >= 0 ; a--)
            {
            ELEMENTS_UNDER_MOUSE[ a ].dispatchMouseOutEvent();
            }

        ELEMENTS_UNDER_MOUSE.length = 0;
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

        if ( call.delay <= 0 )
            {
            call.callback();

            if ( !call.isInterval )
                {
                CALLBACKS.splice( a, 1 );
                }
            }

        else
            {
            call.count += deltaTime;

            if ( call.count >= call.delay )
                {
                call.count = 0;
                call.callback();

                if ( !call.isInterval )
                    {
                    CALLBACKS.splice( a, 1 );
                    }
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


/**
 * Return the current mouse position (in the client area, not the canvas).
 */
export function getMousePosition()
    {
    return {
            x: MOUSE_X,
            y: MOUSE_Y
        };
    }
}