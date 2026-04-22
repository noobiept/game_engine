[Game Engine](../README.md) › [Game](../modules/game.md) › [Utilities](../modules/game.utilities.md) › [Timer](game.utilities.timer.md)

# Class: Timer

Count-up or count-down timer. Updates directly to the html element.

## Hierarchy

- **Timer**

## Index

### Constructors

- [constructor](game.utilities.timer.md#constructor)

### Properties

- [count_down](game.utilities.timer.md#count_down)
- [end_callback](game.utilities.timer.md#end_callback)
- [end_value](game.utilities.timer.md#end_value)
- [html_element](game.utilities.timer.md#html_element)
- [interval_f](game.utilities.timer.md#interval_f)
- [is_active](game.utilities.timer.md#is_active)
- [start_value](game.utilities.timer.md#start_value)
- [tick_callback](game.utilities.timer.md#tick_callback)
- [time_count](game.utilities.timer.md#time_count)

### Methods

- [add](game.utilities.timer.md#add)
- [getTimeMilliseconds](game.utilities.timer.md#gettimemilliseconds)
- [getTimeSeconds](game.utilities.timer.md#gettimeseconds)
- [getTimeString](game.utilities.timer.md#gettimestring)
- [reset](game.utilities.timer.md#reset)
- [restart](game.utilities.timer.md#restart)
- [resume](game.utilities.timer.md#resume)
- [start](game.utilities.timer.md#start)
- [stop](game.utilities.timer.md#stop)

## Constructors

### constructor

\+ **new Timer**(`htmlElement`: HTMLElement): _[Timer](game.utilities.timer.md)_

_Defined in [utilities.ts:599](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L599)_

**Parameters:**

| Name          | Type        |
| ------------- | ----------- |
| `htmlElement` | HTMLElement |

**Returns:** _[Timer](game.utilities.timer.md)_

## Properties

### count_down

• **count_down**: _boolean_

_Defined in [utilities.ts:596](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L596)_

---

### end_callback

• **end_callback**: _function_

_Defined in [utilities.ts:594](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L594)_

#### Type declaration:

▸ (): _any_

---

### end_value

• **end_value**: _number_

_Defined in [utilities.ts:593](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L593)_

---

### html_element

• **html_element**: _HTMLElement_

_Defined in [utilities.ts:599](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L599)_

---

### interval_f

• **interval_f**: _number_

_Defined in [utilities.ts:598](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L598)_

---

### is_active

• **is_active**: _boolean_

_Defined in [utilities.ts:591](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L591)_

---

### start_value

• **start_value**: _number_

_Defined in [utilities.ts:592](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L592)_

---

### tick_callback

• **tick_callback**: _function_

_Defined in [utilities.ts:595](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L595)_

#### Type declaration:

▸ (): _any_

---

### time_count

• **time_count**: _number_

_Defined in [utilities.ts:597](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L597)_

## Methods

### add

▸ **add**(`time`: number): _void_

_Defined in [utilities.ts:806](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L806)_

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

**Parameters:**

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `time` | number | In milliseconds. |

**Returns:** _void_

---

### getTimeMilliseconds

▸ **getTimeMilliseconds**(): _number_

_Defined in [utilities.ts:832](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L832)_

Returns the time it has passed so far, in milliseconds.

**Returns:** _number_

---

### getTimeSeconds

▸ **getTimeSeconds**(): _number_

_Defined in [utilities.ts:824](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L824)_

Returns the time it has passed so far, in seconds.

**Returns:** _number_

---

### getTimeString

▸ **getTimeString**(): _string_

_Defined in [utilities.ts:815](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L815)_

Returns a string with the time passed so far.

**Returns:** _string_

---

### reset

▸ **reset**(): _void_

_Defined in [utilities.ts:775](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L775)_

Stops and resets the count.

**Returns:** _void_

---

### restart

▸ **restart**(): _void_

_Defined in [utilities.ts:788](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L788)_

Restart the timer.

**Returns:** _void_

---

### resume

▸ **resume**(): _void_

_Defined in [utilities.ts:685](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L685)_

Resumes the timer with the same settings/values that were set before it was stopped.

**Returns:** _void_

---

### start

▸ **start**(`args?`: object): _void_

_Defined in [utilities.ts:632](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L632)_

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`endCallback` is called when the timer ends (only if an `endValue` was provided).

`tickCallback` is called every second.

**Parameters:**

▪`Optional` **args**: _object_

| Name            | Type     |
| --------------- | -------- |
| `countDown?`    | boolean  |
| `endCallback?`  | function |
| `endValue?`     | number   |
| `startValue?`   | number   |
| `tickCallback?` | function |

**Returns:** _void_

---

### stop

▸ **stop**(): _void_

_Defined in [utilities.ts:760](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L760)_

Stop counting.

**Returns:** _void_
