[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addToGameLoop

# Function: addToGameLoop()

> **addToGameLoop**(`callback`, `delay`, `isInterval?`): `boolean`

Defined in: [source/game.ts:251](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/game.ts#L251)

Adds a callback function to be called at a certain timeout/interval (or every tick) in the game loop (before the draw phase).

Sometimes its useful to add a function call through this, for example when you have code that may remove elements, but its called from an event handler (which may try to process the elements that you removed).

## Parameters

### callback

() => `any`

The callback function.

### delay

`number`

Time until the function is called. In seconds.

### isInterval?

`boolean`

If the function is to be called constantly (every passed `delay`), or just one time (a timeout). Default is an interval.

## Returns

`boolean`

If it was added successfully.
