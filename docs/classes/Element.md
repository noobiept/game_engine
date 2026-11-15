[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Element

# Abstract Class: Element

Defined in: [element.ts:72](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L72)

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

Defined in: [element.ts:101](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L101)

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

Defined in: [element.ts:97](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L97)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [element.ts:95](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L95)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [element.ts:99](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L99)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [element.ts:92](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L92)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [element.ts:91](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L91)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [element.ts:98](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L98)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [element.ts:90](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L90)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L34)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [element.ts:96](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L96)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [element.ts:94](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L94)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [element.ts:89](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L89)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [element.ts:87](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L87)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [element.ts:88](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L88)

---

### category

> **category**: `number`

Defined in: [element.ts:81](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L81)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [element.ts:82](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L82)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [element.ts:85](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L85)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [element.ts:84](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L84)

---

### opacity

> **opacity**: `number`

Defined in: [element.ts:75](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L75)

---

### scaleX

> **scaleX**: `number`

Defined in: [element.ts:78](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L78)

---

### scaleY

> **scaleY**: `number`

Defined in: [element.ts:79](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L79)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [element.ts:73](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L73)

---

### visible

> **visible**: `boolean`

Defined in: [element.ts:76](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L76)

## Accessors

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [element.ts:566](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L566)

##### Returns

`number`

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [element.ts:562](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L562)

##### Returns

`number`

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [element.ts:553](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L553)

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [element.ts:557](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L557)

##### Parameters

###### height

`number`

##### Returns

`void`

---

### left

#### Get Signature

> **get** **left**(): `number`

Defined in: [element.ts:574](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L574)

The position model is center-origin (`x`/`y` is the center). This returns the top-left `x`
(`x - halfWidth`), which is convenient when porting top-left based games.

##### Returns

`number`

---

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [element.ts:318](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L318)

##### Returns

`number`

Rotation in radians.

#### Set Signature

> **set** **rotation**(`angle`): `void`

Defined in: [element.ts:325](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L325)

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

Defined in: [element.ts:581](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L581)

The top-left `y` (`y - halfHeight`). See `left`.

##### Returns

`number`

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [element.ts:544](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L544)

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [element.ts:548](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L548)

##### Parameters

###### width

`number`

##### Returns

`void`

---

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [element.ts:530](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L530)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [element.ts:524](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L524)

##### Parameters

###### x

`number`

##### Returns

`void`

---

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [element.ts:540](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L540)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [element.ts:534](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L534)

##### Parameters

###### y

`number`

##### Returns

`void`

## Methods

### \_attach()

> **\_attach**(): `void`

Defined in: [element.ts:401](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L401)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [element.ts:424](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L424)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

---

### \_copyPropertiesTo()

> `protected` **\_copyPropertiesTo**(`element`): `void`

Defined in: [element.ts:435](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L435)

Copy the properties that every element has (opacity, visibility, scale, rotation and collision settings) to a clone.

#### Parameters

##### element

`Element`

#### Returns

`void`

---

### \_destroyNow()

> **\_destroyNow**(): `void`

Defined in: [element.ts:366](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L366)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

---

### \_detach()

> **\_detach**(): `void`

Defined in: [element.ts:412](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L412)

Called when the element stops being part of a canvas.

#### Returns

`void`

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [element.ts:386](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L386)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

---

### \_positionChanged()

> `protected` **\_positionChanged**(): `void`

Defined in: [element.ts:500](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L500)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

---

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [event\_dispatcher.ts:48](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L48)

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

Defined in: [element.ts:517](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L517)

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

Defined in: [element.ts:201](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L201)

Check collision between two elements.

#### Parameters

##### other

`Element`

#### Returns

`boolean`

---

### clone()

> `abstract` **clone**(): `Element`

Defined in: [element.ts:448](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L448)

Create a clone of this element.

#### Returns

`Element`

---

### destroy()

> **destroy**(): `void`

Defined in: [element.ts:355](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L355)

Destroy this element. It's marked as destroyed right away (`isDestroyed()` returns `true`, and it stops
colliding), and at the end of the current frame it's taken out of its container/canvas and out of the
collision detection, and its tweens are stopped. It's safe to call from the logic/event code.

A destroyed element can't be added again. To take an element out of the game and add it back later, use
`removeChild()` on its container/canvas (or `Game.removeElement()`) instead.

#### Returns

`void`

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [event\_dispatcher.ts:125](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L125)

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

Defined in: [element.ts:253](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L253)

#### Parameters

##### event

`MouseEvent`

Either a mouse up, mouse down or click event.

#### Returns

`void`

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [element.ts:242](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L242)

#### Returns

`void`

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [element.ts:234](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L234)

#### Returns

`void`

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [element.ts:226](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L226)

#### Returns

`void`

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [element.ts:162](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L162)

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

Defined in: [element.ts:155](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L155)

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

Defined in: [element.ts:590](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L590)

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

Defined in: [element.ts:489](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L489)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [event\_dispatcher.ts:146](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L146)

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

Defined in: [element.ts:179](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L179)

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

Defined in: [element.ts:377](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L377)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

---

### logic()

> **logic**(`_deltaTime`): `void`

Defined in: [element.ts:172](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L172)

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

Defined in: [element.ts:212](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L212)

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

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [event\_dispatcher.ts:74](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L74)

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

### rotate()

> **rotate**(`radians`): `void`

Defined in: [element.ts:334](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L334)

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

Defined in: [element.ts:343](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L343)

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

Defined in: [element.ts:264](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L264)

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

Defined in: [element.ts:507](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L507)

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

Defined in: [element.ts:274](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L274)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [element.ts:454](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L454)

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
