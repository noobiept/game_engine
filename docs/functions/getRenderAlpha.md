[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / \_getRenderAlpha

# Function: \_getRenderAlpha()

> **\_getRenderAlpha**(): `number`

Defined in: [source/game.ts:402](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L402)

Where the drawing is between the last two steps of the logic (see `setFixedTimestep()`): `0` is the state of the
previous step, `1` the last one (always `1` outside of the drawing, or without a fixed timestep).

## Returns

`number`
