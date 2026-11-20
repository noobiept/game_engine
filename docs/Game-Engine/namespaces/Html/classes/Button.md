[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Button

# Class: Button

Defined in: [source/html.ts:315](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L315)

An html button.

## Extends

- [`Value`](Value.md)

## Extended by

- [`Boolean`](Boolean.md)
- [`TwoState`](TwoState.md)

## Constructors

### Constructor

> **new Button**(`args`): `Button`

Defined in: [source/html.ts:318](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L318)

#### Parameters

##### args

[`ButtonArgs`](../interfaces/ButtonArgs.md)

#### Returns

`Button`

#### Overrides

[`Value`](Value.md).[`constructor`](Value.md#constructor)

## Properties

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [source/html.ts:41](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L41)

#### Inherited from

[`Value`](Value.md).[`_cleared`](Value.md#_cleared)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L39)

#### Inherited from

[`Value`](Value.md).[`_is_active`](Value.md#_is_active)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L40)

#### Inherited from

[`Value`](Value.md).[`_pre_text`](Value.md#_pre_text)

---

### click\_ref

> `protected` **click\_ref**: ((`event`) => `any`) \| `null`

Defined in: [source/html.ts:316](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L316)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L38)

#### Inherited from

[`Value`](Value.md).[`container`](Value.md#container)

---

### element

> **element**: `HTMLElement`

Defined in: [source/html.ts:263](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L263)

#### Inherited from

[`Value`](Value.md).[`element`](Value.md#element)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:262](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L262)

#### Inherited from

[`Value`](Value.md).[`value`](Value.md#value)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:341](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L341)

Add the click event handler.

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`addEvents`](Value.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:359](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L359)

Clear the object (don't use it after this).

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`clear`](Value.md#clear)

---

### getValue()

> **getValue**(): `any`

Defined in: [source/html.ts:292](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L292)

#### Returns

`any`

The current value set.

#### Inherited from

[`Value`](Value.md).[`getValue`](Value.md#getvalue)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:116](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`Value`](Value.md).[`isActive`](Value.md#isactive)

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [source/html.ts:150](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

#### Inherited from

[`Value`](Value.md).[`isCleared`](Value.md#iscleared)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:350](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L350)

Remove the click event handler.

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`removeEvents`](Value.md#removeevents)

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

#### Inherited from

[`Value`](Value.md).[`setActive`](Value.md#setactive)

---

### setValue()

> **setValue**(`value`): `void`

Defined in: [source/html.ts:280](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/html.ts#L280)

#### Parameters

##### value

`any`

New value to be displayed.

#### Returns

`void`

#### Inherited from

[`Value`](Value.md).[`setValue`](Value.md#setvalue)
