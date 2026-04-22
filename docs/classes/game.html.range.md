[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Range](game.html.range.md)

# Class: Range

Number range control.

## Hierarchy

- [HtmlElement](game.html.htmlelement.md)

    ↳ **Range**

## Index

### Constructors

- [constructor](game.html.range.md#constructor)

### Properties

- [\_is_active](game.html.range.md#protected-_is_active)
- [\_pre_text](game.html.range.md#protected-_pre_text)
- [change_ref](game.html.range.md#protected-change_ref)
- [container](game.html.range.md#container)
- [current_value](game.html.range.md#protected-current_value)
- [input](game.html.range.md#protected-input)
- [input_ref](game.html.range.md#protected-input_ref)
- [number_of_decimals](game.html.range.md#number_of_decimals)
- [value](game.html.range.md#protected-value)

### Methods

- [addEvents](game.html.range.md#addevents)
- [clear](game.html.range.md#clear)
- [getValue](game.html.range.md#getvalue)
- [isActive](game.html.range.md#isactive)
- [removeEvents](game.html.range.md#removeevents)
- [setActive](game.html.range.md#setactive)
- [setValue](game.html.range.md#setvalue)

## Constructors

### constructor

\+ **new Range**(`args`: [RangeArgs](../interfaces/game.html.rangeargs.md)): _[Range](game.html.range.md)_

_Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)_

_Defined in [html.ts:709](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L709)_

**Parameters:**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| `args` | [RangeArgs](../interfaces/game.html.rangeargs.md) |

**Returns:** _[Range](game.html.range.md)_

## Properties

### `Protected` \_is_active

• **\_is_active**: _boolean_

_Inherited from [HtmlElement](game.html.htmlelement.md).[\_is_active](game.html.htmlelement.md#protected-_is_active)_

_Defined in [html.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L38)_

---

### `Protected` \_pre_text

• **\_pre_text**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[\_pre_text](game.html.htmlelement.md#protected-_pre_text)_

_Defined in [html.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L39)_

---

### `Protected` change_ref

• **change_ref**: _function_

_Defined in [html.ts:707](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L707)_

#### Type declaration:

▸ (`event`: any): _any_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `event` | any  |

---

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

---

### `Protected` current_value

• **current_value**: _number_

_Defined in [html.ts:706](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L706)_

---

### `Protected` input

• **input**: _HTMLInputElement_

_Defined in [html.ts:705](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L705)_

---

### `Protected` input_ref

• **input_ref**: _function_

_Defined in [html.ts:708](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L708)_

#### Type declaration:

▸ (`event`: any): _any_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `event` | any  |

---

### number_of_decimals

• **number_of_decimals**: _number_

_Defined in [html.ts:709](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L709)_

---

### `Protected` value

• **value**: _HTMLElement_

_Defined in [html.ts:704](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L704)_

## Methods

### addEvents

▸ **addEvents**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:803](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L803)_

Add the relevant event handlers.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)_

_Defined in [html.ts:823](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L823)_

Clear the object.

**Returns:** _void_

---

### getValue

▸ **getValue**(): _number_

_Defined in [html.ts:794](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L794)_

**Returns:** _number_

Current value that is set.

---

### isActive

▸ **isActive**(): _boolean_

_Inherited from [HtmlElement](game.html.htmlelement.md).[isActive](game.html.htmlelement.md#isactive)_

_Defined in [html.ts:127](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L127)_

Check if the element is active or not currently.

**Returns:** _boolean_

---

### removeEvents

▸ **removeEvents**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)_

_Defined in [html.ts:813](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L813)_

Remove the event handlers.

**Returns:** _void_

---

### setActive

▸ **setActive**(`yesNo`: boolean): _void_

_Inherited from [HtmlElement](game.html.htmlelement.md).[setActive](game.html.htmlelement.md#setactive)_

_Defined in [html.ts:100](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L100)_

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

**Parameters:**

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| `yesNo` | boolean | Whether to set it active or not. |

**Returns:** _void_

---

### setValue

▸ **setValue**(`value`: number): _void_

_Defined in [html.ts:777](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L777)_

**Parameters:**

| Name    | Type   | Description          |
| ------- | ------ | -------------------- |
| `value` | number | New value to be set. |

**Returns:** _void_
