[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / ElementGrid

# Class: ElementGrid

Defined in: [source/element_grid.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L38)

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

## Extends

- [`Grid`](Grid.md)

## Constructors

### Constructor

> **new ElementGrid**(`args`): `ElementGrid`

Defined in: [source/element_grid.ts:45](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L45)

#### Parameters

##### args

[`ElementGridArgs`](../interfaces/ElementGridArgs.md)

#### Returns

`ElementGrid`

#### Overrides

[`Grid`](Grid.md).[`constructor`](Grid.md#constructor)

## Properties

### \_background

> `protected` **\_background**: [`Rectangle`](Rectangle.md)

Defined in: [source/element_grid.ts:42](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L42)

---

### \_grid

> `protected` **\_grid**: `any`[][]

Defined in: [source/grid.ts:26](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L26)

#### Inherited from

[`Grid`](Grid.md).[`_grid`](Grid.md#_grid)

---

### columns

> **columns**: `number`

Defined in: [source/grid.ts:27](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L27)

#### Inherited from

[`Grid`](Grid.md).[`columns`](Grid.md#columns)

---

### events

> **events**: [`EventDispatcher`](EventDispatcher.md)

Defined in: [source/element_grid.ts:43](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L43)

---

### lines

> **lines**: `number`

Defined in: [source/grid.ts:28](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L28)

#### Inherited from

[`Grid`](Grid.md).[`lines`](Grid.md#lines)

---

### ref_x

> **ref_x**: `number`

Defined in: [source/element_grid.ts:40](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L40)

---

### ref_y

> **ref_y**: `number`

Defined in: [source/element_grid.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L41)

---

### square_size

> **square_size**: `number`

Defined in: [source/element_grid.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L39)

## Methods

### add()

> **add**(`element`, `column`, `line`): `any`

Defined in: [source/element_grid.ts:121](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L121)

Add an `Element` to a grid position.
Throws an exception if its an invalid column/line position.

#### Parameters

##### element

[`Element`](Element.md)

The element to be added.

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`any`

The previous element that was in that position (or `null` if there wasn't one).

#### Overrides

[`Grid`](Grid.md).[`add`](Grid.md#add)

---

### clear()

> **clear**(): `void`

Defined in: [source/element_grid.ts:247](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L247)

Clear grid related elements etc.
Called when we don't need the grid anymore.

#### Returns

`void`

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

#### Inherited from

[`Grid`](Grid.md).[`get`](Grid.md#get)

---

### getDimensions()

> **getDimensions**(): `object`

Defined in: [source/element_grid.ts:234](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L234)

#### Returns

`object`

The grid's dimensions.

##### height

> **height**: `number`

##### width

> **width**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

---

### getEmptyPositions()

> **getEmptyPositions**(): `any`[]

Defined in: [source/grid.ts:229](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L229)

#### Returns

`any`[]

An array with all the empty column/line positions of this grid (the array will be empty if there aren't any empty positions).

#### Inherited from

[`Grid`](Grid.md).[`getEmptyPositions`](Grid.md#getemptypositions)

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

#### Inherited from

[`Grid`](Grid.md).[`getNeighbors`](Grid.md#getneighbors)

---

### getRandomEmptyPosition()

> **getRandomEmptyPosition**(): `any`

Defined in: [source/grid.ts:214](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/grid.ts#L214)

#### Returns

`any`

A random empty column/line position, or `null` if there aren't any empty positions.

#### Inherited from

[`Grid`](Grid.md).[`getRandomEmptyPosition`](Grid.md#getrandomemptyposition)

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

#### Inherited from

[`Grid`](Grid.md).[`getRandomPosition`](Grid.md#getrandomposition)

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

#### Inherited from

[`Grid`](Grid.md).[`isEmpty`](Grid.md#isempty)

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

#### Inherited from

[`Grid`](Grid.md).[`isInGrid`](Grid.md#isingrid)

---

### move()

> **move**(`sourceColumn`, `sourceLine`, `destColumn`, `destLine`, `duration?`): `any`

Defined in: [source/element_grid.ts:152](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L152)

Move an element from one grid position to another (the element needs to be already in the grid).
Throws an exception if any of the positions are invalid.

#### Parameters

##### sourceColumn

`number`

The source column of an existing element.

##### sourceLine

`number`

The source line of an existing element.

##### destColumn

`number`

The destination column position.

##### destLine

`number`

The destination line position.

##### duration?

`number`

If duration >0, then a tween animation is going to be applied to the movement.

#### Returns

`any`

The previous element that was in the destination position (or null if there wasn't one).

#### Overrides

[`Grid`](Grid.md).[`move`](Grid.md#move)

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

#### Inherited from

[`Grid`](Grid.md).[`normalizePosition`](Grid.md#normalizeposition)

---

### remove()

> **remove**(`column`, `line`): `any`

Defined in: [source/element_grid.ts:220](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L220)

Remove an element from the grid.
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

The element that was removed.

#### Overrides

[`Grid`](Grid.md).[`remove`](Grid.md#remove)

---

### toCanvas()

> **toCanvas**(`column`, `line`): `object`

Defined in: [source/element_grid.ts:91](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L91)

Get the equivalent x/y position from a column/line position.

#### Parameters

##### column

`number`

The column position.

##### line

`number`

The line position.

#### Returns

`object`

The x/y position.

##### x

> **x**: `number`

##### y

> **y**: `number`

---

### toGrid()

> **toGrid**(`x`, `y`): `object`

Defined in: [source/element_grid.ts:105](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/element_grid.ts#L105)

Get the equivalent column/line position from a x/y position.

#### Parameters

##### x

`number`

The x position.

##### y

`number`

The y position.

#### Returns

`object`

The column/line position.

##### column

> **column**: `number`

##### line

> **line**: `number`
