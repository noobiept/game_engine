/**
 * Uses the `web audio api` to play the sounds.
 * If it isn't supported by a browser, the function calls will still go through, but no sound will be played.
 *
 * Basic Usage:
 *
 *     const preload = new Game.Preload({ saveGlobal: true });
 *
 *     preload.addEventListener( 'complete', function()
 *         {
 *             // play once
 *         Game.Sound.play( Game.Preload.requireAudio( 'sound' ) );
 *
 *             // or loop it (for example background music) and keep a reference to control it later
 *         const music = Game.Sound.play( Game.Preload.requireAudio( 'sound' ), { loop: true, volume: 0.5 } );
 *         music.pause();
 *         music.resume();
 *         music.stop();
 *         });
 *     preload.load( 'sound', 'path_to_file.ogg' );
 *
 * Browsers only play audio after the user interacted with the page, so the sounds played before that (the music, when
 * the game starts) start on the first key press, click or touch.
 *
 * The sounds pause while the page is hidden (like the game loop), see `setPauseWhenHidden()`. They keep playing when
 * the loop is stopped with `Game.stopGameLoop()`. To pause them then too, use the loop's `pause`/`resume` events
 * (`Game.addEventListener()`).
 *
 * Examples -- `preload`
 */

let CTX: AudioContext | null = null;
let GLOBAL_GAIN: GainNode | null = null;
let PAUSE_WHEN_HIDDEN = true;
let RESUME_WHEN_VISIBLE = false; // the audio context was suspended (or kept suspended) because the page is hidden
let WAITING_FOR_GESTURE = false; // the audio context is suspended until the user interacts with the page (autoplay)
const GESTURE_EVENTS = ["pointerdown", "keydown", "touchend", "click"];

/**
 * Initialize the `Sound` module. Its called in `Game.init()`.
 */
export function init() {
    // already initialized
    if (CTX) {
        return true;
    }

    try {
        CTX = new AudioContext();
    } catch {
        // AudioContext not supported
        CTX = null;
        return false;
    }

    // all played sounds will be connected to this global gain node
    GLOBAL_GAIN = CTX.createGain();
    GLOBAL_GAIN.connect(CTX.destination);

    document.addEventListener("visibilitychange", onVisibilityChange);
    onVisibilityChange();

    // a resume that was asked for while the page was visible can finish after it's hidden
    CTX.onstatechange = onStateChange;

    if (CTX.state === "suspended") {
        waitForGesture();
    }

    return true;
}

/**
 * When the audio context starts running while the page is hidden (a resume asked for just before, on the first key
 * press or when a sound started, finishing after the player switched tabs), suspend it again until the page is visible.
 */
function onStateChange() {
    if (CTX?.state === "running" && PAUSE_WHEN_HIDDEN && document.hidden) {
        RESUME_WHEN_VISIBLE = true;
        ignoreRejection(CTX.suspend());
    }
}

/**
 * Browsers keep the audio context suspended until the user interacts with the page (their autoplay policy), so it's
 * resumed on the first key press, click or touch: the sounds played before then (the music, when the game starts)
 * start at that moment, without the game listening to the first key press itself.
 */
function waitForGesture() {
    if (WAITING_FOR_GESTURE) {
        return;
    }

    WAITING_FOR_GESTURE = true;

    for (const type of GESTURE_EVENTS) {
        window.addEventListener(type, onGesture, true);
    }
}

function stopWaitingForGesture() {
    WAITING_FOR_GESTURE = false;

    for (const type of GESTURE_EVENTS) {
        window.removeEventListener(type, onGesture, true);
    }
}

function onGesture() {
    const ctx = CTX;

    if (!ctx || ctx.state !== "suspended") {
        stopWaitingForGesture();
        return;
    }

    // the sounds pause while the page is hidden
    if (PAUSE_WHEN_HIDDEN && document.hidden) {
        return;
    }

    // some keys don't count as an interaction (escape), so it waits until the context actually runs
    ctx.resume().then(
        () => {
            if (ctx.state === "running") {
                stopWaitingForGesture();
            }
        },
        () => {},
    );
}

/**
 * Pause all the sounds while the page is hidden (`true` by default), like the game loop. Browsers keep playing audio
 * in background tabs, so without it the music goes on while the game is frozen. Pass `false` for sounds that should
 * keep playing.
 */
export function setPauseWhenHidden(pause: boolean) {
    PAUSE_WHEN_HIDDEN = pause;

    onVisibilityChange();
}

/**
 * Go back to the default settings (for tests, see `resetGame()` in `@drk4/game-engine/testing`).
 */
export function _reset() {
    setPauseWhenHidden(true);
}

/**
 * Suspend the audio context while the page is hidden, and resume it once it's visible again.
 * Suspending the context also stops its clock, so the sounds continue from where they were.
 */
function onVisibilityChange() {
    if (!CTX) {
        return;
    }

    if (PAUSE_WHEN_HIDDEN && document.hidden) {
        if (CTX.state === "running") {
            RESUME_WHEN_VISIBLE = true;
            ignoreRejection(CTX.suspend());
        }
    } else if (RESUME_WHEN_VISIBLE) {
        RESUME_WHEN_VISIBLE = false;
        ignoreRejection(CTX.resume());
    }
}

/**
 * Resume a suspended audio context so the sounds are audible (browsers start it suspended until there's a user
 * gesture). While the page is hidden (and the sounds pause then), it's only resumed once it's visible again.
 */
function resumeContext(ctx: AudioContext) {
    if (ctx.state !== "suspended") {
        return;
    }

    if (PAUSE_WHEN_HIDDEN && document.hidden) {
        RESUME_WHEN_VISIBLE = true;
    } else {
        ignoreRejection(ctx.resume());
    }
}

/**
 * Suspending/resuming fails when the context was closed, which there's nothing to do about.
 */
function ignoreRejection(promise: Promise<void> | undefined) {
    promise?.catch(() => {});
}

/**
 * Decode audio file data contained in an ArrayBuffer.
 *
 * @param data The audio data.
 * @param successCallback Function to be called when the data has been decoded.
 * @param errorCallback Function to be called in case it fails to decode the audio data.
 */
export function decodeAudio(
    data: ArrayBuffer,
    successCallback: (decodedData: AudioBuffer) => any,
    errorCallback: DecodeErrorCallback,
) {
    if (!CTX) {
        return false;
    }

    CTX.decodeAudioData(data, successCallback, errorCallback);
    return true;
}

export interface PlayOptions {
    loop?: boolean;
    volume?: number; // value between 0 and 1
}

/**
 * Play a sound.
 *
 * @param audioBuffer The audio buffer of the sound we want to play.
 * @param options Optional playback options (loop and per-sound volume).
 * @return A `SoundInstance` you can use to control the playback, or `null` if it wasn't possible to play the sound
 *         (audio isn't available, or `audioBuffer` isn't an audio buffer, like for a file that failed to load).
 */
export function play(audioBuffer: AudioBuffer, options?: PlayOptions) {
    if (!CTX || !GLOBAL_GAIN || !isAudioBuffer(audioBuffer)) {
        return null;
    }

    return new SoundInstance(CTX, GLOBAL_GAIN, audioBuffer, options);
}

/**
 * Tells if a value is a decoded audio file (an `AudioBuffer`), which is what `play()` takes.
 */
export function isAudioBuffer(value: unknown): value is AudioBuffer {
    if (typeof AudioBuffer !== "undefined") {
        return value instanceof AudioBuffer;
    }

    // where the web audio api isn't available, anything that looks like one
    return (
        typeof value === "object" &&
        value !== null &&
        typeof (value as AudioBuffer).duration === "number"
    );
}

/**
 * Sets the global gain/volume of all the sounds played.
 *
 * @param gain A number between 0 and 1.
 * @return If the gain was set or not.
 */
export function setGlobalGain(gain: number) {
    if (!CTX || !GLOBAL_GAIN || gain < 0 || gain > 1) {
        return false;
    }

    GLOBAL_GAIN.gain.value = gain;

    return true;
}

/**
 * Get the current global gain/volume value (between 0 and 1).
 * Will return -1 if the sound is not available.
 */
export function getGlobalGain() {
    if (!CTX || !GLOBAL_GAIN) {
        return -1;
    }

    return GLOBAL_GAIN.gain.value;
}

/**
 * Tells if the module is working properly or not.
 * When it isn't, calling the functions (like `Game.Sound.play()`) won't give you an error, but no sound will be played.
 */
export function isAvailable() {
    if (CTX) {
        return true;
    }

    return false;
}

/**
 * Represents a single playing sound. Returned by `Game.Sound.play()`.
 *
 * Web audio source nodes are one-shot (can only be started once), so `pause()`/`resume()`
 * work by remembering the played offset and creating a new source node when resuming.
 * Each instance owns its own gain node (feeding the global/master gain), so its volume
 * can be controlled independently from the other sounds.
 */
export class SoundInstance {
    protected _ctx: AudioContext;
    protected _buffer: AudioBuffer;
    protected _gain: GainNode;
    protected _source: AudioBufferSourceNode | null;

    protected _loop: boolean;
    protected _playing: boolean;
    protected _offset: number; // buffer time (in seconds) where the current source started
    protected _startedAt: number; // ctx.currentTime when the current source started

    constructor(
        ctx: AudioContext,
        master: GainNode,
        buffer: AudioBuffer,
        options?: PlayOptions,
    ) {
        this._ctx = ctx;
        this._buffer = buffer;

        this._gain = ctx.createGain();
        this._gain.gain.value = options?.volume ?? 1;
        this._gain.connect(master);

        this._loop = options?.loop ?? false;
        this._playing = false;
        this._offset = 0;
        this._startedAt = 0;
        this._source = null;

        this._startSource(0);
    }

    /**
     * Create and start a new source node at the given buffer offset.
     */
    protected _startSource(offset: number) {
        // browsers start the audio context suspended until a user gesture, so resume it (if needed) to be audible
        resumeContext(this._ctx);

        const source = this._ctx.createBufferSource();

        source.buffer = this._buffer;
        source.loop = this._loop;
        source.connect(this._gain);

        // when the sound finishes on its own (only happens when not looping)
        source.onended = () => {
            if (this._source === source) {
                this._source = null;
                this._playing = false;
                this._offset = 0;
            }
        };

        source.start(0, offset);

        this._source = source;
        this._offset = offset;
        this._startedAt = this._ctx.currentTime;
        this._playing = true;
    }

    /**
     * Stop the current source node without triggering the `onended` handling.
     */
    protected _stopSource() {
        if (this._source) {
            const source = this._source;
            this._source = null; // detach first so onended doesn't run our handler
            source.onended = null;
            source.stop();
        }
    }

    /**
     * Suspend the playback, remembering the current offset so it can be resumed later.
     */
    pause() {
        if (!this._playing || !this._source) {
            return;
        }

        const played = this._ctx.currentTime - this._startedAt;
        this._offset = (this._offset + played) % this._buffer.duration;

        this._stopSource();
        this._playing = false;
    }

    /**
     * Resume the playback from where it was paused.
     */
    resume() {
        if (this._playing) {
            return;
        }

        this._startSource(this._offset);
    }

    /**
     * Stop the playback and discard the saved offset.
     */
    stop() {
        this._stopSource();
        this._playing = false;
        this._offset = 0;
    }

    set loop(loop: boolean) {
        this._loop = loop;

        if (this._source) {
            this._source.loop = loop;
        }
    }

    get loop() {
        return this._loop;
    }

    set volume(volume: number) {
        this._gain.gain.value = volume;
    }

    get volume() {
        return this._gain.gain.value;
    }

    /**
     * Whether the sound is currently playing (`false` while paused/stopped/finished).
     */
    get playing() {
        return this._playing;
    }
}
