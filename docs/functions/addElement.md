[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addElement

# Function: addElement()

> **addElement**(`element`, `id?`): `void`

Defined in: [game.ts:384](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/game.ts#L384)

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
