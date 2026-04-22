[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Bullet

# Class: Bullet

Defined in: [source/bullet.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L39)

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

Defined in: [source/bullet.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L44)

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

Defined in: [source/container.ts:26](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L26)

#### Inherited from

[`Container`](Container.md).[`_children`](Container.md#_children)

---

### \_container

> **\_container**: [`Container`](Container.md)

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L58)

#### Inherited from

[`Container`](Container.md).[`_container`](Container.md#_container)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L55)

#### Inherited from

[`Container`](Container.md).[`_half_height`](Container.md#_half_height)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L54)

#### Inherited from

[`Container`](Container.md).[`_half_width`](Container.md#_half_width)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L59)

#### Inherited from

[`Container`](Container.md).[`_has_logic`](Container.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L53)

#### Inherited from

[`Container`](Container.md).[`_height`](Container.md#_height)

---

### \_listeners

> `protected` **\_listeners**: `any`

Defined in: [source/event_dispatcher.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L9)

#### Inherited from

[`Container`](Container.md).[`_listeners`](Container.md#_listeners)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L60)

#### Inherited from

[`Container`](Container.md).[`_removed`](Container.md#_removed)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L57)

#### Inherited from

[`Container`](Container.md).[`_rotation`](Container.md#_rotation)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L52)

#### Inherited from

[`Container`](Container.md).[`_width`](Container.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L50)

#### Inherited from

[`Container`](Container.md).[`_x`](Container.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L51)

#### Inherited from

[`Container`](Container.md).[`_y`](Container.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L44)

#### Inherited from

[`Container`](Container.md).[`category`](Container.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L45)

#### Inherited from

[`Container`](Container.md).[`collidesWith`](Container.md#collideswith)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L48)

#### Inherited from

[`Container`](Container.md).[`collision_data`](Container.md#collision_data)

---

### damage

> **damage**: `number`

Defined in: [source/bullet.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L41)

---

### element

> **element**: [`Element`](Element.md)

Defined in: [source/bullet.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L42)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L47)

#### Inherited from

[`Container`](Container.md).[`grid_data`](Container.md#grid_data)

---

### movement

> **movement**: [`Movement`](Movement.md)

Defined in: [source/bullet.ts:40](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L40)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L38)

#### Inherited from

[`Container`](Container.md).[`opacity`](Container.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L41)

#### Inherited from

[`Container`](Container.md).[`scaleX`](Container.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L42)

#### Inherited from

[`Container`](Container.md).[`scaleY`](Container.md#scaley)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L36)

#### Inherited from

[`Container`](Container.md).[`vertices`](Container.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L39)

#### Inherited from

[`Container`](Container.md).[`visible`](Container.md#visible)

## Accessors

### half_height

#### Get Signature

> **get** **half_height**(): `number`

Defined in: [source/element.ts:470](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L470)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`half_height`](Container.md#half_height)

---

### half_width

#### Get Signature

> **get** **half_width**(): `number`

Defined in: [source/element.ts:466](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L466)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`half_width`](Container.md#half_width)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:462](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L462)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`height`](Container.md#height)

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

[`Container`](Container.md).[`rotation`](Container.md#rotation)

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:458](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L458)

##### Returns

`number`

#### Inherited from

[`Container`](Container.md).[`width`](Container.md#width)

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

[`Container`](Container.md).[`x`](Container.md#x)

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

[`Container`](Container.md).[`y`](Container.md#y)

## Methods

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:346](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L346)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`_removeNow`](Container.md#_removenow)

---

### addChild()

> **addChild**(`elements`): `void`

Defined in: [source/container.ts:48](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L48)

addChild( element );
addChild( element1, element2 );
addChild( [ element1, element2 ] );

#### Parameters

##### elements

`any`

Either `Element` or `...Element` or `Element[]`.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`addChild`](Container.md#addchild)

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

[`Container`](Container.md).[`addEventListener`](Container.md#addeventlistener)

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

[`Container`](Container.md).[`addToPosition`](Container.md#addtoposition)

---

### calculateDimensions()

> **calculateDimensions**(): `void`

Defined in: [source/container.ts:191](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L191)

Calculate the width/height of the container (based on the dimensions of the children elements). Doesn't consider the rotations of the elements.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`calculateDimensions`](Container.md#calculatedimensions)

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

[`Container`](Container.md).[`checkCollision`](Container.md#checkcollision)

---

### clone()

> **clone**(): `Bullet`

Defined in: [source/bullet.ts:126](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L126)

Create a clone of this element.

#### Returns

`Bullet`

#### Overrides

[`Container`](Container.md).[`clone`](Container.md#clone)

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

[`Container`](Container.md).[`dispatchEvent`](Container.md#dispatchevent)

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

[`Container`](Container.md).[`dispatchMouseClickEvent`](Container.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L203)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseMoveEvent`](Container.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L195)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOutEvent`](Container.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L187)

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`dispatchMouseOverEvent`](Container.md#dispatchmouseoverevent)

---

### draw()

> **draw**(`ctx`): `void`

Defined in: [source/container.ts:128](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L128)

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

Defined in: [source/container.ts:154](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L154)

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

Defined in: [source/container.ts:111](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L111)

Get all the children elements.

#### Returns

[`Element`](Element.md)[]

#### Inherited from

[`Container`](Container.md).[`getAllChildren`](Container.md#getallchildren)

---

### getHeight()

> **getHeight**(): `number`

Defined in: [source/element.ts:232](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L232)

#### Returns

`number`

The element's height. Doesn't consider the rotation.

#### Inherited from

[`Container`](Container.md).[`getHeight`](Container.md#getheight)

---

### getVertices()

> **getVertices**(): `any`[]

Defined in: [source/container.ts:306](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L306)

Get the element vertices points. Assumes its a rectangle.

#### Returns

`any`[]

#### Inherited from

[`Container`](Container.md).[`getVertices`](Container.md#getvertices)

---

### getWidth()

> **getWidth**(): `number`

Defined in: [source/element.ts:225](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L225)

#### Returns

`number`

The element's width. Doesn't consider the rotation.

#### Inherited from

[`Container`](Container.md).[`getWidth`](Container.md#getwidth)

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

[`Container`](Container.md).[`hasListeners`](Container.md#haslisteners)

---

### intersect()

> **intersect**(`x`, `y`): `any`[]

Defined in: [source/container.ts:161](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L161)

Check if the given x/y position intersects with any of this container's children. Returns all the elements it intersects.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`any`[]

#### Inherited from

[`Container`](Container.md).[`intersect`](Container.md#intersect)

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:362](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L362)

Tells if this element has already been removed or not.

#### Returns

`boolean`

#### Inherited from

[`Container`](Container.md).[`isRemoved`](Container.md#isremoved)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/bullet.ts:105](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L105)

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

Defined in: [source/container.ts:176](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L176)

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

[`Container`](Container.md).[`mouseClickEvents`](Container.md#mouseclickevents)

---

### remove()

> **remove**(): `void`

Defined in: [source/bullet.ts:113](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L113)

Clear the target reference, before removing.
Dispatch the `remove` event as well.

#### Returns

`void`

#### Overrides

[`Container`](Container.md).[`remove`](Container.md#remove)

---

### removeAllChildren()

> **removeAllChildren**(): `void`

Defined in: [source/container.ts:99](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L99)

Remove all of this container's children.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllChildren`](Container.md#removeallchildren)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:67](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L67)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeAllEventListeners`](Container.md#removealleventlisteners)

---

### removeChild()

> **removeChild**(`args`): `void`

Defined in: [source/container.ts:75](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L75)

removeChild( element );
removeChild( element1, element2 );
removeChild( [ element1, element2 ] );

#### Parameters

##### args

`any`

Either `Element` or `...Element` or `Element[]`.

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`removeChild`](Container.md#removechild)

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

[`Container`](Container.md).[`removeEventListener`](Container.md#removeeventlistener)

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

[`Container`](Container.md).[`rotate`](Container.md#rotate)

---

### setAngle()

> **setAngle**(`angle`): `void`

Defined in: [source/bullet.ts:81](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L81)

The bullet will travel in a set direction, based on the angle given.

#### Parameters

##### angle

`number`

In radians.

#### Returns

`void`

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

[`Container`](Container.md).[`setDimensions`](Container.md#setdimensions)

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

[`Container`](Container.md).[`setHeight`](Container.md#setheight)

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

[`Container`](Container.md).[`setPosition`](Container.md#setposition)

---

### setTarget()

> **setTarget**(`target`): `void`

Defined in: [source/bullet.ts:94](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/bullet.ts#L94)

The bullet will follow the target, until it hits.

#### Parameters

##### target

[`Element`](Element.md)

The element to go to.

#### Returns

`void`

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

[`Container`](Container.md).[`setWidth`](Container.md#setwidth)

---

### toAxisAligned()

> **toAxisAligned**(): `object`

Defined in: [source/container.ts:229](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L229)

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

[`Container`](Container.md).[`toAxisAligned`](Container.md#toaxisaligned)

---

### updateVertices()

> **updateVertices**(`x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

Defined in: [source/container.ts:290](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/container.ts#L290)

Get the global vertices points of this element.
The arguments are the compound values from the parent containers.

#### Parameters

##### x

`any`

##### y

`any`

##### scaleX

`any`

##### scaleY

`any`

##### rotation

`any`

#### Returns

`void`

#### Inherited from

[`Container`](Container.md).[`updateVertices`](Container.md#updatevertices)
