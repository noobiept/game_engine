import { CollisionDetectionAlgorithm } from "./collision-detection/collision_detection";
import { Element } from "./element";
import * as Utilities from "@drk4/utilities";
import * as CollisionDetection from "./collision-detection/collision_detection";
import * as Sound from "./sound";
import { Canvas } from "./canvas";
import { Tween } from "./tween";

/**
 * Basic usage:
 *
 *     Game.init({ container: document.body, width: 400, height: 400 });
 *
 *     const rect = new Game.Rectangle({
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
 *         }, { delay: 1 } );
 *
 */
interface Callback {
    callback: (deltaTime: number) => any;
    delay: number;
    count: number;
    isInterval: boolean;
    removed: boolean;
}

export interface GameLoopOptions {
    delay?: number; // time (in seconds) until/between calls (default 0, every tick)
    interval?: boolean; // call repeatedly (every `delay`) vs once like a timeout (default true)
}

const ALL_CANVAS: Canvas[] = [];
let CANVAS_CONTAINER: HTMLDivElement;
let INITIALIZED = false;

// game loop variables
let FRAME_INTERVAL = 1000 / 35; // time between each update in milliseconds
let MAX_DELTA_TIME = 0.25; // the longest time step (in seconds) given to the game logic in one update
let LAST_UPDATE_TIME = 0; // when the last update happened (milliseconds, same clock as `performance.now()`)
let NEXT_UPDATE_TIME = 0; // when the next update is due
let ANIMATION_ID: number | null = null; // the requested animation frame (`null` when the loop isn't running)
let STOPPED_BY_USER = false; // if the loop was stopped with `stopGameLoop()` (so it isn't restarted when the page becomes visible again)
const FRAME_TOLERANCE = 2; // how early (in milliseconds) an animation frame can be and still update (the frame times jitter a bit)

// mouse move variables
let MOUSE_MOVE_ID: number | null = null;
const ELEMENTS_UNDER_MOUSE: Element[] = [];
let MOUSE_X: number = -1;
let MOUSE_Y: number = -1;
let MOUSE_MOVED = false; // if the mouse moved since the last time we checked

const CALLBACKS: Callback[] = [];

const TO_BE_REMOVED: Element[] = [];
let REMOVAL_SCHEDULED = false;

export interface InitArgs {
    container: HTMLElement; // the canvas is appended to this html element
    width: number; // canvas width
    height: number; // canvas height
    collision?: CollisionDetectionAlgorithm; // collision detection algorithm (default: the 'CheckAll' algorithm)
}

/**
 * Initialize the canvas/game loop/etc.
 *
 * Calling it again replaces the previous game: its canvas are taken out of the page (and their elements are detached),
 * and a new canvas/collision detection is set up. The game loop callbacks and the tweens are kept.
 *
 * @param args Initialization options.
 */
export function init(args: InitArgs) {
    if (INITIALIZED) {
        teardown();
    }

    INITIALIZED = true;

    CANVAS_CONTAINER = document.createElement("div");
    CANVAS_CONTAINER.id = "Game-canvasContainer";

    args.container.appendChild(CANVAS_CONTAINER);

    // set up the collision detection first, so it's ready when elements are added
    CollisionDetection.init(args.collision);

    const canvas = new Canvas({
        width: args.width,
        height: args.height,
    });
    addCanvas(canvas);

    Sound.init();

    CANVAS_CONTAINER.addEventListener("click", clickEvents);
    CANVAS_CONTAINER.addEventListener("mousedown", clickEvents);
    CANVAS_CONTAINER.addEventListener("mouseup", clickEvents);

    // adding the same function again doesn't add a second listener
    document.addEventListener("visibilitychange", onVisibilityChange);

    setFps(35);
    startGameLoop();
}

/**
 * Undo what `init()` did, so it can be initialized again.
 */
function teardown() {
    pauseLoop();
    disableMouseMoveEvents();
    flushRemovals();

    CANVAS_CONTAINER.removeEventListener("click", clickEvents);
    CANVAS_CONTAINER.removeEventListener("mousedown", clickEvents);
    CANVAS_CONTAINER.removeEventListener("mouseup", clickEvents);
    CANVAS_CONTAINER.remove();

    for (const canvas of ALL_CANVAS) {
        canvas.removeChild(canvas.getAllChildren().slice());
    }

    ALL_CANVAS.length = 0;
}

/**
 * Starts the game loop. This is called automatically when you initialize the engine (Game.init()).
 * Only useful when you manually stop the loop (with Game.stopGameLoop()) and need to restart it later.
 * Does nothing if the loop is already running, or before `init()` is called. While the page is hidden, the loop only starts once it becomes visible.
 */
export function startGameLoop() {
    STOPPED_BY_USER = false;

    if (INITIALIZED && !document.hidden) {
        resumeLoop();
    }
}

/**
 * Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
 * The loop stays stopped until `startGameLoop()` is called (it isn't restarted when the page becomes visible again).
 */
export function stopGameLoop() {
    STOPPED_BY_USER = true;

    pauseLoop();
}

/**
 * Tells if the game loop is currently running.
 */
export function isGameLoopRunning() {
    return ANIMATION_ID !== null;
}

function resumeLoop() {
    // already running
    if (ANIMATION_ID !== null) {
        return;
    }

    const now = performance.now();

    LAST_UPDATE_TIME = now;
    NEXT_UPDATE_TIME = now + FRAME_INTERVAL;
    ANIMATION_ID = window.requestAnimationFrame(loop);
}

function pauseLoop() {
    if (ANIMATION_ID !== null) {
        window.cancelAnimationFrame(ANIMATION_ID);
        ANIMATION_ID = null;
    }
}

/**
 * Pause the game loop while the page is hidden.
 */
function onVisibilityChange() {
    if (document.hidden) {
        pauseLoop();
    } else if (INITIALIZED && !STOPPED_BY_USER) {
        resumeLoop();
    }
}

/**
 * Activate the mouse move events: `mouseout` and `mouseover`.
 * Calling it again while active only changes the interval.
 *
 * @param interval Interval (in milliseconds) between calls of the function that checks for these events.
 */
export function activateMouseMoveEvents(interval: number) {
    if (MOUSE_MOVE_ID !== null) {
        window.clearInterval(MOUSE_MOVE_ID);
    } else {
        ELEMENTS_UNDER_MOUSE.length = 0;
        CANVAS_CONTAINER.addEventListener("mousemove", updateMousePosition);
    }

    MOUSE_MOVE_ID = window.setInterval(mouseMoveEvents, interval);
}

/**
 * Disable the mouse move events: `mouseout` and `mouseover`.
 * The elements that are under the mouse get a `mouseout` event.
 */
export function disableMouseMoveEvents() {
    if (MOUSE_MOVE_ID === null) {
        return;
    }

    window.clearInterval(MOUSE_MOVE_ID);
    MOUSE_MOVE_ID = null;
    MOUSE_MOVED = false;
    CANVAS_CONTAINER.removeEventListener("mousemove", updateMousePosition);

    const elements = ELEMENTS_UNDER_MOUSE.splice(0);

    for (let a = elements.length - 1; a >= 0; a--) {
        elements[a].dispatchMouseOutEvent();
    }
}

/**
 * Specify the frames per second that the engine will try to run at (the game logic is updated and the canvas drawn at this rate).
 *
 * @param fps A positive number.
 */
export function setFps(fps: number) {
    if (!(fps > 0)) {
        throw new RangeError("The fps needs to be a positive number.");
    }

    FRAME_INTERVAL = 1000 / fps;
}

/**
 * Set the longest time step (in seconds) given to the game logic in one update (default `0.25`).
 * When an update takes longer than this (a slow device, the debugger was paused, etc), the game slows down instead of
 * moving the elements a big distance at once (which could make them go through each other without colliding).
 *
 * @param seconds A positive number.
 */
export function setMaxDeltaTime(seconds: number) {
    if (!(seconds > 0)) {
        throw new RangeError(
            "The max delta time needs to be a positive number.",
        );
    }

    MAX_DELTA_TIME = seconds;
}

function updateMousePosition(event: MouseEvent) {
    MOUSE_X = event.clientX;
    MOUSE_Y = event.clientY;

    MOUSE_MOVED = true;
}

/**
 * Get a canvas object (Game.Canvas). When called without an argument it returns the first one.
 *
 * @param id Id of the canvas, returns the first one (id 0) by default.
 */
export function getCanvas(id?: number) {
    if (typeof id === "undefined") {
        id = 0;
    }

    return ALL_CANVAS[id];
}

/**
    @param canvas The canvas to be added.
    @param position The desired position of the canvas. The canvas are stacked on the same space. The 0 position, is the one in the back, and the higher the value, the most on top. Keep in mind that the position may not be the same as the returned id. If not provided, then the canvas is added on top (last position).
    @return The id of the canvas. Can be used to retrieve the canvas later on with Game.getCanvas(). The id can be invalidated if there's new canvas added in a specific position.
 */
export function addCanvas(canvas: Canvas, position?: number) {
    if (Utilities.isNumber(position)) {
        if (position < 0) {
            position = 0;
        } else if (position > ALL_CANVAS.length) {
            position = ALL_CANVAS.length;
        }
    } else {
        // add at the end
        position = ALL_CANVAS.length;
    }

    const previous = ALL_CANVAS[position];

    ALL_CANVAS.splice(position, 0, canvas);

    if (previous) {
        CANVAS_CONTAINER.insertBefore(canvas._canvas, previous._canvas);
    } else {
        CANVAS_CONTAINER.appendChild(canvas._canvas);
    }

    return position;
}

/**
    Adds an element to a canvas. If 'id' is not given, then its added to the first canvas (the one most to the back).

    @param element Element or Element[] to be added.
    @param id The canvas id.
 */
export function addElement(element: Element | Element[], id?: number) {
    if (typeof id === "undefined") {
        id = 0;
    }

    const canvas = ALL_CANVAS[id];

    if (!canvas) {
        throw new Error(`There's no canvas with the id ${id}.`);
    }

    return canvas.addChild(element);
}

/**
 * For when you don't know in what canvas the element is in. It will try in all the canvas.
 *
 * @param element Element or Element[] to be removed.
 * @return If the element was removed.
 */
export function removeElement(element: Element | Element[]) {
    for (let a = ALL_CANVAS.length - 1; a >= 0; a--) {
        const canvas = ALL_CANVAS[a];

        const removed = canvas.removeChild(element);

        if (removed) {
            return true;
        }
    }

    return false;
}

/**
 * It can be problematic to remove elements during the logic functions, since the logic functions are called in a loop over all the elements.
 * The elements passed to this function, will only be removed after (at the end of the current game loop update, or once the
 * current code finishes when the game loop isn't running).
 * Don't call this directly, use the `Element.remove()` method instead.
 */
export function _safeRemove(element: Element) {
    TO_BE_REMOVED.push(element);

    // without the game loop running there's no update to do the removal, so do it once the current code finishes
    if (ANIMATION_ID === null && !REMOVAL_SCHEDULED) {
        REMOVAL_SCHEDULED = true;

        queueMicrotask(function () {
            REMOVAL_SCHEDULED = false;

            if (ANIMATION_ID === null) {
                flushRemovals();
            }
        });
    }
}

/**
 * Remove the elements that were marked to be removed (with `Element.remove()`).
 */
function flushRemovals() {
    const elements = TO_BE_REMOVED.splice(0);

    for (let a = elements.length - 1; a >= 0; a--) {
        elements[a]._removeNow();
    }
}

/**
 * Adds a callback function to be called at a certain timeout/interval (or every tick) in the game loop (before the draw phase).
 *
 * Sometimes its useful to add a function call through this, for example when you have code that may remove elements, but its called from an event handler (which may try to process the elements that you removed).
 *
 * A callback is called at most once per update. When the `delay` is shorter than the time between updates, it's called on every update.
 *
 * @param callback The callback function. It receives the loop's `deltaTime` (time elapsed since the last update, in seconds).
 * @param options `delay` is the time (in seconds) until/between calls (default `0`, every tick). `interval` controls whether
 *                it's called repeatedly (every `delay`) or just once like a timeout (default `true`, an interval).
 * @return If it was added successfully.
 */
export function addToGameLoop(
    callback: (deltaTime: number) => any,
    options?: GameLoopOptions,
) {
    if (!Utilities.isFunction(callback)) {
        return false;
    }

    const delay = options?.delay ?? 0;
    const isInterval = options?.interval ?? true;

    CALLBACKS.push({
        callback: callback,
        isInterval: isInterval,
        delay: delay,
        count: 0,
        removed: false,
    });

    return true;
}

/**
 * Remove a callback from the game loop (every time it was added).
 *
 * @param callback The function to remove.
 * @return If the function was removed or wasn't found.
 */
export function removeFromGameLoop(callback: (deltaTime: number) => any) {
    let removed = false;

    for (let a = CALLBACKS.length - 1; a >= 0; a--) {
        const callInfo = CALLBACKS[a];

        if (callInfo.callback === callback) {
            callInfo.removed = true;
            CALLBACKS.splice(a, 1);
            removed = true;
        }
    }

    return removed;
}

/**
 * Remove all the callbacks from the game loop.
 */
export function removeAllCallbacks() {
    for (const callInfo of CALLBACKS) {
        callInfo.removed = true;
    }

    CALLBACKS.length = 0;
}

/**
 * When a mouse event is fired on the canvas, this is called, which will pass it to the canvas objects to check if there's any element that has listeners to it.
 *
 * @param event The mouse event fired.
 */
function clickEvents(event: MouseEvent) {
    // go through a copy, since the listeners can change the canvas list
    const allCanvas = ALL_CANVAS.slice();

    for (let a = allCanvas.length - 1; a >= 0; a--) {
        const canvas = allCanvas[a];

        if (canvas.eventsEnabled) {
            canvas.mouseClickEvents(event);
        }
    }
}

/**
 * Deal with the mouse move events: `mouseout`, `mouseover` and `mousemove`.
 */
function mouseMoveEvents() {
    // find all the elements that are under the current x/y position of the mouse
    let all: Element[] = [];
    let a;

    for (a = ALL_CANVAS.length - 1; a >= 0; a--) {
        const canvas = ALL_CANVAS[a];

        if (canvas.eventsEnabled) {
            const rect = canvas._canvas.getBoundingClientRect();

            const x = MOUSE_X - rect.left;
            const y = MOUSE_Y - rect.top;

            const elements = canvas.getChildrenIn(x, y);

            // found some elements that are under the x/y position
            if (elements.length > 0) {
                all = all.concat(elements);
            }
        }
    }

    // update the state before dispatching the events (the listeners may call this module's functions)
    const previous = ELEMENTS_UNDER_MOUSE.splice(0);
    ELEMENTS_UNDER_MOUSE.push(...all);

    const moved = MOUSE_MOVED;
    MOUSE_MOVED = false;

    // if the mouse moved since the last time, dispatch the mouse move events for the elements under it
    if (moved) {
        for (a = all.length - 1; a >= 0; a--) {
            all[a].dispatchMouseMoveEvent();
        }
    }

    // the elements that were under the mouse, but aren't anymore
    for (a = previous.length - 1; a >= 0; a--) {
        if (all.indexOf(previous[a]) < 0) {
            previous[a].dispatchMouseOutEvent();
        }
    }

    // the elements that weren't under the mouse before
    for (a = all.length - 1; a >= 0; a--) {
        if (previous.indexOf(all[a]) < 0) {
            all[a].dispatchMouseOverEvent();
        }
    }
}

/**
 * The game loop, called on every animation frame.
 * Updates the game at the set fps (see `setFps()`).
 *
 * @param now The time of the animation frame (in milliseconds).
 */
function loop(now: number) {
    ANIMATION_ID = window.requestAnimationFrame(loop);

    // not time for the next update yet
    if (now < NEXT_UPDATE_TIME - FRAME_TOLERANCE) {
        return;
    }

    // keep to the update rate on average (instead of only updating on whole animation frames), but don't try to catch up after a long pause
    NEXT_UPDATE_TIME = Math.max(NEXT_UPDATE_TIME + FRAME_INTERVAL, now);

    // time since the last update (in seconds), limited so a long pause doesn't move the elements a big distance at once
    const deltaTime = Math.min(
        Math.max(now - LAST_UPDATE_TIME, 0) / 1000,
        MAX_DELTA_TIME,
    );
    LAST_UPDATE_TIME = now;

    update(deltaTime);
}

/**
 * Updates the game logic, the tweens, the collision detection, and draws the canvas.
 *
 * @param deltaTime Time elapsed since the last update (in seconds).
 */
function update(deltaTime: number) {
    // call any function added to the game loop
    callbacks(deltaTime);

    // update all the tweens
    Tween.update(deltaTime);

    // get all the canvas that are to be updated on the game loop
    const allCanvas: Canvas[] = [];
    let a;

    for (a = ALL_CANVAS.length - 1; a >= 0; a--) {
        const canvas = ALL_CANVAS[a];

        if (canvas.updateOnLoop) {
            allCanvas.push(canvas);
        }
    }

    // update the global vertices position of all the elements
    const lastPosition = allCanvas.length - 1;

    for (a = lastPosition; a >= 0; a--) {
        allCanvas[a].updateVertices();
    }

    // call any game logic (from units/etc)
    for (a = lastPosition; a >= 0; a--) {
        allCanvas[a].logic(deltaTime);
    }

    // run the collision detection
    CollisionDetection.checkCollision();

    // remove all deferred elements
    flushRemovals();

    // draw all the elements to the canvas
    for (a = lastPosition; a >= 0; a--) {
        allCanvas[a].draw();
    }
}

/**
 * Deal with the callbacks added to the game loop.
 *
 * @param deltaTime Time elapsed since the last update.
 */
function callbacks(deltaTime: number) {
    // go through a copy, since the callbacks can add/remove callbacks
    const calls = CALLBACKS.slice();

    for (let a = calls.length - 1; a >= 0; a--) {
        const call = calls[a];

        if (call.removed) {
            continue;
        }

        if (call.delay > 0) {
            call.count += deltaTime;

            if (call.count < call.delay) {
                continue;
            }

            // keep the time past the delay (so the calls don't drift), but at most once per update
            call.count -= call.delay;

            if (call.count >= call.delay) {
                call.count %= call.delay;
            }
        }

        // a timeout is only called once
        if (!call.isInterval) {
            removeCall(call);
        }

        call.callback(deltaTime);
    }
}

function removeCall(call: Callback) {
    call.removed = true;

    const index = CALLBACKS.indexOf(call);

    if (index >= 0) {
        CALLBACKS.splice(index, 1);
    }
}

/**
 * @return The canvas container (an html element).
 */
export function getCanvasContainer() {
    return CANVAS_CONTAINER;
}

/**
 * Return the current mouse position (in the client area, not the canvas).
 */
export function getMousePosition() {
    return {
        x: MOUSE_X,
        y: MOUSE_Y,
    };
}
