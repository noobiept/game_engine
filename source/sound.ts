module Game
{
/**
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
    var CTX: AudioContext;
    var GLOBAL_GAIN: GainNode;

    /**
     * Initialize the `Sound` module. Its called in `Game.init()`.
     */
    export function init()
        {
            // already initialized
        if ( CTX )
            {
            return;
            }

        try {
            CTX = new AudioContext();
            }

            // AudioContext not supported
        catch ( error )
            {
            CTX = null;
            return;
            }

            // all played sounds will be connected to this global gain node
        GLOBAL_GAIN = CTX.createGain();
        GLOBAL_GAIN.connect( CTX.destination );
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
            throw Error( 'AudioContext not supported in this browser.' );
            }

        CTX.decodeAudioData( data, successCallback, errorCallback );
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
        if ( gain < 0 || gain > 1 )
            {
            return false;
            }

        GLOBAL_GAIN.gain.value = gain;

        return true;
        }


    /**
     * Get the current global gain/volume value (between 0 and 1).
     */
    export function getGlobalGain()
        {
        return GLOBAL_GAIN.gain.value;
        }
    }
}