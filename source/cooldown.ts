export interface CooldownOptions {
    ready?: boolean; // if it starts ready to be used (default `true`), or has to wait the interval first
}

/**
 * A timer for an action that can only happen once per interval (an attack, a spawn, health regeneration), which keeps
 * to the interval like the engine's own timers do (game loop callbacks with a `delay`, weapons, sprite animations):
 *
 * - It keeps the time past the interval, so the action keeps to the set rate whatever the frame rate is (resetting a
 *   counter to the interval loses part of a frame every time, so the rate would depend on the display).
 * - It's ready at most once per update, even when the interval is shorter than the time between updates.
 * - While it's ready but isn't used (a tower without a target in range), the time doesn't build up, so it isn't
 *   used several times in a row once there's something to do again.
 *
 * Call `update()` on every update (from the element's `logic()`, so it pauses with the game), and `restart()` when the
 * action happens. All the times are in seconds.
 *
 * Basic Usage:
 *
 *     class Tower extends Game.Rectangle
 *         {
 *         attack = new Game.Cooldown( 0.5 ); // twice per second
 *
 *         constructor( args )
 *             {
 *             super( args );
 *             this._has_logic = true;
 *             }
 *
 *         override logic( deltaTime )
 *             {
 *             this.attack.update( deltaTime );
 *
 *             const target = findTarget( this );
 *
 *             if ( target && this.attack.isReady() )
 *                 {
 *                 this.attack.restart();
 *                 shoot( this, target );
 *                 }
 *             }
 *         }
 *
 *     // a timer that waits the interval before it's ready the first time
 *     const spawn = new Game.Cooldown( 2, { ready: false } );
 *
 *     // a random interval each time (pass it to `restart()`, so the time past the interval that ended is kept)
 *     if ( spawn.isReady() )
 *         {
 *         spawn.restart( Utilities.getRandomFloat( 1, 3 ) );
 *         spawnEnemy();
 *         }
 */
export class Cooldown {
    protected _interval: number;
    protected _elapsed: number; // time since the interval started (it's ready once it reaches the interval)
    protected _waiting: boolean; // it was already ready before the last update (so there's no time past the interval to keep)

    /**
     * @param interval The time between uses, a number `>= 0` (`Infinity` never gets ready again once used).
     * @param options `ready` is if it starts ready to be used (default `true`), or has to wait the interval first.
     */
    constructor(interval: number, options?: CooldownOptions) {
        this._interval = validateInterval(interval);
        this._elapsed = options?.ready === false ? 0 : this._interval;
        this._waiting = false;
    }

    /**
     * The time between uses. Changing it applies to the current interval (it uses the time that already passed).
     */
    get interval() {
        return this._interval;
    }

    set interval(interval: number) {
        this._interval = validateInterval(interval);
    }

    /**
     * Time left until it's ready (`0` when it's ready).
     */
    get remaining() {
        return this.isReady() ? 0 : this._interval - this._elapsed;
    }

    /**
     * Count the time that passed (call it on every update, with the update's `deltaTime`).
     *
     * Once it's ready, the time past the interval is kept if it's used before the next `update()` call. When it waits
     * for longer, the next interval starts when it's used.
     */
    update(deltaTime: number) {
        this._waiting = this.isReady();
        this._elapsed += deltaTime;
    }

    /**
     * If the interval has passed (it can be used).
     */
    isReady() {
        return this._elapsed >= this._interval;
    }

    /**
     * Start a new interval, for when the action happens.
     * When it's ready, it keeps the time past the interval (less than an interval, so it's ready at most once per
     * update), so the next use isn't late. When it's called before it's ready, it waits a whole interval again.
     *
     * @param nextInterval The interval to wait next, for intervals that change each time (a random spawn time, for
     *                     example). The time past the interval that ended is worked out first, then it's kept for the
     *                     next one. Setting `interval` before calling `restart()` would compare the time to the new
     *                     interval instead. Throws a `RangeError` for a value that isn't a number `>= 0`.
     */
    restart(nextInterval?: number) {
        const next =
            nextInterval === undefined
                ? this._interval
                : validateInterval(nextInterval);
        const past = this._elapsed - this._interval;

        // when it waited (wasn't used in the update it got ready), the time past the interval was spent waiting
        const kept =
            !this._waiting &&
            past > 0 &&
            this._interval > 0 &&
            this._interval !== Infinity
                ? past % this._interval
                : 0;

        // less than the next interval as well, so it's ready at most once per update
        this._elapsed = next > 0 ? kept % next : 0;
        this._interval = next;
        this._waiting = false;
    }
}

function validateInterval(interval: number) {
    if (!(interval >= 0)) {
        throw new RangeError("The interval needs to be a number >= 0.");
    }

    return interval;
}
