[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / Boolean

# Class: Boolean

Defined in: [source/html.ts:377](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L377)

A boolean html button (possible values are 'On' or 'Off').

## Extends

- [`Button`](Button.md)

## Constructors

### Constructor

> **new Boolean**(`args`): `Boolean`

Defined in: [source/html.ts:378](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L378)

#### Parameters

##### args

[`BooleanArgs`](../interfaces/BooleanArgs.md)

#### Returns

`Boolean`

#### Overrides

[`Button`](Button.md).[`constructor`](Button.md#constructor)

## Properties

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L39)

#### Inherited from

[`Button`](Button.md).[`_is_active`](Button.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L40)

#### Inherited from

[`Button`](Button.md).[`_pre_text`](Button.md#_pre_text)

---

### click_ref

> `protected` **click_ref**: ((`event`) => `any`) \| `null`

Defined in: [source/html.ts:319](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L319)

#### Inherited from

[`Button`](Button.md).[`click_ref`](Button.md#click_ref)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L38)

#### Inherited from

[`Button`](Button.md).[`container`](Button.md#container)

---

### element

> **element**: `HTMLElement` \| `null`

Defined in: [source/html.ts:260](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L260)

#### Inherited from

[`Button`](Button.md).[`element`](Button.md#element)

---

### value

> `protected` **value**: `any`

Defined in: [source/html.ts:259](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L259)

#### Inherited from

[`Button`](Button.md).[`value`](Button.md#value)

## Methods

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:344](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L344)

Add the click event handler.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`addEvents`](Button.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:362](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L362)

Clear the object (don't use it after this).

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`clear`](Button.md#clear)

---

### getValue()

> **getValue**(): `any`

Defined in: [source/html.ts:421](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L421)

#### Returns

`any`

The current value that is set.

#### Overrides

[`Button`](Button.md).[`getValue`](Button.md#getvalue)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`Button`](Button.md).[`isActive`](Button.md#isactive)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:353](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L353)

Remove the click event handler.

#### Returns

`void`

#### Inherited from

[`Button`](Button.md).[`removeEvents`](Button.md#removeevents)

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

[`Button`](Button.md).[`setActive`](Button.md#setactive)

---

### setValue()

> **setValue**(`value`): `void`

Defined in: [source/html.ts:400](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L400)

#### Parameters

##### value

`boolean`

New value of the button. When the value is `true`, the display text is 'On`, and when the value is `false`, the display text will be `Off`.

#### Returns

`void`

#### Overrides

[`Button`](Button.md).[`setValue`](Button.md#setvalue)
