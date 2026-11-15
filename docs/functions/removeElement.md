[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeElement

# Function: removeElement()

> **removeElement**(`element`): `boolean`

Defined in: [game.ts:348](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/game.ts#L348)

Detach elements from wherever they are (their canvas or container), right away. They're no longer drawn, updated or
considered in the collision detection, but they aren't destroyed, so they can be added again later.
To destroy an element, call its `destroy()` method instead.

## Parameters

### element

[`Element`](../classes/Element.md) \| [`Element`](../classes/Element.md)[]

Element or Element[] to be detached.

## Returns

`boolean`

If any of the elements was in a canvas/container (and was detached).
