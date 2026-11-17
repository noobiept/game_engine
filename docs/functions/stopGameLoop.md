[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / stopGameLoop

# Function: stopGameLoop()

> **stopGameLoop**(): `void`

Defined in: [source/game.ts:167](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L167)

Stops the game loop (that means there's no redrawn of the canvas, callbacks in the game loop being called, tween loop, etc).
The loop stays stopped until `startGameLoop()` is called (it isn't restarted when the page becomes visible again).

## Returns

`void`
