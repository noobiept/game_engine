[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Preload](../README.md) / getJson

# Function: getJson()

> **getJson**\<`T`\>(`id`): `T` \| `undefined`

Defined in: [source/preload.ts:651](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/preload.ts#L651)

Get a loaded json file (parsed, saved in the global `DATA` object), or `undefined` when there isn't a file with
that id. The data isn't checked against `T`.

## Type Parameters

### T

`T` = `unknown`

## Parameters

### id

`string`

## Returns

`T` \| `undefined`
