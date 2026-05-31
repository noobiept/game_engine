[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / SoundInstance

# Class: SoundInstance

Defined in: [source/sound.ts:140](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L140)

Represents a single playing sound. Returned by `Game.Sound.play()`.

Web audio source nodes are one-shot (can only be started once), so `pause()`/`resume()`
work by remembering the played offset and creating a new source node when resuming.
Each instance owns its own gain node (feeding the global/master gain), so its volume
can be controlled independently from the other sounds.

## Constructors

### Constructor

> **new SoundInstance**(`ctx`, `master`, `buffer`, `options?`): `SoundInstance`

Defined in: [source/sound.ts:151](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L151)

#### Parameters

##### ctx

`AudioContext`

##### master

`GainNode`

##### buffer

`AudioBuffer`

##### options?

[`PlayOptions`](../interfaces/PlayOptions.md)

#### Returns

`SoundInstance`

## Properties

### \_buffer

> `protected` **\_buffer**: `AudioBuffer`

Defined in: [source/sound.ts:142](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L142)

---

### \_ctx

> `protected` **\_ctx**: `AudioContext`

Defined in: [source/sound.ts:141](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L141)

---

### \_gain

> `protected` **\_gain**: `GainNode`

Defined in: [source/sound.ts:143](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L143)

---

### \_loop

> `protected` **\_loop**: `boolean`

Defined in: [source/sound.ts:146](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L146)

---

### \_offset

> `protected` **\_offset**: `number`

Defined in: [source/sound.ts:148](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L148)

---

### \_playing

> `protected` **\_playing**: `boolean`

Defined in: [source/sound.ts:147](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L147)

---

### \_source

> `protected` **\_source**: `AudioBufferSourceNode` \| `null`

Defined in: [source/sound.ts:144](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L144)

---

### \_startedAt

> `protected` **\_startedAt**: `number`

Defined in: [source/sound.ts:149](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L149)

## Accessors

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [source/sound.ts:260](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L260)

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`loop`): `void`

Defined in: [source/sound.ts:252](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L252)

##### Parameters

###### loop

`boolean`

##### Returns

`void`

---

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: [source/sound.ts:275](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L275)

Whether the sound is currently playing (`false` while paused/stopped/finished).

##### Returns

`boolean`

---

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [source/sound.ts:268](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L268)

##### Returns

`number`

#### Set Signature

> **set** **volume**(`volume`): `void`

Defined in: [source/sound.ts:264](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L264)

##### Parameters

###### volume

`number`

##### Returns

`void`

## Methods

### \_startSource()

> `protected` **\_startSource**(`offset`): `void`

Defined in: [source/sound.ts:176](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L176)

Create and start a new source node at the given buffer offset.

#### Parameters

##### offset

`number`

#### Returns

`void`

---

### \_stopSource()

> `protected` **\_stopSource**(): `void`

Defined in: [source/sound.ts:208](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L208)

Stop the current source node without triggering the `onended` handling.

#### Returns

`void`

---

### pause()

> **pause**(): `void`

Defined in: [source/sound.ts:220](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L220)

Suspend the playback, remembering the current offset so it can be resumed later.

#### Returns

`void`

---

### resume()

> **resume**(): `void`

Defined in: [source/sound.ts:235](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L235)

Resume the playback from where it was paused.

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in: [source/sound.ts:246](https://github.com/noobiept/game_engine/blob/4a0e827671c0abfcc0c124a52b620c1ebc1fa665/source/sound.ts#L246)

Stop the playback and discard the saved offset.

#### Returns

`void`
