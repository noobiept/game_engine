[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / \_safeDestroy

# Function: \_safeDestroy()

> **\_safeDestroy**(`element`): `void`

Defined in: [source/game.ts:489](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L489)

It can be problematic to destroy elements during the logic functions, since the logic functions are called in a loop over all the elements.
The elements passed to this function, will only be destroyed after (at the end of the current game loop update, or once the
current code finishes when the game loop isn't running).
Don't call this directly, use the `Element.destroy()` method instead.

## Parameters

### element

[`Element`](../classes/Element.md)

## Returns

`void`
