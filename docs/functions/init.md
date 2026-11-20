[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / init

# Function: init()

> **init**(`args`): `void`

Defined in: [source/game.ts:98](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L98)

Initialize the canvas/game loop/etc.

Calling it again replaces the previous game: its canvas are taken out of the page (and their elements are detached),
and a new canvas/collision detection is set up. The game loop callbacks and the tweens are kept.

## Parameters

### args

[`InitArgs`](../interfaces/InitArgs.md)

Initialization options.

## Returns

`void`
