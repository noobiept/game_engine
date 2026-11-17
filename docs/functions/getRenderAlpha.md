[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / \_getRenderAlpha

# Function: \_getRenderAlpha()

> **\_getRenderAlpha**(): `number`

Defined in: [source/game.ts:367](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L367)

Where the drawing is between the last two steps of the logic (see `setFixedTimestep()`): `0` is the state of the
previous step, `1` the last one (always `1` outside of the drawing, or without a fixed timestep).

## Returns

`number`
