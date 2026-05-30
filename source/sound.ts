/**
 * Uses the `web audio api` to play the sounds.
 * If it isn't supported by a browser, the function calls will still go through, but no sound will be played.
 *
 * Basic Usage:
 *
 *     var preload = new Game.Preload({ saveGlobal: true });
 *
 *     preload.addEventListener( 'complete', function()
 *         {
 *             // play once
 *         Game.Sound.play( Game.Preload.get( 'sound' ) );
 *
 *             // or loop it (for example background music) and keep a reference to control it later
 *         var music = Game.Sound.play( Game.Preload.get( 'sound' ), { loop: true, volume: 0.5 } );
 *         music.pause();
 *         music.resume();
 *         music.stop();
 *         });
 *     preload.load( 'sound', 'path_to_file.ogg' );
 *
 * Examples -- `preload`
 */

let CTX: AudioContext | null = null;
let GLOBAL_GAIN: GainNode | null = null;

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

    return true;
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
 * @return A `SoundInstance` you can use to control the playback, or `null` if it wasn't possible to play the sound.
 */
export function play(audioBuffer: AudioBuffer, options?: PlayOptions) {
    if (!CTX || !GLOBAL_GAIN) {
        return null;
    }

    return new SoundInstance(CTX, GLOBAL_GAIN, audioBuffer, options);
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
        if (this._ctx.state === "suspended") {
            this._ctx.resume();
        }

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
