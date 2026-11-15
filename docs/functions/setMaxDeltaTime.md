[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setMaxDeltaTime

# Function: setMaxDeltaTime()

> **setMaxDeltaTime**(`seconds`): `void`

Defined in: [game.ts:262](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L262)

Set the longest time step (in seconds) given to the game logic in one update (default `0.25`).
When an update takes longer than this (a slow device, the debugger was paused, etc), the game slows down instead of
moving the elements a big distance at once (which could make them go through each other without colliding).

## Parameters

### seconds

`number`

A positive number.

## Returns

`void`
