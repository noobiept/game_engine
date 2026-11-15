[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeElement

# Function: removeElement()

> **removeElement**(`element`): `boolean`

Defined in: [game.ts:351](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L351)

Detach elements from wherever they are (their canvas or container), right away. They're no longer drawn, updated or
considered in the collision detection, but they aren't destroyed, so they can be added again later.
To destroy an element, call its `destroy()` method instead.

## Parameters

### element

[`Element`](../classes/Element.md) \| readonly [`Element`](../classes/Element.md)[]

Element or Element[] to be detached.

## Returns

`boolean`

If any of the elements was in a canvas/container (and was detached).
