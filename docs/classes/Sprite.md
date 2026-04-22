[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Sprite

# Class: Sprite

Defined in: [source/sprite.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L36)

Basic usage:

    var sprite = new Game.Sprite({
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

Examples -- `clone`, `sprite`

## Extends

- [`Bitmap`](Bitmap.md)

## Constructors

### Constructor

> **new Sprite**(`args`): `Sprite`

Defined in: [source/sprite.ts:46](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L46)

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

Defined in: [source/sprite.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L42)

#### Index Signature

\[`id`: `string`\]: `number`[]

---

### \_container

> **\_container**: [`Container`](Container.md)

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L58)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_container`](Bitmap.md#_container)

---

### \_count_interval

> `protected` **\_count_interval**: `number`

Defined in: [source/sprite.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L38)

---

### \_current_animation

> `protected` **\_current_animation**: `number`[]

Defined in: [source/sprite.ts:43](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L43)

---

### \_current_animation_position

> `protected` **\_current_animation_position**: `number`

Defined in: [source/sprite.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L44)

---

### \_frames_per_line

> `protected` **\_frames_per_line**: `number`

Defined in: [source/sprite.ts:40](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L40)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L55)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_height`](Bitmap.md#_half_height)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L54)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_half_width`](Bitmap.md#_half_width)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L59)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_has_logic`](Bitmap.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L53)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_height`](Bitmap.md#_height)

---

### \_image

> `protected` **\_image**: `HTMLImageElement`

Defined in: [source/bitmap.ts:22](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L22)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_image`](Bitmap.md#_image)

---

### \_listeners

> `protected` **\_listeners**: `any`

Defined in: [source/event_dispatcher.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L9)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_listeners`](Bitmap.md#_listeners)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L60)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_removed`](Bitmap.md#_removed)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L57)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_rotation`](Bitmap.md#_rotation)

---

### \_source_x

> `protected` **\_source_x**: `number`

Defined in: [source/bitmap.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L23)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_x`](Bitmap.md#_source_x)

---

### \_source_y

> `protected` **\_source_y**: `number`

Defined in: [source/bitmap.ts:24](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L24)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_source_y`](Bitmap.md#_source_y)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L52)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_width`](Bitmap.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L50)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_x`](Bitmap.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L51)

#### Inherited from

[`Bitmap`](Bitmap.md).[`_y`](Bitmap.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L44)

#### Inherited from

[`Bitmap`](Bitmap.md).[`category`](Bitmap.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L45)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collidesWith`](Bitmap.md#collideswith)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L48)

#### Inherited from

[`Bitmap`](Bitmap.md).[`collision_data`](Bitmap.md#collision_data)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L47)

#### Inherited from

[`Bitmap`](Bitmap.md).[`grid_data`](Bitmap.md#grid_data)

---

### interval

> **interval**: `number`

Defined in: [source/sprite.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L37)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L38)

#### Inherited from

[`Bitmap`](Bitmap.md).[`opacity`](Bitmap.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L41)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleX`](Bitmap.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L42)

#### Inherited from

[`Bitmap`](Bitmap.md).[`scaleY`](Bitmap.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L36)

#### Inherited from

[`Bitmap`](Bitmap.md).[`vertices`](Bitmap.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L39)

#### Inherited from

[`Bitmap`](Bitmap.md).[`visible`](Bitmap.md#visible)

## Accessors

### half_height

#### Get Signature

> **get** **half_height**(): `number`

Defined in: [source/element.ts:470](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L470)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`half_height`](Bitmap.md#half_height)

---

### half_width

#### Get Signature

> **get** **half_width**(): `number`

Defined in: [source/element.ts:466](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L466)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`half_width`](Bitmap.md#half_width)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:462](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L462)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`height`](Bitmap.md#height)

---

### image

#### Get Signature

> **get** **image**(): `HTMLImageElement`

Defined in: [source/bitmap.ts:70](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L70)

##### Returns

`HTMLImageElement`

#### Set Signature

> **set** **image**(`newImage`): `void`

Defined in: [source/bitmap.ts:74](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L74)

##### Parameters

###### newImage

`HTMLImageElement`

##### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`image`](Bitmap.md#image)

---

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [source/element.ts:308](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L308)

##### Returns

`number`

Rotation in radians.

#### Set Signature

> **set** **rotation**(`angle`): `void`

Defined in: [source/element.ts:315](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L315)

##### Parameters

###### angle

`number`

Rotate by a certain angle (in radians).

##### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`rotation`](Bitmap.md#rotation)

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:458](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L458)

##### Returns

`number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`width`](Bitmap.md#width)

---

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [source/element.ts:444](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L444)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [source/element.ts:438](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L438)

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

Defined in: [source/element.ts:454](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L454)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [source/element.ts:448](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L448)

##### Parameters

###### y

`number`

##### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`y`](Bitmap.md#y)

## Methods

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:346](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L346)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`_removeNow`](Bitmap.md#_removenow)

---

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event_dispatcher.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L23)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`string`

Type of the event.

##### listener

(`data`) => `any`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[`Bitmap`](Bitmap.md).[`addEventListener`](Bitmap.md#addeventlistener)

---

### addToPosition()

> **addToPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:431](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L431)

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

Defined in: [source/element.ts:162](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L162)

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

Defined in: [source/sprite.ts:165](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L165)

#### Returns

`Sprite`

A cloned sprite object.

#### Overrides

[`Bitmap`](Bitmap.md).[`clone`](Bitmap.md#clone)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event_dispatcher.ts:77](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L77)

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

Defined in: [source/element.ts:214](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L214)

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

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L203)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseMoveEvent`](Bitmap.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L195)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOutEvent`](Bitmap.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L187)

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`dispatchMouseOverEvent`](Bitmap.md#dispatchmouseoverevent)

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [source/element.ts:123](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L123)

Draws this element, and all of its \_children.

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

Defined in: [source/bitmap.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bitmap.ts#L34)

Draws just this element.

#### Parameters

##### ctx

`any`

Canvas context.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`drawElement`](Bitmap.md#drawelement)

---

### getHeight()

> **getHeight**(): `number`

Defined in: [source/element.ts:232](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L232)

#### Returns

`number`

The element's height. Doesn't consider the rotation.

#### Inherited from

[`Bitmap`](Bitmap.md).[`getHeight`](Bitmap.md#getheight)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [source/element.ts:410](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L410)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Inherited from

[`Bitmap`](Bitmap.md).[`getVertices`](Bitmap.md#getvertices)

---

### getWidth()

> **getWidth**(): `number`

Defined in: [source/element.ts:225](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L225)

#### Returns

`number`

The element's width. Doesn't consider the rotation.

#### Inherited from

[`Bitmap`](Bitmap.md).[`getWidth`](Bitmap.md#getwidth)

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event_dispatcher.ts:93](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L93)

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

> **intersect**(`refX`, `refY`): `any`[]

Defined in: [source/element.ts:140](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L140)

Check if the element is within the given x/y position.

#### Parameters

##### refX

`number`

##### refY

`number`

#### Returns

`any`[]

#### Inherited from

[`Bitmap`](Bitmap.md).[`intersect`](Bitmap.md#intersect)

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:362](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L362)

Tells if this element has already been removed or not.

#### Returns

`boolean`

#### Inherited from

[`Bitmap`](Bitmap.md).[`isRemoved`](Bitmap.md#isremoved)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/sprite.ts:152](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L152)

Changes the current sprite frame, based on the interval set.

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

Defined in: [source/element.ts:173](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L173)

#### Parameters

##### x

`any`

##### y

`any`

##### event

`any`

#### Returns

`boolean`

#### Inherited from

[`Bitmap`](Bitmap.md).[`mouseClickEvents`](Bitmap.md#mouseclickevents)

---

### nextFrame()

> **nextFrame**(): `void`

Defined in: [source/sprite.ts:133](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L133)

Change to the next frame. If we're on the last frame then it changes to the first one (frame 0).

#### Returns

`void`

---

### play()

> **play**(`animationId`, `reset?`): `boolean`

Defined in: [source/sprite.ts:91](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L91)

Play a previously set animation.

#### Parameters

##### animationId

`string`

The name of the animation.

##### reset?

`boolean` = `false`

When trying to play the current animation again, if we reset the animation (back to the first frame) or do nothing.

#### Returns

`boolean`

If it was successful.

---

### remove()

> **remove**(): `void`

Defined in: [source/element.ts:334](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L334)

Mark this element to be removed.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`remove`](Bitmap.md#remove)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:67](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L67)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`removeAllEventListeners`](Bitmap.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event_dispatcher.ts:46](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L46)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`string`

The event type.

##### listener?

(`data`) => `any`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`Bitmap`](Bitmap.md).[`removeEventListener`](Bitmap.md#removeeventlistener)

---

### rotate()

> **rotate**(`angle`, `degrees?`): `void`

Defined in: [source/element.ts:323](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L323)

#### Parameters

##### angle

`number`

Angle of rotation.

##### degrees?

`boolean`

Whether the angle provided is in degrees or radians.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`rotate`](Bitmap.md#rotate)

---

### setDimensions()

> **setDimensions**(`width`, `height`): `void`

Defined in: [source/element.ts:255](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L255)

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

Defined in: [source/sprite.ts:76](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L76)

Show a specific frame of the sprite.

#### Parameters

##### frame

`number`

The position of the frame.

#### Returns

`void`

---

### setHeight()

> **setHeight**(`height`): `void`

Defined in: [source/element.ts:247](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L247)

#### Parameters

##### height

`number`

New height.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`setHeight`](Bitmap.md#setheight)

---

### setPosition()

> **setPosition**(`x`, `y`): `void`

Defined in: [source/element.ts:421](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L421)

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

### setWidth()

> **setWidth**(`width`): `void`

Defined in: [source/element.ts:239](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L239)

#### Parameters

##### width

`number`

New width.

#### Returns

`void`

#### Inherited from

[`Bitmap`](Bitmap.md).[`setWidth`](Bitmap.md#setwidth)

---

### stop()

> **stop**(): `void`

Defined in: [source/sprite.ts:126](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sprite.ts#L126)

Stop the animation. Will keep the current frame displayed.

#### Returns

`void`

---

### toAxisAligned()

> **toAxisAligned**(): `object`

Defined in: [source/element.ts:265](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L265)

Calculates an axis-aligned rectangle from the rotated shape.

#### Returns

`object`

##### maxX

> **maxX**: `number`

##### maxY

> **maxY**: `number`

##### minX

> **minX**: `number`

##### minY

> **minY**: `number`

#### Inherited from

[`Bitmap`](Bitmap.md).[`toAxisAligned`](Bitmap.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/element.ts:375](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L375)

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
