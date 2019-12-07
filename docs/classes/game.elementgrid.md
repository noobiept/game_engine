[Game Engine](../README.md) › [Game](../modules/game.md) › [ElementGrid](game.elementgrid.md)

# Class: ElementGrid

Basic Usage:

    var rectangle = new Game.Rectangle({
            width: 10,
            height: 10,
            color: 'green'
        });
    Game.addElement( rectangle );

    var grid = new Game.ElementGrid({
            squareSize: 10,
            columns: 20,
            lines: 20
        });
    grid.add( rectangle, 10, 10 );

Events:

- `collision` -- `listener( data: { element: Element; collidedWith: Element; } );`

Examples -- `2048`, `game_of_life`, `grid`, `minesweeper`, `snake`

## Hierarchy

* [Grid](game.grid.md)

  ↳ **ElementGrid**

## Index

### Constructors

* [constructor](game.elementgrid.md#constructor)

### Properties

* [_background](game.elementgrid.md#protected-_background)
* [_grid](game.elementgrid.md#protected-_grid)
* [columns](game.elementgrid.md#columns)
* [events](game.elementgrid.md#events)
* [lines](game.elementgrid.md#lines)
* [ref_x](game.elementgrid.md#ref_x)
* [ref_y](game.elementgrid.md#ref_y)
* [square_size](game.elementgrid.md#square_size)

### Methods

* [add](game.elementgrid.md#add)
* [clear](game.elementgrid.md#clear)
* [get](game.elementgrid.md#get)
* [getDimensions](game.elementgrid.md#getdimensions)
* [getEmptyPositions](game.elementgrid.md#getemptypositions)
* [getNeighbors](game.elementgrid.md#getneighbors)
* [getRandomEmptyPosition](game.elementgrid.md#getrandomemptyposition)
* [getRandomPosition](game.elementgrid.md#getrandomposition)
* [isEmpty](game.elementgrid.md#isempty)
* [isInGrid](game.elementgrid.md#isingrid)
* [move](game.elementgrid.md#move)
* [normalizePosition](game.elementgrid.md#normalizeposition)
* [remove](game.elementgrid.md#remove)
* [toCanvas](game.elementgrid.md#tocanvas)
* [toGrid](game.elementgrid.md#togrid)

## Constructors

###  constructor

\+ **new ElementGrid**(`args`: [ElementGridArgs](../interfaces/game.elementgridargs.md)): *[ElementGrid](game.elementgrid.md)*

*Overrides [Grid](game.grid.md).[constructor](game.grid.md#constructor)*

*Defined in [element_grid.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ElementGridArgs](../interfaces/game.elementgridargs.md) |

**Returns:** *[ElementGrid](game.elementgrid.md)*

## Properties

### `Protected` _background

• **_background**: *[Rectangle](game.rectangle.md)*

*Defined in [element_grid.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L46)*

___

### `Protected` _grid

• **_grid**: *any[][]*

*Inherited from [Grid](game.grid.md).[_grid](game.grid.md#protected-_grid)*

*Defined in [grid.ts:31](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L31)*

___

###  columns

• **columns**: *number*

*Inherited from [Grid](game.grid.md).[columns](game.grid.md#columns)*

*Defined in [grid.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L32)*

___

###  events

• **events**: *[EventDispatcher](game.eventdispatcher.md)*

*Defined in [element_grid.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L47)*

___

###  lines

• **lines**: *number*

*Inherited from [Grid](game.grid.md).[lines](game.grid.md#lines)*

*Defined in [grid.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L33)*

___

###  ref_x

• **ref_x**: *number*

*Defined in [element_grid.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L44)*

___

###  ref_y

• **ref_y**: *number*

*Defined in [element_grid.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L45)*

___

###  square_size

• **square_size**: *number*

*Defined in [element_grid.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L43)*

## Methods

###  add

▸ **add**(`element`: [Element](game.element.md), `column`: number, `line`: number): *any*

*Overrides [Grid](game.grid.md).[add](game.grid.md#add)*

*Defined in [element_grid.ts:138](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L138)*

Add an `Element` to a grid position.
Throws an exception if its an invalid column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [Element](game.element.md) | The element to be added. |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *any*

The previous element that was in that position (or `null` if there wasn't one).

___

###  clear

▸ **clear**(): *void*

*Defined in [element_grid.ts:264](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L264)*

Clear grid related elements etc.
Called when we don't need the grid anymore.

**Returns:** *void*

___

###  get

▸ **get**(`column`: number, `line`: number): *any*

*Inherited from [Grid](game.grid.md).[get](game.grid.md#get)*

*Defined in [grid.ts:139](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L139)*

Get the value from a column/line position of the grid.
Throws an exception if its an invalid column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *any*

The value on that position. The default value is `null`, so if there was no value set previously, that's what you'll get.

___

###  getDimensions

▸ **getDimensions**(): *object*

*Defined in [element_grid.ts:249](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L249)*

**Returns:** *object*

The grid's dimensions.

* **height**: *number* =  this.square_size * this.lines

* **width**: *number* =  this.square_size * this.columns

* **x**: *number* =  this.ref_x

* **y**: *number* =  this.ref_y

___

###  getEmptyPositions

▸ **getEmptyPositions**(): *any[]*

*Inherited from [Grid](game.grid.md).[getEmptyPositions](game.grid.md#getemptypositions)*

*Defined in [grid.ts:266](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L266)*

**Returns:** *any[]*

An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).

___

###  getNeighbors

▸ **getNeighbors**(`refColumn`: number, `refLine`: number, `range?`: number): *any[]*

*Inherited from [Grid](game.grid.md).[getNeighbors](game.grid.md#getneighbors)*

*Defined in [grid.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L297)*

Get the neighbor values around the given position.
Throws an exception if the reference position is invalid.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`refColumn` | number | The reference column position. |
`refLine` | number | The reference line position. |
`range?` | number | The range around the reference position to get. |

**Returns:** *any[]*

The neighbor values.

___

###  getRandomEmptyPosition

▸ **getRandomEmptyPosition**(): *any*

*Inherited from [Grid](game.grid.md).[getRandomEmptyPosition](game.grid.md#getrandomemptyposition)*

*Defined in [grid.ts:248](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L248)*

**Returns:** *any*

A random empty column/line position, or `null` if there aren't any empty positions.

___

###  getRandomPosition

▸ **getRandomPosition**(): *object*

*Inherited from [Grid](game.grid.md).[getRandomPosition](game.grid.md#getrandomposition)*

*Defined in [grid.ts:236](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L236)*

**Returns:** *object*

A random column/line position that is within the grid's dimensions.

* **column**: *number* =  Utilities.getRandomInt( 0, this.columns - 1 )

* **line**: *number* =  Utilities.getRandomInt( 0, this.lines - 1 )

___

###  isEmpty

▸ **isEmpty**(`column`: number, `line`: number): *boolean*

*Inherited from [Grid](game.grid.md).[isEmpty](game.grid.md#isempty)*

*Defined in [grid.ts:158](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L158)*

Check if a given position is empty. A position is considered empty if it has the value `null`.
Throws an exception if its an invalid column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *boolean*

If the position is empty or not.

___

###  isInGrid

▸ **isInGrid**(`column`: number, `line`: number): *boolean*

*Inherited from [Grid](game.grid.md).[isInGrid](game.grid.md#isingrid)*

*Defined in [grid.ts:219](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L219)*

Checks if a given column/line position is within the grid's dimensions.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *boolean*

If this position is valid for this grid (is within it).

___

###  move

▸ **move**(`sourceColumn`: number, `sourceLine`: number, `destColumn`: number, `destLine`: number, `duration?`: number): *any*

*Overrides [Grid](game.grid.md).[move](game.grid.md#move)*

*Defined in [element_grid.ts:172](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L172)*

Move an element from one grid position to another (the element needs to be already in the grid).
Throws an exception if any of the positions are invalid.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sourceColumn` | number | The source column of an existing element. |
`sourceLine` | number | The source line of an existing element. |
`destColumn` | number | The destination column position. |
`destLine` | number | The destination line position. |
`duration?` | number | If duration >0, then a tween animation is going to be applied to the movement. |

**Returns:** *any*

The previous element that was in the destination position (or null if there wasn't one).

___

###  normalizePosition

▸ **normalizePosition**(`column`: number, `line`: number): *object*

*Inherited from [Grid](game.grid.md).[normalizePosition](game.grid.md#normalizeposition)*

*Defined in [grid.ts:182](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L182)*

Makes sure the position is within the grid's dimensions.
For example if you pass a column that is <0 then it will return a column with value 0 (since you can't have negative columns).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *object*

The column/line position that is guaranteed to be within the grid's dimensions.

* **column**: *number* =  column

* **line**: *number* =  line

___

###  remove

▸ **remove**(`column`: number, `line`: number): *any*

*Overrides [Grid](game.grid.md).[remove](game.grid.md#remove)*

*Defined in [element_grid.ts:232](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L232)*

Remove an element from the grid.
Throws an exception if its an invalid column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *any*

The element that was removed.

___

###  toCanvas

▸ **toCanvas**(`column`: number, `line`: number): *object*

*Defined in [element_grid.ts:104](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L104)*

Get the equivalent x/y position from a column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *object*

The x/y position.

* **x**: *number* =  this.ref_x + column * this.square_size

* **y**: *number* =  this.ref_y + line * this.square_size

___

###  toGrid

▸ **toGrid**(`x`: number, `y`: number): *object*

*Defined in [element_grid.ts:120](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L120)*

Get the equivalent column/line position from a x/y position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The x position. |
`y` | number | The y position. |

**Returns:** *object*

The column/line position.

* **column**: *number* =  Math.round( (x - this.ref_x) / this.square_size )

* **line**: *number* =  Math.round( (y - this.ref_y) / this.square_size )
