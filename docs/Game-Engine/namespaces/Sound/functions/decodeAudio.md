[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / decodeAudio

# Function: decodeAudio()

> **decodeAudio**(`data`, `successCallback`, `errorCallback`): `boolean`

Defined in: [source/sound.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/sound.ts#L52)

Decode audio file data contained in an ArrayBuffer.

## Parameters

### data

`ArrayBuffer`

The audio data.

### successCallback

(`decodedData`) => `any`

Function to be called when the data has been decoded.

### errorCallback

`any`

Function to be called in case it fails to decode the audio data.

## Returns

`boolean`
