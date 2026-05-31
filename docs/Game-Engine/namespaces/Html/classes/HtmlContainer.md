[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlContainer

# Class: HtmlContainer

Defined in: [source/html.ts:160](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L160)

Container of the other html elements.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Extended by

- [`Message`](../../../../classes/Message.md)

## Constructors

### Constructor

> **new HtmlContainer**(`args?`): `HtmlContainer`

Defined in: [source/html.ts:163](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L163)

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

Defined in: [source/html.ts:161](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L161)

---

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L39)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement` \| `null`

Defined in: [source/html.ts:40](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L40)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### container

> **container**: `HTMLElement` \| `null`

Defined in: [source/html.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L38)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

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

[`HtmlElement`](HtmlElement.md) \| [`HtmlElement`](HtmlElement.md)[]

##### Returns

`void`

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [source/html.ts:184](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L184)

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

Defined in: [source/html.ts:122](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L122)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:245](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L245)

Removes the container, plus all of its children (can't use the container after this).

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L115)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/html.ts:229](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L229)

Remove all children of this container.

#### Returns

`void`

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

[`HtmlElement`](HtmlElement.md) \| [`HtmlElement`](HtmlElement.md)[]

##### Returns

`void`

#### Call Signature

> **removeChild**(...`elements`): `void`

Defined in: [source/html.ts:208](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L208)

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

Defined in: [source/html.ts:129](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/html.ts#L129)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

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

[`HtmlElement`](HtmlElement.md).[`setActive`](HtmlElement.md#setactive)
