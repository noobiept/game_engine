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
     * @param callback Function to be called when the data has been decoded.
     */
    export function decodeAudio( data: ArrayBuffer, callback: (decodedData: AudioBuffer) => any )
        {
        if ( !CTX )
            {
            throw Error( 'AudioContext not supported in this browser.' );
            }

        CTX.decodeAudioData( data, callback );
        }


    /**
     * Play a sound.
     *
     * @param audioBuffer The audio buffer of the sound we want to play.
     */
    export function play( audioBuffer: AudioBuffer )
        {
        if ( !CTX )
            {
            throw Error( 'AudioContext not supported in this browser.' );
            }

        var source = CTX.createBufferSource();

        source.buffer = audioBuffer;
        source.connect( CTX.destination );
        source.start();
        }
    }
}