import * as Game from "./game";

/**
 * A timeout that counts game time: it runs on the game loop, so it pauses with it (while the page is hidden, or after
 * `Game.stopGameLoop()`), and what it calls never runs while the game is paused. Use it instead of `setTimeout()` for
 * what belongs to the game (a message that starts the next level, a delayed spawn). It has the same methods as the
 * `Timeout` of `@drk4/utilities`, but in seconds. `Game.removeAllCallbacks()` cancels it as well.
 *
 * Basic Usage:
 *
 *     const timeout = new Game.Timeout();
 *
 *     timeout.start( () => startNextLevel(), 2 ); // in 2 seconds of game time
 *     timeout.clear(); // cancel it
 */
export class Timeout {
    protected _call: (() => void) | null = null;

    /**
     * Start the timeout. If it was already active, the previous one is canceled.
     *
     * @param callback Called once the time passed (at the start of an update, like the game loop callbacks).
     * @param seconds Game time to wait, a number `>= 0` (`0` calls it on the next update).
     */
    start(callback: () => void, seconds: number) {
        if (!(seconds >= 0)) {
            throw new RangeError("The time needs to be a number >= 0.");
        }

        this.clear();

        const call = () => {
            this._call = null;
            callback();
        };

        this._call = call;
        Game.addToGameLoop(call, { delay: seconds, interval: false });
    }

    /**
     * Cancel the timeout (if it's active).
     */
    clear() {
        if (this._call) {
            Game.removeFromGameLoop(this._call);
            this._call = null;
        }
    }

    /**
     * If it was started and wasn't called (or canceled) yet.
     */
    isActive() {
        return this._call !== null;
    }
}

/**
 * Measures game time: it adds up the `deltaTime` of the game loop, so it stops with it (while the page is hidden, or
 * after `Game.stopGameLoop()`), without any listener. Use it for a time that is shown or scored (how long a level took).
 * Since `deltaTime` is limited (see `Game.setMaxDeltaTime()`), it runs slower than real time when the game stalls,
 * like the game itself. `Game.removeAllCallbacks()` stops it as well (until `start()` is called again).
 *
 * Basic Usage:
 *
 *     const stopwatch = new Game.Stopwatch();
 *
 *     stopwatch.start();
 *     // ...
 *     stopwatch.stop();
 *     console.log( stopwatch.getTime() ); // in seconds
 */
export class Stopwatch {
    protected _time = 0;
    protected _running = false;
    protected _tick = (deltaTime: number) => {
        this._time += deltaTime;
    };

    /**
     * Start counting (from the current time, see `reset()`). It counts from the next update of the game loop.
     */
    start() {
        // added again even when it's running, in case `Game.removeAllCallbacks()` took it out (and only once)
        Game.removeFromGameLoop(this._tick);
        Game.addToGameLoop(this._tick);
        this._running = true;
    }

    /**
     * Stop counting (it keeps the time, so `start()` continues from it).
     */
    stop() {
        if (this._running) {
            this._running = false;
            Game.removeFromGameLoop(this._tick);
        }
    }

    /**
     * Set the time back to `0` (it keeps running if it was).
     */
    reset() {
        this._time = 0;
    }

    /**
     * The game time counted, in seconds.
     */
    getTime() {
        return this._time;
    }

    /**
     * If it's counting.
     */
    isRunning() {
        return this._running;
    }
}
