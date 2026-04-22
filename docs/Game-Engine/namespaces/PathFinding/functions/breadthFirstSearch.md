[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [PathFinding](../README.md) / breadthFirstSearch

# Function: breadthFirstSearch()

> **breadthFirstSearch**(`map`, `destination`, `positionType`): `any`[]

Defined in: [source/path_finding.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/path_finding.ts#L39)

Calculate the path that an element needs to take to reach the destination, from any valid position.

The algorithm used is the `breadth First Search - unweighted edges`. All sources, one destination.
We start at the end position, and spread from there.

Basic Usage:

    var map = [
        [ 1, 1, 0, 0 ],
        [ 0, 1, 0, 0 ],
        [ 0, 1, 1, 1 ],
        [ 0, 0, 0, 1 ]
    ];
    var destination = {
        column: 0,
        line: 0
    };
    var positionType = {
        passable: 1,
        blocked: 0
    };

    var path = Game.PathFinding.breadthFirstSearch( map, destination, positionType );

        // `path` is a 2d array, where each column/line position tells you where to go next. If it tells to go to the current position, then it means you reached the destination.
        // so for example, the position before the destination
    var line = 0;
    var column = 1;
    var goTo = path[ line ][ column ];   // { column: 0, line: 0 }

Examples -- `tower_defense`

## Parameters

### map

`number`[][]

A 2d array, where each value tells if that position is passable/blocked. Its assumed each line will have the same number of columns.

### destination

The destination position.

#### column

`number`

#### line

`number`

### positionType

What value in the `map` represents a passable position and what value represents a blocked position.

#### blocked

`number`

#### passable

`number`

## Returns

`any`[]
