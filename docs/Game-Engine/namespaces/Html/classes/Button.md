[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Button

# Class: Button

Defined in: [source/html.ts:318](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L318)

An html button.

## Extends

- [`Value`](Value.md)

## Extended by

- [`Boolean`](Boolean.md)
- [`TwoState`](TwoState.md)

## Constructors

### Constructor

> **new Button**(`args`): `Button`

Defined in: [source/html.ts:321](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L321)

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

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L39)

#### Inherited from

[`Value`](Value.md).[`_is_active`](Value.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L40)

#### Inherited from

[`Value`](Value.md).[`_pre_text`](Value.md#_pre_text)

---

### click_ref

> `protected` **click_ref**: ((`event`) => `any`) \| `null`

Defined in: [source/html.ts:319](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L319)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L38)

#### Inherited from

[`Value`](Value.md).[`container`](Value.md#container)

---

### element

> **element**: `HTMLElement` \| `null`

Defined in: [source/html.ts:260](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L260)

#### Inherited from

[`Value`](Value.md).[`element`](Value.md#element)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:259](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L259)

#### Inherited from

[`Value`](Value.md).[`value`](Value.md#value)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:344](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L344)

Add the click event handler.

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`addEvents`](Value.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:362](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L362)

Clear the object (don't use it after this).

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`clear`](Value.md#clear)

---

### getValue()

> **getValue**(): `any`

Defined in: [source/html.ts:291](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L291)

#### Returns

`any`

The current value set.

#### Inherited from

[`Value`](Value.md).[`getValue`](Value.md#getvalue)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`Value`](Value.md).[`isActive`](Value.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:353](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L353)

Remove the click event handler.

#### Returns

`void`

#### Overrides

[`Value`](Value.md).[`removeEvents`](Value.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:89](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L89)

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

Defined in: [source/html.ts:277](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L277)

#### Parameters

##### value

`any`

New value to be displayed.

#### Returns

`void`

#### Inherited from

[`Value`](Value.md).[`setValue`](Value.md#setvalue)
