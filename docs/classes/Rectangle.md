[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Rectangle

# Class: Rectangle

Defined in: [source/rectangle.ts:24](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/rectangle.ts#L24)

Basic Usage:

    var rectangle = new Game.Rectangle({
            x: 100,
            y: 200,
            width: 10,
            height: 20,
            color: 'gray'
        });
    Game.addElement( rectangle );

Examples -- `basic_example`, `bullets`, `clone`, `collision_detection`, `custom_element`, `game_of_life`, `grid`, `mouse_move`, `multiple_canvas`, `preload`, `snake`, `tower_defense`, `tween`

## Extends

- [`Element`](Element.md)

## Constructors

### Constructor

> **new Rectangle**(`args`): `Rectangle`

Defined in: [source/rectangle.ts:28](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/rectangle.ts#L28)

#### Parameters

##### args

[`RectangleArgs`](../interfaces/RectangleArgs.md)

#### Returns

`Rectangle`

#### Overrides

[`Element`](Element.md).[`constructor`](Element.md#constructor)

## Properties

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L58)

#### Inherited from

[`Element`](Element.md).[`_container`](Element.md#_container)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L55)

#### Inherited from

[`Element`](Element.md).[`_half_height`](Element.md#_half_height)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L54)

#### Inherited from

[`Element`](Element.md).[`_half_width`](Element.md#_half_width)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L59)

#### Inherited from

[`Element`](Element.md).[`_has_logic`](Element.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L53)

#### Inherited from

[`Element`](Element.md).[`_height`](Element.md#_height)

---

### \_listeners

> `protected` **\_listeners**: `Record`\<`string`, `EventListener`[]\>

Defined in: [source/event_dispatcher.ts:13](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L13)

#### Inherited from

[`Element`](Element.md).[`_listeners`](Element.md#_listeners)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L60)

#### Inherited from

[`Element`](Element.md).[`_removed`](Element.md#_removed)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L57)

#### Inherited from

[`Element`](Element.md).[`_rotation`](Element.md#_rotation)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L52)

#### Inherited from

[`Element`](Element.md).[`_width`](Element.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L50)

#### Inherited from

[`Element`](Element.md).[`_x`](Element.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L51)

#### Inherited from

[`Element`](Element.md).[`_y`](Element.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L44)

#### Inherited from

[`Element`](Element.md).[`category`](Element.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L45)

#### Inherited from

[`Element`](Element.md).[`collidesWith`](Element.md#collideswith)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L48)

#### Inherited from

[`Element`](Element.md).[`collision_data`](Element.md#collision_data)

---

### color

> **color**: `string`

Defined in: [source/rectangle.ts:25](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/rectangle.ts#L25)

---

### fill

> **fill**: `boolean`

Defined in: [source/rectangle.ts:26](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/rectangle.ts#L26)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L47)

#### Inherited from

[`Element`](Element.md).[`grid_data`](Element.md#grid_data)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L38)

#### Inherited from

[`Element`](Element.md).[`opacity`](Element.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L41)

#### Inherited from

[`Element`](Element.md).[`scaleX`](Element.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L42)

#### Inherited from

[`Element`](Element.md).[`scaleY`](Element.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L36)

#### Inherited from

[`Element`](Element.md).[`vertices`](Element.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L39)

#### Inherited from

[`Element`](Element.md).[`visible`](Element.md#visible)

## Accessors

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [source/element.ts:457](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L457)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`halfHeight`](Element.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:453](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L453)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`halfWidth`](Element.md#halfwidth)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:444](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L444)

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [source/element.ts:448](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L448)

##### Parameters

###### height

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`height`](Element.md#height)

---

### left

#### Get Signature

> **get** **left**(): `number`

Defined in: [source/element.ts:465](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L465)

The position model is center-origin (`x`/`y` is the center). This returns the top-left `x`
(`x - halfWidth`), which is convenient when porting top-left based games.

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`left`](Element.md#left)

---

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [source/element.ts:279](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L279)

##### Returns

`number`

Rotation in radians.

#### Set Signature

> **set** **rotation**(`angle`): `void`

Defined in: [source/element.ts:286](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L286)

##### Parameters

###### angle

`number`

Rotation in radians.

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`rotation`](Element.md#rotation)

---

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: [source/element.ts:472](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L472)

The top-left `y` (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`top`](Element.md#top)

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:435](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L435)

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [source/element.ts:439](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L439)

##### Parameters

###### width

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`width`](Element.md#width)

---

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [source/element.ts:421](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L421)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [source/element.ts:415](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L415)

##### Parameters

###### x

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`x`](Element.md#x)

---

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [source/element.ts:431](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L431)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [source/element.ts:425](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L425)

##### Parameters

###### y

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`y`](Element.md#y)

## Methods

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:323](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L323)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_removeNow`](Element.md#_removenow)

---

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event_dispatcher.ts:27](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L27)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`string`

Type of the event.

##### listener

`EventListener`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[`Element`](Element.md).[`addEventListener`](Element.md#addeventlistener)

---

### addToPosition()

> **addToPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:408](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L408)

Adds to the current position.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`addToPosition`](Element.md#addtoposition)

---

### checkCollision()

> **checkCollision**(`other`): `boolean`

Defined in: [source/element.ts:162](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L162)

Check collision between two elements.

#### Parameters

##### other

[`Element`](Element.md)

#### Returns

`boolean`

#### Inherited from

[`Element`](Element.md).[`checkCollision`](Element.md#checkcollision)

---

### clone()

> **clone**(): `Rectangle`

Defined in: [source/rectangle.ts:76](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/rectangle.ts#L76)

Create a clone of this element.

#### Returns

`Rectangle`

#### Overrides

[`Element`](Element.md).[`clone`](Element.md#clone)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event_dispatcher.ts:81](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L81)

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

[`Element`](Element.md).[`dispatchEvent`](Element.md#dispatchevent)

---

### dispatchMouseClickEvent()

> **dispatchMouseClickEvent**(`event`): `void`

Defined in: [source/element.ts:214](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L214)

#### Parameters

##### event

`MouseEvent`

Either a mouse up, mouse down or click event.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseClickEvent`](Element.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L203)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseMoveEvent`](Element.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L195)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseOutEvent`](Element.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L187)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseOverEvent`](Element.md#dispatchmouseoverevent)

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [source/element.ts:123](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L123)

Draws this element, and all of its \_children.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Canvas context.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`draw`](Element.md#draw)

---

### drawElement()

> **drawElement**(`ctx`): `void`

Defined in: [source/rectangle.ts:48](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/rectangle.ts#L48)

Draw this element.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

The canvas rendering context.

#### Returns

`void`

#### Overrides

[`Element`](Element.md).[`drawElement`](Element.md#drawelement)

---

### getBoundingBox()

> **getBoundingBox**(): `object`

Defined in: [source/element.ts:481](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L481)

The element's axis-aligned bounding box in top-left form (does not consider rotation or scale).
Unlike `toAxisAligned()` (which is rotation-aware and returns min/max), this is the simple
top-left box that top-left/grid based ports usually want.

#### Returns

`object`

##### height

> **height**: `number`

##### width

> **width**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Inherited from

[`Element`](Element.md).[`getBoundingBox`](Element.md#getboundingbox)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

Defined in: [source/element.ts:387](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L387)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

#### Inherited from

[`Element`](Element.md).[`getVertices`](Element.md#getvertices)

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event_dispatcher.ts:97](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L97)

Check if there are listeners to a particular event type.

#### Parameters

##### type

`string`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[`Element`](Element.md).[`hasListeners`](Element.md#haslisteners)

---

### intersect()

> **intersect**(`refX`, `refY`): [`Element`](Element.md)[]

Defined in: [source/element.ts:140](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L140)

Check if the element is within the given x/y position.

#### Parameters

##### refX

`number`

##### refY

`number`

#### Returns

[`Element`](Element.md)[]

#### Inherited from

[`Element`](Element.md).[`intersect`](Element.md#intersect)

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:339](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L339)

Tells if this element has already been removed or not.

#### Returns

`boolean`

#### Inherited from

[`Element`](Element.md).[`isRemoved`](Element.md#isremoved)

---

### logic()

> **logic**(`_deltaTime`): `void`

Defined in: [source/element.ts:133](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L133)

Logic code here (runs every update/tick).
Set the `_has_logic` property to `true` for this to get called.

#### Parameters

##### \_deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`logic`](Element.md#logic)

---

### mouseClickEvents()

> **mouseClickEvents**(`x`, `y`, `event`): `boolean`

Defined in: [source/element.ts:173](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L173)

#### Parameters

##### x

`number`

##### y

`number`

##### event

`MouseEvent`

#### Returns

`boolean`

#### Inherited from

[`Element`](Element.md).[`mouseClickEvents`](Element.md#mouseclickevents)

---

### remove()

> **remove**(): `void`

Defined in: [source/element.ts:311](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L311)

Mark this element to be removed.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`remove`](Element.md#remove)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:71](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L71)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`removeAllEventListeners`](Element.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event_dispatcher.ts:50](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L50)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`string`

The event type.

##### listener?

`EventListener`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`Element`](Element.md).[`removeEventListener`](Element.md#removeeventlistener)

---

### rotate()

> **rotate**(`radians`): `void`

Defined in: [source/element.ts:295](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L295)

Rotate the element to a given angle, in radians.

#### Parameters

##### radians

`number`

Rotation in radians.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`rotate`](Element.md#rotate)

---

### rotateDegrees()

> **rotateDegrees**(`degrees`): `void`

Defined in: [source/element.ts:304](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L304)

Rotate the element to a given angle, in degrees.

#### Parameters

##### degrees

`number`

Rotation in degrees.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`rotateDegrees`](Element.md#rotatedegrees)

---

### setDimensions()

> **setDimensions**(`width`, `height`): `void`

Defined in: [source/element.ts:225](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L225)

Set the width and height at the same time.

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`setDimensions`](Element.md#setdimensions)

---

### setPosition()

> **setPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:398](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L398)

Move the unit to the given x/y position.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`setPosition`](Element.md#setposition)

---

### toAxisAligned()

> **toAxisAligned**(): \{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

Defined in: [source/element.ts:235](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L235)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Element`](Element.md).[`toAxisAligned`](Element.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/element.ts:352](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L352)

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

[`Element`](Element.md).[`updateVertices`](Element.md#updatevertices)
