[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [HighScore](../README.md) / add

# Function: add()

> **add**(`key`, `value`): `boolean`

Defined in: [source/highscore.ts:78](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/highscore.ts#L78)

Add a score. For example `Game.HighScore.add( 'easy', 5 );`.
Throws if `init()` wasn't called yet.

## Parameters

### key

`string`

The key of the score.

### value

`number`

The score value (a finite number).

## Returns

`boolean`

If the score is now in the list (`false` when it isn't a valid number, it was already there, or isn't one of the top scores).
