[**Game Engine**](../../../../README.md)

---

[Game Engine](../../../../README.md) / [Sound](../README.md) / SoundInstance

# Class: SoundInstance

Defined in: [source/sound.ts:303](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L303)

Represents a single playing sound. Returned by `Game.Sound.play()`.

Web audio source nodes are one-shot (can only be started once), so `pause()`/`resume()`
work by remembering the played offset and creating a new source node when resuming.
Each instance owns its own gain node (feeding the global/master gain), so its volume
can be controlled independently from the other sounds.

## Constructors

### Constructor

> **new SoundInstance**(`ctx`, `master`, `buffer`, `options?`): `SoundInstance`

Defined in: [source/sound.ts:314](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L314)

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

Defined in: [source/sound.ts:305](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L305)

---

### \_ctx

> `protected` **\_ctx**: `AudioContext`

Defined in: [source/sound.ts:304](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L304)

---

### \_gain

> `protected` **\_gain**: `GainNode`

Defined in: [source/sound.ts:306](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L306)

---

### \_loop

> `protected` **\_loop**: `boolean`

Defined in: [source/sound.ts:309](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L309)

---

### \_offset

> `protected` **\_offset**: `number`

Defined in: [source/sound.ts:311](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L311)

---

### \_playing

> `protected` **\_playing**: `boolean`

Defined in: [source/sound.ts:310](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L310)

---

### \_source

> `protected` **\_source**: `AudioBufferSourceNode` \| `null`

Defined in: [source/sound.ts:307](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L307)

---

### \_startedAt

> `protected` **\_startedAt**: `number`

Defined in: [source/sound.ts:312](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L312)

## Accessors

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [source/sound.ts:421](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L421)

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`loop`): `void`

Defined in: [source/sound.ts:413](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L413)

##### Parameters

###### loop

`boolean`

##### Returns

`void`

---

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: [source/sound.ts:436](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L436)

Whether the sound is currently playing (`false` while paused/stopped/finished).

##### Returns

`boolean`

---

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [source/sound.ts:429](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L429)

##### Returns

`number`

#### Set Signature

> **set** **volume**(`volume`): `void`

Defined in: [source/sound.ts:425](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L425)

##### Parameters

###### volume

`number`

##### Returns

`void`

## Methods

### \_startSource()

> `protected` **\_startSource**(`offset`): `void`

Defined in: [source/sound.ts:339](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L339)

Create and start a new source node at the given buffer offset.

#### Parameters

##### offset

`number`

#### Returns

`void`

---

### \_stopSource()

> `protected` **\_stopSource**(): `void`

Defined in: [source/sound.ts:369](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L369)

Stop the current source node without triggering the `onended` handling.

#### Returns

`void`

---

### pause()

> **pause**(): `void`

Defined in: [source/sound.ts:381](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L381)

Suspend the playback, remembering the current offset so it can be resumed later.

#### Returns

`void`

---

### resume()

> **resume**(): `void`

Defined in: [source/sound.ts:396](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L396)

Resume the playback from where it was paused.

#### Returns

`void`

---

### stop()

> **stop**(): `void`

Defined in: [source/sound.ts:407](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/sound.ts#L407)

Stop the playback and discard the saved offset.

#### Returns

`void`
