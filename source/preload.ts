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


    export function load( id: string, path: string, callback?: (data: any) => any )
        {
        var type = getType( path );

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
            var response = this.response;

            if ( type === 'image' )
                {
                var image = new Image();
                image.src = window.URL.createObjectURL( response );
                image.onload = function()
                    {
                    loaded( image );
                    }
                }

            else if ( type === 'json' )
                {
                loaded( response );
                }

            else if ( type === 'audio' )
                {
                Sound.decodeAudio( response, function( audioBuffer )
                    {
                    if ( !audioBuffer )
                        {
                        console.log( 'Error decoding audio file:', id, path );
                        return;
                        }

                    DATA[ id ] = audioBuffer;

                    loaded( audioBuffer );
                    });
                }

            else
                {
                loaded( response );
                }
            }, false );

        request.open( 'get', path, true );
        request.send();
        }


    export function loadManifest( manifest: { id: string; path: string; }[], basePath?: string, callback?: () => any )
        {
        var length = manifest.length;
        var count = 0;

        if ( typeof basePath === 'undefined' )
            {
            basePath = '';
            }

        for (var a = 0 ; a < length ; a++)
            {
            var file = manifest[ a ];

            load( file.id, basePath + file.path, function()
                {
                count++;

                if ( count >= length )
                    {
                    if ( Utilities.isFunction( callback ) )
                        {
                        callback();
                        }
                    }
                });
            }
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