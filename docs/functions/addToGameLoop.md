[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addToGameLoop

# Function: addToGameLoop()

> **addToGameLoop**(`callback`, `options?`): `boolean`

Defined in: [source/game.ts:255](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/game.ts#L255)

Adds a callback function to be called at a certain timeout/interval (or every tick) in the game loop (before the draw phase).

Sometimes its useful to add a function call through this, for example when you have code that may remove elements, but its called from an event handler (which may try to process the elements that you removed).

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
