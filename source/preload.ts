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


/**
 * Basic Usage:
 *
 *     var preload = new Game.Preload({ save_global: true });
 *
 *     preload.addEventListener( 'complete', completeListener );
 *     preload.load( 'id', 'path_to_file.png' );
 *
 *         // or with a manifest
 *     var manifest = [
 *             { id: 'the_id', path: 'path_to_file.png' }
 *         ];
 *     preload.loadManifest( manifest, '' );
 *
 * Events:
 *
 * - `complete` -- `listener( data: { failed_ids: string[]; loaded_ids: string[]; } );`
 * - `error` -- `listener( data: { id: string; event; } );`
 * - `abort` -- `listener( data: { id: string; event; } );`
 * - `progress` -- `listener( progress: number );`
 * - `fileload` -- `listener( data: { id: string; data: Object; } );`
 *
 * Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`, `sprite`
 */
export class Preload extends EventDispatcher
    {
    _data: Object;
    save_global: boolean;
    _total_items: number;
    _loaded_items: number;
    _failed_ids: string[];      // list of the ids that failed to load
    _loaded_ids: string[];      // list of the ids that were successfully loaded

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
        this._failed_ids = [];
        this._loaded_ids = [];
        }


    /**
     * An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.
     *
     * @param id The id of the loaded element.
     * @param data Its data.
     */
    _loaded( id: string, data: any )
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
        this._loaded_ids.push( id );

        if ( this._loaded_items >= this._total_items )
            {
            this._loading_complete();
            }
        }


    /**
     * An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.
     */
    _failed_to_load( id: string )
        {
        this._loaded_items++;
        this._failed_ids.push( id );

        if ( this._loaded_items >= this._total_items )
            {
            this._loading_complete();
            }
        }


    /**
     * All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.
     */
    _loading_complete()
        {
        this.dispatchEvent( 'complete',
            {
            failed_ids: this._failed_ids,
            loaded_ids: this._loaded_ids
            });

            // clear the variables
        this._failed_ids.length = 0;
        this._loaded_ids.length = 0;
        this._loaded_items = 0;
        this._total_items = 0;
        }


    /**
     * Dispatch the `error` event.
     *
     * @param event The event to dispatch.
     * @param id The id of the element.
     */
    _on_error( event, id: string )
        {
        this.dispatchEvent( 'error', { event: event, id: id } );
        }


    /**
     * Dispatch the `abort` event.
     *
     * @param event The event to dispatch.
     * @param id The id of the element.
     */
    _on_abort( event, id: string )
        {
        this.dispatchEvent( 'abort', { event: event, id: id } );
        }


    /**
     * Dispatch the current progress percentage.
     *
     * @param event The event that was triggered.
     */
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


    /**
     * Load a file.
     *
     * @param id The id to be used later on to get the element.
     * @param path Path to the file.
     * @param typeId Type of the file to load. If not provided then it will try to determine the type from the file extension.
     */
    load( id: string, path: string, typeId?: Game.Preload.TYPES )
        {
        var type;

        if ( typeof type === 'undefined' )
            {
            type = Game.Preload.getType( path );
            }

        else
            {
            type = Game.Preload.TYPES[ typeId ];
            }


        if ( !type )
            {
            throw new Error( 'Invalid file type.' );
            }


        var _this = this;

        this._total_items++;

        var request = new XMLHttpRequest();

        request.open( 'get', path, true );
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
                // failed to load
            if ( this.status !== 200 )
                {
                _this._failed_to_load( id );
                return;
                }


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

        request.send();
        }


    /**
     * Load several files.
     *
     * @param manifest Has the information about the files.
     * @param basePath Base path for all the files in the manifest.
     */
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


    /**
     * Get a previously loaded file.
     *
     * @param id The id of the file.
     */
    get( id: string )
        {
        return this._data[ id ];
        }
    }



export module Preload
    {
        // supported file types
    export enum TYPES { image, json, text, audio }

        // file extensions of each type
    export var EXTENSIONS = {
            image: [ 'png', 'jpg', 'jpeg' ],
            json: [ 'json' ],
            text: [ 'txt' ],
            audio: [ 'ogg', 'mp3' ]
        };

        // XMLHttpRequest response type of each file type
    export var RESPONSE_TYPE = {
            image: 'blob',
            json: 'json',
            text: 'text',
            audio: 'arraybuffer'
        };


        // key is the 'id'
        // value is the 'data'
    export var DATA = {};


    /**
     * Get an element that was saved in the global `DATA` object.
     *
     * @param id The id of the element we're retrieving.
     * @return The preloaded element.
     */
    export function get( id: string )
        {
        return DATA[ id ];
        }


    /**
     * Determine the type of a file based on its extension.
     *
     * @param file The file name.
     * @return The file type.
     */
    export function getType( file: string )
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