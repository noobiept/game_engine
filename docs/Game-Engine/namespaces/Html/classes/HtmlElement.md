[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlElement

# Class: HtmlElement

Defined in: [html.ts:37](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L37)

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

Defined in: [html.ts:43](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L43)

#### Parameters

##### args?

[`HtmlElementArgs`](../interfaces/HtmlElementArgs.md)

#### Returns

`HtmlElement`

## Properties

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [html.ts:41](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L41)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [html.ts:39](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L39)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [html.ts:40](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L40)

---

### container

> **container**: `HTMLElement`

Defined in: [html.ts:38](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L38)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [html.ts:123](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L123)

Activates the element's event handlers.

#### Returns

`void`

---

### clear()

> **clear**(): `void`

Defined in: [html.ts:137](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L137)

Calls this to remove the element.

#### Returns

`void`

---

### isActive()

> **isActive**(): `boolean`

Defined in: [html.ts:116](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [html.ts:150](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [html.ts:130](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L130)

Deactivate the element's event handlers.

#### Returns

`void`

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [html.ts:94](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L94)

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

#### Parameters

##### yesNo

`boolean`

Whether to set it active or not.

#### Returns

`void`
