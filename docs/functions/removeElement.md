[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / removeElement

# Function: removeElement()

> **removeElement**(`element`): `boolean`

Defined in: [game.ts:348](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/game.ts#L348)

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
