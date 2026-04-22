[Game Engine](../README.md) › [Game](game.md) › [Utilities](game.utilities.md)

# Module: Utilities

Random collection of utilities functions/classes.

## Index

### Classes

- [Timeout](../classes/game.utilities.timeout.md)
- [Timer](../classes/game.utilities.timer.md)

### Functions

- [calculateAngle](game.utilities.md#calculateangle)
- [calculateDistance](game.utilities.md#calculatedistance)
- [createEnum](game.utilities.md#createenum)
- [deepClone](game.utilities.md#deepclone)
- [getObject](game.utilities.md#getobject)
- [getRandomFloat](game.utilities.md#getrandomfloat)
- [getRandomInt](game.utilities.md#getrandomint)
- [getSeveralRandomInts](game.utilities.md#getseveralrandomints)
- [inheritPrototype](game.utilities.md#inheritprototype)
- [isArray](game.utilities.md#isarray)
- [isBoolean](game.utilities.md#isboolean)
- [isFunction](game.utilities.md#isfunction)
- [isInteger](game.utilities.md#isinteger)
- [isNumber](game.utilities.md#isnumber)
- [isString](game.utilities.md#isstring)
- [numberOfDigits](game.utilities.md#numberofdigits)
- [round](game.utilities.md#round)
- [saveObject](game.utilities.md#saveobject)
- [shuffle](game.utilities.md#shuffle)
- [timeToString](game.utilities.md#timetostring)
- [toDegrees](game.utilities.md#todegrees)
- [toRadians](game.utilities.md#toradians)

### Object literals

- [KEY_CODE](game.utilities.md#key_code)
- [MOUSE_CODE](game.utilities.md#mouse_code)

## Functions

### calculateAngle

▸ **calculateAngle**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): _number_

_Defined in [utilities.ts:848](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L848)_

Returns the angle between 2 points in radians.
Positive in clockwise direction.

Throws an `Error` exception if:

- any of the arguments isn't a number.

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `aX` | number |
| `aY` | number |
| `bX` | number |
| `bY` | number |

**Returns:** _number_

---

### calculateDistance

▸ **calculateDistance**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): _number_

_Defined in [utilities.ts:873](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L873)_

Distance between 2 points.

Throws an `Error` exception if:

- any of the arguments isn't a number.

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `aX` | number |
| `aY` | number |
| `bX` | number |
| `bY` | number |

**Returns:** _number_

---

### createEnum

▸ **createEnum**(`values`: string[], `start?`: number): _object_

_Defined in [utilities.ts:360](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L360)_

Enum - A way to associate a string name to a number.

**Parameters:**

| Name     | Type     | Description                                                                             |
| -------- | -------- | --------------------------------------------------------------------------------------- |
| `values` | string[] | The `enum` names. Each name will have an associated number.                             |
| `start?` | number   | Starting number for the first name. The number is incremented by one for the next name. |

**Returns:** _object_

---

### deepClone

▸ **deepClone**(`obj`: any): _any_

_Defined in [utilities.ts:348](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L348)_

Returns a deep clone/copy of the object.

**Parameters:**

| Name  | Type |
| ----- | ---- |
| `obj` | any  |

**Returns:** _any_

---

### getObject

▸ **getObject**(`key`: string): _any_

_Defined in [utilities.ts:134](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L134)_

Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.

Throws an `Error` exception if:

- `key` is not a string.
- `key` wasn't found.

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `key` | string |

**Returns:** _any_

---

### getRandomFloat

▸ **getRandomFloat**(`min`: number, `max`: number): _number_

_Defined in [utilities.ts:229](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L229)_

Returns a random float number between `min` and `max` (inclusive).

Throws an `Error` exception if:

- either `min` or `max` is not a `number`.
- the minimum value is bigger than the maximum.

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `min` | number |
| `max` | number |

**Returns:** _number_

---

### getRandomInt

▸ **getRandomInt**(`min`: number, `max`: number): _number_

_Defined in [utilities.ts:249](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L249)_

Returns a random integer number between `min` and `max` (inclusive).

Throws an `Error` exception if:

- `min` or `max` isn't an integer.
- the minimum value is bigger than the maximum.

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `min` | number |
| `max` | number |

**Returns:** _number_

---

### getSeveralRandomInts

▸ **getSeveralRandomInts**(`min`: number, `max`: number, `howMany`: number): _number[]_

_Defined in [utilities.ts:270](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L270)_

Returns several different random integers, in the range between `min` and `max` (inclusive).

Throws an Error exception if:

- `min`, `max` or `howMany` isn't an integer.
- the minimum value is bigger than the maximum.
- the range is less than the number of integers required.

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `min`     | number |
| `max`     | number |
| `howMany` | number |

**Returns:** _number[]_

---

### inheritPrototype

▸ **inheritPrototype**(`derivedClass`: Function, `baseClass`: Function): _void_

_Defined in [utilities.ts:394](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L394)_

Used for `class` inheritance (search for parasitic combination inheritance).

**Parameters:**

| Name           | Type     |
| -------------- | -------- |
| `derivedClass` | Function |
| `baseClass`    | Function |

**Returns:** _void_

---

### isArray

▸ **isArray**(`element`: any): _boolean_

_Defined in [utilities.ts:169](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L169)_

**Parameters:**

| Name      | Type |
| --------- | ---- |
| `element` | any  |

**Returns:** _boolean_

If it is an array or not.

---

### isBoolean

▸ **isBoolean**(`element`: any): _boolean_

_Defined in [utilities.ts:178](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L178)_

**Parameters:**

| Name      | Type |
| --------- | ---- |
| `element` | any  |

**Returns:** _boolean_

If it is a boolean.

---

### isFunction

▸ **isFunction**(`element`: any): _boolean_

_Defined in [utilities.ts:187](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L187)_

**Parameters:**

| Name      | Type |
| --------- | ---- |
| `element` | any  |

**Returns:** _boolean_

If it is a function.

---

### isInteger

▸ **isInteger**(`value`: any): _boolean_

_Defined in [utilities.ts:196](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L196)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _boolean_

If it is an integer.

---

### isNumber

▸ **isNumber**(`element`: any): _boolean_

_Defined in [utilities.ts:205](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L205)_

**Parameters:**

| Name      | Type |
| --------- | ---- |
| `element` | any  |

**Returns:** _boolean_

If it is a number.

---

### isString

▸ **isString**(`element`: any): _boolean_

_Defined in [utilities.ts:214](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L214)_

**Parameters:**

| Name      | Type |
| --------- | ---- |
| `element` | any  |

**Returns:** _boolean_

If it is a string.

---

### numberOfDigits

▸ **numberOfDigits**(`theNumber`: number): _number_

_Defined in [utilities.ts:304](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L304)_

Returns the number of digits in a number.
It doesn't consider the minus signal, nor the dot (in floats) as a digit.

Throws an `Error` exception if:

- the argument is not a number.

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `theNumber` | number |

**Returns:** _number_

---

### round

▸ **round**(`num`: number, `dec`: number): _number_

_Defined in [utilities.ts:330](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L330)_

Rounds a number to a specified decimal case.

Throws an `Error` exception if:

- `num` isn't a number.
- `dec` isn't an integer.
- `dec` is less than 0.

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `num` | number |
| `dec` | number |

**Returns:** _number_

---

### saveObject

▸ **saveObject**(`key`: string, `value`: any): _void_

_Defined in [utilities.ts:153](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L153)_

Saves in the `localStorage` a json string representation of the `value`.

Throws an `Error` exception if:

- `key` is not a `string`.

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `key`   | string |
| `value` | any    |

**Returns:** _void_

---

### shuffle

▸ **shuffle**(`array`: any[]): _any[]_

_Defined in [utilities.ts:13](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L13)_

Shuffle an array.

**Parameters:**

| Name    | Type  |
| ------- | ----- |
| `array` | any[] |

**Returns:** _any[]_

---

### timeToString

▸ **timeToString**(`dateMilliseconds`: number, `totalUnits`: number): _string_

_Defined in [utilities.ts:419](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L419)_

Converts a time (in milliseconds) to a string (with the number of days/hours...).

The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `totalUnits` of 2)).

The units available are: day/hour/minute/second.

Throws an `Error` exception if:

- the `dateMilliseconds` argument isn't a number.

**Parameters:**

| Name               | Type   | Default |
| ------------------ | ------ | ------- |
| `dateMilliseconds` | number | -       |
| `totalUnits`       | number | 2       |

**Returns:** _string_

---

### toDegrees

▸ **toDegrees**(`radians`: number): _number_

_Defined in [utilities.ts:896](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L896)_

Converts a number in `radians` to `degrees` and returns it.

Throws an `Error` exception if:

- the argument isn't a number.

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `radians` | number |

**Returns:** _number_

---

### toRadians

▸ **toRadians**(`degrees`: number): _number_

_Defined in [utilities.ts:913](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L913)_

Converts a number in `degrees` to `radians` and returns it.

Throws an `Error` exception if:

- the argument isn't a number.

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `degrees` | number |

**Returns:** _number_

## Object literals

### KEY_CODE

### ▪ **KEY_CODE**: _object_

_Defined in [utilities.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L46)_

Numeric code of each key.

### 0

• **0**: _number_ = 48

_Defined in [utilities.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L61)_

### 1

• **1**: _number_ = 49

_Defined in [utilities.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L62)_

### 2

• **2**: _number_ = 50

_Defined in [utilities.ts:63](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L63)_

### 3

• **3**: _number_ = 51

_Defined in [utilities.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L64)_

### 4

• **4**: _number_ = 52

_Defined in [utilities.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L65)_

### 5

• **5**: _number_ = 53

_Defined in [utilities.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L66)_

### 6

• **6**: _number_ = 54

_Defined in [utilities.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L67)_

### 7

• **7**: _number_ = 55

_Defined in [utilities.ts:68](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L68)_

### 8

• **8**: _number_ = 56

_Defined in [utilities.ts:69](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L69)_

### 9

• **9**: _number_ = 57

_Defined in [utilities.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L70)_

### a

• **a**: _number_ = 65

_Defined in [utilities.ts:72](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L72)_

### b

• **b**: _number_ = 66

_Defined in [utilities.ts:73](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L73)_

### backspace

• **backspace**: _number_ = 8

_Defined in [utilities.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L48)_

### c

• **c**: _number_ = 67

_Defined in [utilities.ts:74](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L74)_

### d

• **d**: _number_ = 68

_Defined in [utilities.ts:75](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L75)_

### del

• **del**: _number_ = 46

_Defined in [utilities.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L59)_

### downArrow

• **downArrow**: _number_ = 40

_Defined in [utilities.ts:58](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L58)_

### e

• **e**: _number_ = 69

_Defined in [utilities.ts:76](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L76)_

### end

• **end**: _number_ = 35

_Defined in [utilities.ts:53](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L53)_

### enter

• **enter**: _number_ = 13

_Defined in [utilities.ts:50](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L50)_

### esc

• **esc**: _number_ = 27

_Defined in [utilities.ts:51](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L51)_

### f

• **f**: _number_ = 70

_Defined in [utilities.ts:77](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L77)_

### f1

• **f1**: _number_ = 112

_Defined in [utilities.ts:99](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L99)_

### f10

• **f10**: _number_ = 121

_Defined in [utilities.ts:108](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L108)_

### f11

• **f11**: _number_ = 122

_Defined in [utilities.ts:109](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L109)_

### f12

• **f12**: _number_ = 123

_Defined in [utilities.ts:110](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L110)_

### f2

• **f2**: _number_ = 113

_Defined in [utilities.ts:100](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L100)_

### f3

• **f3**: _number_ = 114

_Defined in [utilities.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L101)_

### f4

• **f4**: _number_ = 115

_Defined in [utilities.ts:102](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L102)_

### f5

• **f5**: _number_ = 116

_Defined in [utilities.ts:103](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L103)_

### f6

• **f6**: _number_ = 117

_Defined in [utilities.ts:104](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L104)_

### f7

• **f7**: _number_ = 118

_Defined in [utilities.ts:105](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L105)_

### f8

• **f8**: _number_ = 119

_Defined in [utilities.ts:106](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L106)_

### f9

• **f9**: _number_ = 120

_Defined in [utilities.ts:107](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L107)_

### g

• **g**: _number_ = 71

_Defined in [utilities.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L78)_

### h

• **h**: _number_ = 72

_Defined in [utilities.ts:79](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L79)_

### home

• **home**: _number_ = 36

_Defined in [utilities.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L54)_

### i

• **i**: _number_ = 73

_Defined in [utilities.ts:80](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L80)_

### j

• **j**: _number_ = 74

_Defined in [utilities.ts:81](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L81)_

### k

• **k**: _number_ = 75

_Defined in [utilities.ts:82](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L82)_

### l

• **l**: _number_ = 76

_Defined in [utilities.ts:83](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L83)_

### leftArrow

• **leftArrow**: _number_ = 37

_Defined in [utilities.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L55)_

### m

• **m**: _number_ = 77

_Defined in [utilities.ts:84](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L84)_

### n

• **n**: _number_ = 78

_Defined in [utilities.ts:85](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L85)_

### o

• **o**: _number_ = 79

_Defined in [utilities.ts:86](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L86)_

### p

• **p**: _number_ = 80

_Defined in [utilities.ts:87](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L87)_

### q

• **q**: _number_ = 81

_Defined in [utilities.ts:88](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L88)_

### r

• **r**: _number_ = 82

_Defined in [utilities.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L89)_

### rightArrow

• **rightArrow**: _number_ = 39

_Defined in [utilities.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L57)_

### s

• **s**: _number_ = 83

_Defined in [utilities.ts:90](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L90)_

### space

• **space**: _number_ = 32

_Defined in [utilities.ts:52](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L52)_

### t

• **t**: _number_ = 84

_Defined in [utilities.ts:91](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L91)_

### tab

• **tab**: _number_ = 9

_Defined in [utilities.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L49)_

### u

• **u**: _number_ = 85

_Defined in [utilities.ts:92](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L92)_

### upArrow

• **upArrow**: _number_ = 38

_Defined in [utilities.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L56)_

### v

• **v**: _number_ = 86

_Defined in [utilities.ts:93](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L93)_

### w

• **w**: _number_ = 87

_Defined in [utilities.ts:94](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L94)_

### x

• **x**: _number_ = 88

_Defined in [utilities.ts:95](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L95)_

### y

• **y**: _number_ = 89

_Defined in [utilities.ts:96](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L96)_

### z

• **z**: _number_ = 90

_Defined in [utilities.ts:97](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L97)_

---

### MOUSE_CODE

### ▪ **MOUSE_CODE**: _object_

_Defined in [utilities.ts:118](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L118)_

Numeric code of each mouse button.

### left

• **left**: _number_ = 0

_Defined in [utilities.ts:119](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L119)_

### middle

• **middle**: _number_ = 1

_Defined in [utilities.ts:120](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L120)_

### right

• **right**: _number_ = 2

_Defined in [utilities.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L121)_
