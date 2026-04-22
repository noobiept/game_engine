[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Message

# Class: Message

Defined in: [source/message.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L33)

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

Defined in: [source/message.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L39)

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

Defined in: [source/html.ts:143](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L143)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_children`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_children)

---

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L33)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_is_active`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement`

Defined in: [source/html.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L34)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`_pre_text`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#_pre_text)

---

### background

> `protected` **background**: `HTMLElement`

Defined in: [source/message.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L36)

---

### body

> `protected` **body**: [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md)

Defined in: [source/message.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L34)

---

### buttons

> `protected` **buttons**: [`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md)

Defined in: [source/message.ts:35](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L35)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`container`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#container)

---

### timeout

> `protected` **timeout**: [`Timeout`](../Game-Engine/namespaces/Utilities/classes/Timeout.md)

Defined in: [source/message.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L37)

## Methods

### addChild()

> **addChild**(`args`): `void`

Defined in: [source/html.ts:165](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L165)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

#### Parameters

##### args

`any`

`HtmlElement` or `...HtmlElement` or `HtmlElement[]`.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`addChild`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#addchild)

---

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:110](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L110)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`addEvents`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/message.ts:98](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L98)

Remove the message.

#### Returns

`void`

#### Overrides

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`clear`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#clear)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:103](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L103)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`isActive`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#isactive)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/html.ts:213](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L213)

Remove all children of this container.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeAllChildren`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removeallchildren)

---

### removeChild()

> **removeChild**(`args`): `void`

Defined in: [source/html.ts:189](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L189)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

#### Parameters

##### args

`any`

`HtmlElement` or `...HtmlElement` or `HtmlElement[]`.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeChild`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removechild)

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:117](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L117)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlContainer`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md).[`removeEvents`](../Game-Engine/namespaces/Html/classes/HtmlContainer.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [source/html.ts:83](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L83)

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

Defined in: [source/message.ts:114](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/message.ts#L114)

#### Parameters

##### body

`any`

Set the body of the message. Either a `string`, `HTMLElement`, `Html.HtmlElement` or an `array` with any combination of the types before.

#### Returns

`void`
