/**
 * The keys of each action: one key, or several (any of them triggers it). Keys are `KeyboardEvent.code` values.
 */
export type KeyboardKeys = string | readonly string[];

export interface KeyboardOptions {
    preventDefault?: boolean; // the bound keys don't do their default browser action, like scrolling the page with the arrows or space (default `true`)
}

// the state of the keys (by `KeyboardEvent.code`), shared by all the `Keyboard` objects
const HELD = new Set<string>();
const PRESSED = new Set<string>(); // pressed since the last update
const RELEASED = new Set<string>(); // released since the last update
const PRESS_ORDER: string[] = []; // every press since the last update, in order (a key pressed twice is there twice)
const ALL_KEYBOARDS = new Set<Keyboard<string>>();
let LISTENING = false;

/**
 * Keyboard controls: name the game's actions and bind keys to them when the game starts, then the game code only asks
 * about the actions (`isHeld( 'left' )`), not about the keys.
 *
 * - The keys are `KeyboardEvent.code` values: the key's position on the keyboard (`KeyW`, `ArrowLeft`, `Space`,
 *   `Digit1`), named after a US keyboard. They're the same with any keyboard layout (`KeyW` is the key labeled Z on a
 *   French keyboard, where players expect it), and they don't change with `Shift` (so a key can't get stuck held).
 * - `wasPressed()`/`wasReleased()` are true for one update of the game loop, even when the key was pressed and released
 *   between two updates (a quick tap isn't lost). A key held down doesn't count as pressed again (no auto-repeat).
 * - The keys are let go when the window loses the focus (their `keyup` goes to another window), when the game loop
 *   pauses, and when `Cmd` is released (on macOS, the browsers don't send the other keys' `keyup` while it's held).
 *   Keys pressed while the loop is paused don't count as pressed when it resumes.
 * - Keys typed in a form field (an `<input>`, `<textarea>`, `<select>` or an editable element) are ignored.
 * - The bound keys don't do their default browser action (the arrows and space scroll the page), see `preventDefault`.
 *   With `Ctrl`, `Cmd` or `Alt` held they do, so the browser's shortcuts keep working (`Cmd + R` reloads the page).
 *
 * The action names are checked by TypeScript (`isHeld( 'lefft' )` doesn't compile). Several objects can be used at
 * the same time (a player on WASD, another one on the arrows).
 *
 * Basic Usage:
 *
 *     const controls = new Game.Keyboard({
 *         left: [ 'ArrowLeft', 'KeyA' ],
 *         right: [ 'ArrowRight', 'KeyD' ],
 *         fire: 'Space',
 *     });
 *
 *     Game.addToGameLoop( function( deltaTime ) {
 *         if ( controls.isHeld( 'left' ) ) {
 *             player.x -= 100 * deltaTime;
 *         }
 *
 *         if ( controls.wasPressed( 'fire' ) ) {
 *             player.fire();
 *         }
 *     });
 *
 *     controls.setKeys( 'fire', [ 'Space', 'Enter' ] ); // change the keys (an options screen, for example)
 */
export class Keyboard<Action extends string> {
    protected _bindings: Map<Action, string[]>;
    protected _prevent_default: boolean;

    /**
     * @param actions The keys of each action (`KeyboardEvent.code` values).
     * @param options `preventDefault` (default `true`): the bound keys don't do their default browser action.
     */
    constructor(
        actions: Record<Action, KeyboardKeys>,
        options?: KeyboardOptions,
    ) {
        this._bindings = new Map();
        this._prevent_default = options?.preventDefault ?? true;

        for (const action of Object.keys(actions) as Action[]) {
            this.setKeys(action, actions[action]);
        }

        ALL_KEYBOARDS.add(this);
        listen();
    }

    /**
     * If any of the keys of the action is held down.
     */
    isHeld(action: Action) {
        return this._some(action, HELD);
    }

    /**
     * If any of the keys of the action was pressed since the last update (it can be released already).
     */
    wasPressed(action: Action) {
        return this._some(action, PRESSED);
    }

    /**
     * If any of the keys of the action was released since the last update.
     */
    wasReleased(action: Action) {
        return this._some(action, RELEASED);
    }

    /**
     * The actions pressed since the last update, in the order of the presses, once per press (a key pressed twice is
     * there twice). For games where every press is an action (a move in a turn-based game), so the presses within one
     * update (a slow device, a stalled frame) aren't lost or reordered, which `wasPressed()` can't tell.
     *
     *     for ( const action of controls.getPresses() ) {
     *         move( action );
     *     }
     */
    getPresses(): Action[] {
        const actions: Action[] = [];

        for (const code of PRESS_ORDER) {
            for (const [action, keys] of this._bindings) {
                if (keys.includes(code)) {
                    actions.push(action);
                }
            }
        }

        return actions;
    }

    /**
     * Change the keys of an action.
     *
     * @param keys One key, or several (`KeyboardEvent.code` values).
     */
    setKeys(action: Action, keys: KeyboardKeys) {
        this._bindings.set(
            action,
            typeof keys === "string" ? [keys] : [...keys],
        );
    }

    /**
     * The keys of an action (to show them in the game's help, for example).
     */
    getKeys(action: Action): string[] {
        return [...(this._bindings.get(action) ?? [])];
    }

    /**
     * Tells if a key is bound to any of the actions.
     */
    hasKey(code: string) {
        for (const keys of this._bindings.values()) {
            if (keys.includes(code)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Stop using this object: its keys aren't kept from their default browser action anymore.
     */
    destroy() {
        ALL_KEYBOARDS.delete(this);
    }

    protected _some(action: Action, keys: Set<string>) {
        const bound = this._bindings.get(action);

        return bound !== undefined && bound.some((code) => keys.has(code));
    }

    /**
     * If the default browser action of a key should be prevented (when it's bound to an action of this object).
     */
    _preventsDefault(code: string) {
        return this._prevent_default && this.hasKey(code);
    }
}

/**
 * Start listening to the keyboard (once, when the first `Keyboard` object is created).
 */
function listen() {
    if (LISTENING) {
        return;
    }

    LISTENING = true;

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", clearKeys);
}

function onKeyDown(event: KeyboardEvent) {
    // some virtual keyboards don't give a `code`
    if (!event.code || isTyping(event)) {
        return;
    }

    preventDefault(event);

    if (HELD.has(event.code)) {
        return;
    }

    HELD.add(event.code);

    // an auto-repeat only brings back a key that was let go while held (see `onKeyUp()`), it isn't a new press
    if (!event.repeat) {
        PRESSED.add(event.code);
        PRESS_ORDER.push(event.code);
    }
}

function onKeyUp(event: KeyboardEvent) {
    // a key held before the focus went to a form field is still let go
    if (HELD.delete(event.code)) {
        RELEASED.add(event.code);
    }

    // on macOS, the browsers don't send the `keyup` of the other keys while `cmd` is held, so let go of all of them
    // (one that is still held comes back with its auto-repeat)
    if (event.code === "MetaLeft" || event.code === "MetaRight") {
        for (const code of HELD) {
            RELEASED.add(code);
        }

        HELD.clear();
    }

    if (!isTyping(event)) {
        preventDefault(event);
    }
}

function preventDefault(event: KeyboardEvent) {
    // keep the browser's shortcuts (ctrl/cmd + R to reload, alt + left to go back)
    if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
    }

    for (const keyboard of ALL_KEYBOARDS) {
        if (keyboard._preventsDefault(event.code)) {
            event.preventDefault();
            return;
        }
    }
}

/**
 * If the key goes to a form field (what's typed there isn't for the game).
 */
function isTyping(event: KeyboardEvent) {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
        return false;
    }

    return (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target.isContentEditable
    );
}

/**
 * Let go of all the keys.
 */
function clearKeys() {
    HELD.clear();
    PRESSED.clear();
    RELEASED.clear();
    PRESS_ORDER.length = 0;
}

/**
 * Let go of all the keys, and forget the `Keyboard` objects (for tests, see `resetGame()` in
 * `@drk4/game-engine/testing`).
 */
export function _reset() {
    clearKeys();
    ALL_KEYBOARDS.clear();
}

/**
 * Called by the game loop at the end of each update (the presses/releases were seen by that update).
 */
export function _endUpdate() {
    PRESSED.clear();
    RELEASED.clear();
    PRESS_ORDER.length = 0;
}

/**
 * Called when the game loop pauses (let go of the keys).
 */
export function _onLoopPause() {
    clearKeys();
}

/**
 * Called when the game loop resumes (the keys pressed while it was paused don't count as pressed).
 */
export function _onLoopResume() {
    PRESSED.clear();
    RELEASED.clear();
    PRESS_ORDER.length = 0;
}
