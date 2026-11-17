[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Message

# Class: Message

Defined in: [source/message.ts:33](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L33)

Basic Usage:

    const container = Game.getCanvasContainer();

    const button = new Game.Html.Button({
            value: 'Ok',
            callback: function( button )
                {
                message.clear();
                }
        });
    const message = new Game.Message({
            body: 'Hi there!',
            container: container,
            background: true,
            buttons: button
        });

Examples -- `message`, `minesweeper`

## Extends

- [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md)

## Constructors

### Constructor

> **new Message**(`args`): `Message`

Defined in: [source/message.ts:39](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L39)

#### Parameters

##### args

[`MessageArgs`](../interfaces/MessageArgs.md)

#### Returns

`Message`

#### Overrides

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`constructor`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#constructor)

## Properties

### \_children

> `protected` **\_children**: [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

Defined in: [source/html.ts:163](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L163)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_children`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_children)

---

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [source/html.ts:41](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L41)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_cleared`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_cleared)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L39)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_is_active`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_is_active)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L40)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_pre_text`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_pre_text)

---

### background

> `protected` **background**: `HTMLElement` \| `null`

Defined in: [source/message.ts:36](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L36)

---

### body

> `protected` **body**: [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md)

Defined in: [source/message.ts:34](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L34)

---

### buttons

> `protected` **buttons**: [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md) \| `null`

Defined in: [source/message.ts:35](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L35)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L38)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`container`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#container)

---

### timeout

> `protected` **timeout**: `Timeout` \| `null`

Defined in: [source/message.ts:37](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L37)

## Methods

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [source/html.ts:185](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L185)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### children

[`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md) \| [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

##### Returns

`void`

##### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`addChild`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#addchild)

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [source/html.ts:186](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L186)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

##### Returns

`void`

##### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`addChild`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#addchild)

---

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:123](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L123)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`addEvents`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/message.ts:97](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L97)

Remove the message.

#### Returns

`void`

#### Overrides

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`clear`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#clear)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:116](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`isActive`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#isactive)

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [source/html.ts:150](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`isCleared`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#iscleared)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/html.ts:232](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L232)

Remove all children of this container.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeAllChildren`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removeallchildren)

---

### removeChild()

#### Call Signature

> **removeChild**(`children`): `void`

Defined in: [source/html.ts:210](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L210)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md) \| [`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

##### Returns

`void`

##### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeChild`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removechild)

#### Call Signature

> **removeChild**(...`elements`): `void`

Defined in: [source/html.ts:211](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L211)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`HtmlElement`](../Game-Engine/namespaces/Html/classes/HtmlElement.md)[]

##### Returns

`void`

##### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeChild`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removechild)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:130](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L130)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeEvents`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:94](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/html.ts#L94)

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

#### Parameters

##### yesNo

`boolean`

Whether to set it active or not.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`setActive`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#setactive)

---

### setBody()

> **setBody**(`body`): `void`

Defined in: [source/message.ts:114](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/message.ts#L114)

#### Parameters

##### body

`any`

Set the body of the message. Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before.

#### Returns

`void`
