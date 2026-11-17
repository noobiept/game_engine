[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / startGameLoop

# Function: startGameLoop()

> **startGameLoop**(): `void`

Defined in: [source/game.ts:155](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L155)

Starts the game loop. This is called automatically when you initialize the engine (Game.init()).
Only useful when you manually stop the loop (with Game.stopGameLoop()) and need to restart it later.
Does nothing if the loop is already running, or before `init()` is called. While the page is hidden, the loop only starts once it becomes visible.

## Returns

`void`
