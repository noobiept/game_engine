[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [TwoState](game.html.twostate.md)

# Class: TwoState

A button that has 2 states, each state with its own value and callback.

## Hierarchy

↳ [Button](game.html.button.md)

↳ **TwoState**

## Index

### Constructors

- [constructor](game.html.twostate.md#constructor)

### Properties

- [\_is_active](game.html.twostate.md#protected-_is_active)
- [\_pre_text](game.html.twostate.md#protected-_pre_text)
- [click_ref](game.html.twostate.md#protected-click_ref)
- [container](game.html.twostate.md#container)
- [element](game.html.twostate.md#element)
- [isValue1](game.html.twostate.md#protected-isvalue1)
- [value](game.html.twostate.md#protected-value)

### Methods

- [addEvents](game.html.twostate.md#addevents)
- [clear](game.html.twostate.md#clear)
- [getValue](game.html.twostate.md#getvalue)
- [isActive](game.html.twostate.md#isactive)
- [removeEvents](game.html.twostate.md#removeevents)
- [setActive](game.html.twostate.md#setactive)
- [setValue](game.html.twostate.md#setvalue)

## Constructors

### constructor

\+ **new TwoState**(`args`: [TwoStateArgs](../interfaces/game.html.twostateargs.md)): _[TwoState](game.html.twostate.md)_

_Overrides [Button](game.html.button.md).[constructor](game.html.button.md#constructor)_

_Defined in [html.ts:504](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L504)_

**Parameters:**

| Name   | Type                                                    |
| ------ | ------------------------------------------------------- |
| `args` | [TwoStateArgs](../interfaces/game.html.twostateargs.md) |

**Returns:** _[TwoState](game.html.twostate.md)_

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

### `Protected` isValue1

• **isValue1**: _boolean_

_Defined in [html.ts:504](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L504)_

---

### `Protected` value

• **value**: _any_

_Inherited from [Value](game.html.value.md).[value](game.html.value.md#protected-value)_

_Defined in [html.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L297)_

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

▸ **getValue**(): _string_

_Overrides [Value](game.html.value.md).[getValue](game.html.value.md#getvalue)_

_Defined in [html.ts:541](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L541)_

**Returns:** _string_

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

▸ **setValue**(`value`: any): _void_

_Inherited from [Value](game.html.value.md).[setValue](game.html.value.md#setvalue)_

_Defined in [html.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L318)_

**Parameters:**

| Name    | Type | Description                |
| ------- | ---- | -------------------------- |
| `value` | any  | New value to be displayed. |

**Returns:** _void_
