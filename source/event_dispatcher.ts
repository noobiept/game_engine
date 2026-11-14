import * as Utilities from "@drk4/utilities";

export interface EventDispatcherArgs {
    readonly _eventDispatcherArgsBrand?: never;
}

type EventListener = (data: any) => any;

interface ListenerEntry {
    listener: EventListener;
    removed: boolean; // so a dispatch that is already running skips it
}

/**
 * Base class that provides a way to add/remove listeners, and dispatch events.
 * Most engine classes extend it (every `Element`, `Preload`, etc.), which is how
 * you listen to their events with `addEventListener()`.
 *
 * The listeners are called in the order they were added.
 * Adding or removing listeners while an event is being dispatched is safe: a listener removed during
 * a dispatch isn't called anymore, and one added during a dispatch is only called on the next one.
 *
 * Basic Usage:
 *
 *     const dispatcher = new Game.EventDispatcher();
 *
 *     dispatcher.addEventListener( 'custom', function( data ) {
 *         console.log( 'got', data.value );
 *     });
 *
 *     dispatcher.dispatchEvent( 'custom', { value: 42 } );
 */
export class EventDispatcher {
    protected _listeners: Map<string, ListenerEntry[]>;

    constructor(_args?: EventDispatcherArgs) {
        this._listeners = new Map();
    }

    /**
     * 'listener' will receive a 'data' argument when its called.
     * What 'data' is, depends on the event type.
     *
     * @param type Type of the event.
     * @param listener A function to be called when the event is dispatched.
     * @return If it was successfully added (`false` when it isn't a function, or was already added).
     */
    addEventListener(type: string, listener: EventListener) {
        if (!Utilities.isFunction(listener)) {
            return false;
        }

        let entries = this._listeners.get(type);

        if (!entries) {
            entries = [];
            this._listeners.set(type, entries);
        } else if (entries.some((entry) => entry.listener === listener)) {
            return false;
        }

        entries.push({ listener: listener, removed: false });

        return true;
    }

    /**
     * Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).
     *
     * @param type The event type.
     * @param listener The listener function to remove. If not provided then remove all the functions associated with the event type.
     * @return If it was successfully removed.
     */
    removeEventListener(type: string, listener?: EventListener) {
        const entries = this._listeners.get(type);

        if (!entries) {
            return false;
        }

        if (typeof listener === "undefined") {
            for (const entry of entries) {
                entry.removed = true;
            }

            this._listeners.delete(type);
            return true;
        }

        const index = entries.findIndex((entry) => entry.listener === listener);

        if (index < 0) {
            return false;
        }

        entries[index].removed = true;
        entries.splice(index, 1);

        if (entries.length === 0) {
            this._listeners.delete(type);
        }

        return true;
    }

    /**
     * Remove all the event listeners.
     */
    removeAllEventListeners() {
        for (const entries of this._listeners.values()) {
            for (const entry of entries) {
                entry.removed = true;
            }
        }

        this._listeners.clear();
    }

    /**
     * Dispatches an event, which will trigger the listeners of that event.
     *
     * @param type Type of the event to dispatch.
     * @param data Data to be sent to every listener.
     */
    dispatchEvent(type: string, data?: any) {
        const entries = this._listeners.get(type);

        if (!entries) {
            return;
        }

        // go through a copy, since the listeners can add/remove listeners while we're calling them
        for (const entry of entries.slice()) {
            if (!entry.removed) {
                entry.listener(data);
            }
        }
    }

    /**
     * Check if there are listeners to a particular event type.
     *
     * @param type The event type to check.
     * @return If there are listeners or not.
     */
    hasListeners(type: string) {
        const entries = this._listeners.get(type);

        return entries !== undefined && entries.length > 0;
    }
}
