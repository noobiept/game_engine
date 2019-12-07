[Game Engine](../README.md) › [Game](../modules/game.md) › [Utilities](../modules/game.utilities.md) › [Timer](game.utilities.timer.md)

# Class: Timer

Count-up or count-down timer. Updates directly to the html element.

## Hierarchy

* **Timer**

## Index

### Constructors

* [constructor](game.utilities.timer.md#constructor)

### Properties

* [count_down](game.utilities.timer.md#count_down)
* [end_callback](game.utilities.timer.md#end_callback)
* [end_value](game.utilities.timer.md#end_value)
* [html_element](game.utilities.timer.md#html_element)
* [interval_f](game.utilities.timer.md#interval_f)
* [is_active](game.utilities.timer.md#is_active)
* [start_value](game.utilities.timer.md#start_value)
* [tick_callback](game.utilities.timer.md#tick_callback)
* [time_count](game.utilities.timer.md#time_count)

### Methods

* [add](game.utilities.timer.md#add)
* [getTimeMilliseconds](game.utilities.timer.md#gettimemilliseconds)
* [getTimeSeconds](game.utilities.timer.md#gettimeseconds)
* [getTimeString](game.utilities.timer.md#gettimestring)
* [reset](game.utilities.timer.md#reset)
* [restart](game.utilities.timer.md#restart)
* [resume](game.utilities.timer.md#resume)
* [start](game.utilities.timer.md#start)
* [stop](game.utilities.timer.md#stop)

## Constructors

###  constructor

\+ **new Timer**(`htmlElement`: HTMLElement): *[Timer](game.utilities.timer.md)*

*Defined in [utilities.ts:599](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L599)*

**Parameters:**

Name | Type |
------ | ------ |
`htmlElement` | HTMLElement |

**Returns:** *[Timer](game.utilities.timer.md)*

## Properties

###  count_down

• **count_down**: *boolean*

*Defined in [utilities.ts:596](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L596)*

___

###  end_callback

• **end_callback**: *function*

*Defined in [utilities.ts:594](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L594)*

#### Type declaration:

▸ (): *any*

___

###  end_value

• **end_value**: *number*

*Defined in [utilities.ts:593](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L593)*

___

###  html_element

• **html_element**: *HTMLElement*

*Defined in [utilities.ts:599](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L599)*

___

###  interval_f

• **interval_f**: *number*

*Defined in [utilities.ts:598](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L598)*

___

###  is_active

• **is_active**: *boolean*

*Defined in [utilities.ts:591](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L591)*

___

###  start_value

• **start_value**: *number*

*Defined in [utilities.ts:592](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L592)*

___

###  tick_callback

• **tick_callback**: *function*

*Defined in [utilities.ts:595](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L595)*

#### Type declaration:

▸ (): *any*

___

###  time_count

• **time_count**: *number*

*Defined in [utilities.ts:597](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L597)*

## Methods

###  add

▸ **add**(`time`: number): *void*

*Defined in [utilities.ts:806](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L806)*

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | number | In milliseconds.  |

**Returns:** *void*

___

###  getTimeMilliseconds

▸ **getTimeMilliseconds**(): *number*

*Defined in [utilities.ts:832](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L832)*

Returns the time it has passed so far, in milliseconds.

**Returns:** *number*

___

###  getTimeSeconds

▸ **getTimeSeconds**(): *number*

*Defined in [utilities.ts:824](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L824)*

Returns the time it has passed so far, in seconds.

**Returns:** *number*

___

###  getTimeString

▸ **getTimeString**(): *string*

*Defined in [utilities.ts:815](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L815)*

Returns a string with the time passed so far.

**Returns:** *string*

___

###  reset

▸ **reset**(): *void*

*Defined in [utilities.ts:775](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L775)*

Stops and resets the count.

**Returns:** *void*

___

###  restart

▸ **restart**(): *void*

*Defined in [utilities.ts:788](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L788)*

Restart the timer.

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

*Defined in [utilities.ts:685](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L685)*

Resumes the timer with the same settings/values that were set before it was stopped.

**Returns:** *void*

___

###  start

▸ **start**(`args?`: object): *void*

*Defined in [utilities.ts:632](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L632)*

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`endCallback` is called when the timer ends (only if an `endValue` was provided).

`tickCallback` is called every second.

**Parameters:**

▪`Optional`  **args**: *object*

Name | Type |
------ | ------ |
`countDown?` | boolean |
`endCallback?` | function |
`endValue?` | number |
`startValue?` | number |
`tickCallback?` | function |

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [utilities.ts:760](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L760)*

Stop counting.

**Returns:** *void*
