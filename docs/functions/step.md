[**Game Engine**](../README.md)

---

[Game Engine](../README.md) / step

# Function: step()

> **step**(`deltaTime`): `void`

Defined in: [source/game.ts:721](https://github.com/noobiept/game_engine/blob/296ae0b2ba439fb352330de988181a092a13ccd1/source/game.ts#L721)

Update the game once, by hand, while the game loop is stopped (`stopGameLoop()`): the game loop callbacks, the
tweens, the logic of the elements, the collision detection, and the drawing, like one update of the loop. For tests
that check the game's timing ("the lanes spawn at the same times at 30 and 144 updates per second"), or to run a
game step by step. The `deltaTime` isn't limited (unlike the loop's, see `setMaxDeltaTime()`).

    Game.stopGameLoop();

    for ( let a = 0; a < 60; a++ ) {
        Game.step( 1 / 60 ); // one second at 60 updates per second
    }

## Parameters

### deltaTime

`number`

The time to update the game by, in seconds (a number `>= 0`).

## Returns

`void`
