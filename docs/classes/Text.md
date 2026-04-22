[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Text

# Class: Text

Defined in: [source/text.ts:28](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L28)

Basic Usage:

    var text = new Game.Text({
            x: 10,
            y: 20,
            text: 'Hi'
        });
    Game.addElement( text );

Examples -- `2048`, `clone`, `collision_detection`, `game_loop_callbacks`, `preload`, `snake`

## Extends

- [`Element`](Element.md)

## Constructors

### Constructor

> **new Text**(`args`): `Text`

Defined in: [source/text.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L41)

#### Parameters

##### args

[`TextArgs`](../interfaces/TextArgs.md)

#### Returns

`Text`

#### Overrides

[`Element`](Element.md).[`constructor`](Element.md#constructor)

## Properties

### \_container

> **\_container**: [`Container`](Container.md)

Defined in: [source/element.ts:58](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L58)

#### Inherited from

[`Element`](Element.md).[`_container`](Element.md#_container)

---

### \_font

> `protected` **\_font**: `string`

Defined in: [source/text.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L37)

---

### \_font_family

> `protected` **\_font_family**: `string`

Defined in: [source/text.ts:35](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L35)

---

### \_font_size

> `protected` **\_font_size**: `number`

Defined in: [source/text.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L36)

---

### \_half_height

> `protected` **\_half_height**: `number`

Defined in: [source/element.ts:55](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L55)

#### Inherited from

[`Element`](Element.md).[`_half_height`](Element.md#_half_height)

---

### \_half_width

> `protected` **\_half_width**: `number`

Defined in: [source/element.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L54)

#### Inherited from

[`Element`](Element.md).[`_half_width`](Element.md#_half_width)

---

### \_has_logic

> **\_has_logic**: `boolean`

Defined in: [source/element.ts:59](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L59)

#### Inherited from

[`Element`](Element.md).[`_has_logic`](Element.md#_has_logic)

---

### \_height

> `protected` **\_height**: `number`

Defined in: [source/element.ts:53](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L53)

#### Inherited from

[`Element`](Element.md).[`_height`](Element.md#_height)

---

### \_lines

> `protected` **\_lines**: `string`[]

Defined in: [source/text.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L39)

---

### \_listeners

> `protected` **\_listeners**: `any`

Defined in: [source/event_dispatcher.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L9)

#### Inherited from

[`Element`](Element.md).[`_listeners`](Element.md#_listeners)

---

### \_removed

> **\_removed**: `boolean`

Defined in: [source/element.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L60)

#### Inherited from

[`Element`](Element.md).[`_removed`](Element.md#_removed)

---

### \_rotation

> `protected` **\_rotation**: `number`

Defined in: [source/element.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L57)

#### Inherited from

[`Element`](Element.md).[`_rotation`](Element.md#_rotation)

---

### \_text

> `protected` **\_text**: `string`

Defined in: [source/text.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L34)

---

### \_timeout

> `protected` **\_timeout**: `number`

Defined in: [source/text.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L38)

---

### \_width

> `protected` **\_width**: `number`

Defined in: [source/element.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L52)

#### Inherited from

[`Element`](Element.md).[`_width`](Element.md#_width)

---

### \_x

> `protected` **\_x**: `number`

Defined in: [source/element.ts:50](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L50)

#### Inherited from

[`Element`](Element.md).[`_x`](Element.md#_x)

---

### \_y

> `protected` **\_y**: `number`

Defined in: [source/element.ts:51](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L51)

#### Inherited from

[`Element`](Element.md).[`_y`](Element.md#_y)

---

### category

> **category**: `number`

Defined in: [source/element.ts:44](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L44)

#### Inherited from

[`Element`](Element.md).[`category`](Element.md#category)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/element.ts:45](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L45)

#### Inherited from

[`Element`](Element.md).[`collidesWith`](Element.md#collideswith)

---

### collision_data

> **collision_data**: `any`

Defined in: [source/element.ts:48](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L48)

#### Inherited from

[`Element`](Element.md).[`collision_data`](Element.md#collision_data)

---

### color

> **color**: `string`

Defined in: [source/text.ts:32](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L32)

---

### fill

> **fill**: `boolean`

Defined in: [source/text.ts:31](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L31)

---

### grid_data

> **grid_data**: `any`

Defined in: [source/element.ts:47](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L47)

#### Inherited from

[`Element`](Element.md).[`grid_data`](Element.md#grid_data)

---

### opacity

> **opacity**: `number`

Defined in: [source/element.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L38)

#### Inherited from

[`Element`](Element.md).[`opacity`](Element.md#opacity)

---

### scaleX

> **scaleX**: `number`

Defined in: [source/element.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L41)

#### Inherited from

[`Element`](Element.md).[`scaleX`](Element.md#scalex)

---

### scaleY

> **scaleY**: `number`

Defined in: [source/element.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L42)

#### Inherited from

[`Element`](Element.md).[`scaleY`](Element.md#scaley)

---

### textAlign

> **textAlign**: `CanvasTextAlign`

Defined in: [source/text.ts:29](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L29)

---

### textBaseline

> **textBaseline**: `CanvasTextBaseline`

Defined in: [source/text.ts:30](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L30)

---

### vertices

> **vertices**: [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)

Defined in: [source/element.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L36)

#### Inherited from

[`Element`](Element.md).[`vertices`](Element.md#vertices)

---

### visible

> **visible**: `boolean`

Defined in: [source/element.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L39)

#### Inherited from

[`Element`](Element.md).[`visible`](Element.md#visible)

## Accessors

### font_family

#### Get Signature

> **get** **font_family**(): `string`

Defined in: [source/text.ts:177](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L177)

##### Returns

`string`

Current font family.

#### Set Signature

> **set** **font_family**(`font`): `void`

Defined in: [source/text.ts:169](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L169)

##### Parameters

###### font

`string`

Set a new font family.

##### Returns

`void`

---

### font_size

#### Get Signature

> **get** **font_size**(): `number`

Defined in: [source/text.ts:192](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L192)

##### Returns

`number`

Current font size.

#### Set Signature

> **set** **font_size**(`size`): `void`

Defined in: [source/text.ts:184](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L184)

##### Parameters

###### size

`number`

New font size.

##### Returns

`void`

---

### half_height

#### Get Signature

> **get** **half_height**(): `number`

Defined in: [source/element.ts:470](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L470)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`half_height`](Element.md#half_height)

---

### half_width

#### Get Signature

> **get** **half_width**(): `number`

Defined in: [source/element.ts:466](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L466)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`half_width`](Element.md#half_width)

---

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [source/element.ts:462](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L462)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`height`](Element.md#height)

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

[`Element`](Element.md).[`rotation`](Element.md#rotation)

---

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [source/text.ts:162](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L162)

##### Returns

`string`

The current text.

#### Set Signature

> **set** **text**(`value`): `void`

Defined in: [source/text.ts:132](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L132)

##### Parameters

###### value

`string`

Change the text to this.

##### Returns

`void`

---

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [source/element.ts:458](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L458)

##### Returns

`number`

#### Inherited from

[`Element`](Element.md).[`width`](Element.md#width)

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

[`Element`](Element.md).[`x`](Element.md#x)

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

[`Element`](Element.md).[`y`](Element.md#y)

## Methods

### \_removeNow()

> **\_removeNow**(): `void`

Defined in: [source/element.ts:346](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L346)

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`_removeNow`](Element.md#_removenow)

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

[`Element`](Element.md).[`addEventListener`](Element.md#addeventlistener)

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

[`Element`](Element.md).[`addToPosition`](Element.md#addtoposition)

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

[`Element`](Element.md).[`checkCollision`](Element.md#checkcollision)

---

### clone()

> **clone**(): `Text`

Defined in: [source/text.ts:199](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L199)

#### Returns

`Text`

New cloned text object.

#### Overrides

[`Element`](Element.md).[`clone`](Element.md#clone)

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

[`Element`](Element.md).[`dispatchEvent`](Element.md#dispatchevent)

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

[`Element`](Element.md).[`dispatchMouseClickEvent`](Element.md#dispatchmouseclickevent)

---

### dispatchMouseMoveEvent()

> **dispatchMouseMoveEvent**(): `void`

Defined in: [source/element.ts:203](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L203)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseMoveEvent`](Element.md#dispatchmousemoveevent)

---

### dispatchMouseOutEvent()

> **dispatchMouseOutEvent**(): `void`

Defined in: [source/element.ts:195](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L195)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseOutEvent`](Element.md#dispatchmouseoutevent)

---

### dispatchMouseOverEvent()

> **dispatchMouseOverEvent**(): `void`

Defined in: [source/element.ts:187](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L187)

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`dispatchMouseOverEvent`](Element.md#dispatchmouseoverevent)

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

[`Element`](Element.md).[`draw`](Element.md#draw)

---

### drawElement()

> **drawElement**(`ctx`): `void`

Defined in: [source/text.ts:100](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/text.ts#L100)

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

### getHeight()

> **getHeight**(): `number`

Defined in: [source/element.ts:232](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L232)

#### Returns

`number`

The element's height. Doesn't consider the rotation.

#### Inherited from

[`Element`](Element.md).[`getHeight`](Element.md#getheight)

---

### getVertices()

> **getVertices**(): [`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

Defined in: [source/element.ts:410](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L410)

Get the element vertices points. Assumes its a rectangle.

#### Returns

[`Vertices`](../Game-Engine/namespaces/CollisionDetection/type-aliases/Vertices.md)[]

#### Inherited from

[`Element`](Element.md).[`getVertices`](Element.md#getvertices)

---

### getWidth()

> **getWidth**(): `number`

Defined in: [source/element.ts:225](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L225)

#### Returns

`number`

The element's width. Doesn't consider the rotation.

#### Inherited from

[`Element`](Element.md).[`getWidth`](Element.md#getwidth)

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

[`Element`](Element.md).[`hasListeners`](Element.md#haslisteners)

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

[`Element`](Element.md).[`intersect`](Element.md#intersect)

---

### isRemoved()

> **isRemoved**(): `boolean`

Defined in: [source/element.ts:362](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L362)

Tells if this element has already been removed or not.

#### Returns

`boolean`

#### Inherited from

[`Element`](Element.md).[`isRemoved`](Element.md#isremoved)

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/element.ts:133](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L133)

Logic code here (runs every update/tick).
Set the `_has_logic` property to `true` for this to get called.

#### Parameters

##### deltaTime

`number`

Time elapsed since the last update.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`logic`](Element.md#logic)

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

[`Element`](Element.md).[`mouseClickEvents`](Element.md#mouseclickevents)

---

### remove()

> **remove**(): `void`

Defined in: [source/element.ts:334](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element.ts#L334)

Mark this element to be removed.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`remove`](Element.md#remove)

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:67](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L67)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`Element`](Element.md).[`removeAllEventListeners`](Element.md#removealleventlisteners)

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

[`Element`](Element.md).[`removeEventListener`](Element.md#removeeventlistener)

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

[`Element`](Element.md).[`rotate`](Element.md#rotate)

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

[`Element`](Element.md).[`setDimensions`](Element.md#setdimensions)

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

[`Element`](Element.md).[`setHeight`](Element.md#setheight)

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

[`Element`](Element.md).[`setPosition`](Element.md#setposition)

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

[`Element`](Element.md).[`setWidth`](Element.md#setwidth)

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

[`Element`](Element.md).[`toAxisAligned`](Element.md#toaxisaligned)

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

[`Element`](Element.md).[`updateVertices`](Element.md#updatevertices)
