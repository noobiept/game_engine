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

- **Grid**

    ↳ [ElementGrid](game.elementgrid.md)

## Index

### Constructors

- [constructor](game.grid.md#constructor)

### Properties

- [\_grid](game.grid.md#protected-_grid)
- [columns](game.grid.md#columns)
- [lines](game.grid.md#lines)

### Methods

- [add](game.grid.md#add)
- [get](game.grid.md#get)
- [getEmptyPositions](game.grid.md#getemptypositions)
- [getNeighbors](game.grid.md#getneighbors)
- [getRandomEmptyPosition](game.grid.md#getrandomemptyposition)
- [getRandomPosition](game.grid.md#getrandomposition)
- [isEmpty](game.grid.md#isempty)
- [isInGrid](game.grid.md#isingrid)
- [move](game.grid.md#move)
- [normalizePosition](game.grid.md#normalizeposition)
- [remove](game.grid.md#remove)

## Constructors

### constructor

\+ **new Grid**(`args`: [GridArgs](../interfaces/game.gridargs.md)): _[Grid](game.grid.md)_

_Defined in [grid.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L33)_

**Parameters:**

| Name   | Type                                       |
| ------ | ------------------------------------------ |
| `args` | [GridArgs](../interfaces/game.gridargs.md) |

**Returns:** _[Grid](game.grid.md)_

## Properties

### `Protected` \_grid

• **\_grid**: _any[][]_

_Defined in [grid.ts:31](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L31)_

---

### columns

• **columns**: _number_

_Defined in [grid.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L32)_

---

### lines

• **lines**: _number_

_Defined in [grid.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L33)_

## Methods

### add

▸ **add**(`value`: any, `column`: number, `line`: number): _any_

_Defined in [grid.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L64)_

Adds a value to a given column/line position.
Throws an exception if its an invalid column/line position.

**Parameters:**

| Name     | Type   | Description                   |
| -------- | ------ | ----------------------------- |
| `value`  | any    | Any value to add to the grid. |
| `column` | number | Column position.              |
| `line`   | number | Line position.                |

**Returns:** _any_

The previous value.

---

### get

▸ **get**(`column`: number, `line`: number): _any_

_Defined in [grid.ts:139](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L139)_

Get the value from a column/line position of the grid.
Throws an exception if its an invalid column/line position.

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _any_

The value on that position. The default value is `null`, so if there was no value set previously, that's what you'll get.

---

### getEmptyPositions

▸ **getEmptyPositions**(): _any[]_

_Defined in [grid.ts:266](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L266)_

**Returns:** _any[]_

An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).

---

### getNeighbors

▸ **getNeighbors**(`refColumn`: number, `refLine`: number, `range?`: number): _any[]_

_Defined in [grid.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L297)_

Get the neighbor values around the given position.
Throws an exception if the reference position is invalid.

**Parameters:**

| Name        | Type   | Description                                     |
| ----------- | ------ | ----------------------------------------------- |
| `refColumn` | number | The reference column position.                  |
| `refLine`   | number | The reference line position.                    |
| `range?`    | number | The range around the reference position to get. |

**Returns:** _any[]_

The neighbor values.

---

### getRandomEmptyPosition

▸ **getRandomEmptyPosition**(): _any_

_Defined in [grid.ts:248](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L248)_

**Returns:** _any_

A random empty column/line position, or `null` if there aren't any empty positions.

---

### getRandomPosition

▸ **getRandomPosition**(): _object_

_Defined in [grid.ts:236](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L236)_

**Returns:** _object_

A random column/line position that is within the grid's dimensions.

- **column**: _number_ = Utilities.getRandomInt( 0, this.columns - 1 )

- **line**: _number_ = Utilities.getRandomInt( 0, this.lines - 1 )

---

### isEmpty

▸ **isEmpty**(`column`: number, `line`: number): _boolean_

_Defined in [grid.ts:158](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L158)_

Check if a given position is empty. A position is considered empty if it has the value `null`.
Throws an exception if its an invalid column/line position.

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _boolean_

If the position is empty or not.

---

### isInGrid

▸ **isInGrid**(`column`: number, `line`: number): _boolean_

_Defined in [grid.ts:219](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L219)_

Checks if a given column/line position is within the grid's dimensions.

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _boolean_

If this position is valid for this grid (is within it).

---

### move

▸ **move**(`sourceColumn`: number, `sourceLine`: number, `destinationColumn`: number, `destinationLine`: number): _any_

_Defined in [grid.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L89)_

Move an value from one position to another.
Throws an exception if any of the positions are invalid.

**Parameters:**

| Name                | Type   | Description                     |
| ------------------- | ------ | ------------------------------- |
| `sourceColumn`      | number | The column of the source value. |
| `sourceLine`        | number | The line of the source value.   |
| `destinationColumn` | number | The column of the destination.  |
| `destinationLine`   | number | The line of the destination.    |

**Returns:** _any_

The previous value that was on the destination position.

---

### normalizePosition

▸ **normalizePosition**(`column`: number, `line`: number): _object_

_Defined in [grid.ts:182](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L182)_

Makes sure the position is within the grid's dimensions.
For example if you pass a column that is <0 then it will return a column with value 0 (since you can't have negative columns).

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _object_

The column/line position that is guaranteed to be within the grid's dimensions.

- **column**: _number_ = column

- **line**: _number_ = line

---

### remove

▸ **remove**(`column`: number, `line`: number): _any_

_Defined in [grid.ts:116](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L116)_

Remove a value from the grid.
Throws an exception if its an invalid column/line position.

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _any_

The value that was removed.
