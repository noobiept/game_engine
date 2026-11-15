[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / stopGameLoop

# Function: stopGameLoop()

> **stopGameLoop**(): `void`

Defined in: [game.ts:162](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/game.ts#L162)

Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
The loop stays stopped until `startGameLoop()` is called (it isn't restarted when the page becomes visible again).

## Returns

`void`
