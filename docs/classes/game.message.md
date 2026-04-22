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

- [constructor](game.message.md#constructor)

### Properties

- [\_children](game.message.md#protected-_children)
- [\_is_active](game.message.md#protected-_is_active)
- [\_pre_text](game.message.md#protected-_pre_text)
- [background](game.message.md#protected-background)
- [body](game.message.md#protected-body)
- [buttons](game.message.md#protected-buttons)
- [container](game.message.md#container)
- [timeout](game.message.md#protected-timeout)

### Methods

- [addChild](game.message.md#addchild)
- [addEvents](game.message.md#addevents)
- [clear](game.message.md#clear)
- [isActive](game.message.md#isactive)
- [removeAllChildren](game.message.md#removeallchildren)
- [removeChild](game.message.md#removechild)
- [removeEvents](game.message.md#removeevents)
- [setActive](game.message.md#setactive)
- [setBody](game.message.md#setbody)

## Constructors

### constructor

\+ **new Message**(`args`: [MessageArgs](../interfaces/game.messageargs.md)): _[Message](game.message.md)_

_Overrides [HtmlContainer](game.html.htmlcontainer.md).[constructor](game.html.htmlcontainer.md#constructor)_

_Defined in [message.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L42)_

**Parameters:**

| Name   | Type                                             |
| ------ | ------------------------------------------------ |
| `args` | [MessageArgs](../interfaces/game.messageargs.md) |

**Returns:** _[Message](game.message.md)_

## Properties

### `Protected` \_children

• **\_children**: _[HtmlElement](game.html.htmlelement.md)[]_

_Inherited from [HtmlContainer](game.html.htmlcontainer.md).[\_children](game.html.htmlcontainer.md#protected-_children)_

_Defined in [html.ts:178](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L178)_

---

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

### `Protected` background

• **background**: _HTMLElement_

_Defined in [message.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L41)_

---

### `Protected` body

• **body**: _[HtmlContainer](game.html.htmlcontainer.md)_

_Defined in [message.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L39)_

---

### `Protected` buttons

• **buttons**: _[HtmlContainer](game.html.htmlcontainer.md)_

_Defined in [message.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L40)_

---

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

---

### `Protected` timeout

• **timeout**: _[Timeout](game.utilities.timeout.md)_

_Defined in [message.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L42)_

## Methods

### addChild

▸ **addChild**(`args`: any): _void_

_Inherited from [HtmlContainer](game.html.htmlcontainer.md).[addChild](game.html.htmlcontainer.md#addchild)_

_Defined in [html.ts:203](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L203)_

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

**Parameters:**

| Name   | Type | Description                                           |
| ------ | ---- | ----------------------------------------------------- |
| `args` | any  | `HtmlElement` or `...HtmlElement` or `HtmlElement[]`. |

**Returns:** _void_

---

### addEvents

▸ **addEvents**(): _void_

_Inherited from [HtmlElement](game.html.htmlelement.md).[addEvents](game.html.htmlelement.md#addevents)_

_Defined in [html.ts:136](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L136)_

Activates the element's event handlers.

**Returns:** _void_

---

### clear

▸ **clear**(): _void_

_Overrides [HtmlContainer](game.html.htmlcontainer.md).[clear](game.html.htmlcontainer.md#clear)_

_Defined in [message.ts:120](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L120)_

Remove the message.

**Returns:** _void_

---

### isActive

▸ **isActive**(): _boolean_

_Inherited from [HtmlElement](game.html.htmlelement.md).[isActive](game.html.htmlelement.md#isactive)_

_Defined in [html.ts:127](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L127)_

Check if the element is active or not currently.

**Returns:** _boolean_

---

### removeAllChildren

▸ **removeAllChildren**(): _void_

_Inherited from [HtmlContainer](game.html.htmlcontainer.md).[removeAllChildren](game.html.htmlcontainer.md#removeallchildren)_

_Defined in [html.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L259)_

Remove all children of this container.

**Returns:** _void_

---

### removeChild

▸ **removeChild**(`args`: any): _void_

_Inherited from [HtmlContainer](game.html.htmlcontainer.md).[removeChild](game.html.htmlcontainer.md#removechild)_

_Defined in [html.ts:230](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L230)_

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

**Parameters:**

| Name   | Type | Description                                           |
| ------ | ---- | ----------------------------------------------------- |
| `args` | any  | `HtmlElement` or `...HtmlElement` or `HtmlElement[]`. |

**Returns:** _void_

---

### removeEvents

▸ **removeEvents**(): _void_

_Inherited from [HtmlElement](game.html.htmlelement.md).[removeEvents](game.html.htmlelement.md#removeevents)_

_Defined in [html.ts:145](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L145)_

Deactivate the element's event handlers.

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

---

### setBody

▸ **setBody**(`body`: any): _void_

_Defined in [message.ts:140](https://github.com/noobiept/game_engine/blob/625c324/source/message.ts#L140)_

**Parameters:**

| Name   | Type | Description                                                                                                                               |
| ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `body` | any  | Set the body of the message. Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before. |

**Returns:** _void_
