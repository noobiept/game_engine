import * as Utilities from "@drk4/utilities";

/**
 * Basic Usage:
 *
 *     Game.HighScore.init( 5, 'game_name_high_score', true );
 *
 *     const score = 10;
 *     Game.HighScore.add( 'easy', score );
 *
 *     const easyScores = Game.HighScore.get( 'easy' );
 *
 *     for (let a = 0 ; a < easyScores.length ; a++)
 *         {
 *         console.log( easyScores[ a ] );
 *         }
 *
 * The scores are saved in the `localStorage`. Saved data that isn't valid (edited by hand, from an older version, etc) is ignored.
 *
 * Examples -- `minesweeper`
 */

type Scores = Record<string, number[]>;

let SCORES: Scores = Object.create(null);
let MAX_SCORES_SAVED = 0;
let STORAGE_NAME: string | null = null;
let SORT_F: (a: number, b: number) => number = function (a, b) {
    return b - a;
};

/**
 * Call this before adding scores.
 *
 * @param maxScoresSaved Total number of scores saved (only the top scores). A positive integer.
 * @param storageName Name to be used when loading/saving to localStorage.
 * @param ascending Sort the values in ascending or descending order.
 */
export function init(
    maxScoresSaved: number,
    storageName: string,
    ascending: boolean,
) {
    if (!Number.isInteger(maxScoresSaved) || maxScoresSaved < 1) {
        throw new RangeError(
            "The number of scores saved needs to be a positive integer.",
        );
    }

    MAX_SCORES_SAVED = maxScoresSaved;
    STORAGE_NAME = storageName;

    // lower values first
    if (ascending === true) {
        SORT_F = function (a, b) {
            return a - b;
        };
    }

    // higher values first
    else {
        SORT_F = function (a, b) {
            return b - a;
        };
    }

    load();
}

/**
 * Add a score. For example `Game.HighScore.add( 'easy', 5 );`.
 * Throws if `init()` wasn't called yet.
 *
 * @param key The key of the score.
 * @param value The score value (a finite number).
 * @return If the score is now in the list (`false` when it isn't a valid number, it was already there, or isn't one of the top scores).
 */
export function add(key: string, value: number) {
    checkInitialized();

    if (!Number.isFinite(value)) {
        return false;
    }

    if (!hasKey(key)) {
        SCORES[key] = [];
    }

    const scores = SCORES[key];

    // don't add repeated scores
    if (scores.indexOf(value) >= 0) {
        return false;
    }

    scores.push(value);

    // have the better scores first
    scores.sort(SORT_F);

    // only keep the top scores
    if (scores.length > MAX_SCORES_SAVED) {
        scores.length = MAX_SCORES_SAVED;
    }

    save();

    return scores.indexOf(value) >= 0;
}

/**
 * @param key The score key.
 * @return An array with all the scores associated with the provided key.
 */
export function get(key: string): number[] | undefined {
    return hasKey(key) ? SCORES[key] : undefined;
}

/**
 * Remove all the scores (clears the `localStorage` as well).
 */
export function clear() {
    SCORES = Object.create(null);

    if (STORAGE_NAME !== null) {
        localStorage.removeItem(STORAGE_NAME);
    }
}

function checkInitialized() {
    if (STORAGE_NAME === null) {
        throw new Error("HighScore.init() needs to be called first.");
    }
}

/**
 * Only the scores' own keys (not inherited properties like `toString`).
 */
function hasKey(key: string) {
    return Object.prototype.hasOwnProperty.call(SCORES, key);
}

/**
 * Save the scores object to the `localStorage`. This is already done when you add a score.
 * A failure (the storage is full or not available) doesn't stop the game, the scores are still kept in memory.
 */
function save() {
    if (STORAGE_NAME === null) {
        return;
    }

    try {
        Utilities.saveObject(STORAGE_NAME, SCORES);
    } catch (error) {
        console.warn("Couldn't save the high scores.", error);
    }
}

/**
 * Load the scores from the `localStorage`. Its already done when you call `Game.HighScore.init()`.
 */
function load() {
    if (STORAGE_NAME === null) {
        return;
    }

    let saved: unknown;

    try {
        saved = Utilities.getObject(STORAGE_NAME);
    } catch (error) {
        // the storage isn't available
        console.warn("Couldn't load the high scores.", error);
        saved = null;
    }

    SCORES = validate(saved);
}

/**
 * Get the valid scores from data that was saved, ignoring anything that isn't a list of numbers.
 * The lists are sorted, without repeated values, and only have the top scores.
 */
function validate(saved: unknown): Scores {
    const scores: Scores = Object.create(null);

    if (typeof saved !== "object" || saved === null || Array.isArray(saved)) {
        return scores;
    }

    for (const key of Object.keys(saved)) {
        const values = (saved as Record<string, unknown>)[key];

        if (!Array.isArray(values)) {
            continue;
        }

        const numbers = values.filter(
            (value, index): value is number =>
                Number.isFinite(value) && values.indexOf(value) === index,
        );

        numbers.sort(SORT_F);
        numbers.length = Math.min(numbers.length, MAX_SCORES_SAVED);

        scores[key] = numbers;
    }

    return scores;
}
