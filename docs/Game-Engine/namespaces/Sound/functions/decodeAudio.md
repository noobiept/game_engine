[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / decodeAudio

# Function: decodeAudio()

> **decodeAudio**(`data`, `successCallback`, `errorCallback`): `boolean`

Defined in: [source/sound.ts:59](https://github.com/noobiept/game_engine/blob/6648114222a49e0e7ff0d3918a64154ad4a513fa/source/sound.ts#L59)

Decode audio file data contained in an ArrayBuffer.

## Parameters

### data

`ArrayBuffer`

The audio data.

### successCallback

(`decodedData`) => `any`

Function to be called when the data has been decoded.

### errorCallback

`DecodeErrorCallback`

Function to be called in case it fails to decode the audio data.

## Returns

`boolean`
