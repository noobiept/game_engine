[Game Engine](../README.md) › [Game](../modules/game.md) › [EventDispatcher](game.eventdispatcher.md)

# Class: EventDispatcher

Base class that provides a way to add/remove listeners, and dispatch events.

## Hierarchy

- **EventDispatcher**

    ↳ [Element](game.element.md)

    ↳ [Preload](game.preload.md)

## Index

### Constructors

- [constructor](game.eventdispatcher.md#constructor)

### Properties

- [\_listeners](game.eventdispatcher.md#protected-_listeners)

### Methods

- [addEventListener](game.eventdispatcher.md#addeventlistener)
- [dispatchEvent](game.eventdispatcher.md#dispatchevent)
- [hasListeners](game.eventdispatcher.md#haslisteners)
- [removeAllEventListeners](game.eventdispatcher.md#removealleventlisteners)
- [removeEventListener](game.eventdispatcher.md#removeeventlistener)

## Constructors

### constructor

\+ **new EventDispatcher**(`args?`: [EventDispatcherArgs](../interfaces/game.eventdispatcherargs.md)): _[EventDispatcher](game.eventdispatcher.md)_

_Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)_

**Parameters:**

| Name    | Type                                                             |
| ------- | ---------------------------------------------------------------- |
| `args?` | [EventDispatcherArgs](../interfaces/game.eventdispatcherargs.md) |

**Returns:** _[EventDispatcher](game.eventdispatcher.md)_

## Properties

### `Protected` \_listeners

• **\_listeners**: _any_

_Defined in [event_dispatcher.ts:16](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L16)_

## Methods

### addEventListener

▸ **addEventListener**(`type`: string, `listener`: function): _boolean_

_Defined in [event_dispatcher.ts:32](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L32)_

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

**Parameters:**

▪ **type**: _string_

Type of the event.

▪ **listener**: _function_

A function to be called when the event is dispatched.

▸ (`data`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `data` | any  |

**Returns:** _boolean_

If it was successfully added.

---

### dispatchEvent

▸ **dispatchEvent**(`type`: string, `data?`: any): _void_

_Defined in [event_dispatcher.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L101)_

Dispatches an event, which will trigger the listeners of that event.

**Parameters:**

| Name    | Type   | Description                        |
| ------- | ------ | ---------------------------------- |
| `type`  | string | Type of the event to dispatch.     |
| `data?` | any    | Data to be sent to every listener. |

**Returns:** _void_

---

### hasListeners

▸ **hasListeners**(`type`: string): _boolean_

_Defined in [event_dispatcher.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L121)_

Check if there are listeners to a particular event type.

**Parameters:**

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| `type` | string | The event type to check. |

**Returns:** _boolean_

If there are listeners or not.

---

### removeAllEventListeners

▸ **removeAllEventListeners**(): _void_

_Defined in [event_dispatcher.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L89)_

Remove all the event listeners.

**Returns:** _void_

---

### removeEventListener

▸ **removeEventListener**(`type`: string, `listener?`: function): _boolean_

_Defined in [event_dispatcher.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/event_dispatcher.ts#L60)_

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

**Parameters:**

▪ **type**: _string_

The event type.

▪`Optional` **listener**: _function_

The listener function to remove. If not provided then remove all the functions associated with the event type.

▸ (`data`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `data` | any  |

**Returns:** _boolean_

If it was successfully removed.
