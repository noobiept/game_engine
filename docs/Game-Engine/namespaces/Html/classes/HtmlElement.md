[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlElement

# Class: HtmlElement

Defined in: [source/html.ts:31](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L31)

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

Defined in: [source/html.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L36)

#### Parameters

##### args?

[`HtmlElementArgs`](../interfaces/HtmlElementArgs.md)

#### Returns

`HtmlElement`

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L33)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement`

Defined in: [source/html.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L34)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:110](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L110)

Activates the element's event handlers.

#### Returns

`void`

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:124](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L124)

Calls this to remove the element.

#### Returns

`void`

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:103](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L103)

Check if the element is active or not currently.

#### Returns

`boolean`

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:117](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L117)

Deactivate the element's event handlers.

#### Returns

`void`

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:83](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L83)

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

#### Parameters

##### yesNo

`boolean`

Whether to set it active or not.

#### Returns

`void`
