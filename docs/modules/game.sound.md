[Game Engine](../README.md) › [Game](game.md) › [Sound](game.sound.md)

# Module: Sound

Uses the `web audio api` to play the sounds.
If it isn't supported by a browser, the function calls will still go through, but no sound will be played.

Basic Usage:

    var preload = new Game.Preload({ saveGlobal: true });

    preload.addEventListener( 'complete', function()
        {
        Game.Sound.play( Game.Preload.get( 'sound' ) );
        });
    preload.load( 'sound', 'path_to_file.ogg' );

Examples -- `preload`

## Index

### Variables

- [CTX](game.sound.md#ctx)
- [GLOBAL_GAIN](game.sound.md#global_gain)

### Functions

- [decodeAudio](game.sound.md#decodeaudio)
- [getGlobalGain](game.sound.md#getglobalgain)
- [init](game.sound.md#init)
- [isAvailable](game.sound.md#isavailable)
- [play](game.sound.md#play)
- [setGlobalGain](game.sound.md#setglobalgain)

## Variables

### CTX

• **CTX**: _AudioContext_ = null

_Defined in [sound.ts:21](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L21)_

---

### GLOBAL_GAIN

• **GLOBAL_GAIN**: _GainNode_

_Defined in [sound.ts:22](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L22)_

## Functions

### decodeAudio

▸ **decodeAudio**(`data`: ArrayBuffer, `successCallback`: function, `errorCallback`: any): _boolean_

_Defined in [sound.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L61)_

Decode audio file data contained in an ArrayBuffer.

**Parameters:**

▪ **data**: _ArrayBuffer_

The audio data.

▪ **successCallback**: _function_

Function to be called when the data has been decoded.

▸ (`decodedData`: AudioBuffer): _any_

**Parameters:**

| Name          | Type        |
| ------------- | ----------- |
| `decodedData` | AudioBuffer |

▪ **errorCallback**: _any_

Function to be called in case it fails to decode the audio data.

**Returns:** _boolean_

---

### getGlobalGain

▸ **getGlobalGain**(): _number_

_Defined in [sound.ts:119](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L119)_

Get the current global gain/volume value (between 0 and 1).
Will return -1 if the sound is not available.

**Returns:** _number_

---

### init

▸ **init**(): _boolean_

_Defined in [sound.ts:27](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L27)_

Initialize the `Sound` module. Its called in `Game.init()`.

**Returns:** _boolean_

---

### isAvailable

▸ **isAvailable**(): _boolean_

_Defined in [sound.ts:134](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L134)_

Tells if the module is working properly or not.
When it isn't, calling the functions (like `Game.Sound.play()`) won't give you an error, but no sound will be played.

**Returns:** _boolean_

---

### play

▸ **play**(`audioBuffer`: AudioBuffer): _AudioBufferSourceNode_

_Defined in [sound.ts:79](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L79)_

Play a sound.

**Parameters:**

| Name          | Type        | Description                                    |
| ------------- | ----------- | ---------------------------------------------- |
| `audioBuffer` | AudioBuffer | The audio buffer of the sound we want to play. |

**Returns:** _AudioBufferSourceNode_

The source node, or `null` if it wasn't possible to play the sound.

---

### setGlobalGain

▸ **setGlobalGain**(`gain`: number): _boolean_

_Defined in [sound.ts:102](https://github.com/noobiept/game_engine/blob/625c324/source/sound.ts#L102)_

Sets the global gain/volume of all the sounds played.

**Parameters:**

| Name   | Type   | Description               |
| ------ | ------ | ------------------------- |
| `gain` | number | A number between 0 and 1. |

**Returns:** _boolean_

If the gain was set or not.
