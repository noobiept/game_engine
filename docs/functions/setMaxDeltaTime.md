[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setMaxDeltaTime

# Function: setMaxDeltaTime()

> **setMaxDeltaTime**(`seconds`): `void`

Defined in: [source/game.ts:413](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L413)

Set the longest time step (in seconds) given to the game logic in one update (default `0.25`).
When an update takes longer than this (a slow device, the debugger was paused, etc), the game slows down instead of
moving the elements a big distance at once (which could make them go through each other without colliding).

## Parameters

### seconds

`number`

A positive number.

## Returns

`void`
