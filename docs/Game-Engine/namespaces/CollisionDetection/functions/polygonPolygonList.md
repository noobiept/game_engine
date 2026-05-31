[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [CollisionDetection](../README.md) / polygonPolygonList

# Function: polygonPolygonList()

> **polygonPolygonList**(`list1`, `list2`): `boolean`

Defined in: [source/collision-detection/collision_detection.ts:121](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/collision-detection/collision_detection.ts#L121)

Uses the `Separating Axis Theorem` to determine if two elements have collided.
Checks a list of vertices against another list of vertices (for example for comparing containers, which can have several elements).

Works for convex polygon shapes.

## Parameters

### list1

[`Vertices`](../type-aliases/Vertices.md)[]

### list2

[`Vertices`](../type-aliases/Vertices.md)[]

## Returns

`boolean`
