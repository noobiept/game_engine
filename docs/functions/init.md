[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / init

# Function: init()

> **init**(`args`): `void`

Defined in: [game.ts:82](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/game.ts#L82)

Initialize the canvas/game loop/etc.

Calling it again replaces the previous game: its canvas are taken out of the page (and their elements are detached),
and a new canvas/collision detection is set up. The game loop callbacks and the tweens are kept.

## Parameters

### args

[`InitArgs`](../interfaces/InitArgs.md)

Initialization options.

## Returns

`void`
