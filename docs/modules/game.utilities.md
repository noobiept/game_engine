[Game Engine](../README.md) › [Game](game.md) › [Utilities](game.utilities.md)

# Module: Utilities

Random collection of utilities functions/classes.

## Index

### Classes

* [Timeout](../classes/game.utilities.timeout.md)
* [Timer](../classes/game.utilities.timer.md)

### Functions

* [calculateAngle](game.utilities.md#calculateangle)
* [calculateDistance](game.utilities.md#calculatedistance)
* [createEnum](game.utilities.md#createenum)
* [deepClone](game.utilities.md#deepclone)
* [getObject](game.utilities.md#getobject)
* [getRandomFloat](game.utilities.md#getrandomfloat)
* [getRandomInt](game.utilities.md#getrandomint)
* [getSeveralRandomInts](game.utilities.md#getseveralrandomints)
* [inheritPrototype](game.utilities.md#inheritprototype)
* [isArray](game.utilities.md#isarray)
* [isBoolean](game.utilities.md#isboolean)
* [isFunction](game.utilities.md#isfunction)
* [isInteger](game.utilities.md#isinteger)
* [isNumber](game.utilities.md#isnumber)
* [isString](game.utilities.md#isstring)
* [numberOfDigits](game.utilities.md#numberofdigits)
* [round](game.utilities.md#round)
* [saveObject](game.utilities.md#saveobject)
* [shuffle](game.utilities.md#shuffle)
* [timeToString](game.utilities.md#timetostring)
* [toDegrees](game.utilities.md#todegrees)
* [toRadians](game.utilities.md#toradians)

### Object literals

* [KEY_CODE](game.utilities.md#key_code)
* [MOUSE_CODE](game.utilities.md#mouse_code)

## Functions

###  calculateAngle

▸ **calculateAngle**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): *number*

*Defined in [utilities.ts:848](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L848)*

Returns the angle between 2 points in radians.
Positive in clockwise direction.

Throws an `Error` exception if:
- any of the arguments isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`aX` | number |
`aY` | number |
`bX` | number |
`bY` | number |

**Returns:** *number*

___

###  calculateDistance

▸ **calculateDistance**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): *number*

*Defined in [utilities.ts:873](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L873)*

Distance between 2 points.

Throws an `Error` exception if:
- any of the arguments isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`aX` | number |
`aY` | number |
`bX` | number |
`bY` | number |

**Returns:** *number*

___

###  createEnum

▸ **createEnum**(`values`: string[], `start?`: number): *object*

*Defined in [utilities.ts:360](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L360)*

Enum - A way to associate a string name to a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | string[] | The `enum` names. Each name will have an associated number. |
`start?` | number | Starting number for the first name. The number is incremented by one for the next name.  |

**Returns:** *object*

___

###  deepClone

▸ **deepClone**(`obj`: any): *any*

*Defined in [utilities.ts:348](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L348)*

Returns a deep clone/copy of the object.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

###  getObject

▸ **getObject**(`key`: string): *any*

*Defined in [utilities.ts:134](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L134)*

Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.

Throws an `Error` exception if:
- `key` is not a string.
- `key` wasn't found.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

###  getRandomFloat

▸ **getRandomFloat**(`min`: number, `max`: number): *number*

*Defined in [utilities.ts:229](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L229)*

Returns a random float number between `min` and `max` (inclusive).

Throws an `Error` exception if:
- either `min` or `max` is not a `number`.
- the minimum value is bigger than the maximum.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  getRandomInt

▸ **getRandomInt**(`min`: number, `max`: number): *number*

*Defined in [utilities.ts:249](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L249)*

Returns a random integer number between `min` and `max` (inclusive).

Throws an `Error` exception if:
- `min` or `max` isn't an integer.
- the minimum value is bigger than the maximum.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  getSeveralRandomInts

▸ **getSeveralRandomInts**(`min`: number, `max`: number, `howMany`: number): *number[]*

*Defined in [utilities.ts:270](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L270)*

Returns several different random integers, in the range between `min` and `max` (inclusive).

Throws an Error exception if:
- `min`, `max` or `howMany` isn't an integer.
- the minimum value is bigger than the maximum.
- the range is less than the number of integers required.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |
`howMany` | number |

**Returns:** *number[]*

___

###  inheritPrototype

▸ **inheritPrototype**(`derivedClass`: Function, `baseClass`: Function): *void*

*Defined in [utilities.ts:394](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L394)*

Used for `class` inheritance (search for parasitic combination inheritance).

**Parameters:**

Name | Type |
------ | ------ |
`derivedClass` | Function |
`baseClass` | Function |

**Returns:** *void*

___

###  isArray

▸ **isArray**(`element`: any): *boolean*

*Defined in [utilities.ts:169](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is an array or not.

___

###  isBoolean

▸ **isBoolean**(`element`: any): *boolean*

*Defined in [utilities.ts:178](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a boolean.

___

###  isFunction

▸ **isFunction**(`element`: any): *boolean*

*Defined in [utilities.ts:187](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a function.

___

###  isInteger

▸ **isInteger**(`value`: any): *boolean*

*Defined in [utilities.ts:196](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

If it is an integer.

___

###  isNumber

▸ **isNumber**(`element`: any): *boolean*

*Defined in [utilities.ts:205](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a number.

___

###  isString

▸ **isString**(`element`: any): *boolean*

*Defined in [utilities.ts:214](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a string.

___

###  numberOfDigits

▸ **numberOfDigits**(`theNumber`: number): *number*

*Defined in [utilities.ts:304](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L304)*

Returns the number of digits in a number.
It doesn't consider the minus signal, nor the dot (in floats) as a digit.

Throws an `Error` exception if:
- the argument is not a number.

**Parameters:**

Name | Type |
------ | ------ |
`theNumber` | number |

**Returns:** *number*

___

###  round

▸ **round**(`num`: number, `dec`: number): *number*

*Defined in [utilities.ts:330](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L330)*

Rounds a number to a specified decimal case.

Throws an `Error` exception if:
- `num` isn't a number.
- `dec` isn't an integer.
- `dec` is less than 0.

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |
`dec` | number |

**Returns:** *number*

___

###  saveObject

▸ **saveObject**(`key`: string, `value`: any): *void*

*Defined in [utilities.ts:153](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L153)*

Saves in the `localStorage` a json string representation of the `value`.

Throws an `Error` exception if:
- `key` is not a `string`.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  shuffle

▸ **shuffle**(`array`: any[]): *any[]*

*Defined in [utilities.ts:13](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L13)*

Shuffle an array.

**Parameters:**

Name | Type |
------ | ------ |
`array` | any[] |

**Returns:** *any[]*

___

###  timeToString

▸ **timeToString**(`dateMilliseconds`: number, `totalUnits`: number): *string*

*Defined in [utilities.ts:419](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L419)*

Converts a time (in milliseconds) to a string (with the number of days/hours...).

The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `totalUnits` of 2)).

The units available are: day/hour/minute/second.

Throws an `Error` exception if:
- the `dateMilliseconds` argument isn't a number.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dateMilliseconds` | number | - |
`totalUnits` | number | 2 |

**Returns:** *string*

___

###  toDegrees

▸ **toDegrees**(`radians`: number): *number*

*Defined in [utilities.ts:896](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L896)*

Converts a number in `radians` to `degrees` and returns it.

Throws an `Error` exception if:
- the argument isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

###  toRadians

▸ **toRadians**(`degrees`: number): *number*

*Defined in [utilities.ts:913](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L913)*

Converts a number in `degrees` to `radians` and returns it.

Throws an `Error` exception if:
- the argument isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

## Object literals

###  KEY_CODE

### ▪ **KEY_CODE**: *object*

*Defined in [utilities.ts:46](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L46)*

Numeric code of each key.

###  0

• **0**: *number* = 48

*Defined in [utilities.ts:61](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L61)*

###  1

• **1**: *number* = 49

*Defined in [utilities.ts:62](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L62)*

###  2

• **2**: *number* = 50

*Defined in [utilities.ts:63](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L63)*

###  3

• **3**: *number* = 51

*Defined in [utilities.ts:64](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L64)*

###  4

• **4**: *number* = 52

*Defined in [utilities.ts:65](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L65)*

###  5

• **5**: *number* = 53

*Defined in [utilities.ts:66](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L66)*

###  6

• **6**: *number* = 54

*Defined in [utilities.ts:67](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L67)*

###  7

• **7**: *number* = 55

*Defined in [utilities.ts:68](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L68)*

###  8

• **8**: *number* = 56

*Defined in [utilities.ts:69](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L69)*

###  9

• **9**: *number* = 57

*Defined in [utilities.ts:70](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L70)*

###  a

• **a**: *number* = 65

*Defined in [utilities.ts:72](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L72)*

###  b

• **b**: *number* = 66

*Defined in [utilities.ts:73](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L73)*

###  backspace

• **backspace**: *number* = 8

*Defined in [utilities.ts:48](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L48)*

###  c

• **c**: *number* = 67

*Defined in [utilities.ts:74](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L74)*

###  d

• **d**: *number* = 68

*Defined in [utilities.ts:75](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L75)*

###  del

• **del**: *number* = 46

*Defined in [utilities.ts:59](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L59)*

###  downArrow

• **downArrow**: *number* = 40

*Defined in [utilities.ts:58](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L58)*

###  e

• **e**: *number* = 69

*Defined in [utilities.ts:76](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L76)*

###  end

• **end**: *number* = 35

*Defined in [utilities.ts:53](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L53)*

###  enter

• **enter**: *number* = 13

*Defined in [utilities.ts:50](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L50)*

###  esc

• **esc**: *number* = 27

*Defined in [utilities.ts:51](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L51)*

###  f

• **f**: *number* = 70

*Defined in [utilities.ts:77](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L77)*

###  f1

• **f1**: *number* = 112

*Defined in [utilities.ts:99](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L99)*

###  f10

• **f10**: *number* = 121

*Defined in [utilities.ts:108](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L108)*

###  f11

• **f11**: *number* = 122

*Defined in [utilities.ts:109](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L109)*

###  f12

• **f12**: *number* = 123

*Defined in [utilities.ts:110](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L110)*

###  f2

• **f2**: *number* = 113

*Defined in [utilities.ts:100](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L100)*

###  f3

• **f3**: *number* = 114

*Defined in [utilities.ts:101](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L101)*

###  f4

• **f4**: *number* = 115

*Defined in [utilities.ts:102](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L102)*

###  f5

• **f5**: *number* = 116

*Defined in [utilities.ts:103](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L103)*

###  f6

• **f6**: *number* = 117

*Defined in [utilities.ts:104](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L104)*

###  f7

• **f7**: *number* = 118

*Defined in [utilities.ts:105](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L105)*

###  f8

• **f8**: *number* = 119

*Defined in [utilities.ts:106](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L106)*

###  f9

• **f9**: *number* = 120

*Defined in [utilities.ts:107](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L107)*

###  g

• **g**: *number* = 71

*Defined in [utilities.ts:78](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L78)*

###  h

• **h**: *number* = 72

*Defined in [utilities.ts:79](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L79)*

###  home

• **home**: *number* = 36

*Defined in [utilities.ts:54](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L54)*

###  i

• **i**: *number* = 73

*Defined in [utilities.ts:80](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L80)*

###  j

• **j**: *number* = 74

*Defined in [utilities.ts:81](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L81)*

###  k

• **k**: *number* = 75

*Defined in [utilities.ts:82](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L82)*

###  l

• **l**: *number* = 76

*Defined in [utilities.ts:83](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L83)*

###  leftArrow

• **leftArrow**: *number* = 37

*Defined in [utilities.ts:55](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L55)*

###  m

• **m**: *number* = 77

*Defined in [utilities.ts:84](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L84)*

###  n

• **n**: *number* = 78

*Defined in [utilities.ts:85](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L85)*

###  o

• **o**: *number* = 79

*Defined in [utilities.ts:86](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L86)*

###  p

• **p**: *number* = 80

*Defined in [utilities.ts:87](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L87)*

###  q

• **q**: *number* = 81

*Defined in [utilities.ts:88](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L88)*

###  r

• **r**: *number* = 82

*Defined in [utilities.ts:89](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L89)*

###  rightArrow

• **rightArrow**: *number* = 39

*Defined in [utilities.ts:57](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L57)*

###  s

• **s**: *number* = 83

*Defined in [utilities.ts:90](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L90)*

###  space

• **space**: *number* = 32

*Defined in [utilities.ts:52](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L52)*

###  t

• **t**: *number* = 84

*Defined in [utilities.ts:91](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L91)*

###  tab

• **tab**: *number* = 9

*Defined in [utilities.ts:49](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L49)*

###  u

• **u**: *number* = 85

*Defined in [utilities.ts:92](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L92)*

###  upArrow

• **upArrow**: *number* = 38

*Defined in [utilities.ts:56](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L56)*

###  v

• **v**: *number* = 86

*Defined in [utilities.ts:93](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L93)*

###  w

• **w**: *number* = 87

*Defined in [utilities.ts:94](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L94)*

###  x

• **x**: *number* = 88

*Defined in [utilities.ts:95](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L95)*

###  y

• **y**: *number* = 89

*Defined in [utilities.ts:96](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L96)*

###  z

• **z**: *number* = 90

*Defined in [utilities.ts:97](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L97)*

___

###  MOUSE_CODE

### ▪ **MOUSE_CODE**: *object*

*Defined in [utilities.ts:118](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L118)*

Numeric code of each mouse button.

###  left

• **left**: *number* = 0

*Defined in [utilities.ts:119](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L119)*

###  middle

• **middle**: *number* = 1

*Defined in [utilities.ts:120](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L120)*

###  right

• **right**: *number* = 2

*Defined in [utilities.ts:121](https://github.com/noobiept/game_engine/blob/625c324/source/utilities.ts#L121)*
