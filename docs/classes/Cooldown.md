[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Cooldown

# Class: Cooldown

Defined in: cooldown.ts:47

A timer for an action that can only happen once per interval (an attack, a spawn, health regeneration), which keeps
to the interval like the engine's own timers do (game loop callbacks with a `delay`, weapons, sprite animations):

- It keeps the time past the interval, so the action keeps to the set rate whatever the frame rate is (resetting a
  counter to the interval loses part of a frame every time, so the rate would depend on the display).
- It's ready at most once per update, even when the interval is shorter than the time between updates.
- While it's ready but isn't used (a tower without a target in range), the time doesn't build up, so it isn't
  used several times in a row once there's something to do again.

Call `update()` on every update (from the element's `logic()`, so it pauses with the game), and `restart()` when the
action happens. All the times are in seconds.

Basic Usage:

    class Tower extends Game.Rectangle
        {
        attack = new Game.Cooldown( 0.5 ); // twice per second

        constructor( args )
            {
            super( args );
            this._has_logic = true;
            }

        override logic( deltaTime )
            {
            this.attack.update( deltaTime );

            const target = findTarget( this );

            if ( target && this.attack.isReady() )
                {
                this.attack.restart();
                shoot( this, target );
                }
            }
        }

    // a timer that waits the interval before it's ready the first time
    const spawn = new Game.Cooldown( 2, { ready: false } );

## Constructors

### Constructor

> **new Cooldown**(`interval`, `options?`): `Cooldown`

Defined in: cooldown.ts:56

#### Parameters

##### interval

`number`

The time between uses, a number `>= 0` (`Infinity` never gets ready again once used).

##### options?

[`CooldownOptions`](../interfaces/CooldownOptions.md)

`ready` is if it starts ready to be used (default `true`), or has to wait the interval first.

#### Returns

`Cooldown`

## Properties

### \_elapsed

> `protected` **\_elapsed**: `number`

Defined in: cooldown.ts:49

---

### \_interval

> `protected` **\_interval**: `number`

Defined in: cooldown.ts:48

---

### \_waiting

> `protected` **\_waiting**: `boolean`

Defined in: cooldown.ts:50

## Accessors

### interval

#### Get Signature

> **get** **interval**(): `number`

Defined in: cooldown.ts:65

The time between uses. Changing it applies to the current interval (it uses the time that already passed).

##### Returns

`number`

#### Set Signature

> **set** **interval**(`interval`): `void`

Defined in: cooldown.ts:69

##### Parameters

###### interval

`number`

##### Returns

`void`

---

### remaining

#### Get Signature

> **get** **remaining**(): `number`

Defined in: cooldown.ts:76

Time left until it's ready (`0` when it's ready).

##### Returns

`number`

## Methods

### isReady()

> **isReady**(): `boolean`

Defined in: cooldown.ts:94

If the interval has passed (it can be used).

#### Returns

`boolean`

---

### restart()

> **restart**(): `void`

Defined in: cooldown.ts:103

Start a new interval, for when the action happens.
When it's ready, it keeps the time past the interval (less than an interval, so it's ready at most once per
update), so the next use isn't late. When it's called before it's ready, it waits a whole interval again.

#### Returns

`void`

---

### update()

> **update**(`deltaTime`): `void`

Defined in: cooldown.ts:86

Count the time that passed (call it on every update, with the update's `deltaTime`).

Once it's ready, the time past the interval is kept if it's used before the next `update()` call. When it waits
for longer, the next interval starts when it's used.

#### Parameters

##### deltaTime

`number`

#### Returns

`void`
