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

- [constructor](game.scrollingbitmap.md#constructor)

### Properties

- [\_container](game.scrollingbitmap.md#_container)
- [\_count](game.scrollingbitmap.md#protected-_count)
- [\_direction](game.scrollingbitmap.md#protected-_direction)
- [\_half_height](game.scrollingbitmap.md#protected-_half_height)
- [\_half_width](game.scrollingbitmap.md#protected-_half_width)
- [\_has_logic](game.scrollingbitmap.md#_has_logic)
- [\_height](game.scrollingbitmap.md#protected-_height)
- [\_image](game.scrollingbitmap.md#protected-_image)
- [\_interval](game.scrollingbitmap.md#protected-_interval)
- [\_listeners](game.scrollingbitmap.md#protected-_listeners)
- [\_ref_position](game.scrollingbitmap.md#protected-_ref_position)
- [\_removed](game.scrollingbitmap.md#_removed)
- [\_rotation](game.scrollingbitmap.md#protected-_rotation)
- [\_scroll](game.scrollingbitmap.md#protected-_scroll)
- [\_source_x](game.scrollingbitmap.md#protected-_source_x)
- [\_source_y](game.scrollingbitmap.md#protected-_source_y)
- [\_step](game.scrollingbitmap.md#protected-_step)
- [\_width](game.scrollingbitmap.md#protected-_width)
- [\_x](game.scrollingbitmap.md#protected-_x)
- [\_y](game.scrollingbitmap.md#protected-_y)
- [category](game.scrollingbitmap.md#category)
- [collidesWith](game.scrollingbitmap.md#collideswith)
- [collision_data](game.scrollingbitmap.md#collision_data)
- [grid_data](game.scrollingbitmap.md#grid_data)
- [opacity](game.scrollingbitmap.md#opacity)
- [scaleX](game.scrollingbitmap.md#scalex)
- [scaleY](game.scrollingbitmap.md#scaley)
- [vertices](game.scrollingbitmap.md#vertices)
- [visible](game.scrollingbitmap.md#visible)

### Accessors

- [half_height](game.scrollingbitmap.md#half_height)
- [half_width](game.scrollingbitmap.md#half_width)
- [height](game.scrollingbitmap.md#height)
- [image](game.scrollingbitmap.md#image)
- [rotation](game.scrollingbitmap.md#rotation)
- [width](game.scrollingbitmap.md#width)
- [x](game.scrollingbitmap.md#x)
- [y](game.scrollingbitmap.md#y)

### Methods

- [\_draw_horizontal](game.scrollingbitmap.md#protected-_draw_horizontal)
- [\_draw_vertical](game.scrollingbitmap.md#protected-_draw_vertical)
- [\_removeNow](game.scrollingbitmap.md#_removenow)
- [addEventListener](game.scrollingbitmap.md#addeventlistener)
- [addToPosition](game.scrollingbitmap.md#addtoposition)
- [checkCollision](game.scrollingbitmap.md#checkcollision)
- [clearInterval](game.scrollingbitmap.md#clearinterval)
- [clone](game.scrollingbitmap.md#clone)
- [dispatchEvent](game.scrollingbitmap.md#dispatchevent)
- [dispatchMouseClickEvent](game.scrollingbitmap.md#dispatchmouseclickevent)
- [dispatchMouseMoveEvent](game.scrollingbitmap.md#dispatchmousemoveevent)
- [dispatchMouseOutEvent](game.scrollingbitmap.md#dispatchmouseoutevent)
- [dispatchMouseOverEvent](game.scrollingbitmap.md#dispatchmouseoverevent)
- [draw](game.scrollingbitmap.md#draw)
- [drawElement](game.scrollingbitmap.md#drawelement)
- [getHeight](game.scrollingbitmap.md#getheight)
- [getVertices](game.scrollingbitmap.md#getvertices)
- [getWidth](game.scrollingbitmap.md#getwidth)
- [hasListeners](game.scrollingbitmap.md#haslisteners)
- [intersect](game.scrollingbitmap.md#intersect)
- [isRemoved](game.scrollingbitmap.md#isremoved)
- [logic](game.scrollingbitmap.md#logic)
- [mouseClickEvents](game.scrollingbitmap.md#mouseclickevents)
- [remove](game.scrollingbitmap.md#remove)
- [removeAllEventListeners](game.scrollingbitmap.md#removealleventlisteners)
- [removeEventListener](game.scrollingbitmap.md#removeeventlistener)
- [rotate](game.scrollingbitmap.md#rotate)
- [scroll_bottom](game.scrollingbitmap.md#scroll_bottom)
- [scroll_left](game.scrollingbitmap.md#scroll_left)
- [scroll_right](game.scrollingbitmap.md#scroll_right)
- [scroll_top](game.scrollingbitmap.md#scroll_top)
- [setDimensions](game.scrollingbitmap.md#setdimensions)
- [setDirection](game.scrollingbitmap.md#setdirection)
- [setHeight](game.scrollingbitmap.md#setheight)
- [setInterval](game.scrollingbitmap.md#setinterval)
- [setPosition](game.scrollingbitmap.md#setposition)
- [setStep](game.scrollingbitmap.md#setstep)
- [setWidth](game.scrollingbitmap.md#setwidth)
- [toAxisAligned](game.scrollingbitmap.md#toaxisaligned)
- [updateVertices](game.scrollingbitmap.md#updatevertices)

## Constructors

### constructor

\+ **new ScrollingBitmap**(`args`: [ScrollingBitmapArgs](../modules/game.scrollingbitmapargs.md)): _[ScrollingBitmap](game.scrollingbitmap.md)_

_Overrides [Bitmap](game.bitmap.md).[constructor](game.bitmap.md#constructor)_

_Defined in [scrolling_bitmap.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L41)_

**Parameters:**

| Name   | Type                                                          |
| ------ | ------------------------------------------------------------- |
| `args` | [ScrollingBitmapArgs](../modules/game.scrollingbitmapargs.md) |

**Returns:** _[ScrollingBitmap](game.scrollingbitmap.md)_

## Properties

### \_container

• **\_container**: _[Container](game.container.md)_

_Inherited from [Element](game.element.md).[\_container](game.element.md#_container)_

_Defined in [element.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/element.ts#L60)_

---

### `Protected` \_count

• **\_count**: _number_

_Defined in [scrolling_bitmap.ts:36](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L36)_

---

### `Protected` \_direction

• **\_direction**: _[Direction](../enums/game.scrollingbitmapargs.direction.md)_

_Defined in [scrolling_bitmap.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L40)_

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

### `Protected` \_image

• **\_image**: _HTMLImageElement_

_Inherited from [Bitmap](game.bitmap.md).[\_image](game.bitmap.md#protected-_image)_

_Defined in [bitmap.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L27)_

---

### `Protected` \_interval

• **\_interval**: _number_

_Defined in [scrolling_bitmap.ts:37](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L37)_

---

### `Protected` \_listeners

• **\_listeners**: _any_

_Inherited from [EventDispatcher](game.eventdispatcher.md).[\_listeners](game.eventdispatcher.md#protected-_listeners)_

_Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)_

---

### `Protected` \_ref_position

• **\_ref_position**: _number_

_Defined in [scrolling_bitmap.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L39)_

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

### `Protected` \_scroll

• **\_scroll**: _function_

_Defined in [scrolling_bitmap.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L41)_

#### Type declaration:

▸ (): _void_

---

### `Protected` \_source_x

• **\_source_x**: _number_

_Inherited from [Bitmap](game.bitmap.md).[\_source_x](game.bitmap.md#protected-_source_x)_

_Defined in [bitmap.ts:28](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L28)_

---

### `Protected` \_source_y

• **\_source_y**: _number_

_Inherited from [Bitmap](game.bitmap.md).[\_source_y](game.bitmap.md#protected-_source_y)_

_Defined in [bitmap.ts:29](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L29)_

---

### `Protected` \_step

• **\_step**: _number_

_Defined in [scrolling_bitmap.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L38)_

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

### image

• **get image**(): _HTMLImageElement_

_Inherited from [Bitmap](game.bitmap.md).[image](game.bitmap.md#image)_

_Defined in [bitmap.ts:72](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L72)_

**Returns:** _HTMLImageElement_

• **set image**(`newImage`: HTMLImageElement): _void_

_Inherited from [Bitmap](game.bitmap.md).[image](game.bitmap.md#image)_

_Defined in [bitmap.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L78)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `newImage` | HTMLImageElement |

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

### `Protected` \_draw_horizontal

▸ **\_draw_horizontal**(`ctx`: CanvasRenderingContext2D): _void_

_Defined in [scrolling_bitmap.ts:182](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L182)_

Used for the horizontal movement (left or right).

**Parameters:**

| Name  | Type                     |
| ----- | ------------------------ |
| `ctx` | CanvasRenderingContext2D |

**Returns:** _void_

---

### `Protected` \_draw_vertical

▸ **\_draw_vertical**(`ctx`: CanvasRenderingContext2D): _void_

_Defined in [scrolling_bitmap.ts:229](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L229)_

Used for the vertical movement (top or bottom).

**Parameters:**

| Name  | Type                     |
| ----- | ------------------------ |
| `ctx` | CanvasRenderingContext2D |

**Returns:** _void_

---

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

### clearInterval

▸ **clearInterval**(): _void_

_Defined in [scrolling_bitmap.ts:117](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L117)_

Stop the animation.

**Returns:** _void_

---

### clone

▸ **clone**(): _[ScrollingBitmap](game.scrollingbitmap.md)‹›_

_Overrides [Bitmap](game.bitmap.md).[clone](game.bitmap.md#clone)_

_Defined in [scrolling_bitmap.ts:291](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L291)_

Get a copy of this object.

**Returns:** _[ScrollingBitmap](game.scrollingbitmap.md)‹›_

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

▸ **drawElement**(`ctx`: any): _void_

_Inherited from [Bitmap](game.bitmap.md).[drawElement](game.bitmap.md#drawelement)_

_Overrides [Element](game.element.md).[drawElement](game.element.md#abstract-drawelement)_

_Defined in [bitmap.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/bitmap.ts#L42)_

**Parameters:**

| Name  | Type |
| ----- | ---- |
| `ctx` | any  |

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

_Overrides [Element](game.element.md).[logic](game.element.md#logic)_

_Defined in [scrolling_bitmap.ts:276](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L276)_

Scroll the image at the given interval.

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `deltaTime` | number |

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

### scroll_bottom

▸ **scroll_bottom**(): _void_

_Defined in [scrolling_bitmap.ts:168](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L168)_

Scroll to the bottom.

**Returns:** _void_

---

### scroll_left

▸ **scroll_left**(): _void_

_Defined in [scrolling_bitmap.ts:126](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L126)_

Scroll to the left.

**Returns:** _void_

---

### scroll_right

▸ **scroll_right**(): _void_

_Defined in [scrolling_bitmap.ts:140](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L140)_

Scroll to the right.

**Returns:** _void_

---

### scroll_top

▸ **scroll_top**(): _void_

_Defined in [scrolling_bitmap.ts:154](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L154)_

Scroll to the top.

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

### setDirection

▸ **setDirection**(`direction`: [Direction](../enums/game.scrollingbitmapargs.direction.md)): _void_

_Defined in [scrolling_bitmap.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L65)_

Set the direction of the scrolling.

**Parameters:**

| Name        | Type                                                        |
| ----------- | ----------------------------------------------------------- |
| `direction` | [Direction](../enums/game.scrollingbitmapargs.direction.md) |

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

### setInterval

▸ **setInterval**(`interval`: number): _void_

_Defined in [scrolling_bitmap.ts:106](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L106)_

Set an interval between the scroll movements.

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `interval` | number |

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

### setStep

▸ **setStep**(`step`: number): _void_

_Defined in [scrolling_bitmap.ts:97](https://github.com/noobiept/game_engine/blob/625c324/source/scrolling_bitmap.ts#L97)_

Change the step of the animation (how much it scrolls per update).

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `step` | number |

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
