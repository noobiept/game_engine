[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Message

# Class: Message

Defined in: [source/message.ts:33](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L33)

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

## Extends

- [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md)

## Constructors

### Constructor

> **new Message**(`args`): `Message`

Defined in: [source/message.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L39)

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

Defined in: [source/html.ts:161](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L161)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_children`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_children)

---

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L39)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_is_active`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L40)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_pre_text`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_pre_text)

---

### background

> `protected` **background**: `HTMLElement` \| `null`

Defined in: [source/message.ts:36](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L36)

---

### body

> `protected` **body**: [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md)

Defined in: [source/message.ts:34](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L34)

---

### buttons

> `protected` **buttons**: [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md) \| `null`

Defined in: [source/message.ts:35](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L35)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L38)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`container`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#container)

---

### timeout

> `protected` **timeout**: [`Timeout`](../Game-Engine/namespaces/Utilities/classes/Timeout.md) \| `null`

Defined in: [source/message.ts:37](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L37)

## Methods

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [source/html.ts:183](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L183)

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

Defined in: [source/html.ts:184](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L184)

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

Defined in: [source/html.ts:122](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L122)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`addEvents`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/message.ts:99](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L99)

Remove the message.

#### Returns

`void`

#### Overrides

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`clear`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#clear)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`isActive`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#isactive)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/html.ts:229](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L229)

Remove all children of this container.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeAllChildren`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removeallchildren)

---

### removeChild()

#### Call Signature

> **removeChild**(`children`): `void`

Defined in: [source/html.ts:207](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L207)

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

Defined in: [source/html.ts:208](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L208)

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

Defined in: [source/html.ts:129](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L129)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeEvents`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:89](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L89)

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

Defined in: [source/message.ts:116](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/message.ts#L116)

#### Parameters

##### body

`any`

Set the body of the message. Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before.

#### Returns

`void`
