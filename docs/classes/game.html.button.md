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

* [constructor](game.html.button.md#constructor)

### Properties

* [_is_active](game.html.button.md#protected-_is_active)
* [_pre_text](game.html.button.md#protected-_pre_text)
* [click_ref](game.html.button.md#protected-click_ref)
* [container](game.html.button.md#container)
* [element](game.html.button.md#element)
* [value](game.html.button.md#protected-value)

### Methods

* [addEvents](game.html.button.md#addevents)
* [clear](game.html.button.md#clear)
* [getValue](game.html.button.md#getvalue)
* [isActive](game.html.button.md#isactive)
* [removeEvents](game.html.button.md#removeevents)
* [setActive](game.html.button.md#setactive)
* [setValue](game.html.button.md#setvalue)

## Constructors

###  constructor

\+ **new Button**(`args`: [ButtonArgs](../interfaces/game.html.buttonargs.md)): *[Button](game.html.button.md)*

*Overrides [Value](game.html.value.md).[constructor](game.html.value.md#constructor)*

*Defined in [html.ts:365](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L365)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ButtonArgs](../interfaces/game.html.buttonargs.md) |

**Returns:** *[Button](game.html.button.md)*

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

*Defined in [html.ts:365](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L365)*

#### Type declaration:

▸ (`event`: MouseEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent |

___

###  container

• **container**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

___

###  element

• **element**: *HTMLElement*

*Inherited from [Value](game.html.value.md).[element](game.html.value.md#element)*

*Defined in [html.ts:298](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L298)*

___

### `Protected` value

• **value**: *any*

*Inherited from [Value](game.html.value.md).[value](game.html.value.md#protected-value)*

*Defined in [html.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L297)*

## Methods

###  addEvents

▸ **addEvents**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)*

*Defined in [html.ts:396](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L396)*

Add the click event handler.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Overrides [Value](game.html.value.md).[clear](game.html.value.md#clear)*

*Defined in [html.ts:414](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L414)*

Clear the object (don't use it after this).

**Returns:** *void*

___

###  getValue

▸ **getValue**(): *any*

*Inherited from [Value](game.html.value.md).[getValue](game.html.value.md#getvalue)*

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

*Overrides [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)*

*Defined in [html.ts:405](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L405)*

Remove the click event handler.

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

*Inherited from [Value](game.html.value.md).[setValue](game.html.value.md#setvalue)*

*Defined in [html.ts:318](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L318)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | New value to be displayed.  |

**Returns:** *void*
