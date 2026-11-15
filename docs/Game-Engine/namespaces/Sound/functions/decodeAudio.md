[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / decodeAudio

# Function: decodeAudio()

> **decodeAudio**(`data`, `successCallback`, `errorCallback`): `boolean`

Defined in: [sound.ts:59](https://github.com/noobiept/game_engine/blob/4f5a7e30f6ff074036cf0b7be71db6467d0f4969/source/sound.ts#L59)

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
