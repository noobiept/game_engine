[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / setPauseWhenHidden

# Function: setPauseWhenHidden()

> **setPauseWhenHidden**(`pause`): `void`

Defined in: [source/sound.ts:66](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L66)

Pause all the sounds while the page is hidden (`true` by default), like the game loop. Browsers keep playing audio
in background tabs, so without it the music goes on while the game is frozen. Pass `false` for sounds that should
keep playing.

## Parameters

### pause

`boolean`

## Returns

`void`
