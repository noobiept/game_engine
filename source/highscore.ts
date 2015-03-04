/// <reference path="utilities/utilities-1.6.d.ts" />

module Game
{
export module HighScore
    {
    var SCORES = {};
    var MAX_SCORES_SAVED: number;
    var STORAGE_NAME: string;
    var SORT_F: (a: number, b: number) => number;

    /**
        @param maxScoresSaved - Total number of scores saved (only the top scores)
        @param storageName - Name to be used when loading/saving to localStorage
        @param ascending - Sort the values in ascending or descending order
     */
    export function init( maxScoresSaved: number, storageName: string, ascending: boolean )
        {
        MAX_SCORES_SAVED = maxScoresSaved;
        STORAGE_NAME = storageName;

            // lower values first
        if ( ascending === true )
            {
            SORT_F = function( a, b )
                {
                return a - b;
                };
            }

            // higher values first
        else
            {
            SORT_F = function( a, b )
                {
                return b - a;
                };
            }

        load();
        }


    export function add( key, value )
        {
        if ( typeof SCORES[ key ] === 'undefined' )
            {
            SCORES[ key ] = [];
            }


            // don't add repeated scores
        if ( SCORES[ key ].indexOf( value ) >= 0 )
            {
            return;
            }


        SCORES[ key ].push( value );

            // have the better scores first (better means a lesser value)
        SCORES[ key ].sort( SORT_F );


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