[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / ScrollingBitmap

# Class: ScrollingBitmap

Defined in: [source/scrolling\_bitmap.ts:42](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L42)

Basic Usage:

    const image = new Game.ScrollingBitmap({
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

Defined in: [source/scrolling\_bitmap.ts:50](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L50)

#### Parameters

##### args

[`ScrollingBitmapArgs`](../interfaces/ScrollingBitmapArgs.md)

#### Returns

`ScrollingBitmap`

#### Overrides

[`Bitmap`](Bitmap.md).[`constructor`](Bitmap.md#constructor)

## Properties

### \_attached

> **\_attached**: `boolean`

Defined in: [source/element.ts:97](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L97)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_attached`](Bitmap.md#_attached)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [source/element.ts:95](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L95)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_container`](Bitmap.md#_container)

---

### \_count

> `protected` **\_count**: `number`

Defined in: [source/scrolling\_bitmap.ts:43](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L43)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [source/element.ts:99](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L99)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_destroyed`](Bitmap.md#_destroyed)

---

### \_direction

> `protected` **\_direction**: [`Direction`](../Game-Engine/namespaces/ScrollingBitmapArgs/enumerations/Direction.md) = `ScrollingBitmapArgs.Direction.left`

Defined in: [source/scrolling\_bitmap.ts:47](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L47)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [source/element.ts:92](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L92)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_height`](Bitmap.md#_half_height)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [source/element.ts:91](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L91)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_width`](Bitmap.md#_half_width)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [source/element.ts:98](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L98)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_has_logic`](Bitmap.md#_has_logic)

---

### \_has\_previous

> `protected` **\_has\_previous**: `boolean`

Defined in: [source/element.ts:102](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L102)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_has_previous`](Bitmap.md#_has_previous)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:90](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L90)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_height`](Bitmap.md#_height)

---

### \_image

> `protected` **\_image**: `HTMLImageElement`

Defined in: [source/bitmap.ts:22](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/bitmap.ts#L22)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_image`](Bitmap.md#_image)

---

### \_interval

> `protected` **\_interval**: `number` = `0`

Defined in: [source/scrolling\_bitmap.ts:44](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L44)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [source/event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L34)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_listeners`](Bitmap.md#_listeners)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [source/element.ts:96](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L96)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_parent_canvas`](Bitmap.md#_parent_canvas)

---

### \_previous\_opacity

> `protected` **\_previous\_opacity**: `number`

Defined in: [source/element.ts:108](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L108)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_previous_opacity`](Bitmap.md#_previous_opacity)

---

### \_previous\_rotation

> `protected` **\_previous\_rotation**: `number`

Defined in: [source/element.ts:105](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L105)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_previous_rotation`](Bitmap.md#_previous_rotation)

---

### \_previous\_scale\_x

> `protected` **\_previous\_scale\_x**: `number`

Defined in: [source/element.ts:106](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L106)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_previous_scale_x`](Bitmap.md#_previous_scale_x)

---

### \_previous\_scale\_y

> `protected` **\_previous\_scale\_y**: `number`

Defined in: [source/element.ts:107](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L107)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_previous_scale_y`](Bitmap.md#_previous_scale_y)

---

### \_previous\_x

> `protected` **\_previous\_x**: `number`

Defined in: [source/element.ts:103](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L103)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_previous_x`](Bitmap.md#_previous_x)

---

### \_previous\_y

> `protected` **\_previous\_y**: `number`

Defined in: [source/element.ts:104](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L104)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_previous_y`](Bitmap.md#_previous_y)

---

### \_ref\_position

> `protected` **\_ref\_position**: `number`

Defined in: [source/scrolling\_bitmap.ts:46](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L46)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:94](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L94)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_rotation`](Bitmap.md#_rotation)

---

### \_scroll

> `protected` **\_scroll**: () => `void`

Defined in: [source/scrolling\_bitmap.ts:48](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L48)

#### Returns

`void`

---

### \_source\_x

> `protected` **\_source\_x**: `number`

Defined in: [source/bitmap.ts:23](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/bitmap.ts#L23)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_x`](Bitmap.md#_source_x)

---

### \_source\_y

> `protected` **\_source\_y**: `number`

Defined in: [source/bitmap.ts:24](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/bitmap.ts#L24)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_y`](Bitmap.md#_source_y)

---

### \_step

> `protected` **\_step**: `number`

Defined in: [source/scrolling\_bitmap.ts:45](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L45)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:89](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L89)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_width`](Bitmap.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:87](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L87)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_x`](Bitmap.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:88](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L88)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_y`](Bitmap.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:81](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L81)

#### Inherited from

[`Bitmap`](Bitmap.md).[`category`](Bitmap.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:82](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L82)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collidesWith`](Bitmap.md#collideswith)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [source/element.ts:85](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L85)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collision_data`](Bitmap.md#collision_data)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [source/element.ts:84](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L84)

#### Inherited from

[`Bitmap`](Bitmap.md).[`grid_data`](Bitmap.md#grid_data)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:75](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L75)

#### Inherited from

[`Bitmap`](Bitmap.md).[`opacity`](Bitmap.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:78](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L78)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleX`](Bitmap.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:79](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L79)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleY`](Bitmap.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [source/element.ts:73](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L73)

#### Inherited from

[`Bitmap`](Bitmap.md).[`vertices`](Bitmap.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:76](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L76)

#### Inherited from

[`Bitmap`](Bitmap.md).[`visible`](Bitmap.md#visible)

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

[`Bitmap`](Bitmap.md).[`bottom`](Bitmap.md#bottom)

---

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [source/element.ts:699](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L699)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`halfHeight`](Bitmap.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:695](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L695)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`halfWidth`](Bitmap.md#halfwidth)

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

[`Bitmap`](Bitmap.md).[`height`](Bitmap.md#height)

---

### image

#### Get Signature

> **get** **image**(): `HTMLImageElement`

Defined in: [source/bitmap.ts:63](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/bitmap.ts#L63)

##### Returns

`HTMLImageElement`

#### Set Signature

> **set** **image**(`newImage`): `void`

Defined in: [source/bitmap.ts:67](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/bitmap.ts#L67)

##### Parameters

###### newImage

`HTMLImageElement`

##### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`image`](Bitmap.md#image)

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

[`Bitmap`](Bitmap.md).[`left`](Bitmap.md#left)

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

[`Bitmap`](Bitmap.md).[`right`](Bitmap.md#right)

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

[`Bitmap`](Bitmap.md).[`rotation`](Bitmap.md#rotation)

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

[`Bitmap`](Bitmap.md).[`top`](Bitmap.md#top)

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

[`Bitmap`](Bitmap.md).[`width`](Bitmap.md#width)

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

[`Bitmap`](Bitmap.md).[`x`](Bitmap.md#x)

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

[`Bitmap`](Bitmap.md).[`y`](Bitmap.md#y)

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

[`Bitmap`](Bitmap.md).[`_applyTransform`](Bitmap.md#_applytransform)

---

### \_attach()

> **\_attach**(): `void`

Defined in: [source/element.ts:534](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L534)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_attach`](Bitmap.md#_attach)

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [source/element.ts:557](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L557)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_checkCanBeAdded`](Bitmap.md#_checkcanbeadded)

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

[`Bitmap`](Bitmap.md).[`_copyPropertiesTo`](Bitmap.md#_copypropertiesto)

---

### \_destroyNow()

> **\_destroyNow**(): `void`

Defined in: [source/element.ts:498](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L498)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_destroyNow`](Bitmap.md#_destroynow)

---

### \_detach()

> **\_detach**(): `void`

Defined in: [source/element.ts:545](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L545)

Called when the element stops being part of a canvas.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_detach`](Bitmap.md#_detach)

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [source/element.ts:519](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L519)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

#### Inherited from

[`Bitmap`](Bitmap.md).[`_detachFromParent`](Bitmap.md#_detachfromparent)

---

### \_draw\_horizontal()

> `protected` **\_draw\_horizontal**(`ctx`): `void`

Defined in: [source/scrolling\_bitmap.ts:154](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L154)

Used for the horizontal movement (left or right).

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

---

### \_draw\_vertical()

> `protected` **\_draw\_vertical**(`ctx`): `void`

Defined in: [source/scrolling\_bitmap.ts:196](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L196)

Used for the vertical movement (top or bottom).

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

---

### \_positionChanged()

> `protected` **\_positionChanged**(): `void`

Defined in: [source/element.ts:633](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L633)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_positionChanged`](Bitmap.md#_positionchanged)

---

### \_refreshVertices()

> **\_refreshVertices**(): `void`

Defined in: [source/element.ts:313](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L313)

Calculate the vertices from the current position/scale/rotation of this element, and of the containers it's in
(the collision detection calculates them once per update, before the logic can move the elements).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_refreshVertices`](Bitmap.md#_refreshvertices)

---

### \_savePrevious()

> **\_savePrevious**(): `void`

Defined in: [source/element.ts:221](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L221)

Save the current state, at the start of a step (with a fixed update rate, see `Game.setFixedTimestep()`).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_savePrevious`](Bitmap.md#_saveprevious)

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

[`Bitmap`](Bitmap.md).[`addEventListener`](Bitmap.md#addeventlistener)

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

[`Bitmap`](Bitmap.md).[`addToPosition`](Bitmap.md#addtoposition)

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

[`Bitmap`](Bitmap.md).[`checkCollision`](Bitmap.md#checkcollision)

---

### clearInterval()

> **clearInterval**(): `void`

Defined in: [source/scrolling\_bitmap.ts:113](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L113)

Stop the animation.

#### Returns

`void`

---

### clone()

> **clone**(): `ScrollingBitmap`

Defined in: [source/scrolling\_bitmap.ts:251](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L251)

Get a copy of this object.

#### Returns

`ScrollingBitmap`

#### Overrides

[`Bitmap`](Bitmap.md).[`clone`](Bitmap.md#clone)

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

[`Bitmap`](Bitmap.md).[`destroy`](Bitmap.md#destroy)

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

[`Bitmap`](Bitmap.md).[`dispatchEvent`](Bitmap.md#dispatchevent)

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

[`Bitmap`](Bitmap.md).[`dispatchMouseClickEvent`](Bitmap.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:372](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L372)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseMoveEvent`](Bitmap.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:364](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L364)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOutEvent`](Bitmap.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:356](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L356)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOverEvent`](Bitmap.md#dispatchmouseoverevent)

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

[`Bitmap`](Bitmap.md).[`draw`](Bitmap.md#draw)

---

### drawElement()

> **drawElement**(`ctx`): `void`

Defined in: [source/bitmap.ts:34](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/bitmap.ts#L34)

Draws just this element.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Canvas context.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`drawElement`](Bitmap.md#drawelement)

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

[`Bitmap`](Bitmap.md).[`getBoundingBox`](Bitmap.md#getboundingbox)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

Defined in: [source/element.ts:622](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L622)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

#### Inherited from

[`Bitmap`](Bitmap.md).[`getVertices`](Bitmap.md#getvertices)

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

[`Bitmap`](Bitmap.md).[`hasListeners`](Bitmap.md#haslisteners)

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

[`Bitmap`](Bitmap.md).[`intersect`](Bitmap.md#intersect)

---

### isDestroyed()

> **isDestroyed**(): `boolean`

Defined in: [source/element.ts:510](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L510)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

#### Inherited from

[`Bitmap`](Bitmap.md).[`isDestroyed`](Bitmap.md#isdestroyed)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/scrolling\_bitmap.ts:238](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L238)

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

[`Bitmap`](Bitmap.md).[`mouseClickEvents`](Bitmap.md#mouseclickevents)

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

[`Bitmap`](Bitmap.md).[`overlaps`](Bitmap.md#overlaps)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`removeAllEventListeners`](Bitmap.md#removealleventlisteners)

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

[`Bitmap`](Bitmap.md).[`removeEventListener`](Bitmap.md#removeeventlistener)

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

[`Bitmap`](Bitmap.md).[`resetInterpolation`](Bitmap.md#resetinterpolation)

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

[`Bitmap`](Bitmap.md).[`rotate`](Bitmap.md#rotate)

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

[`Bitmap`](Bitmap.md).[`rotateDegrees`](Bitmap.md#rotatedegrees)

---

### scroll\_bottom()

> **scroll\_bottom**(): `void`

Defined in: [source/scrolling\_bitmap.ts:144](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L144)

Scroll to the bottom.

#### Returns

`void`

---

### scroll\_left()

> **scroll\_left**(): `void`

Defined in: [source/scrolling\_bitmap.ts:120](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L120)

Scroll to the left.

#### Returns

`void`

---

### scroll\_right()

> **scroll\_right**(): `void`

Defined in: [source/scrolling\_bitmap.ts:127](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L127)

Scroll to the right.

#### Returns

`void`

---

### scroll\_top()

> **scroll\_top**(): `void`

Defined in: [source/scrolling\_bitmap.ts:134](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L134)

Scroll to the top.

#### Returns

`void`

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

[`Bitmap`](Bitmap.md).[`setDimensions`](Bitmap.md#setdimensions)

---

### setDirection()

> **setDirection**(`direction`): `void`

Defined in: [source/scrolling\_bitmap.ts:68](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L68)

Set the direction of the scrolling.

#### Parameters

##### direction

[`Direction`](../Game-Engine/namespaces/ScrollingBitmapArgs/enumerations/Direction.md)

#### Returns

`void`

---

### setInterval()

> **setInterval**(`interval`): `void`

Defined in: [source/scrolling\_bitmap.ts:104](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L104)

Set an interval between the scroll movements.

#### Parameters

##### interval

`number`

#### Returns

`void`

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

[`Bitmap`](Bitmap.md).[`setPosition`](Bitmap.md#setposition)

---

### setStep()

> **setStep**(`step`): `void`

Defined in: [source/scrolling\_bitmap.ts:97](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/scrolling_bitmap.ts#L97)

Change the step of the animation (how much it scrolls per update).

#### Parameters

##### step

`number`

#### Returns

`void`

---

### toAxisAligned()

> **toAxisAligned**(): \{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

Defined in: [source/element.ts:404](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L404)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Bitmap`](Bitmap.md).[`toAxisAligned`](Bitmap.md#toaxisaligned)

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

[`Bitmap`](Bitmap.md).[`updateVertices`](Bitmap.md#updatevertices)
