[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Weapon

# Class: Weapon

Defined in: [source/weapon.ts:52](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L52)

Basic Usage:

    class Unit extends Game.Rectangle
        {
        constructor( args )
            {
            super( args );

            this._has_logic = true;
            this.weapon = new Game.Weapon({
                    element: this,
                    bulletContainer: Game.getCanvas()
                });
            }
        logic( deltaTime )
            {
            this.weapon.logic( deltaTime );
            }
        }

    const unit = new Unit({
            width: 10,
            height: 10,
            color: 'red'
        });
    Game.addElement( unit );

    unit.weapon.fire( Math.PI / 4 );

Examples -- `bullets`, `collision_detection`, `collision_detection2`, `custom_element`, `tower_defense`

## Constructors

### Constructor

> **new Weapon**(`args`): `Weapon`

Defined in: [source/weapon.ts:71](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L71)

#### Parameters

##### args

[`WeaponArgs`](../interfaces/WeaponArgs.md)

#### Returns

`Weapon`

## Properties

### \_bullet\_container

> `protected` **\_bullet\_container**: [`Canvas`](Canvas.md) \| [`Container`](Container.md) \| `null`

Defined in: [source/weapon.ts:68](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L68)

---

### \_bullet\_intervals

> `protected` **\_bullet\_intervals**: `object`[]

Defined in: [source/weapon.ts:61](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L61)

#### angleOrTarget

> **angleOrTarget**: `number` \| [`Element`](Element.md)

#### bulletId

> **bulletId**: `number`

#### count

> **count**: `number`

#### interval

> **interval**: `number`

---

### \_bullet\_types

> `protected` **\_bullet\_types**: [`Bullet`](Bullet.md)[]

Defined in: [source/weapon.ts:60](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L60)

---

### \_bullets

> `protected` **\_bullets**: [`Bullet`](Bullet.md)[]

Defined in: [source/weapon.ts:67](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L67)

---

### \_cooldown

> `protected` **\_cooldown**: [`Cooldown`](Cooldown.md)

Defined in: [source/weapon.ts:59](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L59)

---

### \_destroyed

> **\_destroyed**: `boolean` = `false`

Defined in: [source/weapon.ts:69](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L69)

---

### category

> **category**: `number`

Defined in: [source/weapon.ts:56](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L56)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/weapon.ts:57](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L57)

---

### damage

> **damage**: `number`

Defined in: [source/weapon.ts:54](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L54)

---

### element

> **element**: [`Element`](Element.md) \| `null`

Defined in: [source/weapon.ts:53](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L53)

## Accessors

### fireInterval

#### Get Signature

> **get** **fireInterval**(): `number`

Defined in: [source/weapon.ts:98](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L98)

The time between each shot with `fire()` (in seconds). Changing it applies to the current interval (it uses the
time since the last shot). Throws a `RangeError` for a value that isn't a number `>= 0`.

##### Returns

`number`

#### Set Signature

> **set** **fireInterval**(`interval`): `void`

Defined in: [source/weapon.ts:102](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L102)

##### Parameters

###### interval

`number`

##### Returns

`void`

## Methods

### \_fire()

> `protected` **\_fire**(`angleOrTarget`, `bulletId`): `boolean`

Defined in: [source/weapon.ts:203](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L203)

Fire a bullet at a certain angle, or towards a specific target.

Returns `false` if it failed to fire a bullet (if the target was already destroyed).

#### Parameters

##### angleOrTarget

`number` \| [`Element`](Element.md)

##### bulletId

`number`

#### Returns

`boolean`

---

### addBulletType()

> **addBulletType**(`bullet`): `number`

Defined in: [source/weapon.ts:113](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L113)

A weapon can potentially fire different types of bullets.
To do so, first need to associate a bullet type to the unit, and then later on specify the bullet type in the `.fire()` or `.forceFire()` call, with the returned id from this function.

#### Parameters

##### bullet

[`Bullet`](Bullet.md)

A bullet object, to be cloned every time a bullet is fired later on.

#### Returns

`number`

The bullet type id, that identifies this type. Use it when calling `.fire()` or `.forceFire()`.

---

### clone()

> **clone**(): `Weapon` \| `undefined`

Defined in: [source/weapon.ts:316](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L316)

#### Returns

`Weapon` \| `undefined`

---

### destroy()

> **destroy**(): `void`

Defined in: [source/weapon.ts:336](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L336)

#### Returns

`void`

---

### fire()

> **fire**(`angleOrTarget?`, `bulletId?`): `boolean`

Defined in: [source/weapon.ts:138](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L138)

Respects the firing interval (can only fire a bullet once the weapon is ready (the interval has passed)).

#### Parameters

##### angleOrTarget?

`number` \| [`Element`](Element.md)

##### bulletId?

`number`

#### Returns

`boolean`

---

### firingPattern()

> **firingPattern**(`angleOrTarget`, `bulletId`): `boolean`

Defined in: [source/weapon.ts:131](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L131)

The firing pattern, for example if it fires one bullet in the given direction, or if it fires one in the direction and two to the sides, etc.
You can override this in derived classes to easily make different types of weapons.
The default is to fire a single bullet in the angle/target given.

#### Parameters

##### angleOrTarget

`number` \| [`Element`](Element.md)

##### bulletId

`number`

#### Returns

`boolean`

---

### forceFire()

> **forceFire**(`angleOrTarget?`, `bulletId?`, `interval?`): `boolean`

Defined in: [source/weapon.ts:169](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L169)

Ignores the firing interval (fires immediately).
Can be set to fire at a given interval.

#### Parameters

##### angleOrTarget?

`number` \| [`Element`](Element.md)

Either the `angle` of the bullet movement, or an `Element` which will work as the target of the bullet (it will follow the target until it hits it).

##### bulletId?

`number`

The id of the bullet type to fire. See `.addBulletType()` for more information.

##### interval?

`number`

If you want to keep firing bullets at the same angle (or same target). Pass a positive number for that.

#### Returns

`boolean`

---

### isReady()

> **isReady**(): `boolean`

Defined in: [source/weapon.ts:312](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L312)

If the fire interval has passed since the last shot (`fire()` can fire).

#### Returns

`boolean`

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/weapon.ts:264](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L264)

Deals with the fire interval logic, and with the set intervals logic.

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

---

### stopFiring()

> **stopFiring**(): `void`

Defined in: [source/weapon.ts:122](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/weapon.ts#L122)

Stop firing bullets (if it was set to fire at a certain interval).

#### Returns

`void`
