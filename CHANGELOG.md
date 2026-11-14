# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Releases before `3.0.0` are not tracked here.

## [Unreleased]

### Changed

- **Breaking**: updated `@drk4/utilities` to v8. It is re-exported as
  `Utilities`, so its breaking changes reach `Utilities.*`: `Dialog` titles and
  bodies given as strings are set as plain text instead of HTML, a modal
  `Dialog` makes the page behind it `inert`, `Utilities.EventDispatcher` calls
  the listeners in the order they were added, `Utilities.Preload` dispatches
  `error` for HTTP error statuses and files that can't be parsed or decoded,
  and `pollUntil`'s `timeout` also limits the checks. See its
  [changelog](https://github.com/noobiept/utilities/blob/master/CHANGELOG.md).
  The engine's own `EventDispatcher` and `Preload` are unchanged.
- Releases are now published to npm from CI, with
  [provenance](https://docs.npmjs.com/generating-provenance-statements).
- Updated the runtimes (Node 26, pnpm 12) and the development dependencies to
  their latest versions (TypeScript stays on v6, since the tooling doesn't
  support v7 yet).

### Fixed

- `HighScore.init()` no longer throws when the saved scores aren't valid JSON;
  it starts with no scores instead.

## [3.0.2] - 2026-06-02

### Documentation

- Rewrote the README: clearer introduction with a feature list, npm and pnpm
  install instructions, the optional stylesheet import, a table of contents,
  and version/license badges.
- Expanded the getting-started example into a small playable demo — movement,
  bounds clamping, live text, and a click tween.
- Removed the outdated "Direct Browser Usage" and "Build" sections.

## [3.0.1] - 2026-05-31

### Fixed

- `async` functions can now be registered as event listeners
  (`addEventListener()`). They were previously rejected by the internal
  `isFunction` check.

### Documentation

- Expanded the README with usage examples — getting started, loading assets,
  sprites & animation, input, tweens, the game loop, and collision detection.
- Added and modernized the usage examples shown in the in-code API
  documentation.

## [3.0.0] - 2026-05-31

Enhancements to make the engine easier to use for CreateJS-style ports, plus a
pass of breaking API-consistency cleanups.

### Added

- **Sound**: `Sound.play()` now returns a `SoundInstance` that supports looping
  and per-instance volume, and can be controlled with `pause()`, `resume()`,
  `stop()`, the `loop`/`volume` setters, and a `playing` getter.
- **Sprite**: one-shot animations via `play(id, { loop: false })`, which stop on
  the last frame and dispatch an `animationend` event
  (`{ sprite, animationId }`).
- **Container** and **Canvas**: z-order control — `bringToFront()`,
  `sendToBack()`, and `setChildIndex()`.
- **Tween**: an `override` option (`new Tween(target, { override: true })`) that
  removes any existing tweens on the target before starting.
- **Element**: top-left bounds accessors — `left`, `top`, and `getBoundingBox()`
  (a non-rotated, top-left box).
- Game-loop callbacks added with `addToGameLoop()` now receive the loop's
  `deltaTime`.
- New examples: `sound`, `sprite_animation`, `z_order`, and `tween_override`.

### Changed

- **Breaking**: `Sound.play()` now returns a `SoundInstance | null` instead of
  the raw `AudioBufferSourceNode`.
- **Breaking**: `Sprite.play()`'s second parameter is now an options object
  (`{ loop?, reset? }`) instead of a positional `reset` boolean.
- **Breaking**: `Game.init()` now takes an options object —
  `init({ container, width, height, collision? })`.
- **Breaking**: `addToGameLoop()`'s second argument is now an options object —
  `addToGameLoop(callback, { delay?, interval? })`.
- **Breaking**: `Element.rotate()` now only accepts radians; use the new
  `rotateDegrees()` for degrees.
- **Breaking**: dimension accessors were consolidated — `width`/`height` are now
  get/set on `Element` and getters on `Canvas`; the
  `getWidth()`/`getHeight()`/`setWidth()`/`setHeight()` methods were removed
  (`setDimensions()` remains).
- **Breaking**: several public members were renamed to camelCase for
  consistency:
    - `Text`: `font_family`/`font_size` → `fontFamily`/`fontSize`
    - `Element`: `half_width`/`half_height` → `halfWidth`/`halfHeight`
    - `Canvas`: `events_enabled`/`update_on_loop` → `eventsEnabled`/`updateOnLoop`
    - `Preload`: `save_global` → `saveGlobal`; the `complete` event's
      `failed_ids`/`loaded_ids` → `failedIds`/`loadedIds`
    - `ElementGrid`: `square_size`/`ref_x`/`ref_y` → `squareSize`/`refX`/`refY`
    - `Weapon`: `fire_interval` → `fireInterval`
    - `Movement`: `movement_speed` → `movementSpeed`
- A suspended `AudioContext` is now resumed automatically when a sound starts,
  so audio becomes audible after the first user interaction.

[Unreleased]: https://github.com/noobiept/game_engine/compare/v3.0.2...HEAD
[3.0.2]: https://github.com/noobiept/game_engine/releases/tag/v3.0.2
[3.0.1]: https://github.com/noobiept/game_engine/releases/tag/v3.0.1
[3.0.0]: https://github.com/noobiept/game_engine/releases/tag/v3.0.0
