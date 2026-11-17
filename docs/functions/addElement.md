[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / addElement

# Function: addElement()

> **addElement**(`element`, `id?`): `void`

Defined in: [source/game.ts:445](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L445)

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
