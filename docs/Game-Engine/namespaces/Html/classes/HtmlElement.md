[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlElement

# Class: HtmlElement

Defined in: [source/html.ts:37](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L37)

Generic html element, serves as base for the rest of the classes.

## Extended by

- [`HtmlContainer`](HtmlContainer.md)
- [`Value`](Value.md)
- [`MultipleOptions`](MultipleOptions.md)
- [`Range`](Range.md)
- [`Text`](Text.md)

## Constructors

### Constructor

> **new HtmlElement**(`args?`): `HtmlElement`

Defined in: [source/html.ts:42](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L42)

#### Parameters

##### args?

[`HtmlElementArgs`](../interfaces/HtmlElementArgs.md)

#### Returns

`HtmlElement`

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L39)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L40)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L38)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:122](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L122)

Activates the element's event handlers.

#### Returns

`void`

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:136](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L136)

Calls this to remove the element.

#### Returns

`void`

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:129](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L129)

Deactivate the element's event handlers.

#### Returns

`void`

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
