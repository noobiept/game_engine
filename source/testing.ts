/**
 * Helpers to test a game with a test runner (like Vitest or Jest) in a browser-like environment (jsdom), imported
 * from `@drk4/game-engine/testing`. They're kept out of the main entry, so they aren't in the game's bundle.
 *
 * Basic Usage (with Vitest):
 *
 *     import * as Game from '@drk4/game-engine';
 *     import { resetGame, stubAnimationFrames, stubCanvasContext } from '@drk4/game-engine/testing';
 *
 *     beforeEach( function() {
 *         stubCanvasContext(); // jsdom doesn't draw on a canvas
 *         stubAnimationFrames(); // the game is updated by hand, with `Game.step()`
 *
 *         Game.init({ container: document.body, width: 400, height: 400 });
 *         Game.stopGameLoop();
 *     });
 *
 *     afterEach( function() {
 *         resetGame(); // nothing of this test's game is left for the next one
 *     });
 *
 *     test( 'a car spawns every 2 seconds', function() {
 *         startLevel( 1 );
 *
 *         for ( let a = 0; a < 120; a++ ) {
 *             Game.step( 1 / 60 );
 *         }
 *
 *         expect( countCars() ).toBe( 1 );
 *     });
 */
import * as Game from "./game";
import * as Keyboard from "./keyboard";
import { Preload } from "./preload";
import * as Sound from "./sound";
import { Tween } from "./tween";

let restoreCanvas: (() => void) | null = null;
let restoreFrames: (() => void) | null = null;

/**
 * Give the canvas elements a 2d context that does nothing (jsdom doesn't implement it, so `Game.init()` would throw).
 * `measureText()` gives 10 pixels per character. Calling it again does nothing.
 *
 * @return A function that puts back the original `getContext()`.
 */
export function stubCanvasContext() {
    if (restoreCanvas) {
        return restoreCanvas;
    }

    const prototype = HTMLCanvasElement.prototype;
    const original = prototype.getContext;
    const context = new Proxy(
        {},
        {
            get(_target, property) {
                if (property === "measureText") {
                    return (text: string) => ({ width: text.length * 10 });
                }

                return () => {};
            },
            set() {
                return true;
            },
        },
    );

    prototype.getContext = function () {
        return context;
    } as unknown as typeof prototype.getContext;

    restoreCanvas = function () {
        prototype.getContext = original;
        restoreCanvas = null;
    };

    return restoreCanvas;
}

/**
 * Replace `requestAnimationFrame()` with one that never calls back, so the game loop doesn't run by itself and the
 * game is updated with `Game.step()` (jsdom doesn't always have it, which makes `Game.init()` throw). Calling it again
 * does nothing.
 *
 * @return A function that puts back the original functions.
 */
export function stubAnimationFrames() {
    if (restoreFrames) {
        return restoreFrames;
    }

    const request = window.requestAnimationFrame;
    const cancel = window.cancelAnimationFrame;
    let id = 0;

    window.requestAnimationFrame = () => ++id;
    window.cancelAnimationFrame = () => {};

    restoreFrames = function () {
        window.requestAnimationFrame = request;
        window.cancelAnimationFrame = cancel;
        restoreFrames = null;
    };

    return restoreFrames;
}

/**
 * Leave the engine as if it was just loaded, so a test doesn't affect the next one: the game is taken out of the page
 * (canvas, elements, collision detection), the game loop is stopped, and the game loop callbacks, the loop's
 * event listeners, the tweens, the held keys, the `Keyboard` objects and the files saved in `Game.Preload` are
 * removed. The settings (`setFps()`, `setMaxDeltaTime()`, `setFixedTimestep()`, `Sound.setPauseWhenHidden()`) go
 * back to their defaults. The stubs (`stubCanvasContext()`, `stubAnimationFrames()`) are kept.
 */
export function resetGame() {
    Game._reset();
    Tween.removeAll();
    Keyboard._reset();
    Sound._reset();

    for (const id of Object.keys(Preload.DATA)) {
        delete Preload.DATA[id];
    }
}
