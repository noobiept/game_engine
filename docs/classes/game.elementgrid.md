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

- [Grid](game.grid.md)

    ↳ **ElementGrid**

## Index

### Constructors

- [constructor](game.elementgrid.md#constructor)

### Properties

- [\_background](game.elementgrid.md#protected-_background)
- [\_grid](game.elementgrid.md#protected-_grid)
- [columns](game.elementgrid.md#columns)
- [events](game.elementgrid.md#events)
- [lines](game.elementgrid.md#lines)
- [ref_x](game.elementgrid.md#ref_x)
- [ref_y](game.elementgrid.md#ref_y)
- [square_size](game.elementgrid.md#square_size)

### Methods

- [add](game.elementgrid.md#add)
- [clear](game.elementgrid.md#clear)
- [get](game.elementgrid.md#get)
- [getDimensions](game.elementgrid.md#getdimensions)
- [getEmptyPositions](game.elementgrid.md#getemptypositions)
- [getNeighbors](game.elementgrid.md#getneighbors)
- [getRandomEmptyPosition](game.elementgrid.md#getrandomemptyposition)
- [getRandomPosition](game.elementgrid.md#getrandomposition)
- [isEmpty](game.elementgrid.md#isempty)
- [isInGrid](game.elementgrid.md#isingrid)
- [move](game.elementgrid.md#move)
- [normalizePosition](game.elementgrid.md#normalizeposition)
- [remove](game.elementgrid.md#remove)
- [toCanvas](game.elementgrid.md#tocanvas)
- [toGrid](game.elementgrid.md#togrid)

## Constructors

### constructor

\+ **new ElementGrid**(`args`: [ElementGridArgs](../interfaces/game.elementgridargs.md)): _[ElementGrid](game.elementgrid.md)_

_Overrides [Grid](game.grid.md).[constructor](game.grid.md#constructor)_

_Defined in [element_grid.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L47)_

**Parameters:**

| Name   | Type                                                     |
| ------ | -------------------------------------------------------- |
| `args` | [ElementGridArgs](../interfaces/game.elementgridargs.md) |

**Returns:** _[ElementGrid](game.elementgrid.md)_

## Properties

### `Protected` \_background

• **\_background**: _[Rectangle](game.rectangle.md)_

_Defined in [element_grid.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L46)_

---

### `Protected` \_grid

• **\_grid**: _any[][]_

_Inherited from [Grid](game.grid.md).[\_grid](game.grid.md#protected-_grid)_

_Defined in [grid.ts:31](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L31)_

---

### columns

• **columns**: _number_

_Inherited from [Grid](game.grid.md).[columns](game.grid.md#columns)_

_Defined in [grid.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L32)_

---

### events

• **events**: _[EventDispatcher](game.eventdispatcher.md)_

_Defined in [element_grid.ts:47](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L47)_

---

### lines

• **lines**: _number_

_Inherited from [Grid](game.grid.md).[lines](game.grid.md#lines)_

_Defined in [grid.ts:33](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L33)_

---

### ref_x

• **ref_x**: _number_

_Defined in [element_grid.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L44)_

---

### ref_y

• **ref_y**: _number_

_Defined in [element_grid.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L45)_

---

### square_size

• **square_size**: _number_

_Defined in [element_grid.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L43)_

## Methods

### add

▸ **add**(`element`: [Element](game.element.md), `column`: number, `line`: number): _any_

_Overrides [Grid](game.grid.md).[add](game.grid.md#add)_

_Defined in [element_grid.ts:138](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L138)_

Add an `Element` to a grid position.
Throws an exception if its an invalid column/line position.

**Parameters:**

| Name      | Type                       | Description              |
| --------- | -------------------------- | ------------------------ |
| `element` | [Element](game.element.md) | The element to be added. |
| `column`  | number                     | The column position.     |
| `line`    | number                     | The line position.       |

**Returns:** _any_

The previous element that was in that position (or `null` if there wasn't one).

---

### clear

▸ **clear**(): _void_

_Defined in [element_grid.ts:264](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L264)_

Clear grid related elements etc.
Called when we don't need the grid anymore.

**Returns:** _void_

---

### get

▸ **get**(`column`: number, `line`: number): _any_

_Inherited from [Grid](game.grid.md).[get](game.grid.md#get)_

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

### getDimensions

▸ **getDimensions**(): _object_

_Defined in [element_grid.ts:249](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L249)_

**Returns:** _object_

The grid's dimensions.

- **height**: _number_ = this.square_size \* this.lines

- **width**: _number_ = this.square_size \* this.columns

- **x**: _number_ = this.ref_x

- **y**: _number_ = this.ref_y

---

### getEmptyPositions

▸ **getEmptyPositions**(): _any[]_

_Inherited from [Grid](game.grid.md).[getEmptyPositions](game.grid.md#getemptypositions)_

_Defined in [grid.ts:266](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L266)_

**Returns:** _any[]_

An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).

---

### getNeighbors

▸ **getNeighbors**(`refColumn`: number, `refLine`: number, `range?`: number): _any[]_

_Inherited from [Grid](game.grid.md).[getNeighbors](game.grid.md#getneighbors)_

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

_Inherited from [Grid](game.grid.md).[getRandomEmptyPosition](game.grid.md#getrandomemptyposition)_

_Defined in [grid.ts:248](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L248)_

**Returns:** _any_

A random empty column/line position, or `null` if there aren't any empty positions.

---

### getRandomPosition

▸ **getRandomPosition**(): _object_

_Inherited from [Grid](game.grid.md).[getRandomPosition](game.grid.md#getrandomposition)_

_Defined in [grid.ts:236](https://github.com/noobiept/game_engine/blob/625c324/source/grid.ts#L236)_

**Returns:** _object_

A random column/line position that is within the grid's dimensions.

- **column**: _number_ = Utilities.getRandomInt( 0, this.columns - 1 )

- **line**: _number_ = Utilities.getRandomInt( 0, this.lines - 1 )

---

### isEmpty

▸ **isEmpty**(`column`: number, `line`: number): _boolean_

_Inherited from [Grid](game.grid.md).[isEmpty](game.grid.md#isempty)_

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

_Inherited from [Grid](game.grid.md).[isInGrid](game.grid.md#isingrid)_

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

▸ **move**(`sourceColumn`: number, `sourceLine`: number, `destColumn`: number, `destLine`: number, `duration?`: number): _any_

_Overrides [Grid](game.grid.md).[move](game.grid.md#move)_

_Defined in [element_grid.ts:172](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L172)_

Move an element from one grid position to another (the element needs to be already in the grid).
Throws an exception if any of the positions are invalid.

**Parameters:**

| Name           | Type   | Description                                                                    |
| -------------- | ------ | ------------------------------------------------------------------------------ |
| `sourceColumn` | number | The source column of an existing element.                                      |
| `sourceLine`   | number | The source line of an existing element.                                        |
| `destColumn`   | number | The destination column position.                                               |
| `destLine`     | number | The destination line position.                                                 |
| `duration?`    | number | If duration >0, then a tween animation is going to be applied to the movement. |

**Returns:** _any_

The previous element that was in the destination position (or null if there wasn't one).

---

### normalizePosition

▸ **normalizePosition**(`column`: number, `line`: number): _object_

_Inherited from [Grid](game.grid.md).[normalizePosition](game.grid.md#normalizeposition)_

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

_Overrides [Grid](game.grid.md).[remove](game.grid.md#remove)_

_Defined in [element_grid.ts:232](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L232)_

Remove an element from the grid.
Throws an exception if its an invalid column/line position.

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _any_

The element that was removed.

---

### toCanvas

▸ **toCanvas**(`column`: number, `line`: number): _object_

_Defined in [element_grid.ts:104](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L104)_

Get the equivalent x/y position from a column/line position.

**Parameters:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| `column` | number | The column position. |
| `line`   | number | The line position.   |

**Returns:** _object_

The x/y position.

- **x**: _number_ = this.ref_x + column \* this.square_size

- **y**: _number_ = this.ref_y + line \* this.square_size

---

### toGrid

▸ **toGrid**(`x`: number, `y`: number): _object_

_Defined in [element_grid.ts:120](https://github.com/noobiept/game_engine/blob/625c324/source/element_grid.ts#L120)_

Get the equivalent column/line position from a x/y position.

**Parameters:**

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| `x`  | number | The x position. |
| `y`  | number | The y position. |

**Returns:** _object_

The column/line position.

- **column**: _number_ = Math.round( (x - this.ref_x) / this.square_size )

- **line**: _number_ = Math.round( (y - this.ref_y) / this.square_size )
