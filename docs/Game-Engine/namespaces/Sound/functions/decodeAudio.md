[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / decodeAudio

# Function: decodeAudio()

> **decodeAudio**(`data`, `successCallback`, `errorCallback`): `boolean`

Defined in: [source/sound.ts:122](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L122)

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
