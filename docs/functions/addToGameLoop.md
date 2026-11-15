[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addToGameLoop

# Function: addToGameLoop()

> **addToGameLoop**(`callback`, `options?`): `boolean`

Defined in: [game.ts:413](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L413)

Adds a callback function to be called at a certain timeout/interval (or every tick) in the game loop (before the draw phase).

Sometimes its useful to add a function call through this, for example when you have code that may remove elements, but its called from an event handler (which may try to process the elements that you removed).

A callback is called at most once per update. When the `delay` is shorter than the time between updates, it's called on every update.

## Parameters

### callback

(`deltaTime`) => `any`

The callback function. It receives the loop's `deltaTime` (time elapsed since the last update, in seconds).

### options?

[`GameLoopOptions`](../interfaces/GameLoopOptions.md)

`delay` is the time (in seconds) until/between calls (default `0`, every tick). `interval` controls whether
it's called repeatedly (every `delay`) or just once like a timeout (default `true`, an interval).

## Returns

`boolean`

If it was added successfully.
