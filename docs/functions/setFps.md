[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setFps

# Function: setFps()

> **setFps**(`fps`): `void`

Defined in: [source/game.ts:344](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L344)

Limit how many times per second the game is updated (the logic, and drawing the canvas).
By default there's no limit: it's updated on every animation frame, which follows the display's refresh rate (60 times
per second on most displays, more on high refresh rate ones). Pass `Infinity` to remove the limit again.

The updates happen on animation frames, so when the rate doesn't divide the display's refresh rate, the time between
them varies to keep to the rate on average (`setFps(60)` on a 144Hz display updates every 2 or 3 frames, so
`deltaTime` is about 0.014 or 0.021 seconds).

In v3 of the engine, the loop ran below the set rate: it skipped every animation frame that came less than
`1000 / fps` milliseconds (counted in whole milliseconds) after the last update. On a 60Hz display, the default
(35) ran at 30 updates per second, `setFps(60)` at about 40, and `setFps(30)` at 20. To keep a v3 game's timing
while updating it, set the rate it actually ran at (`setFps(30)` for a game that didn't call `setFps()`).

## Parameters

### fps

`number`

A positive number (or `Infinity`).

## Returns

`void`
