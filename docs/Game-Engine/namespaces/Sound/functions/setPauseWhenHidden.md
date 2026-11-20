[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / setPauseWhenHidden

# Function: setPauseWhenHidden()

> **setPauseWhenHidden**(`pause`): `void`

Defined in: [source/sound.ts:138](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L138)

Pause all the sounds while the page is hidden (`true` by default), like the game loop. Browsers keep playing audio
in background tabs, so without it the music goes on while the game is frozen. Pass `false` for sounds that should
keep playing.

## Parameters

### pause

`boolean`

## Returns

`void`
