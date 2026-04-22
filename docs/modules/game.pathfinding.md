[Game Engine](../README.md) › [Game](game.md) › [PathFinding](game.pathfinding.md)

# Module: PathFinding

## Index

### Functions

- [breadthFirstSearch](game.pathfinding.md#breadthfirstsearch)
- [getNeighbors](game.pathfinding.md#getneighbors)

## Functions

### breadthFirstSearch

▸ **breadthFirstSearch**(`map`: number[][], `destination`: object, `positionType`: object): _any[]_

_Defined in [path_finding.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/path_finding.ts#L43)_

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

**Parameters:**

▪ **map**: _number[][]_

A 2d array, where each value tells if that position is passable/blocked. Its assumed each line will have the same number of columns.

▪ **destination**: _object_

The destination position.

| Name     | Type   |
| -------- | ------ |
| `column` | number |
| `line`   | number |

▪ **positionType**: _object_

What value in the `map` represents a passable position and what value represents a blocked position.

| Name       | Type   |
| ---------- | ------ |
| `blocked`  | number |
| `passable` | number |

**Returns:** _any[]_

---

### getNeighbors

▸ **getNeighbors**(`position`: object, `info`: any): _any[]_

_Defined in [path_finding.ts:99](https://github.com/noobiept/game_engine/blob/625c324/source/path_finding.ts#L99)_

Get the neighbor positions (top/bottom/left/right).

**Parameters:**

▪ **position**: _object_

| Name     | Type   |
| -------- | ------ |
| `column` | number |
| `line`   | number |

▪ **info**: _any_

**Returns:** _any[]_
