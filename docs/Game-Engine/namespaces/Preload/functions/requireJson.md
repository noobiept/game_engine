[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Preload](../README.md) / requireJson

# Function: requireJson()

> **requireJson**\<`T`\>(`id`): `T`

Defined in: [source/preload.ts:682](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/preload.ts#L682)

Get a loaded json file (parsed, saved in the global `DATA` object). Throws an error naming the id when there
isn't one. The data isn't checked against `T`.

## Type Parameters

### T

`T` = `unknown`

## Parameters

### id

`string`

## Returns

`T`
