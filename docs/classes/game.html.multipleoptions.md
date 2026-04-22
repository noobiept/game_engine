[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [MultipleOptions](game.html.multipleoptions.md)

# Class: MultipleOptions

Multiple options button.

## Hierarchy

- [HtmlElement](game.html.htmlelement.md)

    ↳ **MultipleOptions**

## Index

### Constructors

- [constructor](game.html.multipleoptions.md#constructor)

### Properties

- [\_is_active](game.html.multipleoptions.md#protected-_is_active)
- [\_pre_text](game.html.multipleoptions.md#protected-_pre_text)
- [click_ref](game.html.multipleoptions.md#protected-click_ref)
- [container](game.html.multipleoptions.md#container)
- [elements](game.html.multipleoptions.md#protected-elements)
- [selected](game.html.multipleoptions.md#protected-selected)

### Methods

- [addEvents](game.html.multipleoptions.md#addevents)
- [clear](game.html.multipleoptions.md#clear)
- [getValue](game.html.multipleoptions.md#getvalue)
- [isActive](game.html.multipleoptions.md#isactive)
- [removeEvents](game.html.multipleoptions.md#removeevents)
- [select](game.html.multipleoptions.md#select)
- [setActive](game.html.multipleoptions.md#setactive)

## Constructors

### constructor

\+ **new MultipleOptions**(`args`: [MultipleOptionsArgs](../interfaces/game.html.multipleoptionsargs.md)): _[MultipleOptions](game.html.multipleoptions.md)_

_Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)_

_Defined in [html.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L561)_

**Parameters:**

| Name   | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| `args` | [MultipleOptionsArgs](../interfaces/game.html.multipleoptionsargs.md) |

**Returns:** _[MultipleOptions](game.html.multipleoptions.md)_

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

_Defined in [html.ts:560](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L560)_

#### Type declaration:

▸ (): _any_

---

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

---

### `Protected` elements

• **elements**: _HTMLElement[]_

_Defined in [html.ts:559](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L559)_

---

### `Protected` selected

• **selected**: _HTMLElement_

_Defined in [html.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L561)_

## Methods

### addEvents

▸ **addEvents**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:647](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L647)_

add the click event handler on the options.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)_

_Defined in [html.ts:671](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L671)_

Clear the object.

**Returns:** _void_

---

### getValue

▸ **getValue**(): _string_

_Defined in [html.ts:638](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L638)_

Get the string value of the currently selected option.

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

_Defined in [html.ts:659](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L659)_

Remove the click event handlers from the options elements.

**Returns:** _void_

---

### select

▸ **select**(`position`: number): _void_

_Defined in [html.ts:615](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L615)_

Select the active option by position.

**Parameters:**

| Name       | Type   | Description             |
| ---------- | ------ | ----------------------- |
| `position` | number | The position to select. |

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
