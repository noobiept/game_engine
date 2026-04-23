[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / Weapon

# Class: Weapon

Defined in: [source/weapon.ts:51](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L51)

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

    var unit = new Unit({
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

Defined in: [source/weapon.ts:71](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L71)

#### Parameters

##### args

[`WeaponArgs`](../interfaces/WeaponArgs.md)

#### Returns

`Weapon`

## Properties

### \_bullet_container

> `protected` **\_bullet_container**: [`Container`](Container.md) \| [`Canvas`](Canvas.md)

Defined in: [source/weapon.ts:69](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L69)

---

### \_bullet_intervals

> `protected` **\_bullet_intervals**: `object`[]

Defined in: [source/weapon.ts:62](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L62)

#### angleOrTarget

> **angleOrTarget**: `number` \| [`Element`](Element.md)

#### bulletId

> **bulletId**: `number`

#### count

> **count**: `number`

#### interval

> **interval**: `number`

---

### \_bullet_types

> `protected` **\_bullet_types**: [`Bullet`](Bullet.md)[]

Defined in: [source/weapon.ts:61](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L61)

---

### \_bullets

> `protected` **\_bullets**: [`Bullet`](Bullet.md)[]

Defined in: [source/weapon.ts:68](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L68)

---

### \_fire_count

> `protected` **\_fire_count**: `number`

Defined in: [source/weapon.ts:60](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L60)

---

### \_is_ready

> `protected` **\_is_ready**: `boolean`

Defined in: [source/weapon.ts:59](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L59)

---

### category

> **category**: `number`

Defined in: [source/weapon.ts:56](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L56)

---

### collidesWith

> **collidesWith**: `number`

Defined in: [source/weapon.ts:57](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L57)

---

### damage

> **damage**: `number`

Defined in: [source/weapon.ts:53](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L53)

---

### element

> **element**: [`Element`](Element.md)

Defined in: [source/weapon.ts:52](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L52)

---

### fire_interval

> **fire_interval**: `number`

Defined in: [source/weapon.ts:54](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L54)

## Methods

### \_fire()

> `protected` **\_fire**(`angleOrTarget`, `bulletId`): `boolean`

Defined in: [source/weapon.ts:209](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L209)

Fire a bullet at a certain angle, or towards a specific target.

Returns `false` if it failed to fire a bullet (if the target was already removed).

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

Defined in: [source/weapon.ts:119](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L119)

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

> **clone**(): `Weapon`

Defined in: [source/weapon.ts:302](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L302)

#### Returns

`Weapon`

---

### fire()

> **fire**(`angleOrTarget?`, `bulletId?`): `boolean`

Defined in: [source/weapon.ts:144](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L144)

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

Defined in: [source/weapon.ts:137](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L137)

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

Defined in: [source/weapon.ts:175](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L175)

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

Defined in: [source/weapon.ts:298](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L298)

#### Returns

`boolean`

---

### logic()

> **logic**(`deltaTime`): `void`

Defined in: [source/weapon.ts:261](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L261)

Deals with the fire interval logic, and with the set intervals logic.

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

---

### remove()

> **remove**(): `void`

Defined in: [source/weapon.ts:318](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L318)

#### Returns

`void`

---

### stopFiring()

> **stopFiring**(): `void`

Defined in: [source/weapon.ts:128](https://github.com/noobiept/game_engine/blob/9b45d5576126dddaec7019b6861b3dd156542e51/source/weapon.ts#L128)

Stop firing bullets (if it was set to fire at a certain interval).

#### Returns

`void`
