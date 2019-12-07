[Game Engine](../README.md) › [Game](../modules/game.md) › [ScrollingBitmap](game.scrollingbitmap.md)

# Class: ScrollingBitmap

Basic Usage:

    var image = new Game.ScrollingBitmap({
            image: Game.Preload.get( 'imageId' ),
            direction: Game.ScrollingBitmapArgs.Direction.left,
            step: 1,
            interval: 0.2
        });
    Game.addElement( image );

Examples -- `clone`, `parallax_scrolling`

## Hierarchy

  ↳ [Bitmap](game.bitmap.md)

  ↳ **ScrollingBitmap**

## Index

### Constructors

* [constructor](game.scrollingbitmap.md#constructor)

### Properties

* [_container](game.scrollingbitmap.md#_container)
* [_count](game.scrollingbitmap.md#protected-_count)
* [_direction](game.scrollingbitmap.md#protected-_direction)
* [_half_height](game.scrollingbitmap.md#protected-_half_height)
* [_half_width](game.scrollingbitmap.md#protected-_half_width)
* [_has_logic](game.scrollingbitmap.md#_has_logic)
* [_height](game.scrollingbitmap.md#protected-_height)
* [_image](game.scrollingbitmap.md#protected-_image)
* [_interval](game.scrollingbitmap.md#protected-_interval)
* [_listeners](game.scrollingbitmap.md#protected-_listeners)
* [_ref_position](game.scrollingbitmap.md#protected-_ref_position)
* [_removed](game.scrollingbitmap.md#_removed)
* [_rotation](game.scrollingbitmap.md#protected-_rotation)
* [_scroll](game.scrollingbitmap.md#protected-_scroll)
* [_source_x](game.scrollingbitmap.md#protected-_source_x)
* [_source_y](game.scrollingbitmap.md#protected-_source_y)
* [_step](game.scrollingbitmap.md#protected-_step)
* [_width](game.scrollingbitmap.md#protected-_width)
* [_x](game.scrollingbitmap.md#protected-_x)
* [_y](game.scrollingbitmap.md#protected-_y)
* [category](game.scrollingbitmap.md#category)
* [collidesWith](game.scrollingbitmap.md#collideswith)
* [collision_data](game.scrollingbitmap.md#collision_data)
* [grid_data](game.scrollingbitmap.md#grid_data)
* [opacity](game.scrollingbitmap.md#opacity)
* [scaleX](game.scrollingbitmap.md#scalex)
* [scaleY](game.scrollingbitmap.md#scaley)
* [vertices](game.scrollingbitmap.md#vertices)
* [visible](game.scrollingbitmap.md#visible)

### Accessors

* [half_height](game.scrollingbitmap.md#half_height)
* [half_width](game.scrollingbitmap.md#half_width)
* [height](game.scrollingbitmap.md#height)
* [image](game.scrollingbitmap.md#image)
* [rotation](game.scrollingbitmap.md#rotation)
* [width](game.scrollingbitmap.md#width)
* [x](game.scrollingbitmap.md#x)
* [y](game.scrollingbitmap.md#y)

### Methods

* [_draw_horizontal](game.scrollingbitmap.md#protected-_draw_horizontal)
* [_draw_vertical](game.scrollingbitmap.md#protected-_draw_vertical)
* [_removeNow](game.scrollingbitmap.md#_removenow)
* [addEventListener](game.scrollingbitmap.md#addeventlistener)
* [addToPosition](game.scrollingbitmap.md#addtoposition)
* [checkCollision](game.scrollingbitmap.md#checkcollision)
* [clearInterval](game.scrollingbitmap.md#clearinterval)
* [clone](game.scrollingbitmap.md#clone)
* [dispatchEvent](game.scrollingbitmap.md#dispatchevent)
* [dispatchMouseClickEvent](game.scrollingbitmap.md#dispatchmouseclickevent)
* [dispatchMouseMoveEvent](game.scrollingbitmap.md#dispatchmousemoveevent)
* [dispatchMouseOutEvent](game.scrollingbitmap.md#dispatchmouseoutevent)
* [dispatchMouseOverEvent](game.scrollingbitmap.md#dispatchmouseoverevent)
* [draw](game.scrollingbitmap.md#draw)
* [drawElement](game.scrollingbitmap.md#drawelement)
* [getHeight](game.scrollingbitmap.md#getheight)
* [getVertices](game.scrollingbitmap.md#getvertices)
* [getWidth](game.scrollingbitmap.md#getwidth)
* [hasListeners](game.scrollingbitmap.md#haslisteners)
* [intersect](game.scrollingbitmap.md#intersect)
* [isRemoved](game.scrollingbitmap.md#isremoved)
* [logic](game.scrollingbitmap.md#logic)
* [mouseClickEvents](game.scrollingbitmap.md#mouseclickevents)
* [remove](game.scrollingbitmap.md#remove)
* [removeAllEventListeners](game.scrollingbitmap.md#removealleventlisteners)
* [removeEventListener](game.scrollingbitmap.md#removeeventlistener)
* [rotate](game.scrollingbitmap.md#rotate)
* [scroll_bottom](game.scrollingbitmap.md#scroll_bottom)
* [scroll_left](game.scrollingbitmap.md#scroll_left)
* [scroll_right](game.scrollingbitmap.md#scroll_right)
* [scroll_top](game.scrollingbitmap.md#scroll_top)
* [setDimensions](game.scrollingbitmap.md#setdimensions)
* [setDirection](game.scrollingbitmap.md#setdirection)
* [setHeight](game.scrollingbitmap.md#setheight)
* [setInterval](game.scrollingbitmap.md#setinterval)
* [setPosition](game.scrollingbitmap.md#setposition)
* [setStep](game.scrollingbitmap.md#setstep)
* [setWidth](game.scrollingbitmap.md#setwidth)
* [toAxisAligned](game.scrollingbitmap.md#toaxisaligned)
* [updateVertices](game.scrollingbitmap.md#updatevertices)

## Constructors

###  constructor

\+ **new ScrollingBitmap**(`args`: [ScrollingBitmapArgs](../modules/game.scrollingbitmapargs.md)): *[ScrollingBitmap](game.scrollingbitmap.md)*

*Overrides [Bitmap](game.bitmap.md).[constructor](game.bitmap.md#constructor)*

*Defined in [scrolling_bitmap.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ScrollingBitmapArgs](../modules/game.scrollingbitmapargs.md) |

**Returns:** *[ScrollingBitmap](game.scrollingbitmap.md)*

## Properties

###  _container

• **_container**: *[Container](game.container.md)*

*Inherited from [Element](game.element.md).[_container](game.element.md#_container)*

*Defined in [element.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L60)*

___

### `Protected` _count

• **_count**: *number*

*Defined in [scrolling_bitmap.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L36)*

___

### `Protected` _direction

• **_direction**: *[Direction](../enums/game.scrollingbitmapargs.direction.md)*

*Defined in [scrolling_bitmap.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L40)*

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

### `Protected` _image

• **_image**: *HTMLImageElement*

*Inherited from [Bitmap](game.bitmap.md).[_image](game.bitmap.md#protected-_image)*

*Defined in [bitmap.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L27)*

___

### `Protected` _interval

• **_interval**: *number*

*Defined in [scrolling_bitmap.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L37)*

___

### `Protected` _listeners

• **_listeners**: *any*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[_listeners](game.eventdispatcher.md#protected-_listeners)*

*Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)*

___

### `Protected` _ref_position

• **_ref_position**: *number*

*Defined in [scrolling_bitmap.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L39)*

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

### `Protected` _scroll

• **_scroll**: *function*

*Defined in [scrolling_bitmap.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L41)*

#### Type declaration:

▸ (): *void*

___

### `Protected` _source_x

• **_source_x**: *number*

*Inherited from [Bitmap](game.bitmap.md).[_source_x](game.bitmap.md#protected-_source_x)*

*Defined in [bitmap.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L28)*

___

### `Protected` _source_y

• **_source_y**: *number*

*Inherited from [Bitmap](game.bitmap.md).[_source_y](game.bitmap.md#protected-_source_y)*

*Defined in [bitmap.ts:29](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L29)*

___

### `Protected` _step

• **_step**: *number*

*Defined in [scrolling_bitmap.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L38)*

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

###  image

• **get image**(): *HTMLImageElement*

*Inherited from [Bitmap](game.bitmap.md).[image](game.bitmap.md#image)*

*Defined in [bitmap.ts:72](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L72)*

**Returns:** *HTMLImageElement*

• **set image**(`newImage`: HTMLImageElement): *void*

*Inherited from [Bitmap](game.bitmap.md).[image](game.bitmap.md#image)*

*Defined in [bitmap.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`newImage` | HTMLImageElement |

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

### `Protected` _draw_horizontal

▸ **_draw_horizontal**(`ctx`: CanvasRenderingContext2D): *void*

*Defined in [scrolling_bitmap.ts:182](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L182)*

Used for the horizontal movement (left or right).

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | CanvasRenderingContext2D |

**Returns:** *void*

___

### `Protected` _draw_vertical

▸ **_draw_vertical**(`ctx`: CanvasRenderingContext2D): *void*

*Defined in [scrolling_bitmap.ts:229](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L229)*

Used for the vertical movement (top or bottom).

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | CanvasRenderingContext2D |

**Returns:** *void*

___

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

###  clearInterval

▸ **clearInterval**(): *void*

*Defined in [scrolling_bitmap.ts:117](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L117)*

Stop the animation.

**Returns:** *void*

___

###  clone

▸ **clone**(): *[ScrollingBitmap](game.scrollingbitmap.md)‹›*

*Overrides [Bitmap](game.bitmap.md).[clone](game.bitmap.md#clone)*

*Defined in [scrolling_bitmap.ts:291](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L291)*

Get a copy of this object.

**Returns:** *[ScrollingBitmap](game.scrollingbitmap.md)‹›*

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

▸ **drawElement**(`ctx`: any): *void*

*Inherited from [Bitmap](game.bitmap.md).[drawElement](game.bitmap.md#drawelement)*

*Overrides [Element](game.element.md).[drawElement](game.element.md#abstract-drawelement)*

*Defined in [bitmap.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | any |

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

*Overrides [Element](game.element.md).[logic](game.element.md#logic)*

*Defined in [scrolling_bitmap.ts:276](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L276)*

Scroll the image at the given interval.

**Parameters:**

Name | Type |
------ | ------ |
`deltaTime` | number |

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

###  scroll_bottom

▸ **scroll_bottom**(): *void*

*Defined in [scrolling_bitmap.ts:168](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L168)*

Scroll to the bottom.

**Returns:** *void*

___

###  scroll_left

▸ **scroll_left**(): *void*

*Defined in [scrolling_bitmap.ts:126](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L126)*

Scroll to the left.

**Returns:** *void*

___

###  scroll_right

▸ **scroll_right**(): *void*

*Defined in [scrolling_bitmap.ts:140](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L140)*

Scroll to the right.

**Returns:** *void*

___

###  scroll_top

▸ **scroll_top**(): *void*

*Defined in [scrolling_bitmap.ts:154](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L154)*

Scroll to the top.

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

###  setDirection

▸ **setDirection**(`direction`: [Direction](../enums/game.scrollingbitmapargs.direction.md)): *void*

*Defined in [scrolling_bitmap.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L65)*

Set the direction of the scrolling.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [Direction](../enums/game.scrollingbitmapargs.direction.md) |

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

###  setInterval

▸ **setInterval**(`interval`: number): *void*

*Defined in [scrolling_bitmap.ts:106](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L106)*

Set an interval between the scroll movements.

**Parameters:**

Name | Type |
------ | ------ |
`interval` | number |

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

###  setStep

▸ **setStep**(`step`: number): *void*

*Defined in [scrolling_bitmap.ts:97](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L97)*

Change the step of the animation (how much it scrolls per update).

**Parameters:**

Name | Type |
------ | ------ |
`step` | number |

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
