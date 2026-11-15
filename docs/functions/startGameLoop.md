[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / startGameLoop

# Function: startGameLoop()

> **startGameLoop**(): `void`

Defined in: [game.ts:140](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/game.ts#L140)

Starts the game loop. This is called automatically when you initialize the engine (Game.init()).
Only useful when you manually stop the loop (with Game.stopGameLoop()) and need to restart it later.
Does nothing if the loop is already running, or before `init()` is called. While the page is hidden, the loop only starts once it becomes visible.

## Returns

`void`
