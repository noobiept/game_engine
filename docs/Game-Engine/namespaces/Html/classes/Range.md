[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Range

# Class: Range

Defined in: [source/html.ts:574](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L574)

Number range control.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Constructors

### Constructor

> **new Range**(`args`): `Range`

Defined in: [source/html.ts:582](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L582)

#### Parameters

##### args

[`RangeArgs`](../interfaces/RangeArgs.md)

#### Returns

`Range`

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

### change_ref

> `protected` **change_ref**: (`event`) => `any`

Defined in: [source/html.ts:578](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L578)

#### Parameters

##### event

`any`

#### Returns

`any`

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### current_value

> `protected` **current_value**: `number`

Defined in: [source/html.ts:577](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L577)

---

### input

> `protected` **input**: `HTMLInputElement`

Defined in: [source/html.ts:576](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L576)

---

### input_ref

> `protected` **input_ref**: (`event`) => `any`

Defined in: [source/html.ts:579](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L579)

#### Parameters

##### event

`any`

#### Returns

`any`

---

### number_of_decimals

> **number_of_decimals**: `number`

Defined in: [source/html.ts:580](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L580)

---

### value

> `protected` **value**: `HTMLElement`

Defined in: [source/html.ts:575](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L575)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:656](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L656)

Add the relevant event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:672](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L672)

Clear the object.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `number`

Defined in: [source/html.ts:649](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L649)

#### Returns

`number`

Current value that is set.

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

Defined in: [source/html.ts:664](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L664)

Remove the event handlers.

#### Returns

`void`

#### Overrides

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

Defined in: [source/html.ts:634](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L634)

#### Parameters

##### value

`number`

New value to be set.

#### Returns

`void`
