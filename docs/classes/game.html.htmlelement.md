[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [HtmlElement](game.html.htmlelement.md)

# Class: HtmlElement

Generic html element, serves as base for the rest of the classes.

## Hierarchy

- **HtmlElement**

    ↳ [HtmlContainer](game.html.htmlcontainer.md)

    ↳ [Value](game.html.value.md)

    ↳ [MultipleOptions](game.html.multipleoptions.md)

    ↳ [Range](game.html.range.md)

    ↳ [Text](game.html.text.md)

## Index

### Constructors

- [constructor](game.html.htmlelement.md#constructor)

### Properties

- [\_is_active](game.html.htmlelement.md#protected-_is_active)
- [\_pre_text](game.html.htmlelement.md#protected-_pre_text)
- [container](game.html.htmlelement.md#container)

### Methods

- [addEvents](game.html.htmlelement.md#addevents)
- [clear](game.html.htmlelement.md#clear)
- [isActive](game.html.htmlelement.md#isactive)
- [removeEvents](game.html.htmlelement.md#removeevents)
- [setActive](game.html.htmlelement.md#setactive)

## Constructors

### constructor

\+ **new HtmlElement**(`args?`: [HtmlElementArgs](../interfaces/game.html.htmlelementargs.md)): _[HtmlElement](game.html.htmlelement.md)_

_Defined in [html.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L39)_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `args?` | [HtmlElementArgs](../interfaces/game.html.htmlelementargs.md) |

**Returns:** _[HtmlElement](game.html.htmlelement.md)_

## Properties

### `Protected` \_is_active

• **\_is_active**: _boolean_

_Defined in [html.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L38)_

---

### `Protected` \_pre_text

• **\_pre_text**: _HTMLElement_

_Defined in [html.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L39)_

---

### container

• **container**: _HTMLElement_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

## Methods

### addEvents

▸ **addEvents**(): _void_

_Defined in [html.ts:136](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L136)_

Activates the element's event handlers.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Defined in [html.ts:154](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L154)_

Calls this to remove the element.

**Returns:** _void_

---

### isActive

▸ **isActive**(): _boolean_

_Defined in [html.ts:127](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L127)_

Check if the element is active or not currently.

**Returns:** _boolean_

---

### removeEvents

▸ **removeEvents**(): _void_

_Defined in [html.ts:145](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L145)_

Deactivate the element's event handlers.

**Returns:** _void_

---

### setActive

▸ **setActive**(`yesNo`: boolean): _void_

_Defined in [html.ts:100](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L100)_

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

**Parameters:**

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| `yesNo` | boolean | Whether to set it active or not. |

**Returns:** _void_
