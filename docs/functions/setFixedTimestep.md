[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / setFixedTimestep

# Function: setFixedTimestep()

> **setFixedTimestep**(`seconds`): `void`

Defined in: [source/game.ts:377](https://github.com/noobiept/game_engine/blob/b8c8fe900b1340a274a9159c6f865702e6210cb0/source/game.ts#L377)

Run the game logic at a fixed rate: the game loop callbacks, the tweens, the logic of the elements and the collision
detection always get the same `deltaTime` (`seconds`), and run as many times as the time that passed calls for
(none on some animation frames, several on others). The drawing still happens on every animation frame (or at the
rate set with `setFps()`), between the last two steps, so the elements move smoothly on any display.

It makes the game's behavior the same whatever the display's refresh rate is (a timer, a jump or a step of a
movement is the same at 60Hz and 144Hz), and repeatable (the same input gives the same result). The drawing shows
the game one step late (at most `seconds`).

    Game.setFixedTimestep( 1 / 60 ); // the logic runs 60 times per second, whatever the display

- Elements moved to a new place at once (a respawn) should call `resetInterpolation()`, or they move there smoothly
  during the next step.
- Only the elements' position, rotation, scale and opacity are drawn between steps. Elements that draw themselves
  (a custom `drawElement()`) are drawn at their state in the last step, unless they use `_applyTransform()`.
- `Game.Keyboard`'s `wasPressed()` and `wasReleased()` last one step.

By default (`null`) the logic runs once per animation frame, with the time that passed as `deltaTime`.

## Parameters

### seconds

`number` \| `null`

The time of each step (a positive number), or `null` for a step per animation frame.

## Returns

`void`
