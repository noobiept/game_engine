[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / MultipleOptions

# Class: MultipleOptions

Defined in: [source/html.ts:485](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L485)

Multiple options button.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Constructors

### Constructor

> **new MultipleOptions**(`args`): `MultipleOptions`

Defined in: [source/html.ts:490](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L490)

#### Parameters

##### args

[`MultipleOptionsArgs`](../interfaces/MultipleOptionsArgs.md)

#### Returns

`MultipleOptions`

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

### click_ref

> `protected` **click_ref**: ((`event`) => `any`) \| `null`

Defined in: [source/html.ts:487](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L487)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### elements

> `protected` **elements**: `HTMLElement`[]

Defined in: [source/html.ts:486](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L486)

---

### selected

> `protected` **selected**: `HTMLElement` \| `null`

Defined in: [source/html.ts:488](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L488)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:560](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L560)

add the click event handler on the options.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:586](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L586)

Clear the object.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `string` \| `undefined`

Defined in: [source/html.ts:553](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L553)

Get the string value of the currently selected option.

#### Returns

`string` \| `undefined`

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

Defined in: [source/html.ts:573](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L573)

Remove the click event handlers from the options elements.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

---

### select()

> **select**(`position`): `void`

Defined in: [source/html.ts:535](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/html.ts#L535)

Select the active option by position.

#### Parameters

##### position

`number`

The position to select.

#### Returns

`void`

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
