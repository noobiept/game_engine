/// <reference path="utilities/utilities-1.6.d.ts" />

module Game
{
export module HighScore
    {
    var SCORES = {};
    var MAX_SCORES_SAVED: number;
    var STORAGE_NAME: string;

    /**
        @param maxScoresSaved - Total number of scores saved (only the top scores)
        @param storageName - Name to be used when loading/saving to localStorage
     */
    export function init( maxScoresSaved: number, storageName: string )
        {
        MAX_SCORES_SAVED = maxScoresSaved;
        STORAGE_NAME = storageName;

        load();
        }


    export function add( key, value )
        {
        if ( typeof SCORES[ key ] === 'undefined' )
            {
            SCORES[ key ] = [];
            }

        SCORES[ key ].push( value );

            // have the better scores first (better means a lesser value)
        SCORES[ key ].sort( function( a, b )
            {
            return a - b;
            });


            // if we pass the limit, remove one of the lesser scores
        if ( SCORES[ key ].length > MAX_SCORES_SAVED )
            {
            SCORES[ key ].pop();
            }

        save();
        }


    export function get( key )
        {
        return SCORES[ key ];
        }


    /*
        Remove all the scores.
     */
    export function clear()
        {
        SCORES = {};

        localStorage.removeItem( STORAGE_NAME );
        }


    function save()
        {
        Utilities.saveObject( STORAGE_NAME, SCORES );
        }


    function load()
        {
        var scores = Utilities.getObject( STORAGE_NAME );

        if ( scores )
            {
            SCORES = scores;
            }
        }
    }
}