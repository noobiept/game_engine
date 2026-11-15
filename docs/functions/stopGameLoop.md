[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / stopGameLoop

# Function: stopGameLoop()

> **stopGameLoop**(): `void`

Defined in: [game.ts:152](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/game.ts#L152)

Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
The loop stays stopped until `startGameLoop()` is called (it isn't restarted when the page becomes visible again).

## Returns

`void`
