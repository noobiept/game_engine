[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Value](game.html.value.md)

# Class: Value

Display a value.

## Hierarchy

* [HtmlElement](game.html.htmlelement.md)

  ↳ **Value**

  ↳ [Button](game.html.button.md)

## Index

### Constructors

* [constructor](game.html.value.md#constructor)

### Properties

* [_is_active](game.html.value.md#protected-_is_active)
* [_pre_text](game.html.value.md#protected-_pre_text)
* [container](game.html.value.md#container)
* [element](game.html.value.md#element)
* [value](game.html.value.md#protected-value)

### Methods

* [addEvents](game.html.value.md#addevents)
* [clear](game.html.value.md#clear)
* [getValue](game.html.value.md#getvalue)
* [isActive](game.html.value.md#isactive)
* [removeEvents](game.html.value.md#removeevents)
* [setActive](game.html.value.md#setactive)
* [setValue](game.html.value.md#setvalue)

## Constructors

###  constructor

\+ **new Value**(`args`: [ValueArgs](../interfaces/game.html.valueargs.md)): *[Value](game.html.value.md)*

*Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)*

*Defined in [html.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L298)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ValueArgs](../interfaces/game.html.valueargs.md) |

**Returns:** *[Value](game.html.value.md)*

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

###  container

• **container**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

___

###  element

• **element**: *HTMLElement*

*Defined in [html.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L298)*

___

### `Protected` value

• **value**: *any*

*Defined in [html.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L297)*

## Methods

###  addEvents

▸ **addEvents**(): *void*

*Inherited from [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)*

*Defined in [html.ts:136](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L136)*

Activates the element's event handlers.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)*

*Defined in [html.ts:342](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L342)*

Clear the object (don't use it after this).

**Returns:** *void*

___

###  getValue

▸ **getValue**(): *any*

*Defined in [html.ts:333](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L333)*

**Returns:** *any*

The current value set.

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

*Inherited from [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)*

*Defined in [html.ts:145](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L145)*

Deactivate the element's event handlers.

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

___

###  setValue

▸ **setValue**(`value`: any): *void*

*Defined in [html.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L318)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | New value to be displayed.  |

**Returns:** *void*
