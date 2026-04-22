[Game Engine](../README.md) › [Game](../modules/game.md) › [Circle](game.circle.md)

# Class: Circle

Basic Usage:

    var circle = new Game.Circle({
            x: 10,
            y: 10,
            radius: 5,
            color: 'blue'
        });
    Game.addElement( circle );

Examples -- `basic_example`, `clone`, `custom_element`, `tower_defense`

## Hierarchy

↳ [Element](game.element.md)

↳ **Circle**

## Index

### Constructors

- [constructor](game.circle.md#constructor)

### Properties

- [\_container](game.circle.md#_container)
- [\_half_height](game.circle.md#protected-_half_height)
- [\_half_width](game.circle.md#protected-_half_width)
- [\_has_logic](game.circle.md#_has_logic)
- [\_height](game.circle.md#protected-_height)
- [\_listeners](game.circle.md#protected-_listeners)
- [\_radius](game.circle.md#protected-_radius)
- [\_removed](game.circle.md#_removed)
- [\_rotation](game.circle.md#protected-_rotation)
- [\_width](game.circle.md#protected-_width)
- [\_x](game.circle.md#protected-_x)
- [\_y](game.circle.md#protected-_y)
- [category](game.circle.md#category)
- [collidesWith](game.circle.md#collideswith)
- [collision_data](game.circle.md#collision_data)
- [color](game.circle.md#color)
- [grid_data](game.circle.md#grid_data)
- [opacity](game.circle.md#opacity)
- [scaleX](game.circle.md#scalex)
- [scaleY](game.circle.md#scaley)
- [vertices](game.circle.md#vertices)
- [visible](game.circle.md#visible)

### Accessors

- [half_height](game.circle.md#half_height)
- [half_width](game.circle.md#half_width)
- [height](game.circle.md#height)
- [radius](game.circle.md#radius)
- [rotation](game.circle.md#rotation)
- [width](game.circle.md#width)
- [x](game.circle.md#x)
- [y](game.circle.md#y)

### Methods

- [\_removeNow](game.circle.md#_removenow)
- [addEventListener](game.circle.md#addeventlistener)
- [addToPosition](game.circle.md#addtoposition)
- [checkCollision](game.circle.md#checkcollision)
- [clone](game.circle.md#clone)
- [dispatchEvent](game.circle.md#dispatchevent)
- [dispatchMouseClickEvent](game.circle.md#dispatchmouseclickevent)
- [dispatchMouseMoveEvent](game.circle.md#dispatchmousemoveevent)
- [dispatchMouseOutEvent](game.circle.md#dispatchmouseoutevent)
- [dispatchMouseOverEvent](game.circle.md#dispatchmouseoverevent)
- [draw](game.circle.md#draw)
- [drawElement](game.circle.md#drawelement)
- [getHeight](game.circle.md#getheight)
- [getVertices](game.circle.md#getvertices)
- [getWidth](game.circle.md#getwidth)
- [hasListeners](game.circle.md#haslisteners)
- [intersect](game.circle.md#intersect)
- [isRemoved](game.circle.md#isremoved)
- [logic](game.circle.md#logic)
- [mouseClickEvents](game.circle.md#mouseclickevents)
- [remove](game.circle.md#remove)
- [removeAllEventListeners](game.circle.md#removealleventlisteners)
- [removeEventListener](game.circle.md#removeeventlistener)
- [rotate](game.circle.md#rotate)
- [setDimensions](game.circle.md#setdimensions)
- [setHeight](game.circle.md#setheight)
- [setPosition](game.circle.md#setposition)
- [setWidth](game.circle.md#setwidth)
- [toAxisAligned](game.circle.md#toaxisaligned)
- [updateVertices](game.circle.md#updatevertices)

## Constructors

### constructor

\+ **new Circle**(`args`: [CircleArgs](../interfaces/game.circleargs.md)): _[Circle](game.circle.md)_

_Overrides [Element](game.element.md).[constructor](game.element.md#constructor)_

_Defined in [circle.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L28)_

**Parameters:**

| Name   | Type                                           |
| ------ | ---------------------------------------------- |
| `args` | [CircleArgs](../interfaces/game.circleargs.md) |

**Returns:** _[Circle](game.circle.md)_

## Properties

### \_container

• **\_container**: _[Container](game.container.md)_

_Inherited from [Element](game.element.md).[\_container](game.element.md#_container)_

_Defined in [element.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L60)_

---

### `Protected` \_half_height

• **\_half_height**: _number_

_Inherited from [Element](game.element.md).[\_half_height](game.element.md#protected-_half_height)_

_Defined in [element.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L57)_

---

### `Protected` \_half_width

• **\_half_width**: _number_

_Inherited from [Element](game.element.md).[\_half_width](game.element.md#protected-_half_width)_

_Defined in [element.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L56)_

---

### \_has_logic

• **\_has_logic**: _boolean_

_Inherited from [Element](game.element.md).[\_has_logic](game.element.md#_has_logic)_

_Defined in [element.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L61)_

---

### `Protected` \_height

• **\_height**: _number_

_Inherited from [Element](game.element.md).[\_height](game.element.md#protected-_height)_

_Defined in [element.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L55)_

---

### `Protected` \_listeners

• **\_listeners**: _any_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[\_listeners](game.eventdispatcher.md#protected-_listeners)_

_Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)_

---

### `Protected` \_radius

• **\_radius**: _number_

_Defined in [circle.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L28)_

---

### \_removed

• **\_removed**: _boolean_

_Inherited from [Element](game.element.md).[\_removed](game.element.md#_removed)_

_Defined in [element.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L62)_

---

### `Protected` \_rotation

• **\_rotation**: _number_

_Inherited from [Element](game.element.md).[\_rotation](game.element.md#protected-_rotation)_

_Defined in [element.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L59)_

---

### `Protected` \_width

• **\_width**: _number_

_Inherited from [Element](game.element.md).[\_width](game.element.md#protected-_width)_

_Defined in [element.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L54)_

---

### `Protected` \_x

• **\_x**: _number_

_Inherited from [Element](game.element.md).[\_x](game.element.md#protected-_x)_

_Defined in [element.ts:52](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L52)_

---

### `Protected` \_y

• **\_y**: _number_

_Inherited from [Element](game.element.md).[\_y](game.element.md#protected-_y)_

_Defined in [element.ts:53](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L53)_

---

### category

• **category**: _number_

_Inherited from [Element](game.element.md).[category](game.element.md#category)_

_Defined in [element.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L46)_

---

### collidesWith

• **collidesWith**: _number_

_Inherited from [Element](game.element.md).[collidesWith](game.element.md#collideswith)_

_Defined in [element.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L47)_

---

### collision_data

• **collision_data**: _any_

_Inherited from [Element](game.element.md).[collision_data](game.element.md#collision_data)_

_Defined in [element.ts:50](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L50)_

---

### color

• **color**: _string_

_Defined in [circle.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L27)_

---

### grid_data

• **grid_data**: _any_

_Inherited from [Element](game.element.md).[grid_data](game.element.md#grid_data)_

_Defined in [element.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L49)_

---

### opacity

• **opacity**: _number_

_Inherited from [Element](game.element.md).[opacity](game.element.md#opacity)_

_Defined in [element.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L40)_

---

### scaleX

• **scaleX**: _number_

_Inherited from [Element](game.element.md).[scaleX](game.element.md#scalex)_

_Defined in [element.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L43)_

---

### scaleY

• **scaleY**: _number_

_Inherited from [Element](game.element.md).[scaleY](game.element.md#scaley)_

_Defined in [element.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L44)_

---

### vertices

• **vertices**: _[Vertices](../modules/game.collisiondetection.md#vertices)_

_Inherited from [Element](game.element.md).[vertices](game.element.md#vertices)_

_Defined in [element.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L38)_

---

### visible

• **visible**: _boolean_

_Inherited from [Element](game.element.md).[visible](game.element.md#visible)_

_Defined in [element.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L41)_

## Accessors

### half_height

• **get half_height**(): _number_

_Inherited from [Element](game.element.md).[half_height](game.element.md#half_height)_

_Defined in [element.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L561)_

**Returns:** _number_

---

### half_width

• **get half_width**(): _number_

_Inherited from [Element](game.element.md).[half_width](game.element.md#half_width)_

_Defined in [element.ts:555](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L555)_

**Returns:** _number_

---

### height

• **get height**(): _number_

_Inherited from [Element](game.element.md).[height](game.element.md#height)_

_Defined in [element.ts:549](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L549)_

**Returns:** _number_

---

### radius

• **get radius**(): _number_

_Defined in [circle.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L49)_

**Returns:** _number_

• **set radius**(`value`: number): _void_

_Defined in [circle.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L41)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `value` | number |

**Returns:** _void_

---

### rotation

• **get rotation**(): _number_

_Inherited from [Element](game.element.md).[rotation](game.element.md#rotation)_

_Defined in [element.ts:364](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L364)_

**Returns:** _number_

Rotation in radians.

• **set rotation**(`angle`: number): _void_

_Inherited from [Element](game.element.md).[rotation](game.element.md#rotation)_

_Defined in [element.ts:373](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L373)_

**Parameters:**

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| `angle` | number | Rotate by a certain angle (in radians). |

**Returns:** _void_

Rotation in radians.

---

### width

• **get width**(): _number_

_Inherited from [Element](game.element.md).[width](game.element.md#width)_

_Defined in [element.ts:543](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L543)_

**Returns:** _number_

---

### x

• **get x**(): _number_

_Inherited from [Element](game.element.md).[x](game.element.md#x)_

_Defined in [element.ts:523](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L523)_

**Returns:** _number_

• **set x**(`x`: number): _void_

_Inherited from [Element](game.element.md).[x](game.element.md#x)_

_Defined in [element.ts:515](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L515)_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `x`  | number |

**Returns:** _void_

---

### y

• **get y**(): _number_

_Inherited from [Element](game.element.md).[y](game.element.md#y)_

_Defined in [element.ts:537](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L537)_

**Returns:** _number_

• **set y**(`y`: number): _void_

_Inherited from [Element](game.element.md).[y](game.element.md#y)_

_Defined in [element.ts:529](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L529)_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `y`  | number |

**Returns:** _void_

## Methods

### \_removeNow

▸ **\_removeNow**(): _void_

_Inherited from [Element](game.element.md).[\_removeNow](game.element.md#_removenow)_

_Defined in [element.ts:415](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L415)_

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

**Returns:** _void_

---

### addEventListener

▸ **addEventListener**(`type`: string, `listener`: function): _boolean_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[addEventListener](game.eventdispatcher.md#addeventlistener)_

_Defined in [event_dispatcher.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L32)_

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

**Parameters:**

▪ **type**: _string_

Type of the event.

▪ **listener**: _function_

A function to be called when the event is dispatched.

▸ (`data`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `data` | any  |

**Returns:** _boolean_

If it was successfully added.

---

### addToPosition

▸ **addToPosition**(`x`: number, `y`: number): _void_

_Inherited from [Element](game.element.md).[addToPosition](game.element.md#addtoposition)_

_Defined in [element.ts:506](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L506)_

Adds to the current position.

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `x`  | number |
| `y`  | number |

**Returns:** _void_

---

### checkCollision

▸ **checkCollision**(`other`: [Element](game.element.md)): _boolean_

_Inherited from [Element](game.element.md).[checkCollision](game.element.md#checkcollision)_

_Defined in [element.ts:177](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L177)_

Check collision between two elements.

**Parameters:**

| Name    | Type                       |
| ------- | -------------------------- |
| `other` | [Element](game.element.md) |

**Returns:** _boolean_

---

### clone

▸ **clone**(): _[Circle](game.circle.md)‹›_

_Overrides [Element](game.element.md).[clone](game.element.md#abstract-clone)_

_Defined in [circle.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L70)_

**Returns:** _[Circle](game.circle.md)‹›_

---

### dispatchEvent

▸ **dispatchEvent**(`type`: string, `data?`: any): _void_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[dispatchEvent](game.eventdispatcher.md#dispatchevent)_

_Defined in [event_dispatcher.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L101)_

Dispatches an event, which will trigger the listeners of that event.

**Parameters:**

| Name    | Type   | Description                        |
| ------- | ------ | ---------------------------------- |
| `type`  | string | Type of the event to dispatch.     |
| `data?` | any    | Data to be sent to every listener. |

**Returns:** _void_

---

### dispatchMouseClickEvent

▸ **dispatchMouseClickEvent**(`event`: MouseEvent): _void_

_Inherited from [Element](game.element.md).[dispatchMouseClickEvent](game.element.md#dispatchmouseclickevent)_

_Defined in [element.ts:245](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L245)_

**Parameters:**

| Name    | Type       | Description                                   |
| ------- | ---------- | --------------------------------------------- |
| `event` | MouseEvent | Either a mouse up, mouse down or click event. |

**Returns:** _void_

---

### dispatchMouseMoveEvent

▸ **dispatchMouseMoveEvent**(): _void_

_Inherited from [Element](game.element.md).[dispatchMouseMoveEvent](game.element.md#dispatchmousemoveevent)_

_Defined in [element.ts:231](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L231)_

**Returns:** _void_

---

### dispatchMouseOutEvent

▸ **dispatchMouseOutEvent**(): _void_

_Inherited from [Element](game.element.md).[dispatchMouseOutEvent](game.element.md#dispatchmouseoutevent)_

_Defined in [element.ts:220](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L220)_

**Returns:** _void_

---

### dispatchMouseOverEvent

▸ **dispatchMouseOverEvent**(): _void_

_Inherited from [Element](game.element.md).[dispatchMouseOverEvent](game.element.md#dispatchmouseoverevent)_

_Defined in [element.ts:209](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L209)_

**Returns:** _void_

---

### draw

▸ **draw**(`ctx`: CanvasRenderingContext2D): _void_

_Inherited from [Element](game.element.md).[draw](game.element.md#draw)_

_Defined in [element.ts:135](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L135)_

Draws this element, and all of its \_children.

**Parameters:**

| Name  | Type                     | Description     |
| ----- | ------------------------ | --------------- |
| `ctx` | CanvasRenderingContext2D | Canvas context. |

**Returns:** _void_

---

### drawElement

▸ **drawElement**(`ctx`: CanvasRenderingContext2D): _void_

_Overrides [Element](game.element.md).[drawElement](game.element.md#abstract-drawelement)_

_Defined in [circle.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L55)_

**Parameters:**

| Name  | Type                     |
| ----- | ------------------------ |
| `ctx` | CanvasRenderingContext2D |

**Returns:** _void_

---

### getHeight

▸ **getHeight**(): _number_

_Inherited from [Element](game.element.md).[getHeight](game.element.md#getheight)_

_Defined in [element.ts:268](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L268)_

**Returns:** _number_

The element's height. Doesn't consider the rotation.

---

### getVertices

▸ **getVertices**(): _object[][]_

_Inherited from [Element](game.element.md).[getVertices](game.element.md#getvertices)_

_Defined in [element.ts:480](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L480)_

Get the element vertices points. Assumes its a rectangle.

**Returns:** _object[][]_

---

### getWidth

▸ **getWidth**(): _number_

_Inherited from [Element](game.element.md).[getWidth](game.element.md#getwidth)_

_Defined in [element.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L259)_

**Returns:** _number_

The element's width. Doesn't consider the rotation.

---

### hasListeners

▸ **hasListeners**(`type`: string): _boolean_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[hasListeners](game.eventdispatcher.md#haslisteners)_

_Defined in [event_dispatcher.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L121)_

Check if there are listeners to a particular event type.

**Parameters:**

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| `type` | string | The event type to check. |

**Returns:** _boolean_

If there are listeners or not.

---

### intersect

▸ **intersect**(`refX`: number, `refY`: number): _any[]_

_Inherited from [Element](game.element.md).[intersect](game.element.md#intersect)_

_Defined in [element.ts:156](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L156)_

Check if the element is within the given x/y position.

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `refX` | number |
| `refY` | number |

**Returns:** _any[]_

---

### isRemoved

▸ **isRemoved**(): _boolean_

_Inherited from [Element](game.element.md).[isRemoved](game.element.md#isremoved)_

_Defined in [element.ts:437](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L437)_

Tells if this element has already been removed or not.

**Returns:** _boolean_

---

### logic

▸ **logic**(`deltaTime`: number): _void_

_Inherited from [Element](game.element.md).[logic](game.element.md#logic)_

_Defined in [element.ts:147](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L147)_

Logic code here (runs every update/tick).
Set the `_has_logic` property to `true` for this to get called.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `deltaTime` | number | Time elapsed since the last update. |

**Returns:** _void_

---

### mouseClickEvents

▸ **mouseClickEvents**(`x`: any, `y`: any, `event`: any): _boolean_

_Inherited from [Element](game.element.md).[mouseClickEvents](game.element.md#mouseclickevents)_

_Defined in [element.ts:191](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L191)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `x`     | any  |
| `y`     | any  |
| `event` | any  |

**Returns:** _boolean_

---

### remove

▸ **remove**(): _void_

_Inherited from [Element](game.element.md).[remove](game.element.md#remove)_

_Defined in [element.ts:400](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L400)_

Mark this element to be removed.

**Returns:** _void_

---

### removeAllEventListeners

▸ **removeAllEventListeners**(): _void_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[removeAllEventListeners](game.eventdispatcher.md#removealleventlisteners)_

_Defined in [event_dispatcher.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L89)_

Remove all the event listeners.

**Returns:** _void_

---

### removeEventListener

▸ **removeEventListener**(`type`: string, `listener?`: function): _boolean_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[removeEventListener](game.eventdispatcher.md#removeeventlistener)_

_Defined in [event_dispatcher.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L60)_

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

**Parameters:**

▪ **type**: _string_

The event type.

▪`Optional` **listener**: _function_

The listener function to remove. If not provided then remove all the functions associated with the event type.

▸ (`data`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `data` | any  |

**Returns:** _boolean_

If it was successfully removed.

---

### rotate

▸ **rotate**(`angle`: number, `degrees?`: boolean): _void_

_Inherited from [Element](game.element.md).[rotate](game.element.md#rotate)_

_Defined in [element.ts:383](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L383)_

**Parameters:**

| Name       | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| `angle`    | number  | Angle of rotation.                                   |
| `degrees?` | boolean | Whether the angle provided is in degrees or radians. |

**Returns:** _void_

---

### setDimensions

▸ **setDimensions**(`width`: number, `height`: number): _void_

_Inherited from [Element](game.element.md).[setDimensions](game.element.md#setdimensions)_

_Defined in [element.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L297)_

Set the width and height at the same time.

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `width`  | number |
| `height` | number |

**Returns:** _void_

---

### setHeight

▸ **setHeight**(`height`: number): _void_

_Inherited from [Element](game.element.md).[setHeight](game.element.md#setheight)_

_Defined in [element.ts:287](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L287)_

**Parameters:**

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| `height` | number | New height. |

**Returns:** _void_

---

### setPosition

▸ **setPosition**(`x`: number, `y`: number): _void_

_Inherited from [Element](game.element.md).[setPosition](game.element.md#setposition)_

_Defined in [element.ts:494](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L494)_

Move the unit to the given x/y position.

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `x`  | number |
| `y`  | number |

**Returns:** _void_

---

### setWidth

▸ **setWidth**(`width`: number): _void_

_Inherited from [Element](game.element.md).[setWidth](game.element.md#setwidth)_

_Defined in [element.ts:277](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L277)_

**Parameters:**

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `width` | number | New width.  |

**Returns:** _void_

---

### toAxisAligned

▸ **toAxisAligned**(): _object_

_Inherited from [Element](game.element.md).[toAxisAligned](game.element.md#toaxisaligned)_

_Defined in [element.ts:309](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L309)_

Calculates an axis-aligned rectangle from the rotated shape.

**Returns:** _object_

- **maxX**: _number_ = maxX

- **maxY**: _number_ = maxY

- **minX**: _number_ = minX

- **minY**: _number_ = minY

---

### updateVertices

▸ **updateVertices**(`x`: number, `y`: number, `scaleX`: number, `scaleY`: number, `rotation`: number): _void_

_Inherited from [Element](game.element.md).[updateVertices](game.element.md#updatevertices)_

_Defined in [element.ts:453](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L453)_

Get the global vertices points of this element.
The arguments are the compound values from the parent containers.

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `x`        | number |
| `y`        | number |
| `scaleX`   | number |
| `scaleY`   | number |
| `rotation` | number |

**Returns:** _void_
