[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / play

# Function: play()

> **play**(`audioBuffer`, `options?`): [`SoundInstance`](../classes/SoundInstance.md) \| `null`

Defined in: [source/sound.ts:148](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L148)

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

A `SoundInstance` you can use to control the playback, or `null` if it wasn't possible to play the sound
(audio isn't available, or `audioBuffer` isn't an audio buffer, like for a file that failed to load).
