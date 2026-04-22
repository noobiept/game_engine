[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / \_safeRemove

# Function: \_safeRemove()

> **\_safeRemove**(`element`): `void`

Defined in: [source/game.ts:237](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/game.ts#L237)

It can be problematic to remove elements during the logic functions, since the logic functions are called in a loop over all the elements.
The elements passed to this function, will only be removed after.
Don't call this directly, use the `Element.remove()` method instead.

## Parameters

### element

[`Element`](../classes/Element.md)

## Returns

`void`
