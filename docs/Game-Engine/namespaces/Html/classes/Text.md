[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Text

# Class: Text

Defined in: [html.ts:743](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L743)

Text input control.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Constructors

### Constructor

> **new Text**(`args?`): `Text`

Defined in: [html.ts:748](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L748)

#### Parameters

##### args?

[`TextArgs`](../interfaces/TextArgs.md)

#### Returns

`Text`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`constructor`](HtmlElement.md#constructor)

## Properties

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [html.ts:41](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L41)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_cleared`](HtmlElement.md#_cleared)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [html.ts:39](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L39)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [html.ts:40](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L40)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### button

> `protected` **button**: [`Button`](Button.md) \| `null`

Defined in: [html.ts:745](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L745)

---

### container

> **container**: `HTMLElement`

Defined in: [html.ts:38](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### input

> `protected` **input**: `HTMLInputElement` \| `null`

Defined in: [html.ts:744](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L744)

---

### key\_ref

> `protected` **key\_ref**: ((`event`) => `any`) \| `null`

Defined in: [html.ts:746](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L746)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [html.ts:805](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L805)

Activates the element's event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [html.ts:825](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L825)

Calls this to remove the element.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `string` \| `null`

Defined in: [html.ts:801](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L801)

#### Returns

`string` \| `null`

---

### isActive()

> **isActive**(): `boolean`

Defined in: [html.ts:116](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [html.ts:150](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isCleared`](HtmlElement.md#iscleared)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [html.ts:815](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L815)

Deactivate the element's event handlers.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [html.ts:94](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L94)

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

Defined in: [html.ts:795](https://github.com/noobiept/game_engine/blob/43702b390861b14fb9476d9f8eb9c3355d1b2a7b/source/html.ts#L795)

#### Parameters

##### value

`string`

#### Returns

`void`
