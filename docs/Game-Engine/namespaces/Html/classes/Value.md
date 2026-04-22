[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Value

# Class: Value

Defined in: [source/html.ts:242](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L242)

Display a value.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Extended by

- [`Button`](Button.md)

## Constructors

### Constructor

> **new Value**(`args`): `Value`

Defined in: [source/html.ts:246](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L246)

#### Parameters

##### args

[`ValueArgs`](../interfaces/ValueArgs.md)

#### Returns

`Value`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`constructor`](HtmlElement.md#constructor)

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L33)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement`

Defined in: [source/html.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L34)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### element

> **element**: `HTMLElement`

Defined in: [source/html.ts:244](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L244)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:243](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L243)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:110](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L110)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:280](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L280)

Clear the object (don't use it after this).

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `any`

Defined in: [source/html.ts:273](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L273)

#### Returns

`any`

The current value set.

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:103](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L103)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:117](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L117)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

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

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`setActive`](HtmlElement.md#setactive)

---

### setValue()

> **setValue**(`value`): `void`

Defined in: [source/html.ts:261](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L261)

#### Parameters

##### value

`any`

New value to be displayed.

#### Returns

`void`
