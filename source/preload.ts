/// <reference path="sound.ts" />

    // typescript isn't recognizing this, so its added here
interface Window { URL: any }

module Game
{
export module Preload
    {
    var EXTENSIONS = {
            image: [ 'png', 'jpg', 'jpeg' ],
            json: [ 'json' ],
            text: [ 'txt' ],
            audio: [ 'ogg', 'mp3' ]
        };

    var RESPONSE_TYPE = {
            image: 'blob',
            json: 'json',
            text: 'text',
            audio: 'arraybuffer'
        };


        // key is the 'id'
        // value is the 'data'
    var DATA = {};


    export function load( id: string, url: string, callback?: (data: any) => any )
        {
        var type = getType( url );

        var loaded = function( data )
            {
            DATA[ id ] = data;

            if ( Utilities.isFunction( callback ) )
                {
                callback( data );
                }
            };


        var request = new XMLHttpRequest();

        request.responseType = RESPONSE_TYPE[ type ];

            // events: progress / load / error / abort  //HERE
        request.addEventListener( 'load', function( event )
            {
            var data;

            if ( type === 'image' )
                {
                data = new Image();
                data.src = window.URL.createObjectURL( this.response );

                loaded( data );
                }

            else if ( type === 'json' )
                {
                data = JSON.parse( data );

                loaded( data );
                }

            else if ( type === 'audio' )
                {
                Sound.decodeAudio( this.response, function( audioBuffer )
                    {
                    if ( !audioBuffer )
                        {
                        console.log( 'Error decoding audio file:', id, url );
                        return;
                        }

                    DATA[ id ] = audioBuffer;

                    loaded( audioBuffer );
                    });
                }

            else
                {
                loaded( this.response );
                }
            }, false );

        request.open( 'get', url, true );
        request.send();
        }


    export function loadManifest( manifest, callback )
        {

        }


    export function get( id )
        {
        return DATA[ id ];
        }


    function getType( file )
        {
        var extension = file.split( '.' ).pop();

        for ( var type in EXTENSIONS )
            {
            if ( EXTENSIONS.hasOwnProperty( type ) )
                {
                if ( EXTENSIONS[ type ].indexOf( extension ) >= 0 )
                    {
                    return type;
                    }
                }
            }

        return null;
        }
    }
}