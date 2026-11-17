[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Element

# Abstract Class: Element

Defined in: [source/element.ts:72](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L72)

Base class for a canvas element. Don't create an object directly — use one of the
subclasses (`Rectangle`, `Circle`, `Bitmap`, `Sprite`, `Text`, `Container`, ...).

All elements share the same basic API: `x`/`y` is the element's **center**, and you can
move, scale, rotate, hide, destroy it, and listen to its events.

Basic Usage:

    const element = new Game.Rectangle({
            x: 50,
            y: 50,
            width: 20,
            height: 20,
            color: 'red'
        });
    Game.addElement( element );

    element.x += 10; // move
    element.rotateDegrees( 45 ); // rotate
    element.scaleX = 2; // scale
    element.visible = false; // hide
    element.addEventListener( 'click', function() {
        element.destroy();
    });

Taking an element out of the game:

- `element.destroy()` **destroys** the element: at the end of the current frame it's taken out of its
  container/canvas and out of the collision detection, and its tweens are stopped. Don't add it again
  afterwards (it throws). Destroying a container destroys its children as well.
- `container.removeChild( element )`, `canvas.removeChild( element )` or `Game.removeElement( element )`
  **detach** the element right away: it's no longer drawn, updated or considered in the collision
  detection, but it stays usable, so you can add it again later (to the same or another container/canvas).

An element only takes part in the collision detection while it's added to a canvas (directly, or through
containers).

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

Defined in: [source/element.ts:110](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L110)

#### Parameters

##### args?

[`ElementArgs`](../interfaces/ElementArgs.md)

#### Returns

`Element`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### \_attached

> **\_attached**: `boolean`

Defined in: [source/element.ts:97](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L97)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [source/element.ts:95](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L95)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [source/element.ts:99](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L99)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [source/element.ts:92](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L92)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [source/element.ts:91](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L91)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [source/element.ts:98](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L98)

---

### \_has\_previous

> `protected` **\_has\_previous**: `boolean`

Defined in: [source/element.ts:102](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L102)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:90](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L90)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [source/event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L34)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [source/element.ts:96](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L96)

---

### \_previous\_opacity

> `protected` **\_previous\_opacity**: `number`

Defined in: [source/element.ts:108](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L108)

---

### \_previous\_rotation

> `protected` **\_previous\_rotation**: `number`

Defined in: [source/element.ts:105](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L105)

---

### \_previous\_scale\_x

> `protected` **\_previous\_scale\_x**: `number`

Defined in: [source/element.ts:106](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L106)

---

### \_previous\_scale\_y

> `protected` **\_previous\_scale\_y**: `number`

Defined in: [source/element.ts:107](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L107)

---

### \_previous\_x

> `protected` **\_previous\_x**: `number`

Defined in: [source/element.ts:103](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L103)

---

### \_previous\_y

> `protected` **\_previous\_y**: `number`

Defined in: [source/element.ts:104](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L104)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:94](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L94)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:89](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L89)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:87](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L87)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:88](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L88)

---

### category

> **category**: `number`

Defined in: [source/element.ts:81](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L81)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:82](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L82)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [source/element.ts:85](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L85)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [source/element.ts:84](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L84)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:75](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L75)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:78](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L78)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:79](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L79)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [source/element.ts:73](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L73)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:76](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L76)

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

---

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [source/element.ts:699](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L699)

##### Returns

`number`

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [source/element.ts:695](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L695)

##### Returns

`number`

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

---

### \_attach()

> **\_attach**(): `void`

Defined in: [source/element.ts:534](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L534)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [source/element.ts:557](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L557)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

---

### \_copyPropertiesTo()

> `protected` **\_copyPropertiesTo**(`element`): `void`

Defined in: [source/element.ts:568](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L568)

Copy the properties that every element has (opacity, visibility, scale, rotation and collision settings) to a clone.

#### Parameters

##### element

`Element`

#### Returns

`void`

---

### \_destroyNow()

> **\_destroyNow**(): `void`

Defined in: [source/element.ts:498](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L498)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

---

### \_detach()

> **\_detach**(): `void`

Defined in: [source/element.ts:545](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L545)

Called when the element stops being part of a canvas.

#### Returns

`void`

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [source/element.ts:519](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L519)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

---

### \_positionChanged()

> `protected` **\_positionChanged**(): `void`

Defined in: [source/element.ts:633](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L633)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

---

### \_refreshVertices()

> **\_refreshVertices**(): `void`

Defined in: [source/element.ts:313](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L313)

Calculate the vertices from the current position/scale/rotation of this element, and of the containers it's in
(the collision detection calculates them once per update, before the logic can move the elements).

#### Returns

`void`

---

### \_savePrevious()

> **\_savePrevious**(): `void`

Defined in: [source/element.ts:221](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L221)

Save the current state, at the start of a step (with a fixed update rate, see `Game.setFixedTimestep()`).

#### Returns

`void`

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

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

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

---

### checkCollision()

> **checkCollision**(`other`): `boolean`

Defined in: [source/element.ts:276](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L276)

Check collision between two elements.

#### Parameters

##### other

`Element`

#### Returns

`boolean`

---

### clone()

> `abstract` **clone**(): `Element`

Defined in: [source/element.ts:581](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L581)

Create a clone of this element.

#### Returns

`Element`

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

[`EventDispatcher`](EventDispatcher.md).[`dispatchEvent`](EventDispatcher.md#dispatchevent)

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

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:372](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L372)

#### Returns

`void`

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:364](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L364)

#### Returns

`void`

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:356](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L356)

#### Returns

`void`

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

---

### drawElement()

> `abstract` **drawElement**(`ctx`): `void`

Defined in: [source/element.ts:172](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L172)

Draws just this element.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Canvas context.

#### Returns

`void`

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

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

Defined in: [source/element.ts:622](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L622)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

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

[`EventDispatcher`](EventDispatcher.md).[`hasListeners`](EventDispatcher.md#haslisteners)

---

### intersect()

> **intersect**(`refX`, `refY`): `Element`[]

Defined in: [source/element.ts:254](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L254)

Check if the element is within the given x/y position.

#### Parameters

##### refX

`number`

##### refY

`number`

#### Returns

`Element`[]

---

### isDestroyed()

> **isDestroyed**(): `boolean`

Defined in: [source/element.ts:510](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L510)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

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

`Element`

#### Returns

`boolean`

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

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

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)

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

---

### toAxisAligned()

> **toAxisAligned**(): \{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

Defined in: [source/element.ts:404](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/element.ts#L404)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

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
