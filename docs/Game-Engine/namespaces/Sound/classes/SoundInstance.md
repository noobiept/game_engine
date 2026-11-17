[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / SoundInstance

# Class: SoundInstance

Defined in: [source/sound.ts:220](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L220)

Represents a single playing sound. Returned by `Game.Sound.play()`.

Web audio source nodes are one-shot (can only be started once), so `pause()`/`resume()`
work by remembering the played offset and creating a new source node when resuming.
Each instance owns its own gain node (feeding the global/master gain), so its volume
can be controlled independently from the other sounds.

## Constructors

### Constructor

> **new SoundInstance**(`ctx`, `master`, `buffer`, `options?`): `SoundInstance`

Defined in: [source/sound.ts:231](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L231)

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

Defined in: [source/sound.ts:222](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L222)

---

### \_ctx

> `protected` **\_ctx**: `AudioContext`

Defined in: [source/sound.ts:221](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L221)

---

### \_gain

> `protected` **\_gain**: `GainNode`

Defined in: [source/sound.ts:223](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L223)

---

### \_loop

> `protected` **\_loop**: `boolean`

Defined in: [source/sound.ts:226](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L226)

---

### \_offset

> `protected` **\_offset**: `number`

Defined in: [source/sound.ts:228](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L228)

---

### \_playing

> `protected` **\_playing**: `boolean`

Defined in: [source/sound.ts:227](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L227)

---

### \_source

> `protected` **\_source**: `AudioBufferSourceNode` \| `null`

Defined in: [source/sound.ts:224](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L224)

---

### \_startedAt

> `protected` **\_startedAt**: `number`

Defined in: [source/sound.ts:229](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L229)

## Accessors

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [source/sound.ts:338](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L338)

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`loop`): `void`

Defined in: [source/sound.ts:330](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L330)

##### Parameters

###### loop

`boolean`

##### Returns

`void`

---

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: [source/sound.ts:353](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L353)

Whether the sound is currently playing (`false` while paused/stopped/finished).

##### Returns

`boolean`

---

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [source/sound.ts:346](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L346)

##### Returns

`number`

#### Set Signature

> **set** **volume**(`volume`): `void`

Defined in: [source/sound.ts:342](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L342)

##### Parameters

###### volume

`number`

##### Returns

`void`

## Methods

### \_startSource()

> `protected` **\_startSource**(`offset`): `void`

Defined in: [source/sound.ts:256](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L256)

Create and start a new source node at the given buffer offset.

#### Parameters

##### offset

`number`

#### Returns

`void`

---

### \_stopSource()

> `protected` **\_stopSource**(): `void`

Defined in: [source/sound.ts:286](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L286)

Stop the current source node without triggering the `onended` handling.

#### Returns

`void`

---

### pause()

> **pause**(): `void`

Defined in: [source/sound.ts:298](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L298)

Suspend the playback, remembering the current offset so it can be resumed later.

#### Returns

`void`

---

### resume()

> **resume**(): `void`

Defined in: [source/sound.ts:313](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L313)

Resume the playback from where it was paused.

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in: [source/sound.ts:324](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/sound.ts#L324)

Stop the playback and discard the saved offset.

#### Returns

`void`
