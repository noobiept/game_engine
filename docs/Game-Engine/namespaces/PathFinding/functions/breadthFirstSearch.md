[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [PathFinding](../README.md) / breadthFirstSearch

# Function: breadthFirstSearch()

> **breadthFirstSearch**(`map`, `destination`, `positionType`): (`Position` \| `null`)[][]

Defined in: [source/path\_finding.ts:43](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/path_finding.ts#L43)

Calculate the path that an element needs to take to reach the destination, from any valid position.

The algorithm used is the `breadth First Search - unweighted edges`. All sources, one destination.
We start at the end position, and spread from there.

Basic Usage:

    const map = [
        [ 1, 1, 0, 0 ],
        [ 0, 1, 0, 0 ],
        [ 0, 1, 1, 1 ],
        [ 0, 0, 0, 1 ]
    ];
    const destination = {
        column: 0,
        line: 0
    };
    const positionType = {
        passable: 1,
        blocked: 0
    };

    const path = Game.PathFinding.breadthFirstSearch( map, destination, positionType );

        // `path` is a 2d array, where each column/line position tells you where to go next. If it tells to go to the current position, then it means you reached the destination.
        // so for example, the position before the destination
    const line = 0;
    const column = 1;
    const goTo = path[ line ][ column ];   // { column: 0, line: 0 }

Examples -- `tower_defense`

## Parameters

### map

`number`[][]

A 2d array, where each value tells if that position is passable/blocked. Its assumed each line will have the same number of columns.

### destination

`Position`

The destination position. Throws a `RangeError` if it's outside the map.

### positionType

What value in the `map` represents a passable position and what value represents a blocked position.

#### blocked

`number`

#### passable

`number`

## Returns

(`Position` \| `null`)[][]

The next position to take from each position (`null` for the positions that can't reach the destination).
When the destination itself isn't passable, every position is `null`.
