[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / init

# Function: init()

> **init**(`args`): `void`

Defined in: [game.ts:82](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L82)

Initialize the canvas/game loop/etc.

Calling it again replaces the previous game: its canvas are taken out of the page (and their elements are detached),
and a new canvas/collision detection is set up. The game loop callbacks and the tweens are kept.

## Parameters

### args

[`InitArgs`](../interfaces/InitArgs.md)

Initialization options.

## Returns

`void`
