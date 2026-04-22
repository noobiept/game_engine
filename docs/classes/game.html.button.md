[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Button](game.html.button.md)

# Class: Button

An html button.

## Hierarchy

↳ [Value](game.html.value.md)

↳ **Button**

↳ [Boolean](game.html.boolean.md)

↳ [TwoState](game.html.twostate.md)

## Index

### Constructors

- [constructor](game.html.button.md#constructor)

### Properties

- [\_is_active](game.html.button.md#protected-_is_active)
- [\_pre_text](game.html.button.md#protected-_pre_text)
- [click_ref](game.html.button.md#protected-click_ref)
- [container](game.html.button.md#container)
- [element](game.html.button.md#element)
- [value](game.html.button.md#protected-value)

### Methods

- [addEvents](game.html.button.md#addevents)
- [clear](game.html.button.md#clear)
- [getValue](game.html.button.md#getvalue)
- [isActive](game.html.button.md#isactive)
- [removeEvents](game.html.button.md#removeevents)
- [setActive](game.html.button.md#setactive)
- [setValue](game.html.button.md#setvalue)

## Constructors

### constructor

\+ **new Button**(`args`: [ButtonArgs](../interfaces/game.html.buttonargs.md)): _[Button](game.html.button.md)_

_Overrides [Value](game.html.value.md).[constructor](game.html.value.md#constructor)_

_Defined in [html.ts:365](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L365)_

**Parameters:**

| Name   | Type                                                |
| ------ | --------------------------------------------------- |
| `args` | [ButtonArgs](../interfaces/game.html.buttonargs.md) |

**Returns:** _[Button](game.html.button.md)_

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

### `Protected` click_ref

• **click_ref**: _function_

_Defined in [html.ts:365](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L365)_

#### Type declaration:

▸ (`event`: MouseEvent): _any_

**Parameters:**

| Name    | Type       |
| ------- | ---------- |
| `event` | MouseEvent |

---

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

---

### element

• **element**: _HTMLElement_

_Inherited from [Value](game.html.value.md).[element](game.html.value.md#element)_

_Defined in [html.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L298)_

---

### `Protected` value

• **value**: _any_

_Inherited from [Value](game.html.value.md).[value](game.html.value.md#protected-value)_

_Defined in [html.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L297)_

## Methods

### addEvents

▸ **addEvents**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:396](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L396)_

Add the click event handler.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Overrides [Value](game.html.value.md).[clear](game.html.value.md#clear)_

_Defined in [html.ts:414](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L414)_

Clear the object (don't use it after this).

**Returns:** _void_

---

### getValue

▸ **getValue**(): _any_

_Inherited from [Value](game.html.value.md).[getValue](game.html.value.md#getvalue)_

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

_Overrides [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)_

_Defined in [html.ts:405](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L405)_

Remove the click event handler.

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

_Inherited from [Value](game.html.value.md).[setValue](game.html.value.md#setvalue)_

_Defined in [html.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L318)_

**Parameters:**

| Name    | Type | Description                |
| ------- | ---- | -------------------------- |
| `value` | any  | New value to be displayed. |

**Returns:** _void_
