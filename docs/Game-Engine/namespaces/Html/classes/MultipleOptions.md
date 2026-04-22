[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / MultipleOptions

# Class: MultipleOptions

Defined in: [source/html.ts:454](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L454)

Multiple options button.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Constructors

### Constructor

> **new MultipleOptions**(`args`): `MultipleOptions`

Defined in: [source/html.ts:459](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L459)

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

### click_ref

> `protected` **click_ref**: () => `any`

Defined in: [source/html.ts:456](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L456)

#### Returns

`any`

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### elements

> `protected` **elements**: `HTMLElement`[]

Defined in: [source/html.ts:455](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L455)

---

### selected

> `protected` **selected**: `HTMLElement`

Defined in: [source/html.ts:457](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L457)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:530](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L530)

add the click event handler on the options.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:548](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L548)

Clear the object.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `string`

Defined in: [source/html.ts:523](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L523)

Get the string value of the currently selected option.

#### Returns

`string`

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

Defined in: [source/html.ts:539](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L539)

Remove the click event handlers from the options elements.

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

---

### select()

> **select**(`position`): `void`

Defined in: [source/html.ts:505](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L505)

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
