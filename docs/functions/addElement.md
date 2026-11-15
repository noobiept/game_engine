[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addElement

# Function: addElement()

> **addElement**(`element`, `id?`): `void`

Defined in: [game.ts:329](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/game.ts#L329)

Adds an element to a canvas. If 'id' is not given, then its added to the first canvas (the one most to the back).
An element that is already in a container/canvas is taken out of it first.

## Parameters

### element

[`Element`](../classes/Element.md) \| readonly [`Element`](../classes/Element.md)[]

Element or Element[] to be added.

### id?

`number`

The canvas id.

## Returns

`void`
