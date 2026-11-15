[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setFps

# Function: setFps()

> **setFps**(`fps`): `void`

Defined in: [game.ts:244](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L244)

Limit how many times per second the game is updated (the logic, and drawing the canvas).
By default there's no limit: it's updated on every animation frame, which follows the display's refresh rate (60 times
per second on most displays, more on high refresh rate ones). Pass `Infinity` to remove the limit again.

`setFps(30)` gets close to the timing of v3 of the engine (which aimed for 35 updates per second, and ran at 30 on a
60Hz display). It's a stopgap while updating a game whose balance depends on that.

## Parameters

### fps

`number`

A positive number (or `Infinity`).

## Returns

`void`
