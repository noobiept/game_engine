[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Bullet

# Class: Bullet

Defined in: [source/bullet.ts:39](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L39)

Basic Usage:

    const bulletShape = new Game.Rectangle({
            width: 10,
            height: 2,
            color: 'blue'
        });
    const bullet = new Game.Bullet({
            x: 10,
            y: 10,
            angleOrTarget: 0,
            movementSpeed: 100
        });
    bullet.addChild( bulletShape );
    bullet.addEventListener( 'destroy', function( data )
        {
        console.log( 'Bullet destroyed!' );
        });

    Game.addElement( bullet );

Events:

- `destroy` -- `listener( data: { element: Bullet; };` (when the bullet is destroyed)

## Extends

- [`Container`](Container.md)

## Constructors

### Constructor

> **new Bullet**(`args`): `Bullet`

Defined in: [source/bullet.ts:44](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L44)

#### Parameters

##### args

[`BulletArgs`](../interfaces/BulletArgs.md)

#### Returns

`Bullet`

#### Overrides

[`Container`](Container.md).[`constructor`](Container.md#constructor)

## Properties

### \_attached

> **\_attached**: `boolean`

Defined in: [source/element.ts:97](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L97)

#### Inherited from

[`Container`](Container.md).[`_attached`](Container.md#_attached)

---

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [source/container.ts:46](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L46)

#### Inherited from

[`Container`](Container.md).[`_children`](Container.md#_children)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [source/element.ts:95](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L95)

#### Inherited from

[`Container`](Container.md).[`_container`](Container.md#_container)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [source/element.ts:99](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L99)

#### Inherited from

[`Container`](Container.md).[`_destroyed`](Container.md#_destroyed)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [source/element.ts:92](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L92)

#### Inherited from

[`Container`](Container.md).[`_half_height`](Container.md#_half_height)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [source/element.ts:91](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L91)

#### Inherited from

[`Container`](Container.md).[`_half_width`](Container.md#_half_width)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [source/element.ts:98](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L98)

#### Inherited from

[`Container`](Container.md).[`_has_logic`](Container.md#_has_logic)

---

### \_has\_previous

> `protected` **\_has\_previous**: `boolean`

Defined in: [source/element.ts:102](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L102)

#### Inherited from

[`Container`](Container.md).[`_has_previous`](Container.md#_has_previous)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:90](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L90)

#### Inherited from

[`Container`](Container.md).[`_height`](Container.md#_height)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [source/event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/event_dispatcher.ts#L34)

#### Inherited from

[`Container`](Container.md).[`_listeners`](Container.md#_listeners)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [source/element.ts:96](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L96)

#### Inherited from

[`Container`](Container.md).[`_parent_canvas`](Container.md#_parent_canvas)

---

### \_previous\_opacity

> `protected` **\_previous\_opacity**: `number`

Defined in: [source/element.ts:108](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L108)

#### Inherited from

[`Container`](Container.md).[`_previous_opacity`](Container.md#_previous_opacity)

---

### \_previous\_rotation

> `protected` **\_previous\_rotation**: `number`

Defined in: [source/element.ts:105](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L105)

#### Inherited from

[`Container`](Container.md).[`_previous_rotation`](Container.md#_previous_rotation)

---

### \_previous\_scale\_x

> `protected` **\_previous\_scale\_x**: `number`

Defined in: [source/element.ts:106](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L106)

#### Inherited from

[`Container`](Container.md).[`_previous_scale_x`](Container.md#_previous_scale_x)

---

### \_previous\_scale\_y

> `protected` **\_previous\_scale\_y**: `number`

Defined in: [source/element.ts:107](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L107)

#### Inherited from

[`Container`](Container.md).[`_previous_scale_y`](Container.md#_previous_scale_y)

---

### \_previous\_x

> `protected` **\_previous\_x**: `number`

Defined in: [source/element.ts:103](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L103)

#### Inherited from

[`Container`](Container.md).[`_previous_x`](Container.md#_previous_x)

---

### \_previous\_y

> `protected` **\_previous\_y**: `number`

Defined in: [source/element.ts:104](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L104)

#### Inherited from

[`Container`](Container.md).[`_previous_y`](Container.md#_previous_y)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:94](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L94)

#### Inherited from

[`Container`](Container.md).[`_rotation`](Container.md#_rotation)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:89](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L89)

#### Inherited from

[`Container`](Container.md).[`_width`](Container.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:87](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L87)

#### Inherited from

[`Container`](Container.md).[`_x`](Container.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:88](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L88)

#### Inherited from

[`Container`](Container.md).[`_y`](Container.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:81](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L81)

#### Inherited from

[`Container`](Container.md).[`category`](Container.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:82](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L82)

#### Inherited from

[`Container`](Container.md).[`collidesWith`](Container.md#collideswith)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [source/element.ts:85](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L85)

#### Inherited from

[`Container`](Container.md).[`collision_data`](Container.md#collision_data)

---

### damage

> **damage**: `number`

Defined in: [source/bullet.ts:41](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L41)

---

### element

> **element**: [`Element`](Element.md) \| `null`

Defined in: [source/bullet.ts:42](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L42)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [source/element.ts:84](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L84)

#### Inherited from

[`Container`](Container.md).[`grid_data`](Container.md#grid_data)

---

### movement

> **movement**: [`Movement`](Movement.md) \| `null`

Defined in: [source/bullet.ts:40](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L40)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:75](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L75)

#### Inherited from

[`Container`](Container.md).[`opacity`](Container.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:78](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L78)

#### Inherited from

[`Container`](Container.md).[`scaleX`](Container.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:79](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L79)

#### Inherited from

[`Container`](Container.md).[`scaleY`](Container.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [source/element.ts:73](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L73)

#### Inherited from

[`Container`](Container.md).[`vertices`](Container.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:76](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L76)

#### Inherited from

[`Container`](Container.md).[`visible`](Container.md#visible)

## Accessors

### bottom

#### Get Signature

> **get** **bottom**(): `number`

Defined in: [source/element.ts:741](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L741)

The `y` of the bottom edge (`y + halfHeight`). See `left`.

##### Returns

`number`

#### Set Signature

> **set** **bottom**(`bottom`): `void`

Defined in: [source/element.ts:745](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L745)

##### Parameters

###### bottom

`number`

##### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`bottom`](Container.md#bottom)

---

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [source/element.ts:699](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L699)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`halfHeight`](Container.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:695](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L695)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`halfWidth`](Container.md#halfwidth)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:686](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L686)

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [source/element.ts:690](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L690)

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

Defined in: [source/element.ts:708](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L708)

The position model is center-origin (`x`/`y` is the center). `left` is the `x` of the left edge
(`x - halfWidth`), and setting it moves the element so its left edge is there. With `top`, `right` and
`bottom`, it's convenient for top-left based games. They don't consider the rotation or scale.

##### Returns

`number`

#### Set Signature

> **set** **left**(`left`): `void`

Defined in: [source/element.ts:712](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L712)

##### Parameters

###### left

`number`

##### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`left`](Container.md#left)

---

### right

#### Get Signature

> **get** **right**(): `number`

Defined in: [source/element.ts:730](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L730)

The `x` of the right edge (`x + halfWidth`). See `left`.

##### Returns

`number`

#### Set Signature

> **set** **right**(`right`): `void`

Defined in: [source/element.ts:734](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L734)

##### Parameters

###### right

`number`

##### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`right`](Container.md#right)

---

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [source/element.ts:448](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L448)

##### Returns

`number`

Rotation in radians.

#### Set Signature

> **set** **rotation**(`angle`): `void`

Defined in: [source/element.ts:455](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L455)

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

Defined in: [source/element.ts:719](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L719)

The `y` of the top edge (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Set Signature

> **set** **top**(`top`): `void`

Defined in: [source/element.ts:723](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L723)

##### Parameters

###### top

`number`

##### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`top`](Container.md#top)

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:677](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L677)

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [source/element.ts:681](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L681)

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

Defined in: [source/element.ts:663](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L663)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [source/element.ts:657](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L657)

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

Defined in: [source/element.ts:673](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L673)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [source/element.ts:667](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L667)

##### Parameters

###### y

`number`

##### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`y`](Container.md#y)

## Methods

### \_applyTransform()

> `protected` **\_applyTransform**(`ctx`): `void`

Defined in: [source/element.ts:190](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L190)

Apply this element's opacity, position, scale and rotation to the canvas context (used when drawing it).
With a fixed update rate (see `Game.setFixedTimestep()`), they're between the ones of the last two steps, so the
element moves smoothly on displays that refresh faster than the steps.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Canvas context.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_applyTransform`](Container.md#_applytransform)

---

### \_attach()

> **\_attach**(): `void`

Defined in: [source/container.ts:194](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L194)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_attach`](Container.md#_attach)

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [source/element.ts:557](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L557)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_checkCanBeAdded`](Container.md#_checkcanbeadded)

---

### \_copyPropertiesTo()

> `protected` **\_copyPropertiesTo**(`element`): `void`

Defined in: [source/element.ts:568](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L568)

Copy the properties that every element has (opacity, visibility, scale, rotation and collision settings) to a clone.

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_copyPropertiesTo`](Container.md#_copypropertiesto)

---

### \_destroyNow()

> **\_destroyNow**(): `void`

Defined in: [source/element.ts:498](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L498)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_destroyNow`](Container.md#_destroynow)

---

### \_detach()

> **\_detach**(): `void`

Defined in: [source/container.ts:206](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L206)

Called when the element stops being part of a canvas.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_detach`](Container.md#_detach)

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [source/element.ts:519](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L519)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

#### Inherited from

[`Container`](Container.md).[`_detachFromParent`](Container.md#_detachfromparent)

---

### \_hasAncestor()

> `protected` **\_hasAncestor**(`element`): `boolean`

Defined in: [source/container.ts:180](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L180)

Tells if the given element is one of the containers this container is in (its parent, the parent's parent, etc).

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`boolean`

#### Inherited from

[`Container`](Container.md).[`_hasAncestor`](Container.md#_hasancestor)

---

### \_positionChanged()

> `protected` **\_positionChanged**(): `void`

Defined in: [source/element.ts:633](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L633)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_positionChanged`](Container.md#_positionchanged)

---

### \_refreshVertices()

> **\_refreshVertices**(): `void`

Defined in: [source/element.ts:313](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L313)

Calculate the vertices from the current position/scale/rotation of this element, and of the containers it's in
(the collision detection calculates them once per update, before the logic can move the elements).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_refreshVertices`](Container.md#_refreshvertices)

---

### \_savePrevious()

> **\_savePrevious**(): `void`

Defined in: [source/container.ts:287](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L287)

Save the current state of the container and its children, at the start of a step (with a fixed update rate).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_savePrevious`](Container.md#_saveprevious)

---

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [source/container.ts:73](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L73)

Add elements to this container (drawn on top of the current children).
An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

Throws if an element was destroyed (with `destroy()`), or when adding a container to itself or to one of its children.

##### Parameters

###### children

[`Element`](Element.md) \| readonly [`Element`](Element.md)[]

##### Returns

`void`

##### Inherited from

[`Container`](Container.md).[`addChild`](Container.md#addchild)

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [source/container.ts:74](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L74)

Add elements to this container (drawn on top of the current children).
An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

Throws if an element was destroyed (with `destroy()`), or when adding a container to itself or to one of its children.

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

Defined in: [source/event\_dispatcher.ts:48](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/event_dispatcher.ts#L48)

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

If it was successfully added (`false` when it isn't a function, or was already added).

#### Inherited from

[`Container`](Container.md).[`addEventListener`](Container.md#addeventlistener)

---

### addToPosition()

> **addToPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:650](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L650)

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

Defined in: [source/container.ts:221](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L221)

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

Defined in: [source/container.ts:378](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L378)

Calculate the width/height of the container, from the area its children cover (each child's `x`/`y` is its center).
Doesn't consider the scale or rotation of the children. It's called automatically when children are added/removed.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`calculateDimensions`](Container.md#calculatedimensions)

---

### checkCollision()

> **checkCollision**(`other`): `boolean`

Defined in: [source/element.ts:276](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L276)

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

Defined in: [source/bullet.ts:114](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L114)

Create a clone of this element.

#### Returns

`Bullet`

#### Overrides

[`Container`](Container.md).[`clone`](Container.md#clone)

---

### destroy()

> **destroy**(): `void`

Defined in: [source/bullet.ts:101](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L101)

Clear the target reference, before removing.
Dispatch the `destroy` event as well.

#### Returns

`void`

#### Overrides

[`Container`](Container.md).[`destroy`](Container.md#destroy)

---

### destroyAllChildren()

> **destroyAllChildren**(): `void`

Defined in: [source/container.ts:162](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L162)

Destroy all of this container's children (see `Element.destroy()`), but keep the container. Useful when the
container stays in the game, for example a layer that sets the drawing order, and its elements are thrown away
(when restarting a level).

Like `destroy()`, the children stop colliding right away, but they're only taken out of the container at the end
of the frame (until then they're still in `getAllChildren()`).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`destroyAllChildren`](Container.md#destroyallchildren)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event\_dispatcher.ts:125](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/event_dispatcher.ts#L125)

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

Defined in: [source/element.ts:383](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L383)

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

Defined in: [source/element.ts:372](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L372)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseMoveEvent`](Container.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:364](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L364)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOutEvent`](Container.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:356](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L356)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOverEvent`](Container.md#dispatchmouseoverevent)

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [source/container.ts:300](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L300)

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

Defined in: [source/container.ts:323](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L323)

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

> **getAllChildren**(): readonly [`Element`](Element.md)[]

Defined in: [source/container.ts:173](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L173)

Get all the children elements (in the drawing order, from the back to the front).
It's the container's own list, so it changes when children are added/removed. Copy it (with `slice()`) to keep
the current children.

#### Returns

readonly [`Element`](Element.md)[]

#### Inherited from

[`Container`](Container.md).[`getAllChildren`](Container.md#getallchildren)

---

### getBoundingBox()

> **getBoundingBox**(): `object`

Defined in: [source/element.ts:754](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L754)

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

Defined in: [source/container.ts:499](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L499)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Inherited from

[`Container`](Container.md).[`getVertices`](Container.md#getvertices)

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event\_dispatcher.ts:146](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/event_dispatcher.ts#L146)

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

Defined in: [source/container.ts:330](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L330)

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

### isDestroyed()

> **isDestroyed**(): `boolean`

Defined in: [source/element.ts:510](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L510)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

#### Inherited from

[`Container`](Container.md).[`isDestroyed`](Container.md#isdestroyed)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/bullet.ts:93](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L93)

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

Defined in: [source/container.ts:351](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L351)

The front child under the mouse that listens to the event gets it (and it reaches this container through it).
When no child listens to it, this container gets it if the mouse is over one of its children.

#### Parameters

##### x

`number`

##### y

`number`

##### event

`MouseEvent`

#### Returns

`boolean`

If an element got the event.

#### Inherited from

[`Container`](Container.md).[`mouseClickEvents`](Container.md#mouseclickevents)

---

### overlaps()

> **overlaps**(`other`): `boolean`

Defined in: [source/element.ts:298](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L298)

Tells if this element overlaps another one right now, for a game that checks it in its own logic (the player
against the cars, after moving them). It uses the current position, scale and rotation of both elements and of
the containers they're in, and the same shapes as the collision detection (a circle is a 16-sided polygon, a
container is the shapes of its children). It doesn't consider `category`/`collidesWith`, and it doesn't dispatch
the `collision` event. A destroyed element doesn't overlap anything.

    if ( player.overlaps( car ) ) {
        loseLife();
    }

#### Parameters

##### other

[`Element`](Element.md)

#### Returns

`boolean`

#### Inherited from

[`Container`](Container.md).[`overlaps`](Container.md#overlaps)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/container.ts:143](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L143)

Detach all of this container's children, right away (see `removeChild()`).
To destroy the children instead, call `destroyAllChildren()` (or `destroy()` to destroy the container as well).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllChildren`](Container.md#removeallchildren)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllEventListeners`](Container.md#removealleventlisteners)

---

### removeChild()

#### Call Signature

> **removeChild**(`children`): `boolean`

Defined in: [source/container.ts:113](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L113)

Detach elements from this container, right away. They're no longer drawn, updated or considered in the collision
detection, but they aren't destroyed, so they can be added again later. Elements that aren't children of this
container are ignored. To destroy an element, call its `destroy()` method instead.

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| readonly [`Element`](Element.md)[]

##### Returns

`boolean`

If any of the elements was a child (and was detached).

##### Inherited from

[`Container`](Container.md).[`removeChild`](Container.md#removechild)

#### Call Signature

> **removeChild**(...`elements`): `boolean`

Defined in: [source/container.ts:114](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L114)

Detach elements from this container, right away. They're no longer drawn, updated or considered in the collision
detection, but they aren't destroyed, so they can be added again later. Elements that aren't children of this
container are ignored. To destroy an element, call its `destroy()` method instead.

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

##### Parameters

###### elements

...[`Element`](Element.md)[]

##### Returns

`boolean`

If any of the elements was a child (and was detached).

##### Inherited from

[`Container`](Container.md).[`removeChild`](Container.md#removechild)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event\_dispatcher.ts:74](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/event_dispatcher.ts#L74)

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

### resetInterpolation()

> **resetInterpolation**(): `void`

Defined in: [source/element.ts:237](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L237)

With a fixed update rate (see `Game.setFixedTimestep()`), the elements are drawn between where they were in
the last two steps, so they move smoothly. After moving an element to a new place at once (a respawn, or
starting a level), call this to draw it right there, instead of moving there smoothly during the next step.
Elements are reset when they're added to a container/canvas.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`resetInterpolation`](Container.md#resetinterpolation)

---

### rotate()

> **rotate**(`radians`): `void`

Defined in: [source/element.ts:464](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L464)

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

Defined in: [source/element.ts:473](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L473)

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

Defined in: [source/container.ts:235](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L235)

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

Defined in: [source/bullet.ts:73](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L73)

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

Defined in: [source/container.ts:249](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L249)

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

Defined in: [source/element.ts:394](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L394)

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

Defined in: [source/element.ts:640](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/element.ts#L640)

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

Defined in: [source/bullet.ts:84](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/bullet.ts#L84)

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

Defined in: [source/container.ts:408](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L408)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Container`](Container.md).[`toAxisAligned`](Container.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/container.ts:477](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/container.ts#L477)

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
