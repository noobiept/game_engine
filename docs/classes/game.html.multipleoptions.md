[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [MultipleOptions](game.html.multipleoptions.md)

# Class: MultipleOptions

Multiple options button.

## Hierarchy

* [HtmlElement](game.html.htmlelement.md)

  ↳ **MultipleOptions**

## Index

### Constructors

* [constructor](game.html.multipleoptions.md#constructor)

### Properties

* [_is_active](game.html.multipleoptions.md#protected-_is_active)
* [_pre_text](game.html.multipleoptions.md#protected-_pre_text)
* [click_ref](game.html.multipleoptions.md#protected-click_ref)
* [container](game.html.multipleoptions.md#container)
* [elements](game.html.multipleoptions.md#protected-elements)
* [selected](game.html.multipleoptions.md#protected-selected)

### Methods

* [addEvents](game.html.multipleoptions.md#addevents)
* [clear](game.html.multipleoptions.md#clear)
* [getValue](game.html.multipleoptions.md#getvalue)
* [isActive](game.html.multipleoptions.md#isactive)
* [removeEvents](game.html.multipleoptions.md#removeevents)
* [select](game.html.multipleoptions.md#select)
* [setActive](game.html.multipleoptions.md#setactive)

## Constructors

###  constructor

\+ **new MultipleOptions**(`args`: [MultipleOptionsArgs](../interfaces/game.html.multipleoptionsargs.md)): *[MultipleOptions](game.html.multipleoptions.md)*

*Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)*

*Defined in [html.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L561)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MultipleOptionsArgs](../interfaces/game.html.multipleoptionsargs.md) |

**Returns:** *[MultipleOptions](game.html.multipleoptions.md)*

## Properties

### `Protected` _is_active

• **_is_active**: *boolean*

*Inherited from [HtmlElement](game.html.htmlelement.md).[_is_active](game.html.htmlelement.md#protected-_is_active)*

*Defined in [html.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L38)*

___

### `Protected` _pre_text

• **_pre_text**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[_pre_text](game.html.htmlelement.md#protected-_pre_text)*

*Defined in [html.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L39)*

___

### `Protected` click_ref

• **click_ref**: *function*

*Defined in [html.ts:560](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L560)*

#### Type declaration:

▸ (): *any*

___

###  container

• **container**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

___

### `Protected` elements

• **elements**: *HTMLElement[]*

*Defined in [html.ts:559](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L559)*

___

### `Protected` selected

• **selected**: *HTMLElement*

*Defined in [html.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L561)*

## Methods

###  addEvents

▸ **addEvents**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)*

*Defined in [html.ts:647](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L647)*

add the click event handler on the options.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)*

*Defined in [html.ts:671](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L671)*

Clear the object.

**Returns:** *void*

___

###  getValue

▸ **getValue**(): *string*

*Defined in [html.ts:638](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L638)*

Get the string value of the currently selected option.

**Returns:** *string*

___

###  isActive

▸ **isActive**(): *boolean*

*Inherited from [HtmlElement](game.html.htmlelement.md).[isActive](game.html.htmlelement.md#isactive)*

*Defined in [html.ts:127](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L127)*

Check if the element is active or not currently.

**Returns:** *boolean*

___

###  removeEvents

▸ **removeEvents**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)*

*Defined in [html.ts:659](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L659)*

Remove the click event handlers from the options elements.

**Returns:** *void*

___

###  select

▸ **select**(`position`: number): *void*

*Defined in [html.ts:615](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L615)*

Select the active option by position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`position` | number | The position to select.  |

**Returns:** *void*

___

###  setActive

▸ **setActive**(`yesNo`: boolean): *void*

*Inherited from [HtmlElement](game.html.htmlelement.md).[setActive](game.html.htmlelement.md#setactive)*

*Defined in [html.ts:100](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L100)*

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`yesNo` | boolean | Whether to set it active or not.  |

**Returns:** *void*
