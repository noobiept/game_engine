[Game Engine](../README.md) › [Game](game.md) › [Vector](game.vector.md)

# Module: Vector

## Index

### Interfaces

- [Vector](../interfaces/game.vector.vector.md)

### Functions

- [add](game.vector.md#add)
- [dotProduct](game.vector.md#dotproduct)
- [magnitude](game.vector.md#magnitude)
- [multiply](game.vector.md#multiply)
- [normalLeft](game.vector.md#normalleft)
- [normalRight](game.vector.md#normalright)
- [normalize](game.vector.md#normalize)
- [projection](game.vector.md#projection)
- [rotate](game.vector.md#rotate)
- [subtract](game.vector.md#subtract)

## Functions

### add

▸ **add**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [vector.ts:12](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L12)_

**Parameters:**

| Name  | Type                                          |
| ----- | --------------------------------------------- |
| `one` | [Vector](../interfaces/game.vector.vector.md) |
| `two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _object_

- **x**: _number_ = one.x + two.x

- **y**: _number_ = one.y + two.y

---

### dotProduct

▸ **dotProduct**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): _number_

_Defined in [vector.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L48)_

**Parameters:**

| Name  | Type                                          |
| ----- | --------------------------------------------- |
| `one` | [Vector](../interfaces/game.vector.vector.md) |
| `two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _number_

---

### magnitude

▸ **magnitude**(`vector`: [Vector](../interfaces/game.vector.vector.md)): _number_

_Defined in [vector.ts:30](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L30)_

**Parameters:**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| `vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _number_

---

### multiply

▸ **multiply**(`vector`: [Vector](../interfaces/game.vector.vector.md), `scalar`: number): _object_

_Defined in [vector.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L39)_

**Parameters:**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| `vector` | [Vector](../interfaces/game.vector.vector.md) |
| `scalar` | number                                        |

**Returns:** _object_

- **x**: _number_ = vector.x \* scalar

- **y**: _number_ = vector.y \* scalar

---

### normalLeft

▸ **normalLeft**(`vector`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [vector.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L70)_

**Parameters:**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| `vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _object_

- **x**: _number_ = vector.y

- **y**: _number_ = -vector.x

---

### normalRight

▸ **normalRight**(`vector`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [vector.ts:79](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L79)_

**Parameters:**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| `vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _object_

- **x**: _number_ = -vector.y

- **y**: _number_ = vector.x

---

### normalize

▸ **normalize**(`vector`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [vector.ts:88](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L88)_

**Parameters:**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| `vector` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _object_

- **x**: _number_ = x / length

- **y**: _number_ = y / length

---

### projection

▸ **projection**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [vector.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L101)_

**Parameters:**

| Name  | Type                                          |
| ----- | --------------------------------------------- |
| `one` | [Vector](../interfaces/game.vector.vector.md) |
| `two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _object_

- **x**: _number_ = dotProd / twoLengthSquared \* twoX

- **y**: _number_ = dotProd / twoLengthSquared \* twoY

---

### rotate

▸ **rotate**(`center`: [Vector](../interfaces/game.vector.vector.md), `vector`: [Vector](../interfaces/game.vector.vector.md), `angle`: number): _object_

_Defined in [vector.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L54)_

**Parameters:**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| `center` | [Vector](../interfaces/game.vector.vector.md) |
| `vector` | [Vector](../interfaces/game.vector.vector.md) |
| `angle`  | number                                        |

**Returns:** _object_

- **x**: _number_ = centerX + diffX _ cos - diffY _ sin

- **y**: _number_ = centerY + diffX _ sin + diffY _ cos

---

### subtract

▸ **subtract**(`one`: [Vector](../interfaces/game.vector.vector.md), `two`: [Vector](../interfaces/game.vector.vector.md)): _object_

_Defined in [vector.ts:21](https://github.com/noobiept/game_engine/blob/625c324/source/vector.ts#L21)_

**Parameters:**

| Name  | Type                                          |
| ----- | --------------------------------------------- |
| `one` | [Vector](../interfaces/game.vector.vector.md) |
| `two` | [Vector](../interfaces/game.vector.vector.md) |

**Returns:** _object_

- **x**: _number_ = one.x - two.x

- **y**: _number_ = one.y - two.y
