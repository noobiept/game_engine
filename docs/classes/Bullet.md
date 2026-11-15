[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Bullet

# Class: Bullet

Defined in: [bullet.ts:39](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L39)

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

Defined in: [bullet.ts:44](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L44)

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

Defined in: [element.ts:97](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L97)

#### Inherited from

[`Container`](Container.md).[`_attached`](Container.md#_attached)

---

### \_children

> `protected` **\_children**: [`Element`](Element.md)[]

Defined in: [container.ts:41](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L41)

#### Inherited from

[`Container`](Container.md).[`_children`](Container.md#_children)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [element.ts:95](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L95)

#### Inherited from

[`Container`](Container.md).[`_container`](Container.md#_container)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [element.ts:99](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L99)

#### Inherited from

[`Container`](Container.md).[`_destroyed`](Container.md#_destroyed)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [element.ts:92](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L92)

#### Inherited from

[`Container`](Container.md).[`_half_height`](Container.md#_half_height)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [element.ts:91](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L91)

#### Inherited from

[`Container`](Container.md).[`_half_width`](Container.md#_half_width)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [element.ts:98](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L98)

#### Inherited from

[`Container`](Container.md).[`_has_logic`](Container.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [element.ts:90](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L90)

#### Inherited from

[`Container`](Container.md).[`_height`](Container.md#_height)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L34)

#### Inherited from

[`Container`](Container.md).[`_listeners`](Container.md#_listeners)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [element.ts:96](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L96)

#### Inherited from

[`Container`](Container.md).[`_parent_canvas`](Container.md#_parent_canvas)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [element.ts:94](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L94)

#### Inherited from

[`Container`](Container.md).[`_rotation`](Container.md#_rotation)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [element.ts:89](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L89)

#### Inherited from

[`Container`](Container.md).[`_width`](Container.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [element.ts:87](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L87)

#### Inherited from

[`Container`](Container.md).[`_x`](Container.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [element.ts:88](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L88)

#### Inherited from

[`Container`](Container.md).[`_y`](Container.md#_y)

---

### category

> **category**: `number`

Defined in: [element.ts:81](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L81)

#### Inherited from

[`Container`](Container.md).[`category`](Container.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [element.ts:82](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L82)

#### Inherited from

[`Container`](Container.md).[`collidesWith`](Container.md#collideswith)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [element.ts:85](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L85)

#### Inherited from

[`Container`](Container.md).[`collision_data`](Container.md#collision_data)

---

### damage

> **damage**: `number`

Defined in: [bullet.ts:41](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L41)

---

### element

> **element**: [`Element`](Element.md) \| `null`

Defined in: [bullet.ts:42](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L42)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [element.ts:84](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L84)

#### Inherited from

[`Container`](Container.md).[`grid_data`](Container.md#grid_data)

---

### movement

> **movement**: [`Movement`](Movement.md) \| `null`

Defined in: [bullet.ts:40](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L40)

---

### opacity

> **opacity**: `number`

Defined in: [element.ts:75](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L75)

#### Inherited from

[`Container`](Container.md).[`opacity`](Container.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [element.ts:78](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L78)

#### Inherited from

[`Container`](Container.md).[`scaleX`](Container.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [element.ts:79](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L79)

#### Inherited from

[`Container`](Container.md).[`scaleY`](Container.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [element.ts:73](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L73)

#### Inherited from

[`Container`](Container.md).[`vertices`](Container.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [element.ts:76](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L76)

#### Inherited from

[`Container`](Container.md).[`visible`](Container.md#visible)

## Accessors

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [element.ts:566](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L566)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`halfHeight`](Container.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [element.ts:562](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L562)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`halfWidth`](Container.md#halfwidth)

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

#### Inherited from

[`Container`](Container.md).[`height`](Container.md#height)

---

### left

#### Get Signature

> **get** **left**(): `number`

Defined in: [element.ts:574](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L574)

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

#### Inherited from

[`Container`](Container.md).[`rotation`](Container.md#rotation)

---

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: [element.ts:581](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L581)

The top-left `y` (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`top`](Container.md#top)

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

#### Inherited from

[`Container`](Container.md).[`width`](Container.md#width)

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

#### Inherited from

[`Container`](Container.md).[`x`](Container.md#x)

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

#### Inherited from

[`Container`](Container.md).[`y`](Container.md#y)

## Methods

### \_attach()

> **\_attach**(): `void`

Defined in: [container.ts:172](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L172)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_attach`](Container.md#_attach)

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [element.ts:424](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L424)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_checkCanBeAdded`](Container.md#_checkcanbeadded)

---

### \_copyPropertiesTo()

> `protected` **\_copyPropertiesTo**(`element`): `void`

Defined in: [element.ts:435](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L435)

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

Defined in: [element.ts:366](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L366)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_destroyNow`](Container.md#_destroynow)

---

### \_detach()

> **\_detach**(): `void`

Defined in: [container.ts:184](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L184)

Called when the element stops being part of a canvas.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_detach`](Container.md#_detach)

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [element.ts:386](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L386)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

#### Inherited from

[`Container`](Container.md).[`_detachFromParent`](Container.md#_detachfromparent)

---

### \_hasAncestor()

> `protected` **\_hasAncestor**(`element`): `boolean`

Defined in: [container.ts:158](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L158)

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

Defined in: [element.ts:500](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L500)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_positionChanged`](Container.md#_positionchanged)

---

### addChild()

#### Call Signature

> **addChild**(`children`): `void`

Defined in: [container.ts:68](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L68)

Add elements to this container (drawn on top of the current children).
An element that is already in a container/canvas is taken out of it first (adding a current child moves it to the front).

    addChild( element );
    addChild( element1, element2 );
    addChild( [ element1, element2 ] );

Throws if an element was destroyed (with `destroy()`), or when adding a container to itself or to one of its children.

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`void`

##### Inherited from

[`Container`](Container.md).[`addChild`](Container.md#addchild)

#### Call Signature

> **addChild**(...`elements`): `void`

Defined in: [container.ts:69](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L69)

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

[`Container`](Container.md).[`addEventListener`](Container.md#addeventlistener)

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

#### Inherited from

[`Container`](Container.md).[`addToPosition`](Container.md#addtoposition)

---

### bringToFront()

> **bringToFront**(`element`): `void`

Defined in: [container.ts:199](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L199)

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

Defined in: [container.ts:339](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L339)

Calculate the width/height of the container, from the area its children cover (each child's `x`/`y` is its center).
Doesn't consider the scale or rotation of the children. It's called automatically when children are added/removed.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`calculateDimensions`](Container.md#calculatedimensions)

---

### checkCollision()

> **checkCollision**(`other`): `boolean`

Defined in: [element.ts:201](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L201)

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

Defined in: [bullet.ts:114](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L114)

Create a clone of this element.

#### Returns

`Bullet`

#### Overrides

[`Container`](Container.md).[`clone`](Container.md#clone)

---

### destroy()

> **destroy**(): `void`

Defined in: [bullet.ts:101](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L101)

Clear the target reference, before removing.
Dispatch the `destroy` event as well.

#### Returns

`void`

#### Overrides

[`Container`](Container.md).[`destroy`](Container.md#destroy)

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

[`Container`](Container.md).[`dispatchEvent`](Container.md#dispatchevent)

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

#### Inherited from

[`Container`](Container.md).[`dispatchMouseClickEvent`](Container.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [element.ts:242](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L242)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseMoveEvent`](Container.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [element.ts:234](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L234)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOutEvent`](Container.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [element.ts:226](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L226)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOverEvent`](Container.md#dispatchmouseoverevent)

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [container.ts:267](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L267)

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

Defined in: [container.ts:293](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L293)

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

Defined in: [container.ts:151](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L151)

Get all the children elements.

#### Returns

[`Element`](Element.md)[]

#### Inherited from

[`Container`](Container.md).[`getAllChildren`](Container.md#getallchildren)

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

#### Inherited from

[`Container`](Container.md).[`getBoundingBox`](Container.md#getboundingbox)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [container.ts:460](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L460)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Inherited from

[`Container`](Container.md).[`getVertices`](Container.md#getvertices)

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

[`Container`](Container.md).[`hasListeners`](Container.md#haslisteners)

---

### intersect()

> **intersect**(`x`, `y`): [`Element`](Element.md)[]

Defined in: [container.ts:300](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L300)

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

Defined in: [element.ts:377](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L377)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

#### Inherited from

[`Container`](Container.md).[`isDestroyed`](Container.md#isdestroyed)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [bullet.ts:93](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L93)

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

Defined in: [container.ts:315](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L315)

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

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [container.ts:137](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L137)

Detach all of this container's children, right away (see `removeChild()`).
To destroy the container together with its children, call `destroy()` instead.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllChildren`](Container.md#removeallchildren)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllEventListeners`](Container.md#removealleventlisteners)

---

### removeChild()

#### Call Signature

> **removeChild**(`children`): `boolean`

Defined in: [container.ts:107](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L107)

Detach elements from this container, right away. They're no longer drawn, updated or considered in the collision
detection, but they aren't destroyed, so they can be added again later. Elements that aren't children of this
container are ignored. To destroy an element, call its `destroy()` method instead.

    removeChild( element );
    removeChild( element1, element2 );
    removeChild( [ element1, element2 ] );

##### Parameters

###### children

[`Element`](Element.md) \| [`Element`](Element.md)[]

##### Returns

`boolean`

If any of the elements was a child (and was detached).

##### Inherited from

[`Container`](Container.md).[`removeChild`](Container.md#removechild)

#### Call Signature

> **removeChild**(...`elements`): `boolean`

Defined in: [container.ts:108](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L108)

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

[`Container`](Container.md).[`removeEventListener`](Container.md#removeeventlistener)

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

#### Inherited from

[`Container`](Container.md).[`rotate`](Container.md#rotate)

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

#### Inherited from

[`Container`](Container.md).[`rotateDegrees`](Container.md#rotatedegrees)

---

### sendToBack()

> **sendToBack**(`element`): `void`

Defined in: [container.ts:213](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L213)

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

Defined in: [bullet.ts:73](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L73)

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

Defined in: [container.ts:227](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L227)

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

Defined in: [element.ts:264](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L264)

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

Defined in: [element.ts:507](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L507)

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

Defined in: [bullet.ts:84](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bullet.ts#L84)

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

Defined in: [container.ts:369](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L369)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Container`](Container.md).[`toAxisAligned`](Container.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [container.ts:438](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/container.ts#L438)

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
