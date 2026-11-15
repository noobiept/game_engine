[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / EventDispatcher

# Class: EventDispatcher

Defined in: [event\_dispatcher.ts:33](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L33)

Base class that provides a way to add/remove listeners, and dispatch events.
Most engine classes extend it (every `Element`, `Preload`, etc.), which is how
you listen to their events with `addEventListener()`.

The listeners are called in the order they were added.
Adding or removing listeners while an event is being dispatched is safe: a listener removed during
a dispatch isn't called anymore, and one added during a dispatch is only called on the next one.

Basic Usage:

    const dispatcher = new Game.EventDispatcher();

    dispatcher.addEventListener( 'custom', function( data ) {
        console.log( 'got', data.value );
    });

    dispatcher.dispatchEvent( 'custom', { value: 42 } );

## Extended by

- [`Element`](Element.md)
- [`Preload`](Preload.md)

## Constructors

### Constructor

> **new EventDispatcher**(`_args?`): `EventDispatcher`

Defined in: [event\_dispatcher.ts:36](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L36)

#### Parameters

##### \_args?

[`EventDispatcherArgs`](../interfaces/EventDispatcherArgs.md)

#### Returns

`EventDispatcher`

## Properties

### \_listeners

> `protected` **\_listeners**: `Map`\<`string`, `ListenerEntry`[]\>

Defined in: [event\_dispatcher.ts:34](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L34)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [event\_dispatcher.ts:48](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L48)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`string`

Type of the event.

##### listener

`EventListener`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added (`false` when it isn't a function, or was already added).

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

---

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [event\_dispatcher.ts:109](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L109)

Remove all the event listeners.

#### Returns

`void`

---

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [event\_dispatcher.ts:74](https://github.com/noobiept/game_engine/blob/d69d3f29ffdf3fedbadde541ad2f355bad7ec496/source/event_dispatcher.ts#L74)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`string`

The event type.

##### listener?

`EventListener`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.
