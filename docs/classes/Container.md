[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Container

# Class: Container

Defined in: [source/container.ts:33](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L33)

Basic Usage:

    var container = new Game.Container();

    var rectangle = new Game.Rectangle({
            width: 10,
            height: 10,
            color: 'red'
        });
    container.addChild( rectangle );

    Game.addElement( container );

Events:

Examples -- `basic_example`, `clone`, `minesweeper`

## Extends

- [`Element`](Element.md)

## Extended by

- [`Bullet`](Bullet.md)

## Constructors

### Constructor

> **new Container**(`args?`): `Container`

Defined in: [source/container.ts:36](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L36)

#### Parameters

##### args?

[`ContainerArgs`](../interfaces/ContainerArgs.md)

#### Returns

`Container`

#### Overrides

[`Element`](Element.md).[`constructor`](Element.md#constructor)

## Properties

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [source/container.ts:34](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L34)

---

### \_container

> **\_container**: `Container` \| `null`

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L58)

#### Inherited from

[`Bullet`](Bullet.md).[`_container`](Bullet.md#_container)

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

[`Text`](Text.md).[`vertices`](Text.md#vertices)

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

[`Bullet`](Bullet.md).[`halfHeight`](Bullet.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:453](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L453)

##### Returns

`number`

#### Inherited from

[`Bullet`](Bullet.md).[`halfWidth`](Bullet.md#halfwidth)

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

[`Bullet`](Bullet.md).[`left`](Bullet.md#left)

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

[`Bullet`](Bullet.md).[`rotation`](Bullet.md#rotation)

---

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: [source/element.ts:472](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L472)

The top-left `y` (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Inherited from

[`Bullet`](Bullet.md).[`top`](Bullet.md#top)

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

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [source/container.ts:56](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L56)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`void`

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [source/container.ts:57](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L57)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`Element`](Element.md)[]

Either `Element` or `...Element` or `Element[]`.

##### Returns

`void`

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

### bringToFront()

> **bringToFront**(`element`): `void`

Defined in: [source/container.ts:122](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L122)

Move a child element to the front (drawn on top of the other children).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### calculateDimensions()

> **calculateDimensions**(): `void`

Defined in: [source/container.ts:244](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L244)

Calculate the width/height of the container (based on the dimensions of the children elements). Doesn't consider the rotations of the elements.

#### Returns

`void`

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

> **clone**(): `Container`

Defined in: [source/container.ts:388](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L388)

Clones the container (as well as the children).

#### Returns

`Container`

A new cloned container.

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

Defined in: [source/container.ts:181](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L181)

Draw all the elements in the container.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

The canvas rendering context.

#### Returns

`void`

#### Overrides

[`Element`](Element.md).[`draw`](Element.md#draw)

---

### drawElement()

> **drawElement**(`ctx`): `void`

Defined in: [source/container.ts:207](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L207)

Normally draws the element, but in the case of the container just draw its children.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

The canvas rendering context.

#### Returns

`void`

#### Overrides

[`Element`](Element.md).[`drawElement`](Element.md#drawelement)

---

### getAllChildren()

> **getAllChildren**(): [`Element`](Element.md)[]

Defined in: [source/container.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L115)

Get all the children elements.

#### Returns

[`Element`](Element.md)[]

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

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [source/container.ts:369](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L369)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Overrides

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

> **intersect**(`x`, `y`): [`Element`](Element.md)[]

Defined in: [source/container.ts:214](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L214)

Check if the given x/y position intersects with any of this container's children. Returns all the elements it intersects.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Element`](Element.md)[]

#### Overrides

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

> **logic**(`deltaTime`): `void`

Defined in: [source/container.ts:333](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L333)

Call the logic of the children elements.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

#### Overrides

[`Element`](Element.md).[`logic`](Element.md#logic)

---

### mouseClickEvents()

> **mouseClickEvents**(`x`, `y`, `event`): `boolean`

Defined in: [source/container.ts:229](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L229)

#### Parameters

##### x

`number`

##### y

`number`

##### event

`MouseEvent`

#### Returns

`boolean`

#### Overrides

[`Element`](Element.md).[`mouseClickEvents`](Element.md#mouseclickevents)

---

### remove()

> **remove**(): `void`

Defined in: [source/container.ts:171](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L171)

Make sure the children are removed as well.

#### Returns

`void`

#### Overrides

[`Element`](Element.md).[`remove`](Element.md#remove)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/container.ts:103](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L103)

Remove all of this container's children.

#### Returns

`void`

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

### removeChild()

#### Call Signature

> **removeChild**(`children`): `void`

Defined in: [source/container.ts:81](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L81)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`void`

#### Call Signature

> **removeChild**(...`elements`): `void`

Defined in: [source/container.ts:82](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L82)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`Element`](Element.md)[]

##### Returns

`void`

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

### sendToBack()

> **sendToBack**(`element`): `void`

Defined in: [source/container.ts:136](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L136)

Move a child element to the back (drawn behind the other children).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

---

### setChildIndex()

> **setChildIndex**(`element`, `index`): `void`

Defined in: [source/container.ts:150](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L150)

Move a child element to a specific draw position (0 is the back, higher values are more to the front).

#### Parameters

##### element

[`Element`](Element.md)

##### index

`number`

#### Returns

`void`

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

Defined in: [source/container.ts:286](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L286)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Overrides

[`Element`](Element.md).[`toAxisAligned`](Element.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/container.ts:347](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L347)

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

#### Overrides

[`Element`](Element.md).[`updateVertices`](Element.md#updatevertices)
