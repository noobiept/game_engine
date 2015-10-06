module Game
{
/**
 * Basic Usage:
 *
 *     var preload = new Game.Preload({ save_global: true });
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
            }
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
     * @param loop Specify if the sound is to be played in a loop. Default is false.
     * @return Whether it was possible to play the sound.
     */
    export function play( audioBuffer: AudioBuffer, loop?: boolean )
        {
        if ( !CTX )
            {
            return false;
            }

        var source = CTX.createBufferSource();

        if ( loop === true )
            {
            source.loop = true;
            }

        source.buffer = audioBuffer;
        source.connect( CTX.destination );
        source.start();

        return true;
        }
    }
}