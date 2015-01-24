module Game
{
export module Sound
    {
    var CTX: AudioContext;

    export function init()
        {
        CTX = new AudioContext();
        }

    export function decodeAudio( data, callback )
        {
        CTX.decodeAudioData( data, callback );
        }

    export function play( audioBuffer )
        {
        var source = CTX.createBufferSource();

        source.buffer = audioBuffer;
        source.connect( CTX.destination );
        source.start();
        }
    }
}