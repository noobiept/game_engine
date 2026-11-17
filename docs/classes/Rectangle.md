[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Rectangle

# Class: Rectangle

Defined in: [source/rectangle.ts:24](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/rectangle.ts#L24)

Basic Usage:

    const rectangle = new Game.Rectangle({
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

Defined in: [source/rectangle.ts:28](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/rectangle.ts#L28)

#### Parameters

##### args

[`RectangleArgs`](../interfaces/RectangleArgs.md)

#### Returns

`Rectangle`

#### Overrides

[`Element`](Element.md).[`constructor`](Element.md#constructor)

## Properties

### \_attached

> **\_attached**: `boolean`

Defined in: [source/element.ts:97](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L97)

#### Inherited from

[`Element`](Element.md).[`_attached`](Element.md#_attached)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [source/element.ts:95](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L95)

#### Inherited from

[`Element`](Element.md).[`_container`](Element.md#_container)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [source/element.ts:99](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L99)

#### Inherited from

[`Element`](Element.md).[`_destroyed`](Element.md#_destroyed)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [source/element.ts:92](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L92)

#### Inherited from

[`Element`](Element.md).[`_half_height`](Element.md#_half_height)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [source/element.ts:91](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L91)

#### Inherited from

[`Element`](Element.md).[`_half_width`](Element.md#_half_width)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [source/element.ts:98](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L98)

#### Inherited from

[`Element`](Element.md).[`_has_logic`](Element.md#_has_logic)

---

### \_has\_previous

> `protected` **\_has\_previous**: `boolean`

Defined in: [source/element.ts:102](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L102)

#### Inherited from

[`Element`](Element.md).[`_has_previous`](Element.md#_has_previous)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:90](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L90)

#### Inherited from

[`Element`](Element.md).[`_height`](Element.md#_height)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [source/event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L34)

#### Inherited from

[`Element`](Element.md).[`_listeners`](Element.md#_listeners)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [source/element.ts:96](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L96)

#### Inherited from

[`Element`](Element.md).[`_parent_canvas`](Element.md#_parent_canvas)

---

### \_previous\_opacity

> `protected` **\_previous\_opacity**: `number`

Defined in: [source/element.ts:108](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L108)

#### Inherited from

[`Element`](Element.md).[`_previous_opacity`](Element.md#_previous_opacity)

---

### \_previous\_rotation

> `protected` **\_previous\_rotation**: `number`

Defined in: [source/element.ts:105](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L105)

#### Inherited from

[`Element`](Element.md).[`_previous_rotation`](Element.md#_previous_rotation)

---

### \_previous\_scale\_x

> `protected` **\_previous\_scale\_x**: `number`

Defined in: [source/element.ts:106](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L106)

#### Inherited from

[`Element`](Element.md).[`_previous_scale_x`](Element.md#_previous_scale_x)

---

### \_previous\_scale\_y

> `protected` **\_previous\_scale\_y**: `number`

Defined in: [source/element.ts:107](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L107)

#### Inherited from

[`Element`](Element.md).[`_previous_scale_y`](Element.md#_previous_scale_y)

---

### \_previous\_x

> `protected` **\_previous\_x**: `number`

Defined in: [source/element.ts:103](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L103)

#### Inherited from

[`Element`](Element.md).[`_previous_x`](Element.md#_previous_x)

---

### \_previous\_y

> `protected` **\_previous\_y**: `number`

Defined in: [source/element.ts:104](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L104)

#### Inherited from

[`Element`](Element.md).[`_previous_y`](Element.md#_previous_y)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:94](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L94)

#### Inherited from

[`Element`](Element.md).[`_rotation`](Element.md#_rotation)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:89](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L89)

#### Inherited from

[`Element`](Element.md).[`_width`](Element.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:87](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L87)

#### Inherited from

[`Element`](Element.md).[`_x`](Element.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:88](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L88)

#### Inherited from

[`Element`](Element.md).[`_y`](Element.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:81](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L81)

#### Inherited from

[`Element`](Element.md).[`category`](Element.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:82](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L82)

#### Inherited from

[`Element`](Element.md).[`collidesWith`](Element.md#collideswith)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [source/element.ts:85](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L85)

#### Inherited from

[`Element`](Element.md).[`collision_data`](Element.md#collision_data)

---

### color

> **color**: `string`

Defined in: [source/rectangle.ts:25](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/rectangle.ts#L25)

---

### fill

> **fill**: `boolean`

Defined in: [source/rectangle.ts:26](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/rectangle.ts#L26)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [source/element.ts:84](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L84)

#### Inherited from

[`Element`](Element.md).[`grid_data`](Element.md#grid_data)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:75](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L75)

#### Inherited from

[`Element`](Element.md).[`opacity`](Element.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:78](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L78)

#### Inherited from

[`Element`](Element.md).[`scaleX`](Element.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:79](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L79)

#### Inherited from

[`Element`](Element.md).[`scaleY`](Element.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [source/element.ts:73](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L73)

#### Inherited from

[`Element`](Element.md).[`vertices`](Element.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:76](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L76)

#### Inherited from

[`Element`](Element.md).[`visible`](Element.md#visible)

## Accessors

### bottom

#### Get Signature

> **get** **bottom**(): `number`

Defined in: [source/element.ts:741](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L741)

The `y` of the bottom edge (`y + halfHeight`). See `left`.

##### Returns

`number`

#### Set Signature

> **set** **bottom**(`bottom`): `void`

Defined in: [source/element.ts:745](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L745)

##### Parameters

###### bottom

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`bottom`](Element.md#bottom)

---

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [source/element.ts:699](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L699)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`halfHeight`](Element.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:695](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L695)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`halfWidth`](Element.md#halfwidth)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:686](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L686)

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [source/element.ts:690](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L690)

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

Defined in: [source/element.ts:708](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L708)

The position model is center-origin (`x`/`y` is the center). `left` is the `x` of the left edge
(`x - halfWidth`), and setting it moves the element so its left edge is there. With `top`, `right` and
`bottom`, it's convenient for top-left based games. They don't consider the rotation or scale.

##### Returns

`number`

#### Set Signature

> **set** **left**(`left`): `void`

Defined in: [source/element.ts:712](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L712)

##### Parameters

###### left

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`left`](Element.md#left)

---

### right

#### Get Signature

> **get** **right**(): `number`

Defined in: [source/element.ts:730](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L730)

The `x` of the right edge (`x + halfWidth`). See `left`.

##### Returns

`number`

#### Set Signature

> **set** **right**(`right`): `void`

Defined in: [source/element.ts:734](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L734)

##### Parameters

###### right

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`right`](Element.md#right)

---

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [source/element.ts:448](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L448)

##### Returns

`number`

Rotation in radians.

#### Set Signature

> **set** **rotation**(`angle`): `void`

Defined in: [source/element.ts:455](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L455)

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

Defined in: [source/element.ts:719](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L719)

The `y` of the top edge (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Set Signature

> **set** **top**(`top`): `void`

Defined in: [source/element.ts:723](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L723)

##### Parameters

###### top

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`top`](Element.md#top)

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:677](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L677)

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [source/element.ts:681](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L681)

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

Defined in: [source/element.ts:663](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L663)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [source/element.ts:657](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L657)

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

Defined in: [source/element.ts:673](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L673)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [source/element.ts:667](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L667)

##### Parameters

###### y

`number`

##### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`y`](Element.md#y)

## Methods

### \_applyTransform()

> `protected` **\_applyTransform**(`ctx`): `void`

Defined in: [source/element.ts:190](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L190)

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

[`Element`](Element.md).[`_applyTransform`](Element.md#_applytransform)

---

### \_attach()

> **\_attach**(): `void`

Defined in: [source/element.ts:534](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L534)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_attach`](Element.md#_attach)

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [source/element.ts:557](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L557)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_checkCanBeAdded`](Element.md#_checkcanbeadded)

---

### \_copyPropertiesTo()

> `protected` **\_copyPropertiesTo**(`element`): `void`

Defined in: [source/element.ts:568](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L568)

Copy the properties that every element has (opacity, visibility, scale, rotation and collision settings) to a clone.

#### Parameters

##### element

[`Element`](Element.md)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_copyPropertiesTo`](Element.md#_copypropertiesto)

---

### \_destroyNow()

> **\_destroyNow**(): `void`

Defined in: [source/element.ts:498](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L498)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_destroyNow`](Element.md#_destroynow)

---

### \_detach()

> **\_detach**(): `void`

Defined in: [source/element.ts:545](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L545)

Called when the element stops being part of a canvas.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_detach`](Element.md#_detach)

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [source/element.ts:519](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L519)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

#### Inherited from

[`Element`](Element.md).[`_detachFromParent`](Element.md#_detachfromparent)

---

### \_positionChanged()

> `protected` **\_positionChanged**(): `void`

Defined in: [source/element.ts:633](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L633)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_positionChanged`](Element.md#_positionchanged)

---

### \_refreshVertices()

> **\_refreshVertices**(): `void`

Defined in: [source/element.ts:313](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L313)

Calculate the vertices from the current position/scale/rotation of this element, and of the containers it's in
(the collision detection calculates them once per update, before the logic can move the elements).

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_refreshVertices`](Element.md#_refreshvertices)

---

### \_savePrevious()

> **\_savePrevious**(): `void`

Defined in: [source/element.ts:221](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L221)

Save the current state, at the start of a step (with a fixed update rate, see `Game.setFixedTimestep()`).

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_savePrevious`](Element.md#_saveprevious)

---

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event\_dispatcher.ts:48](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L48)

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

[`Element`](Element.md).[`addEventListener`](Element.md#addeventlistener)

---

### addToPosition()

> **addToPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:650](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L650)

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

Defined in: [source/element.ts:276](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L276)

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

Defined in: [source/rectangle.ts:69](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/rectangle.ts#L69)

Create a clone of this element.

#### Returns

`Rectangle`

#### Overrides

[`Element`](Element.md).[`clone`](Element.md#clone)

---

### destroy()

> **destroy**(): `void`

Defined in: [source/element.ts:486](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L486)

Destroy this element. Right away, it's marked as destroyed (`isDestroyed()` returns `true`), it stops colliding,
and its tweens are stopped (so a tween's `.call()` doesn't run for it anymore). At the end of the current frame
it's taken out of its container/canvas and out of the collision detection. It's safe to call from the
logic/event code.

A destroyed element can't be added again. To take an element out of the game and add it back later, use
`removeChild()` on its container/canvas (or `Game.removeElement()`) instead.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`destroy`](Element.md#destroy)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event\_dispatcher.ts:125](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L125)

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

Defined in: [source/element.ts:383](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L383)

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

Defined in: [source/element.ts:372](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L372)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseMoveEvent`](Element.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:364](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L364)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseOutEvent`](Element.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:356](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L356)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseOverEvent`](Element.md#dispatchmouseoverevent)

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [source/element.ts:179](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L179)

Draws this element, and all of its _children.

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

Defined in: [source/rectangle.ts:44](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/rectangle.ts#L44)

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

Defined in: [source/element.ts:754](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L754)

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

Defined in: [source/element.ts:622](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L622)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

#### Inherited from

[`Element`](Element.md).[`getVertices`](Element.md#getvertices)

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event\_dispatcher.ts:146](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L146)

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

Defined in: [source/element.ts:254](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L254)

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

### isDestroyed()

> **isDestroyed**(): `boolean`

Defined in: [source/element.ts:510](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L510)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

#### Inherited from

[`Element`](Element.md).[`isDestroyed`](Element.md#isdestroyed)

---

### logic()

> **logic**(`_deltaTime`): `void`

Defined in: [source/element.ts:247](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L247)

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

Defined in: [source/element.ts:342](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L342)

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

### overlaps()

> **overlaps**(`other`): `boolean`

Defined in: [source/element.ts:298](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L298)

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

[`Element`](Element.md).[`overlaps`](Element.md#overlaps)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`removeAllEventListeners`](Element.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event\_dispatcher.ts:74](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L74)

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

### resetInterpolation()

> **resetInterpolation**(): `void`

Defined in: [source/element.ts:237](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L237)

With a fixed update rate (see `Game.setFixedTimestep()`), the elements are drawn between where they were in
the last two steps, so they move smoothly. After moving an element to a new place at once (a respawn, or
starting a level), call this to draw it right there, instead of moving there smoothly during the next step.
Elements are reset when they're added to a container/canvas.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`resetInterpolation`](Element.md#resetinterpolation)

---

### rotate()

> **rotate**(`radians`): `void`

Defined in: [source/element.ts:464](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L464)

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

Defined in: [source/element.ts:473](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L473)

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

Defined in: [source/element.ts:394](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L394)

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

Defined in: [source/element.ts:640](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L640)

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

Defined in: [source/element.ts:404](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L404)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Element`](Element.md).[`toAxisAligned`](Element.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/element.ts:587](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L587)

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
