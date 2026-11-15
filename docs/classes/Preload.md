[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Preload

# Class: Preload

Defined in: [preload.ts:77](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L77)

Basic Usage:

    const preload = new Game.Preload({ saveGlobal: true });

    preload.addEventListener( 'complete', function( data ) {
        if ( data.failedIds.length > 0 ) {
            // show an error, instead of starting the game with missing files
        }
    });
    preload.load( 'id', 'path_to_file.png' );

        // or with a manifest
    const manifest = [
            { id: 'the_id', path: 'path_to_file.png' }
        ];
    preload.loadManifest( manifest, '' );

Events (the listeners are typed, see `PreloadEvents`):

- `complete` -- `listener( data: PreloadCompleteData );`
  Dispatched once all the files were dealt with (loaded or failed). More files can be loaded from the listener.
- `error` -- `listener( data: PreloadErrorData );`
  Dispatched for every file that fails to load: network errors and timeouts (`event`), error statuses (`status`), and files that
  can't be parsed or decoded (`error`).
- `abort` -- `listener( data: { id: string; event: ProgressEvent; } );`
- `progress` -- `listener( progress: number );`
- `fileload` -- `listener( data: { id: string; data: Object; } );`

The `path` is used as is, so don't build it from untrusted data (a url parameter, user input, etc) without validating it first.

Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`, `sprite`

## Extends

- [`EventDispatcher`](EventDispatcher.md)

## Constructors

### Constructor

> **new Preload**(`args?`): `Preload`

Defined in: [preload.ts:87](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L87)

#### Parameters

##### args?

[`PreloadArgs`](../interfaces/PreloadArgs.md)

#### Returns

`Preload`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### \_data

> `protected` **\_data**: `Record`\<`string`, `any`\>

Defined in: [preload.ts:80](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L80)

---

### \_failed\_ids

> `protected` **\_failed\_ids**: `string`[]

Defined in: [preload.ts:83](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L83)

---

### \_file\_progress

> `protected` **\_file\_progress**: `Map`\<`string`, `number`\>

Defined in: [preload.ts:85](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L85)

---

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L34)

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`_listeners`](EventDispatcher.md#_listeners)

---

### \_loaded\_ids

> `protected` **\_loaded\_ids**: `string`[]

Defined in: [preload.ts:84](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L84)

---

### \_loaded\_items

> `protected` **\_loaded\_items**: `number`

Defined in: [preload.ts:82](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L82)

---

### \_total\_items

> `protected` **\_total\_items**: `number`

Defined in: [preload.ts:81](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L81)

---

### saveGlobal

> **saveGlobal**: `boolean`

Defined in: [preload.ts:78](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L78)

---

### timeout

> **timeout**: `number`

Defined in: [preload.ts:79](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L79)

## Methods

### \_failed\_to\_load()

> `protected` **\_failed\_to\_load**(`id`): `void`

Defined in: [preload.ts:167](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L167)

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

#### Parameters

##### id

`string`

#### Returns

`void`

---

### \_loaded()

> `protected` **\_loaded**(`id`, `data`): `void`

Defined in: [preload.ts:119](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L119)

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

### \_loading\_complete()

> `protected` **\_loading\_complete**(): `void`

Defined in: [preload.ts:180](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L180)

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

#### Returns

`void`

---

### \_on\_abort()

> `protected` **\_on\_abort**(`event`, `id`): `void`

Defined in: [preload.ts:216](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L216)

Dispatch the `abort` event, and count the file as failed (even if a listener throws).

#### Parameters

##### event

`ProgressEvent`\<`EventTarget`\>

The event to dispatch.

##### id

`string`

The id of the element.

#### Returns

`void`

---

### \_on\_error()

> `protected` **\_on\_error**(`id`, `details`): `void`

Defined in: [preload.ts:202](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L202)

Dispatch the `error` event, and count the file as failed (even if a listener throws).

#### Parameters

##### id

`string`

The id of the element.

##### details

`Omit`\<[`PreloadErrorData`](../interfaces/PreloadErrorData.md), `"id"`\>

What went wrong.

#### Returns

`void`

---

### \_on\_progress()

> `protected` **\_on\_progress**(`event`, `id`): `void`

Defined in: [preload.ts:230](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L230)

Dispatch the current progress percentage (of all the files being loaded).

#### Parameters

##### event

`ProgressEvent`

The event that was triggered.

##### id

`string`

The id of the file.

#### Returns

`void`

---

### addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`): `boolean`

Defined in: [preload.ts:145](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L145)

Add a listener to one of the events (see `PreloadEvents` for the data each one gets).

#### Type Parameters

##### K

`K` _extends_ keyof [`PreloadEvents`](../interfaces/PreloadEvents.md)

#### Parameters

##### type

`K`

##### listener

(`data`) => `any`

#### Returns

`boolean`

If it was successfully added (`false` when it isn't a function, or was already added).

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

---

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [event\_dispatcher.ts:125](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L125)

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

Defined in: [preload.ts:394](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L394)

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

Defined in: [event\_dispatcher.ts:146](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L146)

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

Defined in: [preload.ts:262](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L262)

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

Defined in: [preload.ts:375](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L375)

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

Defined in: [event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

---

### removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener?`): `boolean`

Defined in: [preload.ts:157](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/preload.ts#L157)

Remove a listener of an event, or all its listeners (when `listener` isn't given).

#### Type Parameters

##### K

`K` _extends_ keyof [`PreloadEvents`](../interfaces/PreloadEvents.md)

#### Parameters

##### type

`K`

##### listener?

(`data`) => `any`

#### Returns

`boolean`

If it was successfully removed.

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)
