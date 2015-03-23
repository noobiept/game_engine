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
        CTX = new AudioContext();
        }


    /**
     * Decode audio file data contained in an ArrayBuffer.
     *
     * @param data The audio data.
     * @param callback Function to be called when the data has been decoded.
     */
    export function decodeAudio( data: ArrayBuffer, callback: (decodedData: AudioBuffer) => any )
        {
        CTX.decodeAudioData( data, callback );
        }


    /**
     * Play a sound.
     *
     * @param audioBuffer The audio buffer of the sound we want to play.
     */
    export function play( audioBuffer: AudioBuffer )
        {
        var source = CTX.createBufferSource();

        source.buffer = audioBuffer;
        source.connect( CTX.destination );
        source.start();
        }
    }
}