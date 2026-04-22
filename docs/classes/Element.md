[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Element

# Abstract Class: Element

Defined in: [source/element.ts:35](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L35)

Base class for a canvas element. Don't create an object directly.

Events:

- `click` -- `listener( data: { event: MouseEvent; } );`
- `mousedown` -- `listener( data: { event: MouseEvent; } );`
- `mouseup` -- `listener( data: { event: MouseEvent; } );`
- `mousemove` -- `listener( data: { element: Element; } );`
- `mouseover` -- `listener( data: { element: Element; } );`
- `mouseout` -- `listener( data: { element: Element; } );`
- `collision` -- `listener( data: element: Element; collidedWith: Element; bullet?: Bullet; );`

## Extends

- [`EventDispatcher`](EventDispatcher.md)

## Extended by

- [`Container`](Container.md)
- [`Bitmap`](Bitmap.md)
- [`Circle`](Circle.md)
- [`Rectangle`](Rectangle.md)
- [`Text`](Text.md)

## Constructors

### Constructor

> **new Element**(`args?`): `Element`

Defined in: [source/element.ts:62](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L62)

#### Parameters

##### args?

[`ElementArgs`](../interfaces/ElementArgs.md)

#### Returns

`Element`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### \_container

> **\_container**: [`Container`](Container.md)

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L58)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L55)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L54)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L59)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L53)

---

### \_listeners

> `protected` **\_listeners**: `any`

Defined in: [source/event_dispatcher.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L9)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L60)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L57)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L52)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L50)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L51)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L44)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L45)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L48)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L47)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L38)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L41)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L42)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L36)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L39)

## Accessors

### half_height

#### Get Signature

> **get** **half_height**(): `number`

Defined in: [source/element.ts:470](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L470)

##### Returns

`number`

---

### half_width

#### Get Signature

> **get** **half_width**(): `number`

Defined in: [source/element.ts:466](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L466)

##### Returns

`number`

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:462](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L462)

##### Returns

`number`

---

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [source/element.ts:308](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L308)

##### Returns

`number`

Rotation in radians.

#### Set Signature

> **set** **rotation**(`angle`): `void`

Defined in: [source/element.ts:315](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L315)

##### Parameters

###### angle

`number`

Rotate by a certain angle (in radians).

##### Returns

`void`

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:458](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L458)

##### Returns

`number`

---

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [source/element.ts:444](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L444)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [source/element.ts:438](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L438)

##### Parameters

###### x

`number`

##### Returns

`void`

---

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [source/element.ts:454](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L454)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [source/element.ts:448](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L448)

##### Parameters

###### y

`number`

##### Returns

`void`

## Methods

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:346](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L346)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

---

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event_dispatcher.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L23)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`string`

Type of the event.

##### listener

(`data`) => `any`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

---

### addToPosition()

> **addToPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:431](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L431)

Adds to the current position.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

---

### checkCollision()

> **checkCollision**(`other`): `boolean`

Defined in: [source/element.ts:162](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L162)

Check collision between two elements.

#### Parameters

##### other

`Element`

#### Returns

`boolean`

---

### clone()

> `abstract` **clone**(): `Element`

Defined in: [source/element.ts:369](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L369)

Create a clone of this element.

#### Returns

`Element`

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event_dispatcher.ts:77](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L77)

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

##### type

`string`

Type of the event to dispatch.

##### data?

`any`

Data to be sent to every listener.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatchEvent`](EventDispatcher.md#dispatchevent)

---

### dispatchMouseClickEvent()

> **dispatchMouseClickEvent**(`event`): `void`

Defined in: [source/element.ts:214](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L214)

#### Parameters

##### event

`MouseEvent`

Either a mouse up, mouse down or click event.

#### Returns

`void`

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L203)

#### Returns

`void`

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L195)

#### Returns

`void`

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L187)

#### Returns

`void`

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [source/element.ts:123](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L123)

Draws this element, and all of its \_children.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Canvas context.

#### Returns

`void`

---

### drawElement()

> `abstract` **drawElement**(`ctx`): `any`

Defined in: [source/element.ts:116](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L116)

Draws just this element.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Canvas context.

#### Returns

`any`

---

### getHeight()

> **getHeight**(): `number`

Defined in: [source/element.ts:232](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L232)

#### Returns

`number`

The element's height. Doesn't consider the rotation.

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [source/element.ts:410](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L410)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

---

### getWidth()

> **getWidth**(): `number`

Defined in: [source/element.ts:225](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L225)

#### Returns

`number`

The element's width. Doesn't consider the rotation.

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event_dispatcher.ts:93](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L93)

Check if there are listeners to a particular event type.

#### Parameters

##### type

`string`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`hasListeners`](EventDispatcher.md#haslisteners)

---

### intersect()

> **intersect**(`refX`, `refY`): `any`[]

Defined in: [source/element.ts:140](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L140)

Check if the element is within the given x/y position.

#### Parameters

##### refX

`number`

##### refY

`number`

#### Returns

`any`[]

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:362](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L362)

Tells if this element has already been removed or not.

#### Returns

`boolean`

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/element.ts:133](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L133)

Logic code here (runs every update/tick).
Set the `_has_logic` property to `true` for this to get called.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

---

### mouseClickEvents()

> **mouseClickEvents**(`x`, `y`, `event`): `boolean`

Defined in: [source/element.ts:173](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L173)

#### Parameters

##### x

`any`

##### y

`any`

##### event

`any`

#### Returns

`boolean`

---

### remove()

> **remove**(): `void`

Defined in: [source/element.ts:334](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L334)

Mark this element to be removed.

#### Returns

`void`

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:67](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L67)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event_dispatcher.ts:46](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L46)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`string`

The event type.

##### listener?

(`data`) => `any`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)

---

### rotate()

> **rotate**(`angle`, `degrees?`): `void`

Defined in: [source/element.ts:323](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L323)

#### Parameters

##### angle

`number`

Angle of rotation.

##### degrees?

`boolean`

Whether the angle provided is in degrees or radians.

#### Returns

`void`

---

### setDimensions()

> **setDimensions**(`width`, `height`): `void`

Defined in: [source/element.ts:255](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L255)

Set the width and height at the same time.

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

---

### setHeight()

> **setHeight**(`height`): `void`

Defined in: [source/element.ts:247](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L247)

#### Parameters

##### height

`number`

New height.

#### Returns

`void`

---

### setPosition()

> **setPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:421](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L421)

Move the unit to the given x/y position.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

---

### setWidth()

> **setWidth**(`width`): `void`

Defined in: [source/element.ts:239](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L239)

#### Parameters

##### width

`number`

New width.

#### Returns

`void`

---

### toAxisAligned()

> **toAxisAligned**(): `object`

Defined in: [source/element.ts:265](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L265)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

`object`

##### maxX

> **maxX**: `number`

##### maxY

> **maxY**: `number`

##### minX

> **minX**: `number`

##### minY

> **minY**: `number`

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/element.ts:375](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L375)

Get the global vertices points of this element.
The arguments are the compound values from the parent containers.

#### Parameters

##### x

`number`

##### y

`number`

##### scaleX

`number`

##### scaleY

`number`

##### rotation

`number`

#### Returns

`void`
