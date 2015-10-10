module Game
{
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
 *         Game.Sound.play( Game.Preload.get( 'sound' ) );
 *         });
 *     preload.load( 'sound', 'path_to_file.ogg' );
 *
 * Examples -- `preload`
 */
export module Sound
    {
    var CTX: AudioContext = null;
    var GLOBAL_GAIN: GainNode;

    /**
     * Initialize the `Sound` module. Its called in `Game.init()`.
     */
    export function init()
        {
            // already initialized
        if ( CTX )
            {
            return true;
            }

        try {
            CTX = new AudioContext();
            }

            // AudioContext not supported
        catch ( error )
            {
            CTX = null;
            return false;
            }

            // all played sounds will be connected to this global gain node
        GLOBAL_GAIN = CTX.createGain();
        GLOBAL_GAIN.connect( CTX.destination );

        return true;
        }


    /**
     * Decode audio file data contained in an ArrayBuffer.
     *
     * @param data The audio data.
     * @param successCallback Function to be called when the data has been decoded.
     * @param errorCallback Function to be called in case it fails to decode the audio data.
     */
    export function decodeAudio( data: ArrayBuffer, successCallback: (decodedData: AudioBuffer) => any, errorCallback )
        {
        if ( !CTX )
            {
            return false;
            }

        CTX.decodeAudioData( data, successCallback, errorCallback );
        return true;
        }


    /**
     * Play a sound.
     *
     * @param audioBuffer The audio buffer of the sound we want to play.
     * @return The source node, or `null` if it wasn't possible to play the sound.
     */
    export function play( audioBuffer: AudioBuffer )
        {
        if ( !CTX )
            {
            return null;
            }

        var source = CTX.createBufferSource();

        source.buffer = audioBuffer;
        source.connect( GLOBAL_GAIN );
        source.start();

        return source;
        }


    /**
     * Sets the global gain/volume of all the sounds played.
     *
     * @param gain A number between 0 and 1.
     * @return If the gain was set or not.
     */
    export function setGlobalGain( gain: number )
        {
        if ( !CTX || gain < 0 || gain > 1 )
            {
            return false;
            }

        GLOBAL_GAIN.gain.value = gain;

        return true;
        }


    /**
     * Get the current global gain/volume value (between 0 and 1).
     * Will return -1 if the sound is not available.
     */
    export function getGlobalGain()
        {
        if ( !CTX )
            {
            return -1;
            }

        return GLOBAL_GAIN.gain.value;
        }


    /**
     * Tells if the module is working properly or not.
     * When it isn't, calling the functions (like `Game.Sound.play()`) won't give you an error, but no sound will be played.
     */
    export function isAvailable()
        {
        if ( CTX )
            {
            return true;
            }

        return false;
        }
    }
}