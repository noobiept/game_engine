[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / init

# Function: init()

> **init**(`args`): `void`

Defined in: [source/game.ts:97](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L97)

Initialize the canvas/game loop/etc.

Calling it again replaces the previous game: its canvas are taken out of the page (and their elements are detached),
and a new canvas/collision detection is set up. The game loop callbacks and the tweens are kept.

## Parameters

### args

[`InitArgs`](../interfaces/InitArgs.md)

Initialization options.

## Returns

`void`
