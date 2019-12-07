[Game Engine](../README.md) › [Game](../modules/game.md) › [Preload](game.preload.md)

# Class: Preload

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

## Hierarchy

* [EventDispatcher](game.eventdispatcher.md)

  ↳ **Preload**

## Index

### Enumerations

* [TYPES](../enums/game.preload.types.md)

### Constructors

* [constructor](game.preload.md#constructor)

### Properties

* [_data](game.preload.md#protected-_data)
* [_failed_ids](game.preload.md#protected-_failed_ids)
* [_listeners](game.preload.md#protected-_listeners)
* [_loaded_ids](game.preload.md#protected-_loaded_ids)
* [_loaded_items](game.preload.md#protected-_loaded_items)
* [_total_items](game.preload.md#protected-_total_items)
* [save_global](game.preload.md#save_global)
* [DATA](game.preload.md#static-data)

### Methods

* [_failed_to_load](game.preload.md#protected-_failed_to_load)
* [_loaded](game.preload.md#protected-_loaded)
* [_loading_complete](game.preload.md#protected-_loading_complete)
* [_on_abort](game.preload.md#protected-_on_abort)
* [_on_error](game.preload.md#protected-_on_error)
* [_on_progress](game.preload.md#protected-_on_progress)
* [addEventListener](game.preload.md#addeventlistener)
* [dispatchEvent](game.preload.md#dispatchevent)
* [get](game.preload.md#get)
* [hasListeners](game.preload.md#haslisteners)
* [load](game.preload.md#load)
* [loadManifest](game.preload.md#loadmanifest)
* [removeAllEventListeners](game.preload.md#removealleventlisteners)
* [removeEventListener](game.preload.md#removeeventlistener)
* [get](game.preload.md#static-get)
* [getType](game.preload.md#static-gettype)

### Object literals

* [EXTENSIONS](game.preload.md#static-extensions)
* [RESPONSE_TYPE](game.preload.md#static-response_type)

## Constructors

###  constructor

\+ **new Preload**(`args?`: [PreloadArgs](../interfaces/game.preloadargs.md)): *[Preload](game.preload.md)*

*Overrides [EventDispatcher](game.eventdispatcher.md).[constructor](game.eventdispatcher.md#constructor)*

*Defined in [preload.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | [PreloadArgs](../interfaces/game.preloadargs.md) |

**Returns:** *[Preload](game.preload.md)*

## Properties

### `Protected` _data

• **_data**: *Object*

*Defined in [preload.ts:39](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L39)*

___

### `Protected` _failed_ids

• **_failed_ids**: *string[]*

*Defined in [preload.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L42)*

___

### `Protected` _listeners

• **_listeners**: *any*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[_listeners](game.eventdispatcher.md#protected-_listeners)*

*Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)*

___

### `Protected` _loaded_ids

• **_loaded_ids**: *string[]*

*Defined in [preload.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L43)*

___

### `Protected` _loaded_items

• **_loaded_items**: *number*

*Defined in [preload.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L41)*

___

### `Protected` _total_items

• **_total_items**: *number*

*Defined in [preload.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L40)*

___

###  save_global

• **save_global**: *boolean*

*Defined in [preload.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L38)*

___

### `Static` DATA

▪ **DATA**: *object*

*Defined in [preload.ts:360](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L360)*

#### Type declaration:

## Methods

### `Protected` _failed_to_load

▸ **_failed_to_load**(`id`: string): *void*

*Defined in [preload.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L101)*

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *void*

___

### `Protected` _loaded

▸ **_loaded**(`id`: string, `data`: any): *void*

*Defined in [preload.ts:74](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L74)*

An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the loaded element. |
`data` | any | Its data.  |

**Returns:** *void*

___

### `Protected` _loading_complete

▸ **_loading_complete**(): *void*

*Defined in [preload.ts:116](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L116)*

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

**Returns:** *void*

___

### `Protected` _on_abort

▸ **_on_abort**(`event`: any, `id`: string): *void*

*Defined in [preload.ts:150](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L150)*

Dispatch the `abort` event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | any | The event to dispatch. |
`id` | string | The id of the element.  |

**Returns:** *void*

___

### `Protected` _on_error

▸ **_on_error**(`event`: any, `id`: string): *void*

*Defined in [preload.ts:138](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L138)*

Dispatch the `error` event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | any | The event to dispatch. |
`id` | string | The id of the element.  |

**Returns:** *void*

___

### `Protected` _on_progress

▸ **_on_progress**(`event`: ProgressEvent): *void*

*Defined in [preload.ts:161](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L161)*

Dispatch the current progress percentage.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event that was triggered.  |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: function): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[addEventListener](game.eventdispatcher.md#addeventlistener)*

*Defined in [event_dispatcher.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L32)*

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

**Parameters:**

▪ **type**: *string*

Type of the event.

▪ **listener**: *function*

A function to be called when the event is dispatched.

▸ (`data`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully added.

___

###  dispatchEvent

▸ **dispatchEvent**(`type`: string, `data?`: any): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[dispatchEvent](game.eventdispatcher.md#dispatchevent)*

*Defined in [event_dispatcher.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L101)*

Dispatches an event, which will trigger the listeners of that event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Type of the event to dispatch. |
`data?` | any | Data to be sent to every listener.  |

**Returns:** *void*

___

###  get

▸ **get**(`id`: string): *any*

*Defined in [preload.ts:328](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L328)*

Get a previously loaded file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the file.  |

**Returns:** *any*

___

###  hasListeners

▸ **hasListeners**(`type`: string): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[hasListeners](game.eventdispatcher.md#haslisteners)*

*Defined in [event_dispatcher.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L121)*

Check if there are listeners to a particular event type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | The event type to check. |

**Returns:** *boolean*

If there are listeners or not.

___

###  load

▸ **load**(`id`: string, `path`: string, `typeId?`: [TYPES](../enums/game.preload.types.md)): *void*

*Defined in [preload.ts:184](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L184)*

Load a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id to be used later on to get the element. |
`path` | string | Path to the file. |
`typeId?` | [TYPES](../enums/game.preload.types.md) | Type of the file to load. If not provided then it will try to determine the type from the file extension.  |

**Returns:** *void*

___

###  loadManifest

▸ **loadManifest**(`manifest`: object[], `basePath?`: string): *void*

*Defined in [preload.ts:305](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L305)*

Load several files.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`manifest` | object[] | Has the information about the files. |
`basePath?` | string | Base path for all the files in the manifest.  |

**Returns:** *void*

___

###  removeAllEventListeners

▸ **removeAllEventListeners**(): *void*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeAllEventListeners](game.eventdispatcher.md#removealleventlisteners)*

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L89)*

Remove all the event listeners.

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**(`type`: string, `listener?`: function): *boolean*

*Inherited from [EventDispatcher](game.eventdispatcher.md).[removeEventListener](game.eventdispatcher.md#removeeventlistener)*

*Defined in [event_dispatcher.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L60)*

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

**Parameters:**

▪ **type**: *string*

The event type.

▪`Optional`  **listener**: *function*

The listener function to remove. If not provided then remove all the functions associated with the event type.

▸ (`data`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully removed.

___

### `Static` get

▸ **get**(`id`: string): *any*

*Defined in [preload.ts:369](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L369)*

Get an element that was saved in the global `DATA` object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the element we're retrieving. |

**Returns:** *any*

The preloaded element.

___

### `Static` getType

▸ **getType**(`file`: string): *string*

*Defined in [preload.ts:381](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L381)*

Determine the type of a file based on its extension.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | string | The file name. |

**Returns:** *string*

The file type.

## Object literals

### `Static` EXTENSIONS

### ▪ **EXTENSIONS**: *object*

*Defined in [preload.ts:342](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L342)*

###  audio

• **audio**: *string[]* =  [ 'ogg', 'mp3' ]

*Defined in [preload.ts:346](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L346)*

###  image

• **image**: *string[]* =  [ 'png', 'jpg', 'jpeg' ]

*Defined in [preload.ts:343](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L343)*

###  json

• **json**: *string[]* =  [ 'json' ]

*Defined in [preload.ts:344](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L344)*

###  text

• **text**: *string[]* =  [ 'txt' ]

*Defined in [preload.ts:345](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L345)*

___

### `Static` RESPONSE_TYPE

### ▪ **RESPONSE_TYPE**: *object*

*Defined in [preload.ts:350](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L350)*

###  audio

• **audio**: *string* = "arraybuffer"

*Defined in [preload.ts:354](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L354)*

###  image

• **image**: *string* = "blob"

*Defined in [preload.ts:351](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L351)*

###  json

• **json**: *string* = "json"

*Defined in [preload.ts:352](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L352)*

###  text

• **text**: *string* = "text"

*Defined in [preload.ts:353](https://github.com/noobiept/game_engine/blob/625c324/source/preload.ts#L353)*
