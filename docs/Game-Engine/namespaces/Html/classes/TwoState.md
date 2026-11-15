[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / TwoState

# Class: TwoState

Defined in: [html.ts:423](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L423)

A button that has 2 states, each state with its own value and callback.

## Extends

- [`Button`](Button.md)

## Constructors

### Constructor

> **new TwoState**(`args`): `TwoState`

Defined in: [html.ts:426](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L426)

#### Parameters

##### args

[`TwoStateArgs`](../interfaces/TwoStateArgs.md)

#### Returns

`TwoState`

#### Overrides

[`Button`](Button.md).[`constructor`](Button.md#constructor)

## Properties

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [html.ts:41](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L41)

#### Inherited from

[`Button`](Button.md).[`_cleared`](Button.md#_cleared)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [html.ts:39](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L39)

#### Inherited from

[`Button`](Button.md).[`_is_active`](Button.md#_is_active)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [html.ts:40](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L40)

#### Inherited from

[`Button`](Button.md).[`_pre_text`](Button.md#_pre_text)

---

### click\_ref

> `protected` **click\_ref**: ((`event`) => `any`) \| `null`

Defined in: [html.ts:316](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L316)

#### Inherited from

[`Button`](Button.md).[`click_ref`](Button.md#click_ref)

---

### container

> **container**: `HTMLElement`

Defined in: [html.ts:38](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L38)

#### Inherited from

[`Button`](Button.md).[`container`](Button.md#container)

---

### element

> **element**: `HTMLElement`

Defined in: [html.ts:263](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L263)

#### Inherited from

[`Button`](Button.md).[`element`](Button.md#element)

---

### isValue1

> `protected` **isValue1**: `boolean`

Defined in: [html.ts:424](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L424)

---

### value

> `protected` **value**: `any`

Defined in: [html.ts:262](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L262)

#### Inherited from

[`Button`](Button.md).[`value`](Button.md#value)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [html.ts:341](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L341)

Add the click event handler.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`addEvents`](Button.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [html.ts:359](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L359)

Clear the object (don't use it after this).

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`clear`](Button.md#clear)

---

### getValue()

> **getValue**(): `string`

Defined in: [html.ts:453](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L453)

#### Returns

`string`

The current value set.

#### Overrides

[`Button`](Button.md).[`getValue`](Button.md#getvalue)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [html.ts:116](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`Button`](Button.md).[`isActive`](Button.md#isactive)

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [html.ts:150](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

#### Inherited from

[`Button`](Button.md).[`isCleared`](Button.md#iscleared)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [html.ts:350](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L350)

Remove the click event handler.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`removeEvents`](Button.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [html.ts:94](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L94)

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

Defined in: [html.ts:280](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/html.ts#L280)

#### Parameters

##### value

`any`

New value to be displayed.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`setValue`](Button.md#setvalue)
