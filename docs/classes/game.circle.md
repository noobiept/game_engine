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

* [constructor](game.circle.md#constructor)

### Properties

* [_container](game.circle.md#_container)
* [_half_height](game.circle.md#protected-_half_height)
* [_half_width](game.circle.md#protected-_half_width)
* [_has_logic](game.circle.md#_has_logic)
* [_height](game.circle.md#protected-_height)
* [_listeners](game.circle.md#protected-_listeners)
* [_radius](game.circle.md#protected-_radius)
* [_removed](game.circle.md#_removed)
* [_rotation](game.circle.md#protected-_rotation)
* [_width](game.circle.md#protected-_width)
* [_x](game.circle.md#protected-_x)
* [_y](game.circle.md#protected-_y)
* [category](game.circle.md#category)
* [collidesWith](game.circle.md#collideswith)
* [collision_data](game.circle.md#collision_data)
* [color](game.circle.md#color)
* [grid_data](game.circle.md#grid_data)
* [opacity](game.circle.md#opacity)
* [scaleX](game.circle.md#scalex)
* [scaleY](game.circle.md#scaley)
* [vertices](game.circle.md#vertices)
* [visible](game.circle.md#visible)

### Accessors

* [half_height](game.circle.md#half_height)
* [half_width](game.circle.md#half_width)
* [height](game.circle.md#height)
* [radius](game.circle.md#radius)
* [rotation](game.circle.md#rotation)
* [width](game.circle.md#width)
* [x](game.circle.md#x)
* [y](game.circle.md#y)

### Methods

* [_removeNow](game.circle.md#_removenow)
* [addEventListener](game.circle.md#addeventlistener)
* [addToPosition](game.circle.md#addtoposition)
* [checkCollision](game.circle.md#checkcollision)
* [clone](game.circle.md#clone)
* [dispatchEvent](game.circle.md#dispatchevent)
* [dispatchMouseClickEvent](game.circle.md#dispatchmouseclickevent)
* [dispatchMouseMoveEvent](game.circle.md#dispatchmousemoveevent)
* [dispatchMouseOutEvent](game.circle.md#dispatchmouseoutevent)
* [dispatchMouseOverEvent](game.circle.md#dispatchmouseoverevent)
* [draw](game.circle.md#draw)
* [drawElement](game.circle.md#drawelement)
* [getHeight](game.circle.md#getheight)
* [getVertices](game.circle.md#getvertices)
* [getWidth](game.circle.md#getwidth)
* [hasListeners](game.circle.md#haslisteners)
* [intersect](game.circle.md#intersect)
* [isRemoved](game.circle.md#isremoved)
* [logic](game.circle.md#logic)
* [mouseClickEvents](game.circle.md#mouseclickevents)
* [remove](game.circle.md#remove)
* [removeAllEventListeners](game.circle.md#removealleventlisteners)
* [removeEventListener](game.circle.md#removeeventlistener)
* [rotate](game.circle.md#rotate)
* [setDimensions](game.circle.md#setdimensions)
* [setHeight](game.circle.md#setheight)
* [setPosition](game.circle.md#setposition)
* [setWidth](game.circle.md#setwidth)
* [toAxisAligned](game.circle.md#toaxisaligned)
* [updateVertices](game.circle.md#updatevertices)

## Constructors

###  constructor

\+ **new Circle**(`args`: [CircleArgs](../interfaces/game.circleargs.md)): *[Circle](game.circle.md)*

*Overrides [Element](game.element.md).[constructor](game.element.md#constructor)*

*Defined in [circle.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CircleArgs](../interfaces/game.circleargs.md) |

**Returns:** *[Circle](game.circle.md)*

## Properties

###  _container

• **_container**: *[Container](game.container.md)*

*Inherited from [Element](game.element.md).[_container](game.element.md#_container)*

*Defined in [element.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L60)*

___

### `Protected` _half_height

• **_half_height**: *number*

*Inherited from [Element](game.element.md).[_half_height](game.element.md#protected-_half_height)*

*Defined in [element.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L57)*

___

### `Protected` _half_width

• **_half_width**: *number*

*Inherited from [Element](game.element.md).[_half_width](game.element.md#protected-_half_width)*

*Defined in [element.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L56)*

___

###  _has_logic

• **_has_logic**: *boolean*

*Inherited from [Element](game.element.md).[_has_logic](game.element.md#_has_logic)*

*Defined in [element.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L61)*

___

### `Protected` _height

• **_height**: *number*

*Inherited from [Element](game.element.md).[_height](game.element.md#protected-_height)*

*Defined in [element.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L55)*

___

### `Protected` _listeners

• **_listeners**: *any*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[_listeners](game.eventdispatcher.md#protected-_listeners)*

*Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)*

___

### `Protected` _radius

• **_radius**: *number*

*Defined in [circle.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L28)*

___

###  _removed

• **_removed**: *boolean*

*Inherited from [Element](game.element.md).[_removed](game.element.md#_removed)*

*Defined in [element.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L62)*

___

### `Protected` _rotation

• **_rotation**: *number*

*Inherited from [Element](game.element.md).[_rotation](game.element.md#protected-_rotation)*

*Defined in [element.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L59)*

___

### `Protected` _width

• **_width**: *number*

*Inherited from [Element](game.element.md).[_width](game.element.md#protected-_width)*

*Defined in [element.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L54)*

___

### `Protected` _x

• **_x**: *number*

*Inherited from [Element](game.element.md).[_x](game.element.md#protected-_x)*

*Defined in [element.ts:52](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L52)*

___

### `Protected` _y

• **_y**: *number*

*Inherited from [Element](game.element.md).[_y](game.element.md#protected-_y)*

*Defined in [element.ts:53](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L53)*

___

###  category

• **category**: *number*

*Inherited from [Element](game.element.md).[category](game.element.md#category)*

*Defined in [element.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L46)*

___

###  collidesWith

• **collidesWith**: *number*

*Inherited from [Element](game.element.md).[collidesWith](game.element.md#collideswith)*

*Defined in [element.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L47)*

___

###  collision_data

• **collision_data**: *any*

*Inherited from [Element](game.element.md).[collision_data](game.element.md#collision_data)*

*Defined in [element.ts:50](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L50)*

___

###  color

• **color**: *string*

*Defined in [circle.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L27)*

___

###  grid_data

• **grid_data**: *any*

*Inherited from [Element](game.element.md).[grid_data](game.element.md#grid_data)*

*Defined in [element.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L49)*

___

###  opacity

• **opacity**: *number*

*Inherited from [Element](game.element.md).[opacity](game.element.md#opacity)*

*Defined in [element.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L40)*

___

###  scaleX

• **scaleX**: *number*

*Inherited from [Element](game.element.md).[scaleX](game.element.md#scalex)*

*Defined in [element.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L43)*

___

###  scaleY

• **scaleY**: *number*

*Inherited from [Element](game.element.md).[scaleY](game.element.md#scaley)*

*Defined in [element.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L44)*

___

###  vertices

• **vertices**: *[Vertices](../modules/game.collisiondetection.md#vertices)*

*Inherited from [Element](game.element.md).[vertices](game.element.md#vertices)*

*Defined in [element.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L38)*

___

###  visible

• **visible**: *boolean*

*Inherited from [Element](game.element.md).[visible](game.element.md#visible)*

*Defined in [element.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L41)*

## Accessors

###  half_height

• **get half_height**(): *number*

*Inherited from [Element](game.element.md).[half_height](game.element.md#half_height)*

*Defined in [element.ts:561](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L561)*

**Returns:** *number*

___

###  half_width

• **get half_width**(): *number*

*Inherited from [Element](game.element.md).[half_width](game.element.md#half_width)*

*Defined in [element.ts:555](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L555)*

**Returns:** *number*

___

###  height

• **get height**(): *number*

*Inherited from [Element](game.element.md).[height](game.element.md#height)*

*Defined in [element.ts:549](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L549)*

**Returns:** *number*

___

###  radius

• **get radius**(): *number*

*Defined in [circle.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L49)*

**Returns:** *number*

• **set radius**(`value`: number): *void*

*Defined in [circle.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  rotation

• **get rotation**(): *number*

*Inherited from [Element](game.element.md).[rotation](game.element.md#rotation)*

*Defined in [element.ts:364](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L364)*

**Returns:** *number*

Rotation in radians.

• **set rotation**(`angle`: number): *void*

*Inherited from [Element](game.element.md).[rotation](game.element.md#rotation)*

*Defined in [element.ts:373](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L373)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | Rotate by a certain angle (in radians).  |

**Returns:** *void*

Rotation in radians.

___

###  width

• **get width**(): *number*

*Inherited from [Element](game.element.md).[width](game.element.md#width)*

*Defined in [element.ts:543](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L543)*

**Returns:** *number*

___

###  x

• **get x**(): *number*

*Inherited from [Element](game.element.md).[x](game.element.md#x)*

*Defined in [element.ts:523](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L523)*

**Returns:** *number*

• **set x**(`x`: number): *void*

*Inherited from [Element](game.element.md).[x](game.element.md#x)*

*Defined in [element.ts:515](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L515)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *void*

___

###  y

• **get y**(): *number*

*Inherited from [Element](game.element.md).[y](game.element.md#y)*

*Defined in [element.ts:537](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L537)*

**Returns:** *number*

• **set y**(`y`: number): *void*

*Inherited from [Element](game.element.md).[y](game.element.md#y)*

*Defined in [element.ts:529](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L529)*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *void*

## Methods

###  _removeNow

▸ **_removeNow**(): *void*

*Inherited from [Element](game.element.md).[_removeNow](game.element.md#_removenow)*

*Defined in [element.ts:415](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L415)*

Remove this element from either its container or from the canvas.
Don't call this directly, use the `remove()` method instead.

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: function): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[addEventListener](game.eventdispatcher.md#addeventlistener)*

*Defined in [event_dispatcher.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L32)*

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

**Parameters:**

▪ **type**: *string*

Type of the event.

▪ **listener**: *function*

A function to be called when the event is dispatched.

▸ (`data`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully added.

___

###  addToPosition

▸ **addToPosition**(`x`: number, `y`: number): *void*

*Inherited from [Element](game.element.md).[addToPosition](game.element.md#addtoposition)*

*Defined in [element.ts:506](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L506)*

Adds to the current position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  checkCollision

▸ **checkCollision**(`other`: [Element](game.element.md)): *boolean*

*Inherited from [Element](game.element.md).[checkCollision](game.element.md#checkcollision)*

*Defined in [element.ts:177](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L177)*

Check collision between two elements.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Element](game.element.md) |

**Returns:** *boolean*

___

###  clone

▸ **clone**(): *[Circle](game.circle.md)‹›*

*Overrides [Element](game.element.md).[clone](game.element.md#abstract-clone)*

*Defined in [circle.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L70)*

**Returns:** *[Circle](game.circle.md)‹›*

___

###  dispatchEvent

▸ **dispatchEvent**(`type`: string, `data?`: any): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[dispatchEvent](game.eventdispatcher.md#dispatchevent)*

*Defined in [event_dispatcher.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L101)*

Dispatches an event, which will trigger the listeners of that event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Type of the event to dispatch. |
`data?` | any | Data to be sent to every listener.  |

**Returns:** *void*

___

###  dispatchMouseClickEvent

▸ **dispatchMouseClickEvent**(`event`: MouseEvent): *void*

*Inherited from [Element](game.element.md).[dispatchMouseClickEvent](game.element.md#dispatchmouseclickevent)*

*Defined in [element.ts:245](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L245)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | Either a mouse up, mouse down or click event.  |

**Returns:** *void*

___

###  dispatchMouseMoveEvent

▸ **dispatchMouseMoveEvent**(): *void*

*Inherited from [Element](game.element.md).[dispatchMouseMoveEvent](game.element.md#dispatchmousemoveevent)*

*Defined in [element.ts:231](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L231)*

**Returns:** *void*

___

###  dispatchMouseOutEvent

▸ **dispatchMouseOutEvent**(): *void*

*Inherited from [Element](game.element.md).[dispatchMouseOutEvent](game.element.md#dispatchmouseoutevent)*

*Defined in [element.ts:220](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L220)*

**Returns:** *void*

___

###  dispatchMouseOverEvent

▸ **dispatchMouseOverEvent**(): *void*

*Inherited from [Element](game.element.md).[dispatchMouseOverEvent](game.element.md#dispatchmouseoverevent)*

*Defined in [element.ts:209](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L209)*

**Returns:** *void*

___

###  draw

▸ **draw**(`ctx`: CanvasRenderingContext2D): *void*

*Inherited from [Element](game.element.md).[draw](game.element.md#draw)*

*Defined in [element.ts:135](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L135)*

Draws this element, and all of its _children.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ctx` | CanvasRenderingContext2D | Canvas context.  |

**Returns:** *void*

___

###  drawElement

▸ **drawElement**(`ctx`: CanvasRenderingContext2D): *void*

*Overrides [Element](game.element.md).[drawElement](game.element.md#abstract-drawelement)*

*Defined in [circle.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/circle.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | CanvasRenderingContext2D |

**Returns:** *void*

___

###  getHeight

▸ **getHeight**(): *number*

*Inherited from [Element](game.element.md).[getHeight](game.element.md#getheight)*

*Defined in [element.ts:268](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L268)*

**Returns:** *number*

The element's height. Doesn't consider the rotation.

___

###  getVertices

▸ **getVertices**(): *object[][]*

*Inherited from [Element](game.element.md).[getVertices](game.element.md#getvertices)*

*Defined in [element.ts:480](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L480)*

Get the element vertices points. Assumes its a rectangle.

**Returns:** *object[][]*

___

###  getWidth

▸ **getWidth**(): *number*

*Inherited from [Element](game.element.md).[getWidth](game.element.md#getwidth)*

*Defined in [element.ts:259](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L259)*

**Returns:** *number*

The element's width. Doesn't consider the rotation.

___

###  hasListeners

▸ **hasListeners**(`type`: string): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[hasListeners](game.eventdispatcher.md#haslisteners)*

*Defined in [event_dispatcher.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L121)*

Check if there are listeners to a particular event type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | The event type to check. |

**Returns:** *boolean*

If there are listeners or not.

___

###  intersect

▸ **intersect**(`refX`: number, `refY`: number): *any[]*

*Inherited from [Element](game.element.md).[intersect](game.element.md#intersect)*

*Defined in [element.ts:156](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L156)*

Check if the element is within the given x/y position.

**Parameters:**

Name | Type |
------ | ------ |
`refX` | number |
`refY` | number |

**Returns:** *any[]*

___

###  isRemoved

▸ **isRemoved**(): *boolean*

*Inherited from [Element](game.element.md).[isRemoved](game.element.md#isremoved)*

*Defined in [element.ts:437](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L437)*

Tells if this element has already been removed or not.

**Returns:** *boolean*

___

###  logic

▸ **logic**(`deltaTime`: number): *void*

*Inherited from [Element](game.element.md).[logic](game.element.md#logic)*

*Defined in [element.ts:147](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L147)*

Logic code here (runs every update/tick).
Set the `_has_logic` property to `true` for this to get called.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

###  mouseClickEvents

▸ **mouseClickEvents**(`x`: any, `y`: any, `event`: any): *boolean*

*Inherited from [Element](game.element.md).[mouseClickEvents](game.element.md#mouseclickevents)*

*Defined in [element.ts:191](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |
`y` | any |
`event` | any |

**Returns:** *boolean*

___

###  remove

▸ **remove**(): *void*

*Inherited from [Element](game.element.md).[remove](game.element.md#remove)*

*Defined in [element.ts:400](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L400)*

Mark this element to be removed.

**Returns:** *void*

___

###  removeAllEventListeners

▸ **removeAllEventListeners**(): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeAllEventListeners](game.eventdispatcher.md#removealleventlisteners)*

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L89)*

Remove all the event listeners.

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**(`type`: string, `listener?`: function): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeEventListener](game.eventdispatcher.md#removeeventlistener)*

*Defined in [event_dispatcher.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L60)*

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

**Parameters:**

▪ **type**: *string*

The event type.

▪`Optional`  **listener**: *function*

The listener function to remove. If not provided then remove all the functions associated with the event type.

▸ (`data`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully removed.

___

###  rotate

▸ **rotate**(`angle`: number, `degrees?`: boolean): *void*

*Inherited from [Element](game.element.md).[rotate](game.element.md#rotate)*

*Defined in [element.ts:383](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L383)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | Angle of rotation. |
`degrees?` | boolean | Whether the angle provided is in degrees or radians.  |

**Returns:** *void*

___

###  setDimensions

▸ **setDimensions**(`width`: number, `height`: number): *void*

*Inherited from [Element](game.element.md).[setDimensions](game.element.md#setdimensions)*

*Defined in [element.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L297)*

Set the width and height at the same time.

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *void*

___

###  setHeight

▸ **setHeight**(`height`: number): *void*

*Inherited from [Element](game.element.md).[setHeight](game.element.md#setheight)*

*Defined in [element.ts:287](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L287)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`height` | number | New height.  |

**Returns:** *void*

___

###  setPosition

▸ **setPosition**(`x`: number, `y`: number): *void*

*Inherited from [Element](game.element.md).[setPosition](game.element.md#setposition)*

*Defined in [element.ts:494](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L494)*

Move the unit to the given x/y position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  setWidth

▸ **setWidth**(`width`: number): *void*

*Inherited from [Element](game.element.md).[setWidth](game.element.md#setwidth)*

*Defined in [element.ts:277](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L277)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | New width.  |

**Returns:** *void*

___

###  toAxisAligned

▸ **toAxisAligned**(): *object*

*Inherited from [Element](game.element.md).[toAxisAligned](game.element.md#toaxisaligned)*

*Defined in [element.ts:309](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L309)*

Calculates an axis-aligned rectangle from the rotated shape.

**Returns:** *object*

* **maxX**: *number* =  maxX

* **maxY**: *number* =  maxY

* **minX**: *number* =  minX

* **minY**: *number* =  minY

___

###  updateVertices

▸ **updateVertices**(`x`: number, `y`: number, `scaleX`: number, `scaleY`: number, `rotation`: number): *void*

*Inherited from [Element](game.element.md).[updateVertices](game.element.md#updatevertices)*

*Defined in [element.ts:453](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L453)*

Get the global vertices points of this element.
The arguments are the compound values from the parent containers.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`scaleX` | number |
`scaleY` | number |
`rotation` | number |

**Returns:** *void*
