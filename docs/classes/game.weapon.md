[Game Engine](../README.md) › [Game](../modules/game.md) › [Weapon](game.weapon.md)

# Class: Weapon

Basic Usage:

    function Unit( args )
        {
        Game.Rectangle.call( this, args );

        this._has_logic = true;
        this.weapon = new Game.Weapon({
                element: this,
                bulletContainer: Game.getCanvas()
            });
        }

    Game.Utilities.inheritPrototype( Unit, Game.Rectangle );

    Unit.prototype.logic = function( deltaTime )
        {
        this.weapon.logic( deltaTime );
        }

    var unit = new Unit({
            width: 10,
            height: 10,
            color: 'red'
        });
    Game.addElement( unit );

    unit.weapon.fire( Math.PI / 4 );

Examples -- `bullets`, `collision_detection`, `collision_detection2`, `custom_element`, `tower_defense`

## Hierarchy

* **Weapon**

## Index

### Constructors

* [constructor](game.weapon.md#constructor)

### Properties

* [_bullet_container](game.weapon.md#protected-_bullet_container)
* [_bullet_intervals](game.weapon.md#protected-_bullet_intervals)
* [_bullet_types](game.weapon.md#protected-_bullet_types)
* [_bullets](game.weapon.md#protected-_bullets)
* [_fire_count](game.weapon.md#protected-_fire_count)
* [_is_ready](game.weapon.md#protected-_is_ready)
* [category](game.weapon.md#category)
* [collidesWith](game.weapon.md#collideswith)
* [damage](game.weapon.md#damage)
* [element](game.weapon.md#element)
* [fire_interval](game.weapon.md#fire_interval)

### Methods

* [_fire](game.weapon.md#protected-_fire)
* [addBulletType](game.weapon.md#addbullettype)
* [clone](game.weapon.md#clone)
* [fire](game.weapon.md#fire)
* [firingPattern](game.weapon.md#firingpattern)
* [forceFire](game.weapon.md#forcefire)
* [isReady](game.weapon.md#isready)
* [logic](game.weapon.md#logic)
* [remove](game.weapon.md#remove)
* [stopFiring](game.weapon.md#stopfiring)

## Constructors

###  constructor

\+ **new Weapon**(`args`: [WeaponArgs](../interfaces/game.weaponargs.md)): *[Weapon](game.weapon.md)*

*Defined in [weapon.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [WeaponArgs](../interfaces/game.weaponargs.md) |

**Returns:** *[Weapon](game.weapon.md)*

## Properties

### `Protected` _bullet_container

• **_bullet_container**: *[Container](game.container.md) | [Canvas](game.canvas.md)*

*Defined in [weapon.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L67)*

___

### `Protected` _bullet_intervals

• **_bullet_intervals**: *object[]*

*Defined in [weapon.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L65)*

___

### `Protected` _bullet_types

• **_bullet_types**: *[Bullet](game.bullet.md)[]*

*Defined in [weapon.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L64)*

___

### `Protected` _bullets

• **_bullets**: *[Bullet](game.bullet.md)[]*

*Defined in [weapon.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L66)*

___

### `Protected` _fire_count

• **_fire_count**: *number*

*Defined in [weapon.ts:63](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L63)*

___

### `Protected` _is_ready

• **_is_ready**: *boolean*

*Defined in [weapon.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L62)*

___

###  category

• **category**: *number*

*Defined in [weapon.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L59)*

___

###  collidesWith

• **collidesWith**: *number*

*Defined in [weapon.ts:60](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L60)*

___

###  damage

• **damage**: *number*

*Defined in [weapon.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L56)*

___

###  element

• **element**: *[Element](game.element.md)*

*Defined in [weapon.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L55)*

___

###  fire_interval

• **fire_interval**: *number*

*Defined in [weapon.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L57)*

## Methods

### `Protected` _fire

▸ **_fire**(`angleOrTarget`: number | [Element](game.element.md), `bulletId`: number): *boolean*

*Defined in [weapon.ts:234](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L234)*

Fire a bullet at a certain angle, or towards a specific target.

Returns `false` if it failed to fire a bullet (if the target was already removed).

**Parameters:**

Name | Type |
------ | ------ |
`angleOrTarget` | number &#124; [Element](game.element.md) |
`bulletId` | number |

**Returns:** *boolean*

___

###  addBulletType

▸ **addBulletType**(`bullet`: [Bullet](game.bullet.md)): *number*

*Defined in [weapon.ts:124](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L124)*

A weapon can potentially fire different types of bullets.
To do so, first need to associate a bullet type to the unit, and then later on specify the bullet type in the `.fire()` or `.forceFire()` call, with the returned id from this function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bullet` | [Bullet](game.bullet.md) | A bullet object, to be cloned every time a bullet is fired later on. |

**Returns:** *number*

The bullet type id, that identifies this type. Use it when calling `.fire()` or `.forceFire()`.

___

###  clone

▸ **clone**(): *[Weapon](game.weapon.md)‹›*

*Defined in [weapon.ts:349](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L349)*

**Returns:** *[Weapon](game.weapon.md)‹›*

___

###  fire

▸ **fire**(`angleOrTarget?`: number | [Element](game.element.md), `bulletId?`: number): *boolean*

*Defined in [weapon.ts:155](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L155)*

Respects the firing interval (can only fire a bullet once the weapon is ready (the interval has passed)).

**Parameters:**

Name | Type |
------ | ------ |
`angleOrTarget?` | number &#124; [Element](game.element.md) |
`bulletId?` | number |

**Returns:** *boolean*

___

###  firingPattern

▸ **firingPattern**(`angleOrTarget`: number | [Element](game.element.md), `bulletId`: number): *boolean*

*Defined in [weapon.ts:146](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L146)*

The firing pattern, for example if it fires one bullet in the given direction, or if it fires one in the direction and two to the sides, etc.
You can override this in derived classes to easily make different types of weapons.
The default is to fire a single bullet in the angle/target given.

**Parameters:**

Name | Type |
------ | ------ |
`angleOrTarget` | number &#124; [Element](game.element.md) |
`bulletId` | number |

**Returns:** *boolean*

___

###  forceFire

▸ **forceFire**(`angleOrTarget?`: number | [Element](game.element.md), `bulletId?`: number, `interval?`: number): *boolean*

*Defined in [weapon.ts:195](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L195)*

Ignores the firing interval (fires immediately).
Can be set to fire at a given interval.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angleOrTarget?` | number &#124; [Element](game.element.md) | Either the `angle` of the bullet movement, or an `Element` which will work as the target of the bullet (it will follow the target until it hits it). |
`bulletId?` | number | The id of the bullet type to fire. See `.addBulletType()` for more information. |
`interval?` | number | If you want to keep firing bullets at the same angle (or same target). Pass a positive number for that.  |

**Returns:** *boolean*

___

###  isReady

▸ **isReady**(): *boolean*

*Defined in [weapon.ts:343](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L343)*

**Returns:** *boolean*

___

###  logic

▸ **logic**(`deltaTime`: number): *void*

*Defined in [weapon.ts:297](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L297)*

Deals with the fire interval logic, and with the set intervals logic.

**Parameters:**

Name | Type |
------ | ------ |
`deltaTime` | number |

**Returns:** *void*

___

###  remove

▸ **remove**(): *void*

*Defined in [weapon.ts:368](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L368)*

**Returns:** *void*

___

###  stopFiring

▸ **stopFiring**(): *void*

*Defined in [weapon.ts:135](https://github.com/noobiept/game_engine/blob/625c324/source/weapon.ts#L135)*

Stop firing bullets (if it was set to fire at a certain interval).

**Returns:** *void*
