[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlElement

# Class: HtmlElement

Defined in: [source/html.ts:37](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L37)

Generic html element, serves as base for the rest of the classes.

## Extended by

- [`HtmlContainer`](HtmlContainer.md)
- [`Value`](Value.md)
- [`MultipleOptions`](MultipleOptions.md)
- [`Range`](Range.md)
- [`Text`](Text.md)

## Constructors

### Constructor

> **new HtmlElement**(`args?`): `HtmlElement`

Defined in: [source/html.ts:43](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L43)

#### Parameters

##### args?

[`HtmlElementArgs`](../interfaces/HtmlElementArgs.md)

#### Returns

`HtmlElement`

## Properties

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [source/html.ts:41](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L41)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L39)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L40)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L38)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:123](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L123)

Activates the element's event handlers.

#### Returns

`void`

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:137](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L137)

Calls this to remove the element.

#### Returns

`void`

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:116](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [source/html.ts:150](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:130](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L130)

Deactivate the element's event handlers.

#### Returns

`void`

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:94](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L94)

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

#### Parameters

##### yesNo

`boolean`

Whether to set it active or not.

#### Returns

`void`
