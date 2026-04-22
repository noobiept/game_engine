[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / TwoState

# Class: TwoState

Defined in: [source/html.ts:407](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L407)

A button that has 2 states, each state with its own value and callback.

## Extends

- [`Button`](Button.md)

## Constructors

### Constructor

> **new TwoState**(`args`): `TwoState`

Defined in: [source/html.ts:410](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L410)

#### Parameters

##### args

[`TwoStateArgs`](../interfaces/TwoStateArgs.md)

#### Returns

`TwoState`

#### Overrides

[`Button`](Button.md).[`constructor`](Button.md#constructor)

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L33)

#### Inherited from

[`Button`](Button.md).[`_is_active`](Button.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement`

Defined in: [source/html.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L34)

#### Inherited from

[`Button`](Button.md).[`_pre_text`](Button.md#_pre_text)

---

### click_ref

> `protected` **click_ref**: (`event`) => `any`

Defined in: [source/html.ts:298](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L298)

#### Parameters

##### event

`MouseEvent`

#### Returns

`any`

#### Inherited from

[`Button`](Button.md).[`click_ref`](Button.md#click_ref)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`Button`](Button.md).[`container`](Button.md#container)

---

### element

> **element**: `HTMLElement`

Defined in: [source/html.ts:244](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L244)

#### Inherited from

[`Button`](Button.md).[`element`](Button.md#element)

---

### isValue1

> `protected` **isValue1**: `boolean`

Defined in: [source/html.ts:408](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L408)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:243](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L243)

#### Inherited from

[`Button`](Button.md).[`value`](Button.md#value)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:323](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L323)

Add the click event handler.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`addEvents`](Button.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:337](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L337)

Clear the object (don't use it after this).

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`clear`](Button.md#clear)

---

### getValue()

> **getValue**(): `string`

Defined in: [source/html.ts:437](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L437)

#### Returns

`string`

The current value set.

#### Overrides

[`Button`](Button.md).[`getValue`](Button.md#getvalue)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:103](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L103)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`Button`](Button.md).[`isActive`](Button.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:330](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L330)

Remove the click event handler.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`removeEvents`](Button.md#removeevents)

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

[`Button`](Button.md).[`setActive`](Button.md#setactive)

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

#### Inherited from

[`Button`](Button.md).[`setValue`](Button.md#setvalue)
