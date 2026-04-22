[Game Engine](../README.md) › [Game](game.md) › [CollisionDetection](game.collisiondetection.md)

# Module: CollisionDetection

## Index

### Classes

- [CheckAll](../classes/game.collisiondetection.checkall.md)
- [SpatialPartition](../classes/game.collisiondetection.spatialpartition.md)

### Interfaces

- [SpatialPartitionArgs](../interfaces/game.collisiondetection.spatialpartitionargs.md)

### Type aliases

- [Vertices](game.collisiondetection.md#vertices)

### Variables

- [COLLISION](game.collisiondetection.md#collision)

### Functions

- [addElement](game.collisiondetection.md#addelement)
- [boxBox](game.collisiondetection.md#boxbox)
- [checkCollision](game.collisiondetection.md#checkcollision)
- [circleCircle](game.collisiondetection.md#circlecircle)
- [circlePoint](game.collisiondetection.md#circlepoint)
- [clear](game.collisiondetection.md#clear)
- [getAxes](game.collisiondetection.md#getaxes)
- [init](game.collisiondetection.md#init)
- [pointBox](game.collisiondetection.md#pointbox)
- [polygonPoint](game.collisiondetection.md#polygonpoint)
- [polygonPolygon](game.collisiondetection.md#polygonpolygon)
- [polygonPolygonList](game.collisiondetection.md#polygonpolygonlist)
- [projectShapeIntoAxis](game.collisiondetection.md#projectshapeintoaxis)
- [projectionOverlaps](game.collisiondetection.md#projectionoverlaps)
- [removeElement](game.collisiondetection.md#removeelement)
- [updateElement](game.collisiondetection.md#updateelement)

## Type aliases

### Vertices

Ƭ **Vertices**: _object[]_

_Defined in [collision_detection.ts:17](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L17)_

## Variables

### COLLISION

• **COLLISION**: _[CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)_

_Defined in [collision_detection.ts:19](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L19)_

## Functions

### addElement

▸ **addElement**(`element`: [Element](../classes/game.element.md)): _void_

_Defined in [collision_detection.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L39)_

Elements added will be considered in the collision detection tests.

**Parameters:**

| Name      | Type                                  |
| --------- | ------------------------------------- |
| `element` | [Element](../classes/game.element.md) |

**Returns:** _void_

---

### boxBox

▸ **boxBox**(`oneX`: number, `oneY`: number, `oneWidth`: number, `oneHeight`: number, `twoX`: number, `twoY`: number, `twoWidth`: number, `twoHeight`: number): _boolean_

_Defined in [collision_detection.ts:278](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L278)_

Detects collision between 2 boxes.

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `oneX`      | number |
| `oneY`      | number |
| `oneWidth`  | number |
| `oneHeight` | number |
| `twoX`      | number |
| `twoY`      | number |
| `twoWidth`  | number |
| `twoHeight` | number |

**Returns:** _boolean_

---

### checkCollision

▸ **checkCollision**(): _void_

_Defined in [collision_detection.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L66)_

Look for collisions between the elements.

**Returns:** _void_

---

### circleCircle

▸ **circleCircle**(`x1`: number, `y1`: number, `radius1`: number, `x2`: number, `y2`: number, `radius2`: number): _boolean_

_Defined in [collision_detection.ts:292](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L292)_

Detects collision between two circles.

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `x1`      | number |
| `y1`      | number |
| `radius1` | number |
| `x2`      | number |
| `y2`      | number |
| `radius2` | number |

**Returns:** _boolean_

---

### circlePoint

▸ **circlePoint**(`circleX`: number, `circleY`: number, `circleRadius`: number, `pointX`: number, `pointY`: number): _boolean_

_Defined in [collision_detection.ts:309](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L309)_

Detects collision between a circle and a point.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| `circleX`      | number |
| `circleY`      | number |
| `circleRadius` | number |
| `pointX`       | number |
| `pointY`       | number |

**Returns:** _boolean_

---

### clear

▸ **clear**(): _void_

_Defined in [collision_detection.ts:75](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L75)_

Remove the collision object. The engine won't work properly after this.

**Returns:** _void_

---

### getAxes

▸ **getAxes**(`vertices`: [Vertices](game.collisiondetection.md#vertices)): _any[]_

_Defined in [collision_detection.ts:207](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L207)_

**Parameters:**

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| `vertices` | [Vertices](game.collisiondetection.md#vertices) |

**Returns:** _any[]_

---

### init

▸ **init**(`collision?`: [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)): _void_

_Defined in [collision_detection.ts:22](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L22)_

**Parameters:**

| Name         | Type                                                                             |
| ------------ | -------------------------------------------------------------------------------- |
| `collision?` | [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md) |

**Returns:** _void_

---

### pointBox

▸ **pointBox**(`pointX`: number, `pointY`: number, `boxX`: number, `boxY`: number, `boxWidth`: number, `boxHeight`: number): _boolean_

_Defined in [collision_detection.ts:329](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L329)_

Detects collision between a point and a box.

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `pointX`    | number |
| `pointY`    | number |
| `boxX`      | number |
| `boxY`      | number |
| `boxWidth`  | number |
| `boxHeight` | number |

**Returns:** _boolean_

---

### polygonPoint

▸ **polygonPoint**(`vertices`: [Vertices](game.collisiondetection.md#vertices), `point`: any): _boolean_

_Defined in [collision_detection.ts:164](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L164)_

Check if a point is colliding with a element.

**Parameters:**

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| `vertices` | [Vertices](game.collisiondetection.md#vertices) |
| `point`    | any                                             |

**Returns:** _boolean_

---

### polygonPolygon

▸ **polygonPolygon**(`one`: [Vertices](game.collisiondetection.md#vertices), `two`: [Vertices](game.collisiondetection.md#vertices)): _boolean_

_Defined in [collision_detection.ts:87](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L87)_

Uses the `Separating Axis Theorem` to determine if two elements have collided.

Works for convex polygon shapes.

**Parameters:**

| Name  | Type                                            |
| ----- | ----------------------------------------------- |
| `one` | [Vertices](game.collisiondetection.md#vertices) |
| `two` | [Vertices](game.collisiondetection.md#vertices) |

**Returns:** _boolean_

---

### polygonPolygonList

▸ **polygonPolygonList**(`list1`: [Vertices](game.collisiondetection.md#vertices)[], `list2`: [Vertices](game.collisiondetection.md#vertices)[]): _boolean_

_Defined in [collision_detection.ts:138](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L138)_

Uses the `Separating Axis Theorem` to determine if two elements have collided.
Checks a list of vertices against another list of vertices (for example for comparing containers, which can have several elements).

Works for convex polygon shapes.

**Parameters:**

| Name    | Type                                              |
| ------- | ------------------------------------------------- |
| `list1` | [Vertices](game.collisiondetection.md#vertices)[] |
| `list2` | [Vertices](game.collisiondetection.md#vertices)[] |

**Returns:** _boolean_

---

### projectShapeIntoAxis

▸ **projectShapeIntoAxis**(`vertices`: [Vertices](game.collisiondetection.md#vertices), `axis`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [collision_detection.ts:239](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L239)_

**Parameters:**

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| `vertices` | [Vertices](game.collisiondetection.md#vertices) |
| `axis`     | [Vector](../interfaces/game.vector.vector.md)   |

**Returns:** _object_

- **max**: _number_ = max

- **min**: _number_ = min

---

### projectionOverlaps

▸ **projectionOverlaps**(`one`: any, `two`: any): _boolean_

_Defined in [collision_detection.ts:267](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L267)_

**Parameters:**

| Name  | Type |
| ----- | ---- |
| `one` | any  |
| `two` | any  |

**Returns:** _boolean_

---

### removeElement

▸ **removeElement**(`element`: [Element](../classes/game.element.md)): _void_

_Defined in [collision_detection.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L48)_

Remove an element from being considered in the collision detection.

**Parameters:**

| Name      | Type                                  |
| --------- | ------------------------------------- |
| `element` | [Element](../classes/game.element.md) |

**Returns:** _void_

---

### updateElement

▸ **updateElement**(`element`: [Element](../classes/game.element.md)): _void_

_Defined in [collision_detection.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L57)_

When an element changes its position, need to update the collision detection data structure (in some algorithms).

**Parameters:**

| Name      | Type                                  |
| --------- | ------------------------------------- |
| `element` | [Element](../classes/game.element.md) |

**Returns:** _void_
