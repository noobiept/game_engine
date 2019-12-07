[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [HtmlContainer](game.html.htmlcontainer.md)

# Class: HtmlContainer

Container of the other html elements.

## Hierarchy

* [HtmlElement](game.html.htmlelement.md)

  ↳ **HtmlContainer**

  ↳ [Message](game.message.md)

## Index

### Constructors

* [constructor](game.html.htmlcontainer.md#constructor)

### Properties

* [_children](game.html.htmlcontainer.md#protected-_children)
* [_is_active](game.html.htmlcontainer.md#protected-_is_active)
* [_pre_text](game.html.htmlcontainer.md#protected-_pre_text)
* [container](game.html.htmlcontainer.md#container)

### Methods

* [addChild](game.html.htmlcontainer.md#addchild)
* [addEvents](game.html.htmlcontainer.md#addevents)
* [clear](game.html.htmlcontainer.md#clear)
* [isActive](game.html.htmlcontainer.md#isactive)
* [removeAllChildren](game.html.htmlcontainer.md#removeallchildren)
* [removeChild](game.html.htmlcontainer.md#removechild)
* [removeEvents](game.html.htmlcontainer.md#removeevents)
* [setActive](game.html.htmlcontainer.md#setactive)

## Constructors

###  constructor

\+ **new HtmlContainer**(`args?`: [HtmlContainerArgs](../interfaces/game.html.htmlcontainerargs.md)): *[HtmlContainer](game.html.htmlcontainer.md)*

*Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)*

*Defined in [html.ts:178](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | [HtmlContainerArgs](../interfaces/game.html.htmlcontainerargs.md) |

**Returns:** *[HtmlContainer](game.html.htmlcontainer.md)*

## Properties

### `Protected` _children

• **_children**: *[HtmlElement](game.html.htmlelement.md)[]*

*Defined in [html.ts:178](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L178)*

___

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

## Methods

###  addChild

▸ **addChild**(`args`: any): *void*

*Defined in [html.ts:203](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L203)*

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | `HtmlElement` or `...HtmlElement` or `HtmlElement[]`.  |

**Returns:** *void*

___

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

*Defined in [html.ts:279](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L279)*

Removes the container, plus all of its children (can't use the container after this).

**Returns:** *void*

___

###  isActive

▸ **isActive**(): *boolean*

*Inherited from [HtmlElement](game.html.htmlelement.md).[isActive](game.html.htmlelement.md#isactive)*

*Defined in [html.ts:127](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L127)*

Check if the element is active or not currently.

**Returns:** *boolean*

___

###  removeAllChildren

▸ **removeAllChildren**(): *void*

*Defined in [html.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L259)*

Remove all children of this container.

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`args`: any): *void*

*Defined in [html.ts:230](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L230)*

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | `HtmlElement` or `...HtmlElement` or `HtmlElement[]`.  |

**Returns:** *void*

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
