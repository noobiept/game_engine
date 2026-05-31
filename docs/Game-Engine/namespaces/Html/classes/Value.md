[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Value

# Class: Value

Defined in: [source/html.ts:258](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L258)

Display a value.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Extended by

- [`Button`](Button.md)

## Constructors

### Constructor

> **new Value**(`args`): `Value`

Defined in: [source/html.ts:262](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L262)

#### Parameters

##### args

[`ValueArgs`](../interfaces/ValueArgs.md)

#### Returns

`Value`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`constructor`](HtmlElement.md#constructor)

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L39)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L40)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

---

### element

> **element**: `HTMLElement` \| `null`

Defined in: [source/html.ts:260](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L260)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:259](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L259)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:122](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L122)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:298](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L298)

Clear the object (don't use it after this).

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### getValue()

> **getValue**(): `any`

Defined in: [source/html.ts:291](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L291)

#### Returns

`any`

The current value set.

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:129](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L129)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:89](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L89)

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

Defined in: [source/html.ts:277](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L277)

#### Parameters

##### value

`any`

New value to be displayed.

#### Returns

`void`
