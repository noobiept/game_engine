[Game Engine](../README.md) › [Game](game.md) › [Vector](game.vector.md)

# Module: Vector

## Index

### Interfaces

* [Vector](../interfaces/game.vector.vector.md)

### Functions

* [add](game.vector.md#add)
* [dotProduct](game.vector.md#dotproduct)
* [magnitude](game.vector.md#magnitude)
* [multiply](game.vector.md#multiply)
* [normalLeft](game.vector.md#normalleft)
* [normalRight](game.vector.md#normalright)
* [normalize](game.vector.md#normalize)
* [projection](game.vector.md#projection)
* [rotate](game.vector.md#rotate)
* [subtract](game.vector.md#subtract)

## Functions

###  add

▸ **add**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [vector.ts:12](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`one` | [Vector](../interfaces/game.vector.vector.md) |
`two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **x**: *number* =  one.x + two.x

* **y**: *number* =  one.y + two.y

___

###  dotProduct

▸ **dotProduct**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): *number*

*Defined in [vector.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`one` | [Vector](../interfaces/game.vector.vector.md) |
`two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *number*

___

###  magnitude

▸ **magnitude**(`vector`: [Vector](../interfaces/game.vector.vector.md)): *number*

*Defined in [vector.ts:30](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *number*

___

###  multiply

▸ **multiply**(`vector`: [Vector](../interfaces/game.vector.vector.md), `scalar`: number): *object*

*Defined in [vector.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector](../interfaces/game.vector.vector.md) |
`scalar` | number |

**Returns:** *object*

* **x**: *number* =  vector.x * scalar

* **y**: *number* =  vector.y * scalar

___

###  normalLeft

▸ **normalLeft**(`vector`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [vector.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **x**: *number* =  vector.y

* **y**: *number* =  -vector.x

___

###  normalRight

▸ **normalRight**(`vector`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [vector.ts:79](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **x**: *number* =  -vector.y

* **y**: *number* =  vector.x

___

###  normalize

▸ **normalize**(`vector`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [vector.ts:88](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **x**: *number* =  x / length

* **y**: *number* =  y / length

___

###  projection

▸ **projection**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [vector.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`one` | [Vector](../interfaces/game.vector.vector.md) |
`two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **x**: *number* =  dotProd / twoLengthSquared * twoX

* **y**: *number* =  dotProd / twoLengthSquared * twoY

___

###  rotate

▸ **rotate**(`center`: [Vector](../interfaces/game.vector.vector.md), `vector`: [Vector](../interfaces/game.vector.vector.md), `angle`: number): *object*

*Defined in [vector.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`center` | [Vector](../interfaces/game.vector.vector.md) |
`vector` | [Vector](../interfaces/game.vector.vector.md) |
`angle` | number |

**Returns:** *object*

* **x**: *number* =  centerX + diffX * cos - diffY * sin

* **y**: *number* =  centerY + diffX * sin + diffY * cos

___

###  subtract

▸ **subtract**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): *object*

*Defined in [vector.ts:21](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`one` | [Vector](../interfaces/game.vector.vector.md) |
`two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** *object*

* **x**: *number* =  one.x - two.x

* **y**: *number* =  one.y - two.y
