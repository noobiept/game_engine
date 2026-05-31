[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Bullet

# Class: Bullet

Defined in: [source/bullet.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L39)

Basic Usage:

    var bulletShape = new Game.Rectangle({
            width: 10,
            height: 2,
            color: 'blue'
        });
    var bullet = new Game.Bullet({
            x: 10,
            y: 10,
            angleOrTarget: 0,
            movementSpeed: 100
        });
    bullet.addChild( bulletShape );
    bullet.addEventListener( 'remove', function( data )
        {
        console.log( 'Bullet removed!' );
        });

    Game.addElement( bullet );

Events:

- `remove` -- `listener( data: { element: Bullet; };`

## Extends

- [`Container`](Container.md)

## Constructors

### Constructor

> **new Bullet**(`args`): `Bullet`

Defined in: [source/bullet.ts:44](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L44)

#### Parameters

##### args

[`BulletArgs`](../interfaces/BulletArgs.md)

#### Returns

`Bullet`

#### Overrides

[`Container`](Container.md).[`constructor`](Container.md#constructor)

## Properties

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [source/container.ts:34](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L34)

#### Inherited from

[`Container`](Container.md).[`_children`](Container.md#_children)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L58)

#### Inherited from

[`Container`](Container.md).[`_container`](Container.md#_container)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L55)

#### Inherited from

[`Container`](Container.md).[`_half_height`](Container.md#_half_height)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L54)

#### Inherited from

[`Container`](Container.md).[`_half_width`](Container.md#_half_width)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L59)

#### Inherited from

[`Container`](Container.md).[`_has_logic`](Container.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L53)

#### Inherited from

[`Container`](Container.md).[`_height`](Container.md#_height)

---

### \_listeners

> `protected` **\_listeners**: `Record`\<`string`, `EventListener`[]\>

Defined in: [source/event_dispatcher.ts:13](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L13)

#### Inherited from

[`Container`](Container.md).[`_listeners`](Container.md#_listeners)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L60)

#### Inherited from

[`Container`](Container.md).[`_removed`](Container.md#_removed)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L57)

#### Inherited from

[`Container`](Container.md).[`_rotation`](Container.md#_rotation)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L52)

#### Inherited from

[`Container`](Container.md).[`_width`](Container.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L50)

#### Inherited from

[`Container`](Container.md).[`_x`](Container.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L51)

#### Inherited from

[`Container`](Container.md).[`_y`](Container.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L44)

#### Inherited from

[`Container`](Container.md).[`category`](Container.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L45)

#### Inherited from

[`Container`](Container.md).[`collidesWith`](Container.md#collideswith)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L48)

#### Inherited from

[`Container`](Container.md).[`collision_data`](Container.md#collision_data)

---

### damage

> **damage**: `number`

Defined in: [source/bullet.ts:41](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L41)

---

### element

> **element**: [`Element`](Element.md) \| `null`

Defined in: [source/bullet.ts:42](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L42)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L47)

#### Inherited from

[`Container`](Container.md).[`grid_data`](Container.md#grid_data)

---

### movement

> **movement**: [`Movement`](Movement.md) \| `null`

Defined in: [source/bullet.ts:40](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L40)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L38)

#### Inherited from

[`Container`](Container.md).[`opacity`](Container.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L41)

#### Inherited from

[`Container`](Container.md).[`scaleX`](Container.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L42)

#### Inherited from

[`Container`](Container.md).[`scaleY`](Container.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L36)

#### Inherited from

[`Container`](Container.md).[`vertices`](Container.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L39)

#### Inherited from

[`Container`](Container.md).[`visible`](Container.md#visible)

## Accessors

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [source/element.ts:457](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L457)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`halfHeight`](Container.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:453](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L453)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`halfWidth`](Container.md#halfwidth)

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

[`Container`](Container.md).[`height`](Container.md#height)

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

[`Container`](Container.md).[`left`](Container.md#left)

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

[`Container`](Container.md).[`rotation`](Container.md#rotation)

---

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: [source/element.ts:472](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L472)

The top-left `y` (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`top`](Container.md#top)

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

[`Container`](Container.md).[`width`](Container.md#width)

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

[`Container`](Container.md).[`x`](Container.md#x)

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

[`Container`](Container.md).[`y`](Container.md#y)

## Methods

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:323](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L323)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_removeNow`](Container.md#_removenow)

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

##### Inherited from

[`Container`](Container.md).[`addChild`](Container.md#addchild)

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

##### Inherited from

[`Container`](Container.md).[`addChild`](Container.md#addchild)

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

[`Container`](Container.md).[`addEventListener`](Container.md#addeventlistener)

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

[`Container`](Container.md).[`addToPosition`](Container.md#addtoposition)

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

#### Inherited from

[`Container`](Container.md).[`bringToFront`](Container.md#bringtofront)

---

### calculateDimensions()

> **calculateDimensions**(): `void`

Defined in: [source/container.ts:244](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L244)

Calculate the width/height of the container (based on the dimensions of the children elements). Doesn't consider the rotations of the elements.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`calculateDimensions`](Container.md#calculatedimensions)

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

[`Container`](Container.md).[`checkCollision`](Container.md#checkcollision)

---

### clone()

> **clone**(): `Bullet`

Defined in: [source/bullet.ts:122](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L122)

Create a clone of this element.

#### Returns

`Bullet`

#### Overrides

[`Container`](Container.md).[`clone`](Container.md#clone)

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

[`Container`](Container.md).[`dispatchEvent`](Container.md#dispatchevent)

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

[`Container`](Container.md).[`dispatchMouseClickEvent`](Container.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L203)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseMoveEvent`](Container.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L195)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOutEvent`](Container.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L187)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOverEvent`](Container.md#dispatchmouseoverevent)

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

#### Inherited from

[`Container`](Container.md).[`draw`](Container.md#draw)

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

#### Inherited from

[`Container`](Container.md).[`drawElement`](Container.md#drawelement)

---

### getAllChildren()

> **getAllChildren**(): [`Element`](Element.md)[]

Defined in: [source/container.ts:115](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L115)

Get all the children elements.

#### Returns

[`Element`](Element.md)[]

#### Inherited from

[`Container`](Container.md).[`getAllChildren`](Container.md#getallchildren)

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

[`Container`](Container.md).[`getBoundingBox`](Container.md#getboundingbox)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [source/container.ts:369](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L369)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Inherited from

[`Container`](Container.md).[`getVertices`](Container.md#getvertices)

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

[`Container`](Container.md).[`hasListeners`](Container.md#haslisteners)

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

#### Inherited from

[`Container`](Container.md).[`intersect`](Container.md#intersect)

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:339](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/element.ts#L339)

Tells if this element has already been removed or not.

#### Returns

`boolean`

#### Inherited from

[`Container`](Container.md).[`isRemoved`](Container.md#isremoved)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/bullet.ts:101](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L101)

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

#### Overrides

[`Container`](Container.md).[`logic`](Container.md#logic)

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

#### Inherited from

[`Container`](Container.md).[`mouseClickEvents`](Container.md#mouseclickevents)

---

### remove()

> **remove**(): `void`

Defined in: [source/bullet.ts:109](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L109)

Clear the target reference, before removing.
Dispatch the `remove` event as well.

#### Returns

`void`

#### Overrides

[`Container`](Container.md).[`remove`](Container.md#remove)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/container.ts:103](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L103)

Remove all of this container's children.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllChildren`](Container.md#removeallchildren)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:71](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/event_dispatcher.ts#L71)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllEventListeners`](Container.md#removealleventlisteners)

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

##### Inherited from

[`Container`](Container.md).[`removeChild`](Container.md#removechild)

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

##### Inherited from

[`Container`](Container.md).[`removeChild`](Container.md#removechild)

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

[`Container`](Container.md).[`removeEventListener`](Container.md#removeeventlistener)

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

[`Container`](Container.md).[`rotate`](Container.md#rotate)

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

[`Container`](Container.md).[`rotateDegrees`](Container.md#rotatedegrees)

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

#### Inherited from

[`Container`](Container.md).[`sendToBack`](Container.md#sendtoback)

---

### setAngle()

> **setAngle**(`angle`): `void`

Defined in: [source/bullet.ts:81](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L81)

The bullet will travel in a set direction, based on the angle given.

#### Parameters

##### angle

`number`

In radians.

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

#### Inherited from

[`Container`](Container.md).[`setChildIndex`](Container.md#setchildindex)

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

[`Container`](Container.md).[`setDimensions`](Container.md#setdimensions)

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

[`Container`](Container.md).[`setPosition`](Container.md#setposition)

---

### setTarget()

> **setTarget**(`target`): `void`

Defined in: [source/bullet.ts:92](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/bullet.ts#L92)

The bullet will follow the target, until it hits.

#### Parameters

##### target

[`Element`](Element.md)

The element to go to.

#### Returns

`void`

---

### toAxisAligned()

> **toAxisAligned**(): \{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

Defined in: [source/container.ts:286](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/container.ts#L286)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Container`](Container.md).[`toAxisAligned`](Container.md#toaxisaligned)

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

#### Inherited from

[`Container`](Container.md).[`updateVertices`](Container.md#updatevertices)
