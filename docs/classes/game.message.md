[Game Engine](../README.md) › [Game](../modules/game.md) › [Message](game.message.md)

# Class: Message

Basic Usage:

    var container = Game.getCanvasContainer();

    var button = new Game.Html.Button({
            value: 'Ok',
            callback: function( button )
                {
                message.clear();
                }
        });
    var message = new Game.Message({
            body: 'Hi there!',
            container: container,
            background: true,
            buttons: button
        });

Examples -- `message`, `minesweeper`

## Hierarchy

  ↳ [HtmlContainer](game.html.htmlcontainer.md)

  ↳ **Message**

## Index

### Constructors

* [constructor](game.message.md#constructor)

### Properties

* [_children](game.message.md#protected-_children)
* [_is_active](game.message.md#protected-_is_active)
* [_pre_text](game.message.md#protected-_pre_text)
* [background](game.message.md#protected-background)
* [body](game.message.md#protected-body)
* [buttons](game.message.md#protected-buttons)
* [container](game.message.md#container)
* [timeout](game.message.md#protected-timeout)

### Methods

* [addChild](game.message.md#addchild)
* [addEvents](game.message.md#addevents)
* [clear](game.message.md#clear)
* [isActive](game.message.md#isactive)
* [removeAllChildren](game.message.md#removeallchildren)
* [removeChild](game.message.md#removechild)
* [removeEvents](game.message.md#removeevents)
* [setActive](game.message.md#setactive)
* [setBody](game.message.md#setbody)

## Constructors

###  constructor

\+ **new Message**(`args`: [MessageArgs](../interfaces/game.messageargs.md)): *[Message](game.message.md)*

*Overrides [HtmlContainer](game.html.htmlcontainer.md).[constructor](game.html.htmlcontainer.md#constructor)*

*Defined in [message.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MessageArgs](../interfaces/game.messageargs.md) |

**Returns:** *[Message](game.message.md)*

## Properties

### `Protected` _children

• **_children**: *[HtmlElement](game.html.htmlelement.md)[]*

*Inherited from [HtmlContainer](game.html.htmlcontainer.md).[_children](game.html.htmlcontainer.md#protected-_children)*

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

### `Protected` background

• **background**: *HTMLElement*

*Defined in [message.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L41)*

___

### `Protected` body

• **body**: *[HtmlContainer](game.html.htmlcontainer.md)*

*Defined in [message.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L39)*

___

### `Protected` buttons

• **buttons**: *[HtmlContainer](game.html.htmlcontainer.md)*

*Defined in [message.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L40)*

___

###  container

• **container**: *HTMLElement*

*Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)*

*Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)*

___

### `Protected` timeout

• **timeout**: *[Timeout](game.utilities.timeout.md)*

*Defined in [message.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L42)*

## Methods

###  addChild

▸ **addChild**(`args`: any): *void*

*Inherited from [HtmlContainer](game.html.htmlcontainer.md).[addChild](game.html.htmlcontainer.md#addchild)*

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

*Overrides [HtmlContainer](game.html.htmlcontainer.md).[clear](game.html.htmlcontainer.md#clear)*

*Defined in [message.ts:120](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L120)*

Remove the message.

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

*Inherited from [HtmlContainer](game.html.htmlcontainer.md).[removeAllChildren](game.html.htmlcontainer.md#removeallchildren)*

*Defined in [html.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L259)*

Remove all children of this container.

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`args`: any): *void*

*Inherited from [HtmlContainer](game.html.htmlcontainer.md).[removeChild](game.html.htmlcontainer.md#removechild)*

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

___

###  setBody

▸ **setBody**(`body`: any): *void*

*Defined in [message.ts:140](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L140)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | any | Set the body of the message. Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before.  |

**Returns:** *void*
