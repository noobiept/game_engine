/// <reference path="utilities/utilities.1.7.0.d.ts" />

module Game
{
/**
 * Basic Usage:
 *
 *     Game.HighScore.init( 5, 'game_name_high_score', true );
 *
 *     var score = 10;
 *     Game.HighScore.add( 'easy', score );
 *
 *     var easyScores = Game.HighScore.get( 'easy' );
 *
 *     for (var a = 0 ; a < easyScores.length ; a++)
 *         {
 *         console.log( easyScores[ a ] );
 *         }
 */
export module HighScore
    {
    var SCORES = {};
    var MAX_SCORES_SAVED: number;
    var STORAGE_NAME: string;
    var SORT_F: (a: number, b: number) => number;

    /**
     * Call this before adding scores.
     *
     * @param maxScoresSaved Total number of scores saved (only the top scores).
     * @param storageName Name to be used when loading/saving to localStorage.
     * @param ascending Sort the values in ascending or descending order.
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


    /**
     * Add a score. For example `Game.HighScore.add( 'easy', 5 );`.
     *
     * @param key The key of the score.
     * @param value The score value.
     */
    export function add( key: string, value: number )
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


    /**
     * @param key The score key.
     * @return An array with all the scores associated with the provided key.
     */
    export function get( key: string )
        {
        return SCORES[ key ];
        }


    /**
     * Remove all the scores (clears the `localStorage` as well).
     */
    export function clear()
        {
        SCORES = {};

        localStorage.removeItem( STORAGE_NAME );
        }


    /**
     * Save the scores object to the `localStorage`. This is already done when you add a score.
     */
    function save()
        {
        Utilities.saveObject( STORAGE_NAME, SCORES );
        }


    /**
     * Load the scores from the `localStorage`. Its already done when you call `Game.HighScore.init()`.
     */
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