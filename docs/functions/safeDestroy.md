[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / \_safeDestroy

# Function: \_safeDestroy()

> **\_safeDestroy**(`element`): `void`

Defined in: [game.ts:367](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/game.ts#L367)

It can be problematic to destroy elements during the logic functions, since the logic functions are called in a loop over all the elements.
The elements passed to this function, will only be destroyed after (at the end of the current game loop update, or once the
current code finishes when the game loop isn't running).
Don't call this directly, use the `Element.destroy()` method instead.

## Parameters

### element

[`Element`](../classes/Element.md)

## Returns

`void`
