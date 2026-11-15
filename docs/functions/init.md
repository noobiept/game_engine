[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / init

# Function: init()

> **init**(`args`): `void`

Defined in: [game.ts:92](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/game.ts#L92)

Initialize the canvas/game loop/etc.

Calling it again replaces the previous game: its canvas are taken out of the page (and their elements are detached),
and a new canvas/collision detection is set up. The game loop callbacks and the tweens are kept.

## Parameters

### args

[`InitArgs`](../interfaces/InitArgs.md)

Initialization options.

## Returns

`void`
