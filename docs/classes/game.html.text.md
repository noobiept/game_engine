[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [Text](game.html.text.md)

# Class: Text

Text input control.

## Hierarchy

* [HtmlElement](game.html.htmlelement.md)

  ↳ **Text**

## Index

### Constructors

* [constructor](game.html.text.md#constructor)

### Properties

* [_is_active](game.html.text.md#protected-_is_active)
* [_pre_text](game.html.text.md#protected-_pre_text)
* [button](game.html.text.md#protected-button)
* [container](game.html.text.md#container)
* [input](game.html.text.md#protected-input)
* [key_ref](game.html.text.md#protected-key_ref)

### Methods

* [addEvents](game.html.text.md#addevents)
* [clear](game.html.text.md#clear)
* [getValue](game.html.text.md#getvalue)
* [isActive](game.html.text.md#isactive)
* [removeEvents](game.html.text.md#removeevents)
* [setActive](game.html.text.md#setactive)
* [setValue](game.html.text.md#setvalue)

## Constructors

###  constructor

\+ **new Text**(`args?`: [TextArgs](../interfaces/game.html.textargs.md)): *[Text](game.html.text.md)*

*Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)*

*Defined in [html.ts:853](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L853)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | [TextArgs](../interfaces/game.html.textargs.md) |

**Returns:** *[Text](game.html.text.md)*

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

### `Protected` button

• **button**: *[Button](game.html.button.md)*

*Defined in [html.ts:852](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L852)*

___

###  container

• **container**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

___

### `Protected` input

• **input**: *HTMLInputElement*

*Defined in [html.ts:851](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L851)*

___

### `Protected` key_ref

• **key_ref**: *function*

*Defined in [html.ts:853](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L853)*

#### Type declaration:

▸ (`event`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

## Methods

###  addEvents

▸ **addEvents**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)*

*Defined in [html.ts:929](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L929)*

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)*

*Defined in [html.ts:951](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L951)*

**Returns:** *void*

___

###  getValue

▸ **getValue**(): *string*

*Defined in [html.ts:923](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L923)*

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

*Defined in [html.ts:940](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L940)*

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

▸ **setValue**(`value`: string): *void*

*Defined in [html.ts:917](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L917)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*
