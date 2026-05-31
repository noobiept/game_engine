[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [PathFinding](../README.md) / breadthFirstSearch

# Function: breadthFirstSearch()

> **breadthFirstSearch**(`map`, `destination`, `positionType`): (`Position` \| `null`)[][]

Defined in: [source/path_finding.ts:41](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/path_finding.ts#L41)

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

The destination position.

### positionType

What value in the `map` represents a passable position and what value represents a blocked position.

#### blocked

`number`

#### passable

`number`

## Returns

(`Position` \| `null`)[][]
