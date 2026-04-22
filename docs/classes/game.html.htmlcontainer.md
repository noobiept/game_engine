[Game Engine](../README.md) › [Game](../modules/game.md) › [Html](../modules/game.html.md) › [HtmlContainer](game.html.htmlcontainer.md)

# Class: HtmlContainer

Container of the other html elements.

## Hierarchy

- [HtmlElement](game.html.htmlelement.md)

    ↳ **HtmlContainer**

    ↳ [Message](game.message.md)

## Index

### Constructors

- [constructor](game.html.htmlcontainer.md#constructor)

### Properties

- [\_children](game.html.htmlcontainer.md#protected-_children)
- [\_is_active](game.html.htmlcontainer.md#protected-_is_active)
- [\_pre_text](game.html.htmlcontainer.md#protected-_pre_text)
- [container](game.html.htmlcontainer.md#container)

### Methods

- [addChild](game.html.htmlcontainer.md#addchild)
- [addEvents](game.html.htmlcontainer.md#addevents)
- [clear](game.html.htmlcontainer.md#clear)
- [isActive](game.html.htmlcontainer.md#isactive)
- [removeAllChildren](game.html.htmlcontainer.md#removeallchildren)
- [removeChild](game.html.htmlcontainer.md#removechild)
- [removeEvents](game.html.htmlcontainer.md#removeevents)
- [setActive](game.html.htmlcontainer.md#setactive)

## Constructors

### constructor

\+ **new HtmlContainer**(`args?`: [HtmlContainerArgs](../interfaces/game.html.htmlcontainerargs.md)): _[HtmlContainer](game.html.htmlcontainer.md)_

_Overrides [HtmlElement](game.html.htmlelement.md).[constructor](game.html.htmlelement.md#constructor)_

_Defined in [html.ts:178](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L178)_

**Parameters:**

| Name    | Type                                                              |
| ------- | ----------------------------------------------------------------- |
| `args?` | [HtmlContainerArgs](../interfaces/game.html.htmlcontainerargs.md) |

**Returns:** _[HtmlContainer](game.html.htmlcontainer.md)_

## Properties

### `Protected` \_children

• **\_children**: _[HtmlElement](game.html.htmlelement.md)[]_

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

### container

• **container**: _HTMLElement_

_Inherited from [HtmlElement](game.html.htmlelement.md).[container](game.html.htmlelement.md#container)_

_Defined in [html.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L37)_

## Methods

### addChild

▸ **addChild**(`args`: any): _void_

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

_Overrides [HtmlElement](game.html.htmlelement.md).[clear](game.html.htmlelement.md#clear)_

_Defined in [html.ts:279](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L279)_

Removes the container, plus all of its children (can't use the container after this).

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

_Defined in [html.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/html.ts#L259)_

Remove all children of this container.

**Returns:** _void_

---

### removeChild

▸ **removeChild**(`args`: any): _void_

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
