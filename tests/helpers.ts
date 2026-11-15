import { vi } from "vitest";

/**
 * jsdom doesn't implement the canvas 2d context, so give the canvas elements one that does nothing.
 * `measureText()` gives 10 pixels per character.
 */
export function stubCanvasContext() {
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

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
        () => context as any,
    );
}

/**
 * Control the animation frames and the clock (`performance.now()`), to run the game loop step by step.
 */
export function createFrameDriver() {
    let now = 0;
    let nextId = 1;
    let callbacks = new Map<number, FrameRequestCallback>();

    vi.spyOn(performance, "now").mockImplementation(() => now);
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
        const id = nextId++;

        callbacks.set(id, callback);
        return id;
    });
    vi.stubGlobal("cancelAnimationFrame", (id: number) => {
        callbacks.delete(id);
    });

    return {
        get now() {
            return now;
        },

        /**
         * How many animation frames are requested (more than one means there's more than one loop running).
         */
        get pending() {
            return callbacks.size;
        },

        /**
         * Advance the clock and run the requested animation frames.
         */
        frame(milliseconds: number) {
            now += milliseconds;

            const current = callbacks;
            callbacks = new Map();

            for (const callback of current.values()) {
                callback(now);
            }
        },

        /**
         * Run a number of frames, like a display refreshing at the given rate.
         */
        run(frames: number, refreshRate = 60) {
            for (let a = 0; a < frames; a++) {
                this.frame(1000 / refreshRate);
            }
        },
    };
}

/**
 * Change `document.hidden` and dispatch the `visibilitychange` event.
 */
export function setDocumentHidden(hidden: boolean) {
    Object.defineProperty(document, "hidden", {
        configurable: true,
        get: () => hidden,
    });

    document.dispatchEvent(new Event("visibilitychange"));
}

/**
 * Wait for the code scheduled with `queueMicrotask()` (like the removal of elements while the game loop isn't running).
 */
export function flushMicrotasks() {
    return new Promise<void>((resolve) => queueMicrotask(resolve));
}
