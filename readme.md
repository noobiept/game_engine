A 2d game engine, for simple browser games using the html canvas.


Usage
=====

Link the *game_engine.js* file.

You can optionally use the `style.css` for some basic styling, but its not necessary for the engine to work.
Just something to get you started, and then later on you can use your own styling.

All the css classes/ids from the engine start with the string `Game-`, so its easy to avoid conflicts (for example, `.Game-Container`).


Documentation
=============

Is available [in here](docs/README.md).


Build
=====

* `npm install` - Install the dependencies.
* `npm run build` - Development build available in the `/build/output/` directory.
* `npm run docs` - Build the documentation, in the `/docs/` directory.
* `npm run release` - Build the release version in the `/release/<version>/` directory.


Examples
========

To try out the examples, start a local server at the root path (otherwise the preloading of assets won't work), then go to the `examples` directory.
