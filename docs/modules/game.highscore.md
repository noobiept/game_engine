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

* [MAX_SCORES_SAVED](game.highscore.md#max_scores_saved)
* [SCORES](game.highscore.md#scores)
* [SORT_F](game.highscore.md#sort_f)
* [STORAGE_NAME](game.highscore.md#storage_name)

### Functions

* [add](game.highscore.md#add)
* [clear](game.highscore.md#clear)
* [get](game.highscore.md#get)
* [init](game.highscore.md#init)
* [load](game.highscore.md#load)
* [save](game.highscore.md#save)

## Variables

###  MAX_SCORES_SAVED

• **MAX_SCORES_SAVED**: *number*

*Defined in [highscore.ts:25](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L25)*

___

###  SCORES

• **SCORES**: *object*

*Defined in [highscore.ts:24](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L24)*

#### Type declaration:

___

###  SORT_F

• **SORT_F**: *function*

*Defined in [highscore.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L27)*

#### Type declaration:

▸ (`a`: number, `b`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

___

###  STORAGE_NAME

• **STORAGE_NAME**: *string*

*Defined in [highscore.ts:26](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L26)*

## Functions

###  add

▸ **add**(`key`: string, `value`: number): *void*

*Defined in [highscore.ts:69](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L69)*

Add a score. For example `Game.HighScore.add( 'easy', 5 );`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The key of the score. |
`value` | number | The score value.  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [highscore.ts:113](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L113)*

Remove all the scores (clears the `localStorage` as well).

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *any*

*Defined in [highscore.ts:104](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L104)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The score key. |

**Returns:** *any*

An array with all the scores associated with the provided key.

___

###  init

▸ **init**(`maxScoresSaved`: number, `storageName`: string, `ascending`: boolean): *void*

*Defined in [highscore.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L36)*

Call this before adding scores.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxScoresSaved` | number | Total number of scores saved (only the top scores). |
`storageName` | string | Name to be used when loading/saving to localStorage. |
`ascending` | boolean | Sort the values in ascending or descending order.  |

**Returns:** *void*

___

###  load

▸ **load**(): *void*

*Defined in [highscore.ts:133](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L133)*

Load the scores from the `localStorage`. Its already done when you call `Game.HighScore.init()`.

**Returns:** *void*

___

###  save

▸ **save**(): *void*

*Defined in [highscore.ts:124](https://github.com/noobiept/game_engine/blob/625c324/source/highscore.ts#L124)*

Save the scores object to the `localStorage`. This is already done when you add a score.

**Returns:** *void*
