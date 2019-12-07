[Game Engine](../README.md) › [Game](../modules/game.md) › [Grid](game.grid.md)

# Class: Grid

Generic grid, to hold any value in a 2d array. Values are added/retrieved by a column/line position.

Basic Usage:

    var grid = new Game.Grid({
            columns: 20,
            lines: 20
        });
    var value = 100;
    var column = 5;
    var line = 10;

    grid.add( value, column, line );

Examples -- `tower_defense`

## Hierarchy

* **Grid**

  ↳ [ElementGrid](game.elementgrid.md)

## Index

### Constructors

* [constructor](game.grid.md#constructor)

### Properties

* [_grid](game.grid.md#protected-_grid)
* [columns](game.grid.md#columns)
* [lines](game.grid.md#lines)

### Methods

* [add](game.grid.md#add)
* [get](game.grid.md#get)
* [getEmptyPositions](game.grid.md#getemptypositions)
* [getNeighbors](game.grid.md#getneighbors)
* [getRandomEmptyPosition](game.grid.md#getrandomemptyposition)
* [getRandomPosition](game.grid.md#getrandomposition)
* [isEmpty](game.grid.md#isempty)
* [isInGrid](game.grid.md#isingrid)
* [move](game.grid.md#move)
* [normalizePosition](game.grid.md#normalizeposition)
* [remove](game.grid.md#remove)

## Constructors

###  constructor

\+ **new Grid**(`args`: [GridArgs](../interfaces/game.gridargs.md)): *[Grid](game.grid.md)*

*Defined in [grid.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [GridArgs](../interfaces/game.gridargs.md) |

**Returns:** *[Grid](game.grid.md)*

## Properties

### `Protected` _grid

• **_grid**: *any[][]*

*Defined in [grid.ts:31](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L31)*

___

###  columns

• **columns**: *number*

*Defined in [grid.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L32)*

___

###  lines

• **lines**: *number*

*Defined in [grid.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L33)*

## Methods

###  add

▸ **add**(`value`: any, `column`: number, `line`: number): *any*

*Defined in [grid.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L64)*

Adds a value to a given column/line position.
Throws an exception if its an invalid column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | Any value to add to the grid. |
`column` | number | Column position. |
`line` | number | Line position. |

**Returns:** *any*

The previous value.

___

###  get

▸ **get**(`column`: number, `line`: number): *any*

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

###  getEmptyPositions

▸ **getEmptyPositions**(): *any[]*

*Defined in [grid.ts:266](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L266)*

**Returns:** *any[]*

An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).

___

###  getNeighbors

▸ **getNeighbors**(`refColumn`: number, `refLine`: number, `range?`: number): *any[]*

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

*Defined in [grid.ts:248](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L248)*

**Returns:** *any*

A random empty column/line position, or `null` if there aren't any empty positions.

___

###  getRandomPosition

▸ **getRandomPosition**(): *object*

*Defined in [grid.ts:236](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L236)*

**Returns:** *object*

A random column/line position that is within the grid's dimensions.

* **column**: *number* =  Utilities.getRandomInt( 0, this.columns - 1 )

* **line**: *number* =  Utilities.getRandomInt( 0, this.lines - 1 )

___

###  isEmpty

▸ **isEmpty**(`column`: number, `line`: number): *boolean*

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

▸ **move**(`sourceColumn`: number, `sourceLine`: number, `destinationColumn`: number, `destinationLine`: number): *any*

*Defined in [grid.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L89)*

Move an value from one position to another.
Throws an exception if any of the positions are invalid.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sourceColumn` | number | The column of the source value. |
`sourceLine` | number | The line of the source value. |
`destinationColumn` | number | The column of the destination. |
`destinationLine` | number | The line of the destination. |

**Returns:** *any*

The previous value that was on the destination position.

___

###  normalizePosition

▸ **normalizePosition**(`column`: number, `line`: number): *object*

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

*Defined in [grid.ts:116](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L116)*

Remove a value from the grid.
Throws an exception if its an invalid column/line position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column position. |
`line` | number | The line position. |

**Returns:** *any*

The value that was removed.
