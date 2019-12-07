[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [HtmlElement](game.html.htmlelement.md)

# Class: HtmlElement

Generic html element, serves as base for the rest of the classes.

## Hierarchy

* **HtmlElement**

  ↳ [HtmlContainer](game.html.htmlcontainer.md)

  ↳ [Value](game.html.value.md)

  ↳ [MultipleOptions](game.html.multipleoptions.md)

  ↳ [Range](game.html.range.md)

  ↳ [Text](game.html.text.md)

## Index

### Constructors

* [constructor](game.html.htmlelement.md#constructor)

### Properties

* [_is_active](game.html.htmlelement.md#protected-_is_active)
* [_pre_text](game.html.htmlelement.md#protected-_pre_text)
* [container](game.html.htmlelement.md#container)

### Methods

* [addEvents](game.html.htmlelement.md#addevents)
* [clear](game.html.htmlelement.md#clear)
* [isActive](game.html.htmlelement.md#isactive)
* [removeEvents](game.html.htmlelement.md#removeevents)
* [setActive](game.html.htmlelement.md#setactive)

## Constructors

###  constructor

\+ **new HtmlElement**(`args?`: [HtmlElementArgs](../interfaces/game.html.htmlelementargs.md)): *[HtmlElement](game.html.htmlelement.md)*

*Defined in [html.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | [HtmlElementArgs](../interfaces/game.html.htmlelementargs.md) |

**Returns:** *[HtmlElement](game.html.htmlelement.md)*

## Properties

### `Protected` _is_active

• **_is_active**: *boolean*

*Defined in [html.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L38)*

___

### `Protected` _pre_text

• **_pre_text**: *HTMLElement*

*Defined in [html.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L39)*

___

###  container

• **container**: *HTMLElement*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

## Methods

###  addEvents

▸ **addEvents**(): *void*

*Defined in [html.ts:136](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L136)*

Activates the element's event handlers.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [html.ts:154](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L154)*

Calls this to remove the element.

**Returns:** *void*

___

###  isActive

▸ **isActive**(): *boolean*

*Defined in [html.ts:127](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L127)*

Check if the element is active or not currently.

**Returns:** *boolean*

___

###  removeEvents

▸ **removeEvents**(): *void*

*Defined in [html.ts:145](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L145)*

Deactivate the element's event handlers.

**Returns:** *void*

___

###  setActive

▸ **setActive**(`yesNo`: boolean): *void*

*Defined in [html.ts:100](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L100)*

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`yesNo` | boolean | Whether to set it active or not.  |

**Returns:** *void*
