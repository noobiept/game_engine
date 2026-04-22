[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Preload

# Class: Preload

Defined in: [source/preload.ts:33](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L33)

Basic Usage:

    var preload = new Game.Preload({ saveGlobal: true });

    preload.addEventListener( 'complete', completeListener );
    preload.load( 'id', 'path_to_file.png' );

        // or with a manifest
    var manifest = [
            { id: 'the_id', path: 'path_to_file.png' }
        ];
    preload.loadManifest( manifest, '' );

Events:

- `complete` -- `listener( data: { failed_ids: string[]; loaded_ids: string[]; } );`
- `error` -- `listener( data: { id: string; event; } );`
- `abort` -- `listener( data: { id: string; event; } );`
- `progress` -- `listener( progress: number );`
- `fileload` -- `listener( data: { id: string; data: Object; } );`

Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`, `sprite`

## Extends

- [`EventDispatcher`](EventDispatcher.md)

## Constructors

### Constructor

> **new Preload**(`args?`): `Preload`

Defined in: [source/preload.ts:41](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L41)

#### Parameters

##### args?

[`PreloadArgs`](../interfaces/PreloadArgs.md)

#### Returns

`Preload`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### \_data

> `protected` **\_data**: `Object`

Defined in: [source/preload.ts:35](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L35)

---

### \_failed_ids

> `protected` **\_failed_ids**: `string`[]

Defined in: [source/preload.ts:38](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L38)

---

### \_listeners

> `protected` **\_listeners**: `any`

Defined in: [source/event_dispatcher.ts:9](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L9)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_loaded_ids

> `protected` **\_loaded_ids**: `string`[]

Defined in: [source/preload.ts:39](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L39)

---

### \_loaded_items

> `protected` **\_loaded_items**: `number`

Defined in: [source/preload.ts:37](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L37)

---

### \_total_items

> `protected` **\_total_items**: `number`

Defined in: [source/preload.ts:36](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L36)

---

### save_global

> **save_global**: `boolean`

Defined in: [source/preload.ts:34](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L34)

## Methods

### \_failed_to_load()

> `protected` **\_failed_to_load**(`id`): `void`

Defined in: [source/preload.ts:86](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L86)

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

#### Parameters

##### id

`string`

#### Returns

`void`

---

### \_loaded()

> `protected` **\_loaded**(`id`, `data`): `void`

Defined in: [source/preload.ts:66](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L66)

An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.

#### Parameters

##### id

`string`

The id of the loaded element.

##### data

`any`

Its data.

#### Returns

`void`

---

### \_loading_complete()

> `protected` **\_loading_complete**(): `void`

Defined in: [source/preload.ts:98](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L98)

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

#### Returns

`void`

---

### \_on_abort()

> `protected` **\_on_abort**(`event`, `id`): `void`

Defined in: [source/preload.ts:127](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L127)

Dispatch the `abort` event.

#### Parameters

##### event

`any`

The event to dispatch.

##### id

`string`

The id of the element.

#### Returns

`void`

---

### \_on_error()

> `protected` **\_on_error**(`event`, `id`): `void`

Defined in: [source/preload.ts:117](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L117)

Dispatch the `error` event.

#### Parameters

##### event

`any`

The event to dispatch.

##### id

`string`

The id of the element.

#### Returns

`void`

---

### \_on_progress()

> `protected` **\_on_progress**(`event`): `void`

Defined in: [source/preload.ts:136](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L136)

Dispatch the current progress percentage.

#### Parameters

##### event

`ProgressEvent`

The event that was triggered.

#### Returns

`void`

---

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event_dispatcher.ts:23](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L23)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`string`

Type of the event.

##### listener

(`data`) => `any`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event_dispatcher.ts:77](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L77)

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

##### type

`string`

Type of the event to dispatch.

##### data?

`any`

Data to be sent to every listener.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatchEvent`](EventDispatcher.md#dispatchevent)

---

### get()

> **get**(`id`): `any`

Defined in: [source/preload.ts:274](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L274)

Get a previously loaded file.

#### Parameters

##### id

`string`

The id of the file.

#### Returns

`any`

---

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event_dispatcher.ts:93](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L93)

Check if there are listeners to a particular event type.

#### Parameters

##### type

`string`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`hasListeners`](EventDispatcher.md#haslisteners)

---

### load()

> **load**(`id`, `path`, `typeId?`): `void`

Defined in: [source/preload.ts:157](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L157)

Load a file.

#### Parameters

##### id

`string`

The id to be used later on to get the element.

##### path

`string`

Path to the file.

##### typeId?

[`TYPES`](../Game-Engine/namespaces/Preload/enumerations/TYPES.md)

Type of the file to load. If not provided then it will try to determine the type from the file extension.

#### Returns

`void`

---

### loadManifest()

> **loadManifest**(`manifest`, `basePath?`): `void`

Defined in: [source/preload.ts:255](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/preload.ts#L255)

Load several files.

#### Parameters

##### manifest

`object`[]

Has the information about the files.

##### basePath?

`string`

Base path for all the files in the manifest.

#### Returns

`void`

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event_dispatcher.ts:67](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L67)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event_dispatcher.ts:46](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/event_dispatcher.ts#L46)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`string`

The event type.

##### listener?

(`data`) => `any`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)
