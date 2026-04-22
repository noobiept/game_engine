[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Grid

# Class: Grid

Defined in: [source/grid.ts:25](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L25)

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

## Extended by

- [`ElementGrid`](ElementGrid.md)

## Constructors

### Constructor

> **new Grid**(`args`): `Grid`

Defined in: [source/grid.ts:30](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L30)

#### Parameters

##### args

[`GridArgs`](../interfaces/GridArgs.md)

#### Returns

`Grid`

## Properties

### \_grid

> `protected` **\_grid**: `any`[][]

Defined in: [source/grid.ts:26](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L26)

---

### columns

> **columns**: `number`

Defined in: [source/grid.ts:27](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L27)

---

### lines

> **lines**: `number`

Defined in: [source/grid.ts:28](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L28)

## Methods

### add()

> **add**(`value`, `column`, `line`): `any`

Defined in: [source/grid.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L54)

Adds a value to a given column/line position.
Throws an exception if its an invalid column/line position.

#### Parameters

##### value

`any`

Any value to add to the grid.

##### column

`number`

Column position.

##### line

`number`

Line position.

#### Returns

`any`

The previous value.

---

### get()

> **get**(`column`, `line`): `any`

Defined in: [source/grid.ts:126](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L126)

Get the value from a column/line position of the grid.
Throws an exception if its an invalid column/line position.

#### Parameters

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`any`

The value on that position. The default value is `null`, so if there was no value set previously, that's what you'll get.

---

### getEmptyPositions()

> **getEmptyPositions**(): `any`[]

Defined in: [source/grid.ts:229](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L229)

#### Returns

`any`[]

An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).

---

### getNeighbors()

> **getNeighbors**(`refColumn`, `refLine`, `range?`): `any`[]

Defined in: [source/grid.ts:255](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L255)

Get the neighbor values around the given position.
Throws an exception if the reference position is invalid.

#### Parameters

##### refColumn

`number`

The reference column position.

##### refLine

`number`

The reference line position.

##### range?

`number`

The range around the reference position to get.

#### Returns

`any`[]

The neighbor values.

---

### getRandomEmptyPosition()

> **getRandomEmptyPosition**(): `any`

Defined in: [source/grid.ts:214](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L214)

#### Returns

`any`

A random empty column/line position, or `null` if there aren't any empty positions.

---

### getRandomPosition()

> **getRandomPosition**(): `object`

Defined in: [source/grid.ts:204](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L204)

#### Returns

`object`

A random column/line position that is within the grid's dimensions.

##### column

> **column**: `number`

##### line

> **line**: `number`

---

### isEmpty()

> **isEmpty**(`column`, `line`): `boolean`

Defined in: [source/grid.ts:142](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L142)

Check if a given position is empty. A position is considered empty if it has the value `null`.
Throws an exception if its an invalid column/line position.

#### Parameters

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`boolean`

If the position is empty or not.

---

### isInGrid()

> **isInGrid**(`column`, `line`): `boolean`

Defined in: [source/grid.ts:188](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L188)

Checks if a given column/line position is within the grid's dimensions.

#### Parameters

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`boolean`

If this position is valid for this grid (is within it).

---

### move()

> **move**(`sourceColumn`, `sourceLine`, `destinationColumn`, `destinationLine`): `any`

Defined in: [source/grid.ts:76](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L76)

Move an value from one position to another.
Throws an exception if any of the positions are invalid.

#### Parameters

##### sourceColumn

`number`

The column of the source value.

##### sourceLine

`number`

The line of the source value.

##### destinationColumn

`number`

The column of the destination.

##### destinationLine

`number`

The line of the destination.

#### Returns

`any`

The previous value that was on the destination position.

---

### normalizePosition()

> **normalizePosition**(`column`, `line`): `object`

Defined in: [source/grid.ts:162](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L162)

Makes sure the position is within the grid's dimensions.
For example if you pass a column that is <0 then it will return a column with value 0 (since you can't have negative columns).

#### Parameters

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`object`

The column/line position that is guaranteed to be within the grid's dimensions.

##### column

> **column**: `number`

##### line

> **line**: `number`

---

### remove()

> **remove**(`column`, `line`): `any`

Defined in: [source/grid.ts:106](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L106)

Remove a value from the grid.
Throws an exception if its an invalid column/line position.

#### Parameters

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`any`

The value that was removed.
