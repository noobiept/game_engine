[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setFps

# Function: setFps()

> **setFps**(`fps`): `void`

Defined in: [game.ts:241](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/game.ts#L241)

Limit how many times per second the game is updated (the logic, and drawing the canvas).
By default there's no limit: it's updated on every animation frame, which follows the display's refresh rate (60 times
per second on most displays, more on high refresh rate ones). Pass `Infinity` to remove the limit again.

## Parameters

### fps

`number`

A positive number (or `Infinity`).

## Returns

`void`
