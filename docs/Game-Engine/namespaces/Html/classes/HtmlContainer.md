[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlContainer

# Class: HtmlContainer

Defined in: [html.ts:162](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L162)

Container of the other html elements.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Extended by

- [`Message`](../../../../classes/Message.md)

## Constructors

### Constructor

> **new HtmlContainer**(`args?`): `HtmlContainer`

Defined in: [html.ts:165](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L165)

#### Parameters

##### args?

[`HtmlContainerArgs`](../interfaces/HtmlContainerArgs.md)

#### Returns

`HtmlContainer`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`constructor`](HtmlElement.md#constructor)

## Properties

### \_children

> `protected` **\_children**: [`HtmlElement`](HtmlElement.md)[]

Defined in: [html.ts:163](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L163)

---

### \_cleared

> `protected` **\_cleared**: `boolean`

Defined in: [html.ts:41](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L41)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_cleared`](HtmlElement.md#_cleared)

---

### \_is\_active

> `protected` **\_is\_active**: `boolean`

Defined in: [html.ts:39](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L39)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre\_text

> `protected` **\_pre\_text**: `HTMLElement` \| `null`

Defined in: [html.ts:40](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L40)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### container

> **container**: `HTMLElement`

Defined in: [html.ts:38](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

## Methods

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [html.ts:185](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L185)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### children

[`HtmlElement`](HtmlElement.md) \| [`HtmlElement`](HtmlElement.md)[]

##### Returns

`void`

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [html.ts:186](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L186)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`HtmlElement`](HtmlElement.md)[]

##### Returns

`void`

---

### addEvents()

> **addEvents**(): `void`

Defined in: [html.ts:123](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L123)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [html.ts:248](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L248)

Removes the container, plus all of its children (can't use the container after this).

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [html.ts:116](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L116)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### isCleared()

> **isCleared**(): `boolean`

Defined in: [html.ts:150](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L150)

Tells if the element was cleared (with `clear()`).

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isCleared`](HtmlElement.md#iscleared)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [html.ts:232](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L232)

Remove all children of this container.

#### Returns

`void`

---

### removeChild()

#### Call Signature

> **removeChild**(`children`): `void`

Defined in: [html.ts:210](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L210)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`HtmlElement`](HtmlElement.md) \| [`HtmlElement`](HtmlElement.md)[]

##### Returns

`void`

#### Call Signature

> **removeChild**(...`elements`): `void`

Defined in: [html.ts:211](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L211)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`HtmlElement`](HtmlElement.md)[]

##### Returns

`void`

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [html.ts:130](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L130)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

---

### setActive()

> **setActive**(`yesNo`): `void`

Defined in: [html.ts:94](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/html.ts#L94)

When the element is inactive, its events are disabled, and a `.Game-inactive` css class is applied.

#### Parameters

##### yesNo

`boolean`

Whether to set it active or not.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`setActive`](HtmlElement.md#setactive)
