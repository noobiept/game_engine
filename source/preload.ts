/// <reference path="event_dispatcher.ts" />
/// <reference path="sound.ts" />

    // typescript isn't recognizing this, so its added here
interface Window { URL: any }

module Game
{
export interface PreloadArgs extends EventDispatcherArgs
    {
        save_global?: boolean;   // save to global 'data' object, or to this object's 'data'
    }


/*
    Events:
        - complete -- all files loaded
        - error -- an error occurred
        - abort -- canceled by the user
        - progress -- progress of the queue
        - fileload -- a file loaded

    Listeners:
        - complete_listeners()
        - error_listeners( data: { id: string; event; } )
        - abort_listeners( data: { id: string; event; } )
        - progress_listeners( progress: number )
        - fileload_listeners( data: { id: string; data: Object; } )
 */
export class Preload extends EventDispatcher
    {
    _data: Object;
    save_global: boolean;
    _total_items: number;
    _loaded_items: number;

    constructor( args?: PreloadArgs )
        {
        super( args );

        var saveGlobal = false;

        if ( typeof args !== 'undefined' )
            {
            if ( Utilities.isBoolean( args.save_global ) )
                {
                saveGlobal = args.save_global;
                }
            }

        this._total_items = 0;
        this._loaded_items = 0;
        this.save_global = saveGlobal;
        this._data = {};
        }


    _loaded( id, data )
        {
        if ( this.save_global )
            {
            Game.Preload.DATA[ id ] = data;
            }

        else
            {
            this._data[ id ] = data;
            }

        this.dispatchEvent( 'fileload', { id: id, data: data } );


        this._loaded_items++;

        if ( this._loaded_items >= this._total_items )
            {
            this.dispatchEvent( 'complete' );
            }
        }

    _on_error( event, id )
        {
        this.dispatchEvent( 'error', { event: event, id: id } );
        }

    _on_abort( event, id )
        {
        this.dispatchEvent( 'abort', { event: event, id: id } );
        }

    _on_progress( event: ProgressEvent )
        {
        var fileProgress = 0;

        if ( event.lengthComputable )
            {
            fileProgress = event.loaded / event.total;
            }

        var progress = Math.round( (fileProgress + this._loaded_items) / this._total_items * 100 );


        this.dispatchEvent( 'progress', progress )
        }


    load( id: string, path: string )
        {
        var type = Game.Preload.getType( path );
        var _this = this;

        this._total_items++;

        var request = new XMLHttpRequest();

        request.responseType = Game.Preload.RESPONSE_TYPE[ type ];

            // add the request events
        request.addEventListener( 'error', function( event )
            {
            _this._on_error( event, id );
            });
        request.addEventListener( 'abort', function( event )
            {
            _this._on_abort( event, id );
            });
        request.addEventListener( 'progress', function( event )
            {
            _this._on_progress( event );
            });
        request.addEventListener( 'load', function( event )
            {
            var response = this.response;

            if ( type === 'image' )
                {
                var image = new Image();
                image.src = window.URL.createObjectURL( response );
                image.onload = function()
                    {
                    _this._loaded( id, image );
                    }
                }

            else if ( type === 'json' )
                {
                _this._loaded( id, response );
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

                    _this._loaded( id, audioBuffer );
                    });
                }

            else
                {
                _this._loaded( id, response );
                }
            }, false );

        request.open( 'get', path, true );
        request.send();
        }



    loadManifest( manifest: { id: string; path: string; }[], basePath?: string )
        {
        var length = manifest.length;

        if ( typeof basePath === 'undefined' )
            {
            basePath = '';
            }

        for (var a = 0 ; a < length ; a++)
            {
            var file = manifest[ a ];

            this.load( file.id, basePath + file.path );
            }
        }


    get( id )
        {
        return this._data[ id ];
        }
    }



export module Preload
    {
    export var EXTENSIONS = {
            image: [ 'png', 'jpg', 'jpeg' ],
            json: [ 'json' ],
            text: [ 'txt' ],
            audio: [ 'ogg', 'mp3' ]
        };

    export var RESPONSE_TYPE = {
            image: 'blob',
            json: 'json',
            text: 'text',
            audio: 'arraybuffer'
        };


        // key is the 'id'
        // value is the 'data'
    export var DATA = {};


    export function get( id )
        {
        return DATA[ id ];
        }


    export function getType( file )
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