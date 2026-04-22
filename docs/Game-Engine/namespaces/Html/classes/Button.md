[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Button

# Class: Button

Defined in: [source/html.ts:297](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L297)

An html button.

## Extends

- [`Value`](Value.md)

## Extended by

- [`Boolean`](Boolean.md)
- [`TwoState`](TwoState.md)

## Constructors

### Constructor

> **new Button**(`args`): `Button`

Defined in: [source/html.ts:300](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L300)

#### Parameters

##### args

[`ButtonArgs`](../interfaces/ButtonArgs.md)

#### Returns

`Button`

#### Overrides

[`Value`](Value.md).[`constructor`](Value.md#constructor)

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L33)

#### Inherited from

[`Value`](Value.md).[`_is_active`](Value.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement`

Defined in: [source/html.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L34)

#### Inherited from

[`Value`](Value.md).[`_pre_text`](Value.md#_pre_text)

---

### click_ref

> `protected` **click_ref**: (`event`) => `any`

Defined in: [source/html.ts:298](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L298)

#### Parameters

##### event

`MouseEvent`

#### Returns

`any`

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`Value`](Value.md).[`container`](Value.md#container)

---

### element

> **element**: `HTMLElement`

Defined in: [source/html.ts:244](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L244)

#### Inherited from

[`Value`](Value.md).[`element`](Value.md#element)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:243](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L243)

#### Inherited from

[`Value`](Value.md).[`value`](Value.md#value)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:323](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L323)

Add the click event handler.

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`addEvents`](Value.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:337](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L337)

Clear the object (don't use it after this).

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`clear`](Value.md#clear)

---

### getValue()

> **getValue**(): `any`

Defined in: [source/html.ts:273](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L273)

#### Returns

`any`

The current value set.

#### Inherited from

[`Value`](Value.md).[`getValue`](Value.md#getvalue)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:103](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L103)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`Value`](Value.md).[`isActive`](Value.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:330](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L330)

Remove the click event handler.

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`removeEvents`](Value.md#removeevents)

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

[`Value`](Value.md).[`setActive`](Value.md#setactive)

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

[`Value`](Value.md).[`setValue`](Value.md#setvalue)
