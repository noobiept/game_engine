A 2d game engine, for simple browser games using the html canvas.

# Install

```sh
pnpm add @drk4/game-engine
```

# Usage

```ts
import * as Game from "@drk4/game-engine";
import "@drk4/game-engine/style.css";
```

The CSS is optional, but it provides basic styling for the engine's HTML helpers.
All the CSS classes/ids from the engine start with the string `Game-`, so its easy to avoid conflicts (for example, `.Game-Container`).

# Direct Browser Usage

Link the _game_engine.js_ file.

You can optionally use the `style.css` for some basic styling, but its not necessary for the engine to work.
Just something to get you started, and then later on you can use your own styling.

# Documentation

Is available [in here](docs/README.md).

# Build

- `pnpm install` - Install the dependencies.
- `pnpm run dev` - Start the examples app with Vite.
- `pnpm run build` - Build the npm package files in `dist/`.
- `pnpm run docs` - Build the documentation in `docs/`.
