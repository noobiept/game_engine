[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Range](game.html.range.md)

# Class: Range

Number range control.

## Hierarchy

* [HtmlElement](game.html.htmlelement.md)

  ↳ **Range**

## Index

### Constructors

* [constructor](game.html.range.md#constructor)

### Properties

* [_is_active](game.html.range.md#protected-_is_active)
* [_pre_text](game.html.range.md#protected-_pre_text)
* [change_ref](game.html.range.md#protected-change_ref)
* [container](game.html.range.md#container)
* [current_value](game.html.range.md#protected-current_value)
* [input](game.html.range.md#protected-input)
* [input_ref](game.html.range.md#protected-input_ref)
* [number_of_decimals](game.html.range.md#number_of_decimals)
* [value](game.html.range.md#protected-value)

### Methods

* [addEvents](game.html.range.md#addevents)
* [clear](game.html.range.md#clear)
* [getValue](game.html.range.md#getvalue)
* [isActive](game.html.range.md#isactive)
* [removeEvents](game.html.range.md#removeevents)
* [setActive](game.html.range.md#setactive)
* [setValue](game.html.range.md#setvalue)

## Constructors

###  constructor

\+ **new Range**(`args`: [RangeArgs](../interfaces/game.html.rangeargs.md)): *[Range](game.html.range.md)*

*Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)*

*Defined in [html.ts:709](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L709)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RangeArgs](../interfaces/game.html.rangeargs.md) |

**Returns:** *[Range](game.html.range.md)*

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

### `Protected` change_ref

• **change_ref**: *function*

*Defined in [html.ts:707](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L707)*

#### Type declaration:

▸ (`event`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

___

###  container

• **container**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

___

### `Protected` current_value

• **current_value**: *number*

*Defined in [html.ts:706](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L706)*

___

### `Protected` input

• **input**: *HTMLInputElement*

*Defined in [html.ts:705](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L705)*

___

### `Protected` input_ref

• **input_ref**: *function*

*Defined in [html.ts:708](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L708)*

#### Type declaration:

▸ (`event`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

___

###  number_of_decimals

• **number_of_decimals**: *number*

*Defined in [html.ts:709](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L709)*

___

### `Protected` value

• **value**: *HTMLElement*

*Defined in [html.ts:704](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L704)*

## Methods

###  addEvents

▸ **addEvents**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)*

*Defined in [html.ts:803](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L803)*

Add the relevant event handlers.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)*

*Defined in [html.ts:823](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L823)*

Clear the object.

**Returns:** *void*

___

###  getValue

▸ **getValue**(): *number*

*Defined in [html.ts:794](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L794)*

**Returns:** *number*

Current value that is set.

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

*Defined in [html.ts:813](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L813)*

Remove the event handlers.

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

▸ **setValue**(`value`: number): *void*

*Defined in [html.ts:777](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L777)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | New value to be set.  |

**Returns:** *void*
