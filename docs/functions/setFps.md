[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setFps

# Function: setFps()

> **setFps**(`fps`): `void`

Defined in: [game.ts:241](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/game.ts#L241)

Limit how many times per second the game is updated (the logic, and drawing the canvas).
By default there's no limit: it's updated on every animation frame, which follows the display's refresh rate (60 times
per second on most displays, more on high refresh rate ones). Pass `Infinity` to remove the limit again.

## Parameters

### fps

`number`

A positive number (or `Infinity`).

## Returns

`void`
