[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Text](game.html.text.md)

# Class: Text

Text input control.

## Hierarchy

- [HtmlElement](game.html.htmlelement.md)

    ↳ **Text**

## Index

### Constructors

- [constructor](game.html.text.md#constructor)

### Properties

- [\_is_active](game.html.text.md#protected-_is_active)
- [\_pre_text](game.html.text.md#protected-_pre_text)
- [button](game.html.text.md#protected-button)
- [container](game.html.text.md#container)
- [input](game.html.text.md#protected-input)
- [key_ref](game.html.text.md#protected-key_ref)

### Methods

- [addEvents](game.html.text.md#addevents)
- [clear](game.html.text.md#clear)
- [getValue](game.html.text.md#getvalue)
- [isActive](game.html.text.md#isactive)
- [removeEvents](game.html.text.md#removeevents)
- [setActive](game.html.text.md#setactive)
- [setValue](game.html.text.md#setvalue)

## Constructors

### constructor

\+ **new Text**(`args?`: [TextArgs](../interfaces/game.html.textargs.md)): _[Text](game.html.text.md)_

_Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)_

_Defined in [html.ts:853](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L853)_

**Parameters:**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `args?` | [TextArgs](../interfaces/game.html.textargs.md) |

**Returns:** _[Text](game.html.text.md)_

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

### `Protected` button

• **button**: _[Button](game.html.button.md)_

_Defined in [html.ts:852](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L852)_

---

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

---

### `Protected` input

• **input**: _HTMLInputElement_

_Defined in [html.ts:851](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L851)_

---

### `Protected` key_ref

• **key_ref**: _function_

_Defined in [html.ts:853](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L853)_

#### Type declaration:

▸ (`event`: any): _any_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `event` | any  |

## Methods

### addEvents

▸ **addEvents**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:929](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L929)_

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)_

_Defined in [html.ts:951](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L951)_

**Returns:** _void_

---

### getValue

▸ **getValue**(): _string_

_Defined in [html.ts:923](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L923)_

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

_Overrides [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)_

_Defined in [html.ts:940](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L940)_

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

▸ **setValue**(`value`: string): _void_

_Defined in [html.ts:917](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L917)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `value` | string |

**Returns:** _void_
