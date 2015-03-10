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

module Game
{
var ALL_CANVAS: Game.Canvas[] = [];
var CANVAS_CONTAINER: HTMLDivElement;

var TIME: number;
var ANIMATION_ID: number;

var CALLBACKS: { callback: () => any; interval: number; count: number; }[] = [];


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

    CANVAS_CONTAINER.addEventListener( 'click', mouseEvents );


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


/**
    @param id - Id of the canvas, returns the first one (id 0) by default.
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
    @param canvas - the canvas to be added
    @param position - the desired position of the canvas. The canvas are stacked on the same space. The 0 position, is the one in the back, and the higher the value, the most on top. Keep in mind that the position may not be the same as the returned id. If not provided, then the canvas is added on top (last position).
    @return - The id of the canvas. Can be used to retrieve the canvas later on with Game.getCanvas(). The id can be invalidated if there's new canvas added in a specific position.
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


/*
    Adds an element to a canvas. If 'id' is not given, then its added to the first/initial canvas.
 */
export function addElement( element: Element, id?: number )
    {
    if ( typeof id === 'undefined' )
        {
        id = 0;
        }

    return ALL_CANVAS[ id ].addElement( element );
    }


/*
    For when you don't know in what canvas the element is in. It will try in all the canvas.
 */
export function removeElement( element )
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
    Adds a callback function to be called at a certain interval (or every tick) in the game loop (before the draw phase)

    @param callback - the callback
    @param interval - interval between function calls. If not given then it is called every tick. In seconds.
    @return - If it was added successful
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


function mouseEvents( event )
    {
    for (var a = ALL_CANVAS.length - 1 ; a >= 0 ; a--)
        {
        var canvas = ALL_CANVAS[ a ];

        if ( canvas.events_enabled )
            {
            canvas.mouseEvents( event );
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


export function getCanvasContainer()
    {
    return CANVAS_CONTAINER;
    }
}