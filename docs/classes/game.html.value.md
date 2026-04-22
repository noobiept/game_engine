[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Value](game.html.value.md)

# Class: Value

Display a value.

## Hierarchy

- [HtmlElement](game.html.htmlelement.md)

    ↳ **Value**

    ↳ [Button](game.html.button.md)

## Index

### Constructors

- [constructor](game.html.value.md#constructor)

### Properties

- [\_is_active](game.html.value.md#protected-_is_active)
- [\_pre_text](game.html.value.md#protected-_pre_text)
- [container](game.html.value.md#container)
- [element](game.html.value.md#element)
- [value](game.html.value.md#protected-value)

### Methods

- [addEvents](game.html.value.md#addevents)
- [clear](game.html.value.md#clear)
- [getValue](game.html.value.md#getvalue)
- [isActive](game.html.value.md#isactive)
- [removeEvents](game.html.value.md#removeevents)
- [setActive](game.html.value.md#setactive)
- [setValue](game.html.value.md#setvalue)

## Constructors

### constructor

\+ **new Value**(`args`: [ValueArgs](../interfaces/game.html.valueargs.md)): _[Value](game.html.value.md)_

_Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)_

_Defined in [html.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L298)_

**Parameters:**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| `args` | [ValueArgs](../interfaces/game.html.valueargs.md) |

**Returns:** _[Value](game.html.value.md)_

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

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

---

### element

• **element**: _HTMLElement_

_Defined in [html.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L298)_

---

### `Protected` value

• **value**: _any_

_Defined in [html.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L297)_

## Methods

### addEvents

▸ **addEvents**(): _void_

_Inherited from [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:136](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L136)_

Activates the element's event handlers.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)_

_Defined in [html.ts:342](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L342)_

Clear the object (don't use it after this).

**Returns:** _void_

---

### getValue

▸ **getValue**(): _any_

_Defined in [html.ts:333](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L333)_

**Returns:** _any_

The current value set.

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

_Inherited from [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)_

_Defined in [html.ts:145](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L145)_

Deactivate the element's event handlers.

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

▸ **setValue**(`value`: any): _void_

_Defined in [html.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L318)_

**Parameters:**

| Name    | Type | Description                |
| ------- | ---- | -------------------------- |
| `value` | any  | New value to be displayed. |

**Returns:** _void_
