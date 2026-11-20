[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / startGameLoop

# Function: startGameLoop()

> **startGameLoop**(): `void`

Defined in: [source/game.ts:190](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L190)

Starts the game loop. This is called automatically when you initialize the engine (Game.init()).
Only useful when you manually stop the loop (with Game.stopGameLoop()) and need to restart it later.
Does nothing if the loop is already running, or before `init()` is called. While the page is hidden, the loop only starts once it becomes visible.

## Returns

`void`
