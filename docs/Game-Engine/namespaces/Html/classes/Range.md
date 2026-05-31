[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Range

# Class: Range

Defined in: [source/html.ts:612](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L612)

Number range control.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Constructors

### Constructor

> **new Range**(`args`): `Range`

Defined in: [source/html.ts:620](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L620)

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

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L39)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L40)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### change_ref

> `protected` **change_ref**: ((`event`) => `any`) \| `null`

Defined in: [source/html.ts:616](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L616)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### current_value

> `protected` **current_value**: `number` = `0`

Defined in: [source/html.ts:615](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L615)

---

### input

> `protected` **input**: `HTMLInputElement` \| `null`

Defined in: [source/html.ts:614](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L614)

---

### input_ref

> `protected` **input_ref**: ((`event`) => `any`) \| `null`

Defined in: [source/html.ts:617](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L617)

---

### number_of_decimals

> **number_of_decimals**: `number`

Defined in: [source/html.ts:618](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L618)

---

### value

> `protected` **value**: `HTMLElement` \| `null`

Defined in: [source/html.ts:613](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L613)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:703](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L703)

Add the relevant event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:729](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L729)

Clear the object.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `number`

Defined in: [source/html.ts:696](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L696)

#### Returns

`number`

Current value that is set.

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:716](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L716)

Remove the event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

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

[`HtmlElement`](HtmlElement.md).[`setActive`](HtmlElement.md#setactive)

---

### setValue()

> **setValue**(`value`): `void`

Defined in: [source/html.ts:676](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L676)

#### Parameters

##### value

`number`

New value to be set.

#### Returns

`void`
