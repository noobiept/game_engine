[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Preload](../README.md) / getJson

# Function: getJson()

> **getJson**\<`T`\>(`id`): `T` \| `undefined`

Defined in: [source/preload.ts:604](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/preload.ts#L604)

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
