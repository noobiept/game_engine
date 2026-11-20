import { CollisionDetectionAlgorithm } from "./collision-detection/collision_detection";
import { Element } from "./element";
import { EventDispatcher } from "./event_dispatcher";
import * as Keyboard from "./keyboard";
import * as Utilities from "@drk4/utilities";
import * as CollisionDetection from "./collision-detection/collision_detection";
import * as Sound from "./sound";
import { Canvas } from "./canvas";
import { Tween } from "./tween";
import { hasReached, timePast } from "./time";

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

/**
 * The events of the game loop (see `Game.addEventListener()`). Their listeners don't get any data.
 */
export interface GameEvents {
    pause: void; // the loop stopped (the page was hidden, or `stopGameLoop()` was called)
    resume: void; // the loop is running again (the page is visible again, `startGameLoop()`, or `init()`)
}

const ALL_CANVAS: Canvas[] = [];
const EVENTS = new EventDispatcher();
let CANVAS_CONTAINER: HTMLDivElement;
let INITIALIZED = false;

// game loop variables
let FRAME_INTERVAL = 0; // least time between updates in milliseconds (0 is no limit, updates on every animation frame)
let MAX_DELTA_TIME = 0.25; // the longest time step (in seconds) given to the game logic in one update
let LAST_UPDATE_TIME = 0; // when the last update happened (milliseconds, same clock as `performance.now()`)
let NEXT_UPDATE_TIME = 0; // when the next update is due
let ANIMATION_ID: number | null = null; // the requested animation frame (`null` when the loop isn't running)
let STOPPED_BY_USER = false; // if the loop was stopped with `stopGameLoop()` (so it isn't restarted when the page becomes visible again)
const FRAME_TOLERANCE = 2; // how early (in milliseconds) an animation frame can be and still update (the frame times jitter a bit)
let FIXED_TIMESTEP: number | null = null; // the time (in seconds) of each step of the logic with a fixed update rate (`null` updates once per frame)
let ACCUMULATOR = 0; // with a fixed update rate, the time that passed but wasn't stepped yet (in seconds)
let RENDER_ALPHA = 1; // where the drawing is between the last two steps (0 is the previous one, 1 the last one)
const STEP_TOLERANCE = 1e-6; // a step is due when the time is this close to it (in seconds), so a rounding error doesn't leave it for the next frame

// mouse move variables
let MOUSE_MOVE_ID: number | null = null;
const ELEMENTS_UNDER_MOUSE: Element[] = [];
let MOUSE_X: number = -1;
let MOUSE_Y: number = -1;
let MOUSE_MOVED = false; // if the mouse moved since the last time we checked

const CALLBACKS: Callback[] = [];

const TO_BE_DESTROYED: Element[] = [];
let DESTROY_SCHEDULED = false;

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

    startGameLoop();
}

/**
 * Undo what `init()` did, so it can be initialized again.
 */
function teardown() {
    pauseLoop();
    disableMouseMoveEvents();
    flushDestroyed();

    CANVAS_CONTAINER.removeEventListener("click", clickEvents);
    CANVAS_CONTAINER.removeEventListener("mousedown", clickEvents);
    CANVAS_CONTAINER.removeEventListener("mouseup", clickEvents);
    CANVAS_CONTAINER.remove();

    for (const canvas of ALL_CANVAS) {
        canvas.removeChild(canvas.getAllChildren());
    }

    ALL_CANVAS.length = 0;
}

/**
 * Leave the game as if the engine was just loaded: no canvas, game loop, callbacks or loop event listeners, and the
 * default settings. For tests, see `resetGame()` in `@drk4/game-engine/testing`.
 */
export function _reset() {
    // no `pause` event for this
    EVENTS.removeEventListener("pause");
    EVENTS.removeEventListener("resume");

    if (INITIALIZED) {
        teardown();
        CollisionDetection.clear();
        INITIALIZED = false;
    } else {
        pauseLoop();
    }

    document.removeEventListener("visibilitychange", onVisibilityChange);
    removeAllCallbacks();

    STOPPED_BY_USER = false;
    FRAME_INTERVAL = 0;
    MAX_DELTA_TIME = 0.25;
    LAST_UPDATE_TIME = 0;
    NEXT_UPDATE_TIME = 0;
    FIXED_TIMESTEP = null;
    ACCUMULATOR = 0;
    RENDER_ALPHA = 1;
    TO_BE_DESTROYED.length = 0;
    MOUSE_X = -1;
    MOUSE_Y = -1;
    MOUSE_MOVED = false;
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

/**
 * Listen to the game loop stopping and starting again, for what runs outside of it but should stop with the game:
 * music played through your own `AudioContext`, or the engine's sounds when the game is paused with `stopGameLoop()`
 * (they already pause while the page is hidden). For a timeout or a time measured in the game, `Game.Timeout` and
 * `Game.Stopwatch` already run on the loop.
 *
 * - `pause` -- the loop stopped: the page was hidden, or `stopGameLoop()` was called.
 * - `resume` -- the loop is running again: the page is visible again, or `startGameLoop()` was called (and when
 *   `init()` starts it).
 *
 * The listeners are called right after the loop stopped/started (`isGameLoopRunning()` already tells the new state),
 * and they're kept when `init()` is called again.
 *
 *     Game.addEventListener( 'pause', () => music.pause() );
 *     Game.addEventListener( 'resume', () => music.resume() );
 *
 * @return If it was successfully added (`false` when it isn't a function, or was already added).
 */
export function addEventListener<K extends keyof GameEvents>(
    type: K,
    listener: () => any,
) {
    return EVENTS.addEventListener(type, listener);
}

/**
 * Remove a listener of a game loop event (see `addEventListener()`), or all its listeners (when `listener` isn't given).
 *
 * @return If it was successfully removed.
 */
export function removeEventListener<K extends keyof GameEvents>(
    type: K,
    listener?: () => any,
) {
    return EVENTS.removeEventListener(type, listener);
}

function resumeLoop() {
    // already running
    if (ANIMATION_ID !== null) {
        return;
    }

    const now = performance.now();

    // the time that was left from before the pause is kept (less than a step), so the drawing continues from where it was
    LAST_UPDATE_TIME = now;
    NEXT_UPDATE_TIME = now + FRAME_INTERVAL;
    ANIMATION_ID = window.requestAnimationFrame(loop);

    Keyboard._onLoopResume();
    EVENTS.dispatchEvent("resume");
}

function pauseLoop() {
    if (ANIMATION_ID !== null) {
        window.cancelAnimationFrame(ANIMATION_ID);
        ANIMATION_ID = null;

        Keyboard._onLoopPause();
        EVENTS.dispatchEvent("pause");
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
 * Limit how many times per second the game is updated (the logic, and drawing the canvas).
 * By default there's no limit: it's updated on every animation frame, which follows the display's refresh rate (60 times
 * per second on most displays, more on high refresh rate ones). Pass `Infinity` to remove the limit again.
 *
 * The updates happen on animation frames, so when the rate doesn't divide the display's refresh rate, the time between
 * them varies to keep to the rate on average (`setFps(60)` on a 144Hz display updates every 2 or 3 frames, so
 * `deltaTime` is about 0.014 or 0.021 seconds).
 *
 * In v3 of the engine, the loop ran below the set rate: it skipped every animation frame that came less than
 * `1000 / fps` milliseconds (counted in whole milliseconds) after the last update. On a 60Hz display, the default
 * (35) ran at 30 updates per second, `setFps(60)` at about 40, and `setFps(30)` at 20. To keep a v3 game's timing
 * while updating it, set the rate it actually ran at (`setFps(30)` for a game that didn't call `setFps()`).
 *
 * @param fps A positive number (or `Infinity`).
 */
export function setFps(fps: number) {
    if (!(fps > 0)) {
        throw new RangeError("The fps needs to be a positive number.");
    }

    FRAME_INTERVAL = 1000 / fps;

    // the new rate applies from the last update
    NEXT_UPDATE_TIME = LAST_UPDATE_TIME + FRAME_INTERVAL;
}

/**
 * Run the game logic at a fixed rate: the game loop callbacks, the tweens, the logic of the elements and the collision
 * detection always get the same `deltaTime` (`seconds`), and run as many times as the time that passed calls for
 * (none on some animation frames, several on others). The drawing still happens on every animation frame (or at the
 * rate set with `setFps()`), between the last two steps, so the elements move smoothly on any display.
 *
 * It makes the game's behavior the same whatever the display's refresh rate is (a timer, a jump or a step of a
 * movement is the same at 60Hz and 144Hz), and repeatable (the same input gives the same result). The drawing shows
 * the game one step late (at most `seconds`).
 *
 *     Game.setFixedTimestep( 1 / 60 ); // the logic runs 60 times per second, whatever the display
 *
 * - Elements moved to a new place at once (a respawn) should call `resetInterpolation()`, or they move there smoothly
 *   during the next step.
 * - Only the elements' position, rotation, scale and opacity are drawn between steps. Elements that draw themselves
 *   (a custom `drawElement()`) are drawn at their state in the last step, unless they use `_applyTransform()`.
 * - `Game.Keyboard`'s `wasPressed()` and `wasReleased()` last one step.
 *
 * By default (`null`) the logic runs once per animation frame, with the time that passed as `deltaTime`.
 *
 * @param seconds The time of each step (a positive number), or `null` for a step per animation frame.
 */
export function setFixedTimestep(seconds: number | null) {
    if (seconds !== null && !(seconds > 0 && seconds !== Infinity)) {
        throw new RangeError(
            "The fixed timestep needs to be a positive number (or null).",
        );
    }

    FIXED_TIMESTEP = seconds;
    ACCUMULATOR = 0;

    // draw the elements where they are until the next step (their saved state can be from long ago)
    savePrevious();
}

/**
 * The time of each step of the logic set with `setFixedTimestep()` (`null` when the logic runs once per frame).
 */
export function getFixedTimestep() {
    return FIXED_TIMESTEP;
}

/**
 * Where the drawing is between the last two steps of the logic (see `setFixedTimestep()`): `0` is the state of the
 * previous step, `1` the last one (always `1` outside of the drawing, or without a fixed timestep).
 */
export function _getRenderAlpha() {
    return RENDER_ALPHA;
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
    An element that is already in a container/canvas is taken out of it first.

    @param element Element or Element[] to be added.
    @param id The canvas id.
 */
export function addElement(element: Element | readonly Element[], id?: number) {
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
 * Detach elements from wherever they are (their canvas or container), right away. They're no longer drawn, updated or
 * considered in the collision detection, but they aren't destroyed, so they can be added again later.
 * To destroy an element, call its `destroy()` method instead.
 *
 * @param element Element or Element[] to be detached.
 * @return If any of the elements was in a canvas/container (and was detached).
 */
export function removeElement(element: Element | readonly Element[]) {
    // a copy, since the given array can change while the elements are detached (a container's `getAllChildren()`)
    const elements = Array.isArray(element)
        ? (element as readonly Element[]).slice()
        : [element as Element];
    let removed = false;

    for (const item of elements) {
        if (item._detachFromParent()) {
            removed = true;
        }
    }

    return removed;
}

/**
 * It can be problematic to destroy elements during the logic functions, since the logic functions are called in a loop over all the elements.
 * The elements passed to this function, will only be destroyed after (at the end of the current game loop update, or once the
 * current code finishes when the game loop isn't running).
 * Don't call this directly, use the `Element.destroy()` method instead.
 */
export function _safeDestroy(element: Element) {
    TO_BE_DESTROYED.push(element);

    // without the game loop running there's no update to do it, so do it once the current code finishes
    if (ANIMATION_ID === null && !DESTROY_SCHEDULED) {
        DESTROY_SCHEDULED = true;

        queueMicrotask(function () {
            DESTROY_SCHEDULED = false;

            if (ANIMATION_ID === null) {
                flushDestroyed();
            }
        });
    }
}

/**
 * Destroy the elements that were marked to be destroyed (with `Element.destroy()`).
 */
function flushDestroyed() {
    const elements = TO_BE_DESTROYED.splice(0);

    for (let a = elements.length - 1; a >= 0; a--) {
        elements[a]._destroyNow();
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
 * Tells if a callback is in the game loop (it was added, and wasn't removed or called as a timeout).
 */
export function _hasCallback(callback: (deltaTime: number) => any) {
    return CALLBACKS.some(
        (call) => call.callback === callback && !call.removed,
    );
}

/**
 * Remove all the callbacks from the game loop (including the ones of the `Timeout` and `Stopwatch` objects).
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
 * Updates the game on every frame, or at the set fps (see `setFps()`).
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

    if (FIXED_TIMESTEP === null) {
        update(deltaTime);
        return;
    }

    // run the steps that are due, then draw between the last two
    ACCUMULATOR += deltaTime;

    while (ACCUMULATOR >= FIXED_TIMESTEP - STEP_TOLERANCE) {
        ACCUMULATOR = Math.max(ACCUMULATOR - FIXED_TIMESTEP, 0);
        savePrevious();
        updateLogic(FIXED_TIMESTEP);
    }

    draw(ACCUMULATOR / FIXED_TIMESTEP);
}

/**
 * Update the game once, by hand, while the game loop is stopped (`stopGameLoop()`): the game loop callbacks, the
 * tweens, the logic of the elements, the collision detection, and the drawing, like one update of the loop. For tests
 * that check the game's timing ("the lanes spawn at the same times at 30 and 144 updates per second"), or to run a
 * game step by step. The `deltaTime` isn't limited (unlike the loop's, see `setMaxDeltaTime()`).
 *
 *     Game.stopGameLoop();
 *
 *     for ( let a = 0; a < 60; a++ ) {
 *         Game.step( 1 / 60 ); // one second at 60 updates per second
 *     }
 *
 * @param deltaTime The time to update the game by, in seconds (a number `>= 0`).
 */
export function step(deltaTime: number) {
    if (!(deltaTime >= 0)) {
        throw new RangeError("The delta time needs to be a number >= 0.");
    }

    if (isGameLoopRunning()) {
        throw new Error(
            "The game loop is running. Stop it first (with stopGameLoop()) to update the game by hand.",
        );
    }

    // like a step of the loop with a fixed timestep (so the drawing between steps starts from here)
    savePrevious();
    update(deltaTime);
}

/**
 * Updates the game logic, the tweens, the collision detection, and draws the canvas.
 *
 * @param deltaTime Time elapsed since the last update (in seconds).
 */
function update(deltaTime: number) {
    updateLogic(deltaTime);
    draw(1);
}

/**
 * The canvas that are updated on the game loop (see `Canvas.updateOnLoop`), from the front to the back.
 */
function canvasToUpdate() {
    const allCanvas: Canvas[] = [];

    for (let a = ALL_CANVAS.length - 1; a >= 0; a--) {
        const canvas = ALL_CANVAS[a];

        if (canvas.updateOnLoop) {
            allCanvas.push(canvas);
        }
    }

    return allCanvas;
}

/**
 * Save the state of the elements at the start of a step (with a fixed update rate), to draw between the steps.
 */
function savePrevious() {
    for (const canvas of canvasToUpdate()) {
        canvas._savePrevious();
    }
}

/**
 * Updates the game logic: the game loop callbacks, the tweens, the logic of the elements and the collision detection.
 *
 * @param deltaTime Time elapsed since the last update (in seconds).
 */
function updateLogic(deltaTime: number) {
    // call any function added to the game loop
    callbacks(deltaTime);

    // update all the tweens
    Tween.update(deltaTime);

    // get all the canvas that are to be updated on the game loop
    const allCanvas = canvasToUpdate();
    let a;

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

    // destroy the deferred elements
    flushDestroyed();

    // the key presses/releases were seen by this update
    Keyboard._endUpdate();
}

/**
 * Draw all the canvas that are updated on the game loop.
 *
 * @param alpha Where to draw between the last two steps of the logic (`1` is the state of the last one).
 */
function draw(alpha: number) {
    const allCanvas = canvasToUpdate();

    RENDER_ALPHA = alpha;

    try {
        for (let a = allCanvas.length - 1; a >= 0; a--) {
            allCanvas[a].draw();
        }
    } finally {
        // a canvas drawn by hand (outside of the loop) shows the current state
        RENDER_ALPHA = 1;
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

            if (!hasReached(call.count, call.delay)) {
                continue;
            }

            // keep the time past the delay (so the calls don't drift), but at most once per update
            // (less than a delay, and not one that is a whole delay but for a rounding error, or it would be called
            // again in the next update)
            call.count = timePast(
                Math.max(call.count - call.delay, 0),
                call.delay,
            );
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
