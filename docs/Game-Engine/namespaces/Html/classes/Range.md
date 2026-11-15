[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Range

# Class: Range

Defined in: [html.ts:597](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L597)

Number range control.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Constructors

### Constructor

> **new Range**(`args`): `Range`

Defined in: [html.ts:605](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L605)

#### Parameters

##### args

[`RangeArgs`](../interfaces/RangeArgs.md)

#### Returns

`Range`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`constructor`](HtmlElement.md#constructor)

## Properties

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [html.ts:41](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L41)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_cleared`](HtmlElement.md#_cleared)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [html.ts:39](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L39)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [html.ts:40](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L40)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### change\_ref

> `protected` **change\_ref**: ((`event`) => `any`) \| `null`

Defined in: [html.ts:601](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L601)

---

### container

> **container**: `HTMLElement`

Defined in: [html.ts:38](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### current\_value

> `protected` **current\_value**: `number` = `NaN`

Defined in: [html.ts:600](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L600)

---

### input

> `protected` **input**: `HTMLInputElement` \| `null`

Defined in: [html.ts:599](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L599)

---

### input\_ref

> `protected` **input\_ref**: ((`event`) => `any`) \| `null`

Defined in: [html.ts:602](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L602)

---

### number\_of\_decimals

> **number\_of\_decimals**: `number`

Defined in: [html.ts:603](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L603)

---

### value

> `protected` **value**: `HTMLElement` \| `null`

Defined in: [html.ts:598](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L598)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [html.ts:689](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L689)

Add the relevant event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [html.ts:715](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L715)

Clear the object.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `number`

Defined in: [html.ts:682](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L682)

#### Returns

`number`

Current value that is set.

---

### isActive()

> **isActive**(): `boolean`

Defined in: [html.ts:116](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [html.ts:150](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isCleared`](HtmlElement.md#iscleared)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [html.ts:702](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L702)

Remove the event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [html.ts:94](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L94)

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

Defined in: [html.ts:662](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/html.ts#L662)

#### Parameters

##### value

`number`

New value to be set.

#### Returns

`void`
