[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / play

# Function: play()

> **play**(`audioBuffer`, `options?`): [`SoundInstance`](../classes/SoundInstance.md) \| `null`

Defined in: [sound.ts:84](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/sound.ts#L84)

Play a sound.

## Parameters

### audioBuffer

`AudioBuffer`

The audio buffer of the sound we want to play.

### options?

[`PlayOptions`](../interfaces/PlayOptions.md)

Optional playback options (loop and per-sound volume).

## Returns

[`SoundInstance`](../classes/SoundInstance.md) \| `null`

A `SoundInstance` you can use to control the playback, or `null` if it wasn't possible to play the sound.
