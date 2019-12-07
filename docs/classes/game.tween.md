[Game Engine](../README.md) › [Game](../modules/game.md) › [Tween](game.tween.md)

# Class: Tween

Basic Usage:

    var rectangle = new Game.Rectangle({
            x: 10,
            y: 10,
            width: 10,
            height: 10,
            color: 'green'
        });
    Game.addElement( rectangle );

    var tween = new Game.Tween( rectangle );

    tween.to( { x: 200 }, 2 ).wait( 1 ).call( function()
        {
        console.log( 'Finished!' );
        }).start();

Examples -- `2048`, `basic_example`, `clone`, `multiple_canvas`, `tween`

## Hierarchy

* **Tween**

## Index

### Modules

* [Ease](../modules/game.tween.ease.md)

### Constructors

* [constructor](game.tween.md#constructor)

### Properties

* [_count](game.tween.md#protected-_count)
* [_current_step](game.tween.md#protected-_current_step)
* [_element](game.tween.md#protected-_element)
* [_start_properties](game.tween.md#protected-_start_properties)
* [_steps](game.tween.md#protected-_steps)
* [_update](game.tween.md#protected-_update)
* [_tweens](game.tween.md#static-_tweens)

### Methods

* [call](game.tween.md#call)
* [nextStep](game.tween.md#nextstep)
* [propertiesUpdate](game.tween.md#protected-propertiesupdate)
* [remove](game.tween.md#remove)
* [start](game.tween.md#start)
* [to](game.tween.md#to)
* [wait](game.tween.md#wait)
* [waitUpdate](game.tween.md#protected-waitupdate)
* [getTween](game.tween.md#static-gettween)
* [removeAll](game.tween.md#static-removeall)
* [removeTweens](game.tween.md#static-removetweens)
* [update](game.tween.md#static-update)

## Constructors

###  constructor

\+ **new Tween**(`element`: Object): *[Tween](game.tween.md)*

*Defined in [tween.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Object |

**Returns:** *[Tween](game.tween.md)*

## Properties

### `Protected` _count

• **_count**: *number*

*Defined in [tween.ts:44](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L44)*

___

### `Protected` _current_step

• **_current_step**: *[TweenStep](../interfaces/game.tweenstep.md)*

*Defined in [tween.ts:42](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L42)*

___

### `Protected` _element

• **_element**: *Object*

*Defined in [tween.ts:40](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L40)*

___

### `Protected` _start_properties

• **_start_properties**: *Object*

*Defined in [tween.ts:43](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L43)*

___

### `Protected` _steps

• **_steps**: *[TweenStep](../interfaces/game.tweenstep.md)[]*

*Defined in [tween.ts:41](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L41)*

___

### `Protected` _update

• **_update**: *function*

*Defined in [tween.ts:45](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L45)*

#### Type declaration:

▸ (`delta`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`delta` | number |

___

### `Static` _tweens

▪ **_tweens**: *[Tween](game.tween.md)[]* =  []

*Defined in [tween.ts:38](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L38)*

## Methods

###  call

▸ **call**(`callback`: function): *this*

*Defined in [tween.ts:119](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L119)*

Call a given function.

**Parameters:**

▪ **callback**: *function*

The function to be called.

▸ (): *any*

**Returns:** *this*

The tween object for chaining.

___

###  nextStep

▸ **nextStep**(): *void*

*Defined in [tween.ts:144](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L144)*

Move unto the next step in the tween animation.

**Returns:** *void*

___

### `Protected` propertiesUpdate

▸ **propertiesUpdate**(`deltaTime`: any): *void*

*Defined in [tween.ts:207](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L207)*

.to() tick logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | any | Time elapsed since the last update.  |

**Returns:** *void*

___

###  remove

▸ **remove**(): *void*

*Defined in [tween.ts:133](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L133)*

Remove the tween.

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [tween.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L62)*

Start the tween animation.

**Returns:** *void*

___

###  to

▸ **to**(`properties`: Object, `duration`: number, `ease?`: function): *this*

*Defined in [tween.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L78)*

Set the end value of some properties, and the animation duration.

**Parameters:**

▪ **properties**: *Object*

The `key` is the element's properties we want to animate, and the `value` is the value that property will have at the end of the animation.

▪ **duration**: *number*

Duration of the animation.

▪`Optional`  **ease**: *function*

Ease function, that describes how the value of the property will progress between the animation.

▸ (`value`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *this*

The tween object for chaining.

___

###  wait

▸ **wait**(`duration`: number): *this*

*Defined in [tween.ts:102](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L102)*

Wait for some time doing nothing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duration` | number | Duration of the wait. |

**Returns:** *this*

The tween object for chaining.

___

### `Protected` waitUpdate

▸ **waitUpdate**(`deltaTime`: number): *void*

*Defined in [tween.ts:189](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L189)*

.wait() tick logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*

___

### `Static` getTween

▸ **getTween**(`element`: Object): *[Tween](game.tween.md)‹›*

*Defined in [tween.ts:245](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L245)*

Returns an existing tween of an element, or null if there's no active tween working on the element.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | Object | The element that has a tween animation. |

**Returns:** *[Tween](game.tween.md)‹›*

The associated tween object.

___

### `Static` removeAll

▸ **removeAll**(): *void*

*Defined in [tween.ts:283](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L283)*

Remove all the tween animations.

**Returns:** *void*

___

### `Static` removeTweens

▸ **removeTweens**(`element`: Object): *void*

*Defined in [tween.ts:266](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L266)*

Remove all the tweens of an element.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | Object | The element associated with the tweens we want to remove.  |

**Returns:** *void*

___

### `Static` update

▸ **update**(`deltaTime`: number): *void*

*Defined in [tween.ts:294](https://github.com/noobiept/game_engine/blob/625c324/source/tween.ts#L294)*

Gets called in the game loop, to update all the tween animations.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaTime` | number | Time elapsed since the last update.  |

**Returns:** *void*
