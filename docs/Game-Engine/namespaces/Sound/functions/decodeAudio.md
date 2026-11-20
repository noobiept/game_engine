[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / decodeAudio

# Function: decodeAudio()

> **decodeAudio**(`data`, `successCallback`, `errorCallback`): `boolean`

Defined in: [source/sound.ts:205](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L205)

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
