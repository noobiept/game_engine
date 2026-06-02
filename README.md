# @drk4/game-engine

[![npm version](https://img.shields.io/npm/v/@drk4/game-engine.svg)](https://www.npmjs.com/package/@drk4/game-engine)
[![license](https://img.shields.io/npm/l/@drk4/game-engine.svg)](license.txt)

A small TypeScript-first 2D game engine for browser games rendered with the HTML canvas. It provides the pieces most simple games need:

- **Canvas & game loop** — automatic canvas setup and a frame loop you can hook into.
- **Drawable elements** — rectangles, circles, text, bitmaps, and sprites.
- **Input & events** — mouse and event handling on any element.
- **Tweens** — animate element properties over time.
- **Assets & sound** — preload images, audio, JSON, and text, plus sound playback.
- **Sprite animation** — frame-based animation from sprite sheets.
- **Collision detection** — category-based collisions, with a spatial-partition mode for many elements.
- **HTML helpers** — lightweight, styled UI helpers like buttons, menus, and messages.

The full API reference is in [docs/README.md](docs/README.md), and runnable examples live in [examples/](examples/).

## Contents

- [Install](#install)
- [Getting started](#getting-started)
- [Loading assets](#loading-assets)
- [Sprites and animation](#sprites-and-animation)
- [Input and events](#input-and-events)
- [Tweens](#tweens)
- [Game loop](#game-loop)
- [Collision detection](#collision-detection)
- [Documentation](#documentation)
- [License](#license)

## Install

```sh
# with pnpm
pnpm add @drk4/game-engine

# with npm
npm install @drk4/game-engine
```

Import the engine from your app code:

```ts
import * as Game from "@drk4/game-engine";
```

You can also import the optional stylesheet:

```ts
import "@drk4/game-engine/style.css";
```

The stylesheet is exported by the package and maps to the bundled `dist/game_engine.css` file. It provides basic styling for the engine's HTML helpers. Every class and id defined by the engine starts with `Game-`, for example `.Game-Container`, so custom game styles can avoid conflicts easily.

## Getting started

`Game.init()` creates the canvas, attaches it to the page, and starts the game loop. After that, create elements and add them to the canvas with `Game.addElement()`.

This example creates a movable player, keeps it inside the canvas, updates text each frame, and uses a tween when the player is clicked.

```ts
import * as Game from "@drk4/game-engine";
import "@drk4/game-engine/style.css";

const WIDTH = 480;
const HEIGHT = 320;
const SPEED = 180; // Player movement, in pixels per second.

Game.init({ container: document.body, width: WIDTH, height: HEIGHT });

const keys = new Set<string>();

const player = new Game.Rectangle({
    x: WIDTH / 2, // x/y is the center of the element.
    y: HEIGHT / 2,
    width: 32,
    height: 32,
    color: "seagreen",
});

const label = new Game.Text({
    x: 16,
    y: 16,
    text: "Move with arrow keys",
    fontSize: 18,
});

Game.addElement([player, label]);

window.addEventListener("keydown", function (event) {
    keys.add(event.key);
});

window.addEventListener("keyup", function (event) {
    keys.delete(event.key);
});

player.addEventListener("click", function () {
    new Game.Tween(player, { override: true })
        .to({ rotation: player.rotation + Math.PI * 2 }, 0.4)
        .start();
});

Game.addToGameLoop(function (deltaTime) {
    let x = 0;
    let y = 0;

    if (keys.has("ArrowLeft")) x -= 1;
    if (keys.has("ArrowRight")) x += 1;
    if (keys.has("ArrowUp")) y -= 1;
    if (keys.has("ArrowDown")) y += 1;

    if (x !== 0 || y !== 0) {
        const length = Math.hypot(x, y);
        const half = player.width / 2;

        // Move at a constant speed, kept inside the canvas bounds.
        player.x = clamp(player.x + (x / length) * SPEED * deltaTime, half, WIDTH - half);
        player.y = clamp(player.y + (y / length) * SPEED * deltaTime, half, HEIGHT - half);
    }

    label.text = `Position: ${Math.round(player.x)}, ${Math.round(player.y)}`;
});

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}
```

## Loading assets

Use `Preload` to load images, audio, JSON, and text files. With `saveGlobal: true`, the loaded files are stored globally and retrieved with `Game.Preload.get(id)`.

```ts
const preload = new Game.Preload({ saveGlobal: true });

preload.addEventListener("complete", function () {
    const ship = new Game.Bitmap({
        x: 200,
        y: 200,
        image: Game.Preload.get("ship"),
    });
    Game.addElement(ship);

    // Play looping background music at half volume.
    Game.Sound.play(Game.Preload.get("music"), { loop: true, volume: 0.5 });
});

preload.loadManifest(
    [
        { id: "ship", path: "ship.png" },
        { id: "music", path: "music.ogg" },
    ],
    "assets/", // Base path, prepended to every file.
);
```

## Sprites and animation

A `Sprite` animates frames from a sprite sheet. Pass `{ loop: false }` to play an animation once; it emits an `animationend` event when it reaches the last frame.

```ts
const explosion = new Game.Sprite({
    x: 200,
    y: 200,
    image: Game.Preload.get("explosion"),
    frameWidth: 40,
    frameHeight: 40,
    interval: 0.07, // Seconds between frames.
    animations: { boom: [0, 1, 2, 3, 4, 5] },
});

Game.addElement(explosion);

// Play once, then remove itself when finished.
explosion.addEventListener("animationend", function (data) {
    data.sprite.remove();
});
explosion.play("boom", { loop: false });
```

## Input and events

Add listeners to any element. The mouse events are `click`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, and `mousemove`.

```ts
const button = new Game.Rectangle({
    x: 200,
    y: 200,
    width: 80,
    height: 30,
    color: "steelblue",
});

Game.addElement(button);

button.addEventListener("click", function () {
    console.log("clicked!");
});
```

## Tweens

A `Tween` animates an element's properties over time. Durations are in seconds. Pass `{ override: true }` to cancel any tween already running on the target.

```ts
const tween = new Game.Tween(player, { override: true });

tween
    .to({ x: 350 }, 1) // Animate x to 350 over 1 second.
    .wait(0.5)
    .to({ y: 350 }, 1, Game.Tween.Ease.quadraticIn)
    .call(function () {
        console.log("done");
    });

tween.start();
```

## Game loop

Run your own logic on the loop with `Game.addToGameLoop()`. The callback receives `deltaTime`, the number of seconds since the last update. By default it runs every tick; pass a `delay` in seconds to run on an interval.

```ts
// Every tick: move at a constant speed regardless of frame rate.
Game.addToGameLoop(function (deltaTime) {
    player.x += 50 * deltaTime;
});

// Every 2 seconds.
Game.addToGameLoop(spawnEnemy, { delay: 2 });
```

## Collision detection

Give elements a `category` bit flag and the categories they should collide with through `collidesWith`. Colliding elements receive a `collision` event.

```ts
const PLAYER = 1; // 0b01
const ENEMY = 2; // 0b10

player.category = PLAYER;
player.collidesWith = ENEMY;

const enemy = new Game.Rectangle({
    x: 100,
    y: 100,
    width: 20,
    height: 20,
    color: "red",
    category: ENEMY,
    collidesWith: PLAYER,
});

Game.addElement(enemy);

player.addEventListener("collision", function (data) {
    console.log("player hit", data.collidedWith);
});
```

For a large number of elements, use the spatial-partition algorithm instead of the default algorithm, which checks every pair:

```ts
const collision = new Game.CollisionDetection.SpatialPartition({
    canvasWidth: 400,
    canvasHeight: 400,
    partitions: 10,
});

Game.init({ container: document.body, width: 400, height: 400, collision });
```

## Documentation

The full API reference is available in [docs/README.md](docs/README.md).

There are also many runnable examples in the [examples/](examples/) directory. Inside this repository, run `pnpm run dev` to browse them locally.

## License

[MIT](license.txt)
