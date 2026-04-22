[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Html](../README.md) / HtmlContainer

# Class: HtmlContainer

Defined in: [source/html.ts:142](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L142)

Container of the other html elements.

## Extends

- [`HtmlElement`](HtmlElement.md)

## Extended by

- [`Message`](../../../../classes/Message.md)

## Constructors

### Constructor

> **new HtmlContainer**(`args?`): `HtmlContainer`

Defined in: [source/html.ts:145](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L145)

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

Defined in: [source/html.ts:143](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L143)

---

### \_is_active

> `protected` **\_is_active**: `boolean`

Defined in: [source/html.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L33)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_is_active`](HtmlElement.md#_is_active)

---

### \_pre_text

> `protected` **\_pre_text**: `HTMLElement`

Defined in: [source/html.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L34)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`_pre_text`](HtmlElement.md#_pre_text)

---

### container

> **container**: `HTMLElement`

Defined in: [source/html.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L32)

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`container`](HtmlElement.md#container)

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

---

### addEvents()

> **addEvents**(): `void`

Defined in: [source/html.ts:110](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L110)

Activates the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`addEvents`](HtmlElement.md#addevents)

---

### clear()

> **clear**(): `void`

Defined in: [source/html.ts:229](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L229)

Removes the container, plus all of its children (can't use the container after this).

#### Returns

`void`

#### Overrides

[`HtmlElement`](HtmlElement.md).[`clear`](HtmlElement.md#clear)

---

### isActive()

> **isActive**(): `boolean`

Defined in: [source/html.ts:103](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L103)

Check if the element is active or not currently.

#### Returns

`boolean`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`isActive`](HtmlElement.md#isactive)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/html.ts:213](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L213)

Remove all children of this container.

#### Returns

`void`

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

---

### removeEvents()

> **removeEvents**(): `void`

Defined in: [source/html.ts:117](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/html.ts#L117)

Deactivate the element's event handlers.

#### Returns

`void`

#### Inherited from

[`HtmlElement`](HtmlElement.md).[`removeEvents`](HtmlElement.md#removeevents)

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

[`HtmlElement`](HtmlElement.md).[`setActive`](HtmlElement.md#setactive)
