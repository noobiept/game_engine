[Game Engine](../README.md) › [Game](game.md) › [CollisionDetection](game.collisiondetection.md)

# Module: CollisionDetection

## Index

### Classes

* [CheckAll](../classes/game.collisiondetection.checkall.md)
* [SpatialPartition](../classes/game.collisiondetection.spatialpartition.md)

### Interfaces

* [SpatialPartitionArgs](../interfaces/game.collisiondetection.spatialpartitionargs.md)

### Type aliases

* [Vertices](game.collisiondetection.md#vertices)

### Variables

* [COLLISION](game.collisiondetection.md#collision)

### Functions

* [addElement](game.collisiondetection.md#addelement)
* [boxBox](game.collisiondetection.md#boxbox)
* [checkCollision](game.collisiondetection.md#checkcollision)
* [circleCircle](game.collisiondetection.md#circlecircle)
* [circlePoint](game.collisiondetection.md#circlepoint)
* [clear](game.collisiondetection.md#clear)
* [getAxes](game.collisiondetection.md#getaxes)
* [init](game.collisiondetection.md#init)
* [pointBox](game.collisiondetection.md#pointbox)
* [polygonPoint](game.collisiondetection.md#polygonpoint)
* [polygonPolygon](game.collisiondetection.md#polygonpolygon)
* [polygonPolygonList](game.collisiondetection.md#polygonpolygonlist)
* [projectShapeIntoAxis](game.collisiondetection.md#projectshapeintoaxis)
* [projectionOverlaps](game.collisiondetection.md#projectionoverlaps)
* [removeElement](game.collisiondetection.md#removeelement)
* [updateElement](game.collisiondetection.md#updateelement)

## Type aliases

###  Vertices

Ƭ **Vertices**: *object[]*

*Defined in [collision_detection.ts:17](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L17)*

## Variables

###  COLLISION

• **COLLISION**: *[CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)*

*Defined in [collision_detection.ts:19](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L19)*

## Functions

###  addElement

▸ **addElement**(`element`: [Element](../classes/game.element.md)): *void*

*Defined in [collision_detection.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L39)*

Elements added will be considered in the collision detection tests.

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/game.element.md) |

**Returns:** *void*

___

###  boxBox

▸ **boxBox**(`oneX`: number, `oneY`: number, `oneWidth`: number, `oneHeight`: number, `twoX`: number, `twoY`: number, `twoWidth`: number, `twoHeight`: number): *boolean*

*Defined in [collision_detection.ts:278](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L278)*

Detects collision between 2 boxes.

**Parameters:**

Name | Type |
------ | ------ |
`oneX` | number |
`oneY` | number |
`oneWidth` | number |
`oneHeight` | number |
`twoX` | number |
`twoY` | number |
`twoWidth` | number |
`twoHeight` | number |

**Returns:** *boolean*

___

###  checkCollision

▸ **checkCollision**(): *void*

*Defined in [collision_detection.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L66)*

Look for collisions between the elements.

**Returns:** *void*

___

###  circleCircle

▸ **circleCircle**(`x1`: number, `y1`: number, `radius1`: number, `x2`: number, `y2`: number, `radius2`: number): *boolean*

*Defined in [collision_detection.ts:292](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L292)*

Detects collision between two circles.

**Parameters:**

Name | Type |
------ | ------ |
`x1` | number |
`y1` | number |
`radius1` | number |
`x2` | number |
`y2` | number |
`radius2` | number |

**Returns:** *boolean*

___

###  circlePoint

▸ **circlePoint**(`circleX`: number, `circleY`: number, `circleRadius`: number, `pointX`: number, `pointY`: number): *boolean*

*Defined in [collision_detection.ts:309](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L309)*

Detects collision between a circle and a point.

**Parameters:**

Name | Type |
------ | ------ |
`circleX` | number |
`circleY` | number |
`circleRadius` | number |
`pointX` | number |
`pointY` | number |

**Returns:** *boolean*

___

###  clear

▸ **clear**(): *void*

*Defined in [collision_detection.ts:75](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L75)*

Remove the collision object. The engine won't work properly after this.

**Returns:** *void*

___

###  getAxes

▸ **getAxes**(`vertices`: [Vertices](game.collisiondetection.md#vertices)): *any[]*

*Defined in [collision_detection.ts:207](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`vertices` | [Vertices](game.collisiondetection.md#vertices) |

**Returns:** *any[]*

___

###  init

▸ **init**(`collision?`: [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md)): *void*

*Defined in [collision_detection.ts:22](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`collision?` | [CollisionDetectionAlgorithm](../interfaces/game.collisiondetectionalgorithm.md) |

**Returns:** *void*

___

###  pointBox

▸ **pointBox**(`pointX`: number, `pointY`: number, `boxX`: number, `boxY`: number, `boxWidth`: number, `boxHeight`: number): *boolean*

*Defined in [collision_detection.ts:329](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L329)*

Detects collision between a point and a box.

**Parameters:**

Name | Type |
------ | ------ |
`pointX` | number |
`pointY` | number |
`boxX` | number |
`boxY` | number |
`boxWidth` | number |
`boxHeight` | number |

**Returns:** *boolean*

___

###  polygonPoint

▸ **polygonPoint**(`vertices`: [Vertices](game.collisiondetection.md#vertices), `point`: any): *boolean*

*Defined in [collision_detection.ts:164](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L164)*

Check if a point is colliding with a element.

**Parameters:**

Name | Type |
------ | ------ |
`vertices` | [Vertices](game.collisiondetection.md#vertices) |
`point` | any |

**Returns:** *boolean*

___

###  polygonPolygon

▸ **polygonPolygon**(`one`: [Vertices](game.collisiondetection.md#vertices), `two`: [Vertices](game.collisiondetection.md#vertices)): *boolean*

*Defined in [collision_detection.ts:87](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L87)*

Uses the `Separating Axis Theorem` to determine if two elements have collided.

Works for convex polygon shapes.

**Parameters:**

Name | Type |
------ | ------ |
`one` | [Vertices](game.collisiondetection.md#vertices) |
`two` | [Vertices](game.collisiondetection.md#vertices) |

**Returns:** *boolean*

___

###  polygonPolygonList

▸ **polygonPolygonList**(`list1`: [Vertices](game.collisiondetection.md#vertices)[], `list2`: [Vertices](game.collisiondetection.md#vertices)[]): *boolean*

*Defined in [collision_detection.ts:138](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L138)*

Uses the `Separating Axis Theorem` to determine if two elements have collided.
Checks a list of vertices against another list of vertices (for example for comparing containers, which can have several elements).

Works for convex polygon shapes.

**Parameters:**

Name | Type |
------ | ------ |
`list1` | [Vertices](game.collisiondetection.md#vertices)[] |
`list2` | [Vertices](game.collisiondetection.md#vertices)[] |

**Returns:** *boolean*

___

###  projectShapeIntoAxis

▸ **projectShapeIntoAxis**(`vertices`: [Vertices](game.collisiondetection.md#vertices), `axis`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [collision_detection.ts:239](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`vertices` | [Vertices](game.collisiondetection.md#vertices) |
`axis` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **max**: *number* =  max

* **min**: *number* =  min

___

###  projectionOverlaps

▸ **projectionOverlaps**(`one`: any, `two`: any): *boolean*

*Defined in [collision_detection.ts:267](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`one` | any |
`two` | any |

**Returns:** *boolean*

___

###  removeElement

▸ **removeElement**(`element`: [Element](../classes/game.element.md)): *void*

*Defined in [collision_detection.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L48)*

Remove an element from being considered in the collision detection.

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/game.element.md) |

**Returns:** *void*

___

###  updateElement

▸ **updateElement**(`element`: [Element](../classes/game.element.md)): *void*

*Defined in [collision_detection.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/collision_detection.ts#L57)*

When an element changes its position, need to update the collision detection data structure (in some algorithms).

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/game.element.md) |

**Returns:** *void*
