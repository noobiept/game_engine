[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setMaxDeltaTime

# Function: setMaxDeltaTime()

> **setMaxDeltaTime**(`seconds`): `void`

Defined in: [game.ts:259](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/game.ts#L259)

Set the longest time step (in seconds) given to the game logic in one update (default `0.25`).
When an update takes longer than this (a slow device, the debugger was paused, etc), the game slows down instead of
moving the elements a big distance at once (which could make them go through each other without colliding).

## Parameters

### seconds

`number`

A positive number.

## Returns

`void`
