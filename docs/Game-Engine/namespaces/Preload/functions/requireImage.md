[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Preload](../README.md) / requireImage

# Function: requireImage()

> **requireImage**(`id`): `HTMLImageElement`

Defined in: [source/preload.ts:659](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/preload.ts#L659)

Get a loaded image (saved in the global `DATA` object). Throws an error naming the id when there isn't one (for
the files the game can't run without: after `loadManifest()` resolved, that can only be a wrong id).

## Parameters

### id

`string`

## Returns

`HTMLImageElement`
