[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Boolean](game.html.boolean.md)

# Class: Boolean

A boolean html button (possible values are 'On' or 'Off').

## Hierarchy

↳ [Button](game.html.button.md)

↳ **Boolean**

## Index

### Constructors

- [constructor](game.html.boolean.md#constructor)

### Properties

- [\_is_active](game.html.boolean.md#protected-_is_active)
- [\_pre_text](game.html.boolean.md#protected-_pre_text)
- [click_ref](game.html.boolean.md#protected-click_ref)
- [container](game.html.boolean.md#container)
- [element](game.html.boolean.md#element)
- [value](game.html.boolean.md#protected-value)

### Methods

- [addEvents](game.html.boolean.md#addevents)
- [clear](game.html.boolean.md#clear)
- [getValue](game.html.boolean.md#getvalue)
- [isActive](game.html.boolean.md#isactive)
- [removeEvents](game.html.boolean.md#removeevents)
- [setActive](game.html.boolean.md#setactive)
- [setValue](game.html.boolean.md#setvalue)

## Constructors

### constructor

\+ **new Boolean**(`args`: [BooleanArgs](../interfaces/game.html.booleanargs.md)): _[Boolean](game.html.boolean.md)_

_Overrides [Button](game.html.button.md).[constructor](game.html.button.md#constructor)_

_Defined in [html.ts:435](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L435)_

**Parameters:**

| Name   | Type                                                  |
| ------ | ----------------------------------------------------- |
| `args` | [BooleanArgs](../interfaces/game.html.booleanargs.md) |

**Returns:** _[Boolean](game.html.boolean.md)_

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

_Inherited from [Button](game.html.button.md).[click_ref](game.html.button.md#protected-click_ref)_

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

• **value**: _boolean_

_Overrides [Value](game.html.value.md).[value](game.html.value.md#protected-value)_

_Defined in [html.ts:435](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L435)_

## Methods

### addEvents

▸ **addEvents**(): _void_

_Inherited from [Button](game.html.button.md).[addEvents](game.html.button.md#addevents)_

_Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:396](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L396)_

Add the click event handler.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Inherited from [Button](game.html.button.md).[clear](game.html.button.md#clear)_

_Overrides [Value](game.html.value.md).[clear](game.html.value.md#clear)_

_Defined in [html.ts:414](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L414)_

Clear the object (don't use it after this).

**Returns:** _void_

---

### getValue

▸ **getValue**(): _boolean_

_Overrides [Value](game.html.value.md).[getValue](game.html.value.md#getvalue)_

_Defined in [html.ts:486](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L486)_

**Returns:** _boolean_

The current value that is set.

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

_Inherited from [Button](game.html.button.md).[removeEvents](game.html.button.md#removeevents)_

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

▸ **setValue**(`value`: boolean): _void_

_Overrides [Value](game.html.value.md).[setValue](game.html.value.md#setvalue)_

_Defined in [html.ts:462](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L462)_

**Parameters:**

| Name    | Type    | Description                                                                                                                                 |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `value` | boolean | New value of the button. When the value is `true`, the display text is 'On`, and when the value is `false`, the display text will be `Off`. |

**Returns:** _void_
