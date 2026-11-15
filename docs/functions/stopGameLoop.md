[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / stopGameLoop

# Function: stopGameLoop()

> **stopGameLoop**(): `void`

Defined in: [game.ts:152](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L152)

Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
The loop stays stopped until `startGameLoop()` is called (it isn't restarted when the page becomes visible again).

## Returns

`void`
