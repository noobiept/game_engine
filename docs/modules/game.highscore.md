[Game Engine](../README.md) › [Game](game.md) › [HighScore](game.highscore.md)

# Module: HighScore

Basic Usage:

    Game.HighScore.init( 5, 'game_name_high_score', true );

    var score = 10;
    Game.HighScore.add( 'easy', score );

    var easyScores = Game.HighScore.get( 'easy' );

    for (var a = 0 ; a < easyScores.length ; a++)
        {
        console.log( easyScores[ a ] );
        }

Examples -- `minesweeper`

## Index

### Variables

- [MAX_SCORES_SAVED](game.highscore.md#max_scores_saved)
- [SCORES](game.highscore.md#scores)
- [SORT_F](game.highscore.md#sort_f)
- [STORAGE_NAME](game.highscore.md#storage_name)

### Functions

- [add](game.highscore.md#add)
- [clear](game.highscore.md#clear)
- [get](game.highscore.md#get)
- [init](game.highscore.md#init)
- [load](game.highscore.md#load)
- [save](game.highscore.md#save)

## Variables

### MAX_SCORES_SAVED

• **MAX_SCORES_SAVED**: _number_

_Defined in [highscore.ts:25](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L25)_

---

### SCORES

• **SCORES**: _object_

_Defined in [highscore.ts:24](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L24)_

#### Type declaration:

---

### SORT_F

• **SORT_F**: _function_

_Defined in [highscore.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L27)_

#### Type declaration:

▸ (`a`: number, `b`: number): _number_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `a`  | number |
| `b`  | number |

---

### STORAGE_NAME

• **STORAGE_NAME**: _string_

_Defined in [highscore.ts:26](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L26)_

## Functions

### add

▸ **add**(`key`: string, `value`: number): _void_

_Defined in [highscore.ts:69](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L69)_

Add a score. For example `Game.HighScore.add( 'easy', 5 );`.

**Parameters:**

| Name    | Type   | Description           |
| ------- | ------ | --------------------- |
| `key`   | string | The key of the score. |
| `value` | number | The score value.      |

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Defined in [highscore.ts:113](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L113)_

Remove all the scores (clears the `localStorage` as well).

**Returns:** _void_

---

### get

▸ **get**(`key`: string): _any_

_Defined in [highscore.ts:104](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L104)_

**Parameters:**

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| `key` | string | The score key. |

**Returns:** _any_

An array with all the scores associated with the provided key.

---

### init

▸ **init**(`maxScoresSaved`: number, `storageName`: string, `ascending`: boolean): _void_

_Defined in [highscore.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L36)_

Call this before adding scores.

**Parameters:**

| Name             | Type    | Description                                          |
| ---------------- | ------- | ---------------------------------------------------- |
| `maxScoresSaved` | number  | Total number of scores saved (only the top scores).  |
| `storageName`    | string  | Name to be used when loading/saving to localStorage. |
| `ascending`      | boolean | Sort the values in ascending or descending order.    |

**Returns:** _void_

---

### load

▸ **load**(): _void_

_Defined in [highscore.ts:133](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L133)_

Load the scores from the `localStorage`. Its already done when you call `Game.HighScore.init()`.

**Returns:** _void_

---

### save

▸ **save**(): _void_

_Defined in [highscore.ts:124](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L124)_

Save the scores object to the `localStorage`. This is already done when you add a score.

**Returns:** _void_
