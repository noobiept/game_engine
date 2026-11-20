[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / stopGameLoop

# Function: stopGameLoop()

> **stopGameLoop**(): `void`

Defined in: [source/game.ts:202](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L202)

Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
The loop stays stopped until `startGameLoop()` is called (it isn't restarted when the page becomes visible again).

## Returns

`void`
