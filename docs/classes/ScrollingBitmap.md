[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / ScrollingBitmap

# Class: ScrollingBitmap

Defined in: [source/scrolling_bitmap.ts:31](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L31)

Basic Usage:

    var image = new Game.ScrollingBitmap({
            image: Game.Preload.get( 'imageId' ),
            direction: Game.ScrollingBitmapArgs.Direction.left,
            step: 1,
            interval: 0.2
        });
    Game.addElement( image );

Examples -- `clone`, `parallax_scrolling`

## Extends

- [`Bitmap`](Bitmap.md)

## Constructors

### Constructor

> **new ScrollingBitmap**(`args`): `ScrollingBitmap`

Defined in: [source/scrolling_bitmap.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L39)

#### Parameters

##### args

[`ScrollingBitmapArgs`](../interfaces/ScrollingBitmapArgs.md)

#### Returns

`ScrollingBitmap`

#### Overrides

[`Bitmap`](Bitmap.md).[`constructor`](Bitmap.md#constructor)

## Properties

### \_container

> **\_container**: [`Container`](Container.md)

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L58)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_container`](Bitmap.md#_container)

---

### \_count

> `protected` **\_count**: `number`

Defined in: [source/scrolling_bitmap.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L32)

---

### \_direction

> `protected` **\_direction**: [`Direction`](../Game-Engine/namespaces/ScrollingBitmapArgs/enumerations/Direction.md)

Defined in: [source/scrolling_bitmap.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L36)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L55)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_height`](Bitmap.md#_half_height)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L54)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_width`](Bitmap.md#_half_width)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L59)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_has_logic`](Bitmap.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L53)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_height`](Bitmap.md#_height)

---

### \_image

> `protected` **\_image**: `HTMLImageElement`

Defined in: [source/bitmap.ts:22](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L22)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_image`](Bitmap.md#_image)

---

### \_interval

> `protected` **\_interval**: `number`

Defined in: [source/scrolling_bitmap.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L33)

---

### \_listeners

> `protected` **\_listeners**: `any`

Defined in: [source/event_dispatcher.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L9)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_listeners`](Bitmap.md#_listeners)

---

### \_ref_position

> `protected` **\_ref_position**: `number`

Defined in: [source/scrolling_bitmap.ts:35](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L35)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L60)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_removed`](Bitmap.md#_removed)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L57)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_rotation`](Bitmap.md#_rotation)

---

### \_scroll

> `protected` **\_scroll**: () => `void`

Defined in: [source/scrolling_bitmap.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L37)

#### Returns

`void`

---

### \_source_x

> `protected` **\_source_x**: `number`

Defined in: [source/bitmap.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L23)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_x`](Bitmap.md#_source_x)

---

### \_source_y

> `protected` **\_source_y**: `number`

Defined in: [source/bitmap.ts:24](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L24)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_y`](Bitmap.md#_source_y)

---

### \_step

> `protected` **\_step**: `number`

Defined in: [source/scrolling_bitmap.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L34)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L52)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_width`](Bitmap.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L50)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_x`](Bitmap.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L51)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_y`](Bitmap.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L44)

#### Inherited from

[`Bitmap`](Bitmap.md).[`category`](Bitmap.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L45)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collidesWith`](Bitmap.md#collideswith)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L48)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collision_data`](Bitmap.md#collision_data)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L47)

#### Inherited from

[`Bitmap`](Bitmap.md).[`grid_data`](Bitmap.md#grid_data)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L38)

#### Inherited from

[`Bitmap`](Bitmap.md).[`opacity`](Bitmap.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L41)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleX`](Bitmap.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L42)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleY`](Bitmap.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L36)

#### Inherited from

[`Bitmap`](Bitmap.md).[`vertices`](Bitmap.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L39)

#### Inherited from

[`Bitmap`](Bitmap.md).[`visible`](Bitmap.md#visible)

## Accessors

### half_height

#### Get Signature

> **get** **half_height**(): `number`

Defined in: [source/element.ts:470](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L470)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`half_height`](Bitmap.md#half_height)

---

### half_width

#### Get Signature

> **get** **half_width**(): `number`

Defined in: [source/element.ts:466](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L466)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`half_width`](Bitmap.md#half_width)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:462](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L462)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`height`](Bitmap.md#height)

---

### image

#### Get Signature

> **get** **image**(): `HTMLImageElement`

Defined in: [source/bitmap.ts:70](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L70)

##### Returns

`HTMLImageElement`

#### Set Signature

> **set** **image**(`newImage`): `void`

Defined in: [source/bitmap.ts:74](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L74)

##### Parameters

###### newImage

`HTMLImageElement`

##### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`image`](Bitmap.md#image)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`rotation`](Bitmap.md#rotation)

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:458](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L458)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`width`](Bitmap.md#width)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`x`](Bitmap.md#x)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`y`](Bitmap.md#y)

## Methods

### \_draw_horizontal()

> `protected` **\_draw_horizontal**(`ctx`): `void`

Defined in: [source/scrolling_bitmap.ts:153](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L153)

Used for the horizontal movement (left or right).

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

---

### \_draw_vertical()

> `protected` **\_draw_vertical**(`ctx`): `void`

Defined in: [source/scrolling_bitmap.ts:198](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L198)

Used for the vertical movement (top or bottom).

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

---

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:346](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L346)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_removeNow`](Bitmap.md#_removenow)

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

[`Bitmap`](Bitmap.md).[`addEventListener`](Bitmap.md#addeventlistener)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`addToPosition`](Bitmap.md#addtoposition)

---

### checkCollision()

> **checkCollision**(`other`): `boolean`

Defined in: [source/element.ts:162](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L162)

Check collision between two elements.

#### Parameters

##### other

[`Element`](Element.md)

#### Returns

`boolean`

#### Inherited from

[`Bitmap`](Bitmap.md).[`checkCollision`](Bitmap.md#checkcollision)

---

### clearInterval()

> **clearInterval**(): `void`

Defined in: [source/scrolling_bitmap.ts:102](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L102)

Stop the animation.

#### Returns

`void`

---

### clone()

> **clone**(): `ScrollingBitmap`

Defined in: [source/scrolling_bitmap.ts:255](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L255)

Get a copy of this object.

#### Returns

`ScrollingBitmap`

#### Overrides

[`Bitmap`](Bitmap.md).[`clone`](Bitmap.md#clone)

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

[`Bitmap`](Bitmap.md).[`dispatchEvent`](Bitmap.md#dispatchevent)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseClickEvent`](Bitmap.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L203)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseMoveEvent`](Bitmap.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L195)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOutEvent`](Bitmap.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L187)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOverEvent`](Bitmap.md#dispatchmouseoverevent)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`draw`](Bitmap.md#draw)

---

### drawElement()

> **drawElement**(`ctx`): `void`

Defined in: [source/bitmap.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L34)

Draws just this element.

#### Parameters

##### ctx

`any`

Canvas context.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`drawElement`](Bitmap.md#drawelement)

---

### getHeight()

> **getHeight**(): `number`

Defined in: [source/element.ts:232](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L232)

#### Returns

`number`

The element's height. Doesn't consider the rotation.

#### Inherited from

[`Bitmap`](Bitmap.md).[`getHeight`](Bitmap.md#getheight)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [source/element.ts:410](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L410)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Inherited from

[`Bitmap`](Bitmap.md).[`getVertices`](Bitmap.md#getvertices)

---

### getWidth()

> **getWidth**(): `number`

Defined in: [source/element.ts:225](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L225)

#### Returns

`number`

The element's width. Doesn't consider the rotation.

#### Inherited from

[`Bitmap`](Bitmap.md).[`getWidth`](Bitmap.md#getwidth)

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

[`Bitmap`](Bitmap.md).[`hasListeners`](Bitmap.md#haslisteners)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`intersect`](Bitmap.md#intersect)

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:362](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L362)

Tells if this element has already been removed or not.

#### Returns

`boolean`

#### Inherited from

[`Bitmap`](Bitmap.md).[`isRemoved`](Bitmap.md#isremoved)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/scrolling_bitmap.ts:243](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L243)

Scroll the image at the given interval.

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Overrides

[`Bitmap`](Bitmap.md).[`logic`](Bitmap.md#logic)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`mouseClickEvents`](Bitmap.md#mouseclickevents)

---

### remove()

> **remove**(): `void`

Defined in: [source/element.ts:334](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L334)

Mark this element to be removed.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`remove`](Bitmap.md#remove)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:67](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L67)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`removeAllEventListeners`](Bitmap.md#removealleventlisteners)

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

[`Bitmap`](Bitmap.md).[`removeEventListener`](Bitmap.md#removeeventlistener)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`rotate`](Bitmap.md#rotate)

---

### scroll_bottom()

> **scroll_bottom**(): `void`

Defined in: [source/scrolling_bitmap.ts:142](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L142)

Scroll to the bottom.

#### Returns

`void`

---

### scroll_left()

> **scroll_left**(): `void`

Defined in: [source/scrolling_bitmap.ts:109](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L109)

Scroll to the left.

#### Returns

`void`

---

### scroll_right()

> **scroll_right**(): `void`

Defined in: [source/scrolling_bitmap.ts:120](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L120)

Scroll to the right.

#### Returns

`void`

---

### scroll_top()

> **scroll_top**(): `void`

Defined in: [source/scrolling_bitmap.ts:131](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L131)

Scroll to the top.

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`setDimensions`](Bitmap.md#setdimensions)

---

### setDirection()

> **setDirection**(`direction`): `void`

Defined in: [source/scrolling_bitmap.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L57)

Set the direction of the scrolling.

#### Parameters

##### direction

[`Direction`](../Game-Engine/namespaces/ScrollingBitmapArgs/enumerations/Direction.md)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`setHeight`](Bitmap.md#setheight)

---

### setInterval()

> **setInterval**(`interval`): `void`

Defined in: [source/scrolling_bitmap.ts:93](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L93)

Set an interval between the scroll movements.

#### Parameters

##### interval

`number`

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`setPosition`](Bitmap.md#setposition)

---

### setStep()

> **setStep**(`step`): `void`

Defined in: [source/scrolling_bitmap.ts:86](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/scrolling_bitmap.ts#L86)

Change the step of the animation (how much it scrolls per update).

#### Parameters

##### step

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`setWidth`](Bitmap.md#setwidth)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`toAxisAligned`](Bitmap.md#toaxisaligned)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`updateVertices`](Bitmap.md#updatevertices)
