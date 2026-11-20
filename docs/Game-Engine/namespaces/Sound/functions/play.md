[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / play

# Function: play()

> **play**(`audioBuffer`, `options?`): [`SoundInstance`](../classes/SoundInstance.md) \| `null`

Defined in: [source/sound.ts:231](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L231)

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
