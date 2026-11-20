[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeElement

# Function: removeElement()

> **removeElement**(`element`): `boolean`

Defined in: [source/game.ts:502](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L502)

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
