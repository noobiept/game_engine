[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Sprite

# Class: Sprite

Defined in: [sprite.ts:62](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L62)

Basic usage:

    const sprite = new Game.Sprite({
            x: 10,
            y: 20,
            image: Game.Preload.get( 'id' ),
            frameWidth: 30,
            frameHeight: 40,
            interval: 1,
            animations: {
                animationName: [ 0, 1 ]
            }
        });
    Game.addElement( sprite );

        // set a static frame
    sprite.setFrame( 1 );

        // or play a specific animation
    sprite.play( 'animationName' );

        // play a one-shot animation and do something when it finishes
    sprite.play( 'explosion', { loop: false } );
    sprite.addEventListener( 'animationend', function( data ) {
        data.sprite.destroy();
    });

Events:

- `animationend` -- `listener( data: { sprite: Sprite; animationId: string; } );`
  Dispatched when a non-looping animation (played with `{ loop: false }`) reaches its last frame.

Examples -- `clone`, `sprite`

## Extends

- [`Bitmap`](Bitmap.md)

## Constructors

### Constructor

> **new Sprite**(`args`): `Sprite`

Defined in: [sprite.ts:74](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L74)

#### Parameters

##### args

[`SpriteArgs`](../interfaces/SpriteArgs.md)

#### Returns

`Sprite`

#### Overrides

[`Bitmap`](Bitmap.md).[`constructor`](Bitmap.md#constructor)

## Properties

### \_animations

> `protected` **\_animations**: `object`

Defined in: [sprite.ts:68](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L68)

#### Index Signature

\[`id`: `string`\]: `number`[]

---

### \_attached

> **\_attached**: `boolean`

Defined in: [element.ts:97](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L97)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_attached`](Bitmap.md#_attached)

---

### \_container

> **\_container**: [`Container`](Container.md) \| `null`

Defined in: [element.ts:95](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L95)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_container`](Bitmap.md#_container)

---

### \_count\_interval

> `protected` **\_count\_interval**: `number`

Defined in: [sprite.ts:64](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L64)

---

### \_current\_animation

> `protected` **\_current\_animation**: `number`[] \| `null`

Defined in: [sprite.ts:69](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L69)

---

### \_current\_animation\_id

> `protected` **\_current\_animation\_id**: `string` \| `null`

Defined in: [sprite.ts:70](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L70)

---

### \_current\_animation\_position

> `protected` **\_current\_animation\_position**: `number`

Defined in: [sprite.ts:71](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L71)

---

### \_destroyed

> **\_destroyed**: `boolean`

Defined in: [element.ts:99](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L99)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_destroyed`](Bitmap.md#_destroyed)

---

### \_frames\_per\_line

> `protected` **\_frames\_per\_line**: `number`

Defined in: [sprite.ts:66](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L66)

---

### \_half\_height

> `protected` **\_half\_height**: `number`

Defined in: [element.ts:92](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L92)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_height`](Bitmap.md#_half_height)

---

### \_half\_width

> `protected` **\_half\_width**: `number`

Defined in: [element.ts:91](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L91)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_width`](Bitmap.md#_half_width)

---

### \_has\_logic

> **\_has\_logic**: `boolean`

Defined in: [element.ts:98](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L98)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_has_logic`](Bitmap.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [element.ts:90](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L90)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_height`](Bitmap.md#_height)

---

### \_image

> `protected` **\_image**: `HTMLImageElement`

Defined in: [bitmap.ts:22](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bitmap.ts#L22)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_image`](Bitmap.md#_image)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L34)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_listeners`](Bitmap.md#_listeners)

---

### \_loop

> `protected` **\_loop**: `boolean`

Defined in: [sprite.ts:72](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L72)

---

### \_parent\_canvas

> **\_parent\_canvas**: [`Canvas`](Canvas.md) \| `null`

Defined in: [element.ts:96](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L96)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_parent_canvas`](Bitmap.md#_parent_canvas)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [element.ts:94](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L94)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_rotation`](Bitmap.md#_rotation)

---

### \_source\_x

> `protected` **\_source\_x**: `number`

Defined in: [bitmap.ts:23](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bitmap.ts#L23)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_x`](Bitmap.md#_source_x)

---

### \_source\_y

> `protected` **\_source\_y**: `number`

Defined in: [bitmap.ts:24](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bitmap.ts#L24)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_y`](Bitmap.md#_source_y)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [element.ts:89](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L89)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_width`](Bitmap.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [element.ts:87](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L87)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_x`](Bitmap.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [element.ts:88](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L88)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_y`](Bitmap.md#_y)

---

### category

> **category**: `number`

Defined in: [element.ts:81](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L81)

#### Inherited from

[`Bitmap`](Bitmap.md).[`category`](Bitmap.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [element.ts:82](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L82)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collidesWith`](Bitmap.md#collideswith)

---

### collision\_data

> **collision\_data**: `any`

Defined in: [element.ts:85](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L85)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collision_data`](Bitmap.md#collision_data)

---

### grid\_data

> **grid\_data**: `any`

Defined in: [element.ts:84](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L84)

#### Inherited from

[`Bitmap`](Bitmap.md).[`grid_data`](Bitmap.md#grid_data)

---

### interval

> **interval**: `number`

Defined in: [sprite.ts:63](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L63)

---

### opacity

> **opacity**: `number`

Defined in: [element.ts:75](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L75)

#### Inherited from

[`Bitmap`](Bitmap.md).[`opacity`](Bitmap.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [element.ts:78](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L78)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleX`](Bitmap.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [element.ts:79](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L79)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleY`](Bitmap.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md) \| `null`

Defined in: [element.ts:73](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L73)

#### Inherited from

[`Bitmap`](Bitmap.md).[`vertices`](Bitmap.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [element.ts:76](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L76)

#### Inherited from

[`Bitmap`](Bitmap.md).[`visible`](Bitmap.md#visible)

## Accessors

### halfHeight

#### Get Signature

> **get** **halfHeight**(): `number`

Defined in: [element.ts:566](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L566)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`halfHeight`](Bitmap.md#halfheight)

---

### halfWidth

#### Get Signature

> **get** **halfWidth**(): `number`

Defined in: [element.ts:562](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L562)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`halfWidth`](Bitmap.md#halfwidth)

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

[`Bitmap`](Bitmap.md).[`height`](Bitmap.md#height)

---

### image

#### Get Signature

> **get** **image**(): `HTMLImageElement`

Defined in: [bitmap.ts:66](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bitmap.ts#L66)

##### Returns

`HTMLImageElement`

#### Set Signature

> **set** **image**(`newImage`): `void`

Defined in: [bitmap.ts:70](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bitmap.ts#L70)

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

Defined in: [element.ts:574](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L574)

The position model is center-origin (`x`/`y` is the center). This returns the top-left `x`
(`x - halfWidth`), which is convenient when porting top-left based games.

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`left`](Bitmap.md#left)

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

[`Bitmap`](Bitmap.md).[`rotation`](Bitmap.md#rotation)

---

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: [element.ts:581](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L581)

The top-left `y` (`y - halfHeight`). See `left`.

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`top`](Bitmap.md#top)

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

[`Bitmap`](Bitmap.md).[`width`](Bitmap.md#width)

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

[`Bitmap`](Bitmap.md).[`x`](Bitmap.md#x)

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

[`Bitmap`](Bitmap.md).[`y`](Bitmap.md#y)

## Methods

### \_attach()

> **\_attach**(): `void`

Defined in: [element.ts:401](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L401)

Called when the element becomes part of a canvas (directly or through containers).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_attach`](Bitmap.md#_attach)

---

### \_checkCanBeAdded()

> **\_checkCanBeAdded**(): `void`

Defined in: [element.ts:424](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L424)

Throws if this element can't be added to the given parent (a container or canvas).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_checkCanBeAdded`](Bitmap.md#_checkcanbeadded)

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

[`Bitmap`](Bitmap.md).[`_copyPropertiesTo`](Bitmap.md#_copypropertiesto)

---

### \_destroyNow()

> **\_destroyNow**(): `void`

Defined in: [element.ts:366](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L366)

Does the actual destruction (see `destroy()`). Don't call this directly, use the `destroy()` method instead.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_destroyNow`](Bitmap.md#_destroynow)

---

### \_detach()

> **\_detach**(): `void`

Defined in: [element.ts:412](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L412)

Called when the element stops being part of a canvas.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_detach`](Bitmap.md#_detach)

---

### \_detachFromParent()

> **\_detachFromParent**(): `boolean`

Defined in: [element.ts:386](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L386)

Take this element out of its container or canvas, if it's in one.

#### Returns

`boolean`

If it was in a container/canvas.

#### Inherited from

[`Bitmap`](Bitmap.md).[`_detachFromParent`](Bitmap.md#_detachfromparent)

---

### \_positionChanged()

> `protected` **\_positionChanged**(): `void`

Defined in: [element.ts:500](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L500)

Let the collision detection know the position changed (some algorithms keep track of the positions).

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_positionChanged`](Bitmap.md#_positionchanged)

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

[`Bitmap`](Bitmap.md).[`addEventListener`](Bitmap.md#addeventlistener)

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

[`Bitmap`](Bitmap.md).[`addToPosition`](Bitmap.md#addtoposition)

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

[`Bitmap`](Bitmap.md).[`checkCollision`](Bitmap.md#checkcollision)

---

### clone()

> **clone**(): `Sprite`

Defined in: [sprite.ts:262](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L262)

#### Returns

`Sprite`

A cloned sprite object.

#### Overrides

[`Bitmap`](Bitmap.md).[`clone`](Bitmap.md#clone)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`destroy`](Bitmap.md#destroy)

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

[`Bitmap`](Bitmap.md).[`dispatchEvent`](Bitmap.md#dispatchevent)

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

[`Bitmap`](Bitmap.md).[`dispatchMouseClickEvent`](Bitmap.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [element.ts:242](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L242)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseMoveEvent`](Bitmap.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [element.ts:234](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L234)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOutEvent`](Bitmap.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [element.ts:226](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L226)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOverEvent`](Bitmap.md#dispatchmouseoverevent)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`draw`](Bitmap.md#draw)

---

### drawElement()

> **drawElement**(`ctx`): `void`

Defined in: [bitmap.ts:34](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/bitmap.ts#L34)

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

[`Bitmap`](Bitmap.md).[`getBoundingBox`](Bitmap.md#getboundingbox)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

Defined in: [element.ts:489](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L489)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[] \| `null`

#### Inherited from

[`Bitmap`](Bitmap.md).[`getVertices`](Bitmap.md#getvertices)

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

[`Bitmap`](Bitmap.md).[`hasListeners`](Bitmap.md#haslisteners)

---

### intersect()

> **intersect**(`refX`, `refY`): [`Element`](Element.md)[]

Defined in: [element.ts:179](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L179)

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

Defined in: [element.ts:377](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L377)

Tells if this element was destroyed (with `destroy()`).
A detached element (with `removeChild()`) isn't destroyed.

#### Returns

`boolean`

#### Inherited from

[`Bitmap`](Bitmap.md).[`isDestroyed`](Bitmap.md#isdestroyed)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [sprite.ts:221](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L221)

Changes the current sprite frame, based on the interval set.
When more than one interval passed since the last update, it advances that many frames (so the animation keeps its speed).

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

#### Overrides

[`Bitmap`](Bitmap.md).[`logic`](Bitmap.md#logic)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`mouseClickEvents`](Bitmap.md#mouseclickevents)

---

### nextFrame()

> **nextFrame**(): `void`

Defined in: [sprite.ts:179](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L179)

Change to the next frame.
When looping (the default), wraps back to the first frame after the last one.
When not looping, stops on the last frame and dispatches the `animationend` event.

#### Returns

`void`

---

### play()

> **play**(`animationId`, `options?`): `boolean`

Defined in: [sprite.ts:124](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L124)

Play a previously set animation.

#### Parameters

##### animationId

`string`

The name of the animation.

##### options?

[`SpritePlayOptions`](../interfaces/SpritePlayOptions.md)

Playback options. `loop` (default `true`) controls whether the animation loops or plays
once (dispatching an `animationend` event on the last frame). `reset` (default `false`)
restarts the animation from the first frame when its already the current one.

#### Returns

`boolean`

If it was successful.

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`removeAllEventListeners`](Bitmap.md#removealleventlisteners)

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

[`Bitmap`](Bitmap.md).[`removeEventListener`](Bitmap.md#removeeventlistener)

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

[`Bitmap`](Bitmap.md).[`rotate`](Bitmap.md#rotate)

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

[`Bitmap`](Bitmap.md).[`rotateDegrees`](Bitmap.md#rotatedegrees)

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

[`Bitmap`](Bitmap.md).[`setDimensions`](Bitmap.md#setdimensions)

---

### setFrame()

> **setFrame**(`frame`): `void`

Defined in: [sprite.ts:107](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L107)

Show a specific frame of the sprite.

#### Parameters

##### frame

`number`

The position of the frame.

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`setPosition`](Bitmap.md#setposition)

---

### stop()

> **stop**(): `void`

Defined in: [sprite.ts:170](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/sprite.ts#L170)

Stop the animation. Will keep the current frame displayed.

#### Returns

`void`

---

### toAxisAligned()

> **toAxisAligned**(): \{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

Defined in: [element.ts:274](https://github.com/noobiept/game_engine/blob/3dc50a91cd21bd5572819c26cdd85377e737ed99/source/element.ts#L274)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

\{ `maxX`: `number`; `maxY`: `number`; `minX`: `number`; `minY`: `number`; \} \| `null`

#### Inherited from

[`Bitmap`](Bitmap.md).[`toAxisAligned`](Bitmap.md#toaxisaligned)

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

#### Inherited from

[`Bitmap`](Bitmap.md).[`updateVertices`](Bitmap.md#updatevertices)
