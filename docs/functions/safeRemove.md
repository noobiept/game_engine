[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / \_safeRemove

# Function: \_safeRemove()

> **\_safeRemove**(`element`): `void`

Defined in: [source/game.ts:241](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/game.ts#L241)

It can be problematic to remove elements during the logic functions, since the logic functions are called in a loop over all the elements.
The elements passed to this function, will only be removed after.
Don't call this directly, use the `Element.remove()` method instead.

## Parameters

### element

[`Element`](../classes/Element.md)

## Returns

`void`
