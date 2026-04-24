import { Game, runOnLoad } from "../shared";
import { Creep } from "./creep";
import { GridPosition } from "./state";
import { setTowerDefenseState } from "./state";
import { Terrain } from "./terrain";
import { Tower } from "./tower";

runOnLoad(function () {
    Main.init();
});

interface MainState {
    SQUARE_SIZE: number;
    init: () => void;
    start: () => void;
    getNextPosition: (column: number, line: number) => GridPosition;
    restart: () => void;
    setMoney: (money: number) => void;
    addMoney: (money: number) => void;
    getMoney: () => number;
    setLife: (life: number) => void;
    addLife: (life: number) => void;
    getLife: () => number;
    gameOver: () => void;
}

export const Main: MainState = {
    SQUARE_SIZE: 25,
    init: function () {},
    start: function () {},
    getNextPosition: function () {
        return { column: 0, line: 0 };
    },
    restart: function () {},
    setMoney: function () {},
    addMoney: function () {},
    getMoney: function () {
        return 0;
    },
    setLife: function () {},
    addLife: function () {},
    getLife: function () {
        return 0;
    },
    gameOver: function () {},
};
const MAP_INFO = {
    columns: 16,
    lines: 16,
    positionType: {
        passable: 1,
        blocked: 0,
    },
    start: [
        {
            column: 1,
            line: 0,
        },
        {
            column: 15,
            line: 3,
        },
    ],
    end: {
        column: 13,
        line: 7,
    },
    // '1' means its a passable position
    // '0' means its not passable
    map: [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
};

let PATH; // has the path that the creeps need to do to reach the destination
let MENU_MONEY; // reference to the menu element that shows/holds the current money value
let MENU_LIFE; // reference to the menu element that shows/holds the current life value
let MENU_RESTART;
let TOWER_GRID; // keeps track of where the towers are added
let CREEP_HEALTH; // health of the next creeps to be added (it changes overtime)

// top level container for all the elements
let TERRAINS_CONTAINER;
let BULLETS_CONTAINER;
let CREEPS_CONTAINER;
let TOWERS_CONTAINER;

const CATEGORIES = {
    tower: 1,
    creep: 2,
};

Main.init = function () {
    Game.init(document.body, 400, 400);

    TERRAINS_CONTAINER = new Game.Container();
    BULLETS_CONTAINER = new Game.Container();
    CREEPS_CONTAINER = new Game.Container();
    TOWERS_CONTAINER = new Game.Container();

    // the order the containers are added, sets the stacking order of the elements (what elements are drawn first, and therefore are below the others)
    Game.addElement(TERRAINS_CONTAINER);
    Game.addElement(TOWERS_CONTAINER);
    Game.addElement(CREEPS_CONTAINER);
    Game.addElement(BULLETS_CONTAINER);

    // initialize the menu
    const menu = new Game.Html.HtmlContainer();
    const life = new Game.Html.Value({
        value: 0,
        preText: "Lives:",
    });
    const money = new Game.Html.Value({
        value: 0,
        preText: "Money:",
    });
    const restart = new Game.Html.Button({
        value: "Restart",
        callback: Main.restart,
    });

    menu.addChild(life, money, restart);
    document.body.appendChild(menu.container);

    MENU_MONEY = money;
    MENU_LIFE = life;
    MENU_RESTART = restart;

    // start the game
    Main.start();
};

Main.start = function () {
    let column;
    let line;

    // starting values
    Main.setMoney(200);
    Main.setLife(10);
    CREEP_HEALTH = 100;

    TOWER_GRID = new Game.Grid({
        columns: MAP_INFO.columns,
        lines: MAP_INFO.lines,
    });

    // add the terrain
    // and initialize the tower's grid
    for (line = 0; line < MAP_INFO.lines; line++) {
        for (column = 0; column < MAP_INFO.columns; column++) {
            const value = MAP_INFO.map[line][column];

            // add the terrain
            const terrain = new Terrain({
                x: Main.SQUARE_SIZE * column + Main.SQUARE_SIZE / 2,
                y: Main.SQUARE_SIZE * line + Main.SQUARE_SIZE / 2,
            });
            terrain.setPassable(value);

            TERRAINS_CONTAINER.addChild(terrain);
        }
    }

    // calculate the path
    PATH = Game.PathFinding.breadthFirstSearch(
        MAP_INFO.map,
        MAP_INFO.end,
        MAP_INFO.positionType,
    );

    // on click, add a tower (if it is on a valid position)
    Game.getCanvasContainer().addEventListener("click", addTower);

    // add some creeps every second
    Game.addToGameLoop(addCreeps, 1);
    Game.addToGameLoop(tick, 0);
};

Main.getNextPosition = function (column, line) {
    return PATH[line][column];
};

function clear() {
    clearListeners();
    clearElements();
}

function clearElements() {
    TERRAINS_CONTAINER.removeAllChildren();
    BULLETS_CONTAINER.removeAllChildren();
    CREEPS_CONTAINER.removeAllChildren();
    TOWERS_CONTAINER.removeAllChildren();
}

function clearListeners() {
    Game.getCanvasContainer().removeEventListener("click", addTower);
    Game.removeFromGameLoop(addCreeps);
    Game.removeFromGameLoop(tick);
}

Main.restart = function () {
    clear();
    Main.start();
};

/**
 * Add a creep at every spawn position.
 */
function addCreeps() {
    // add a creep in all the start/spawn positions
    for (let a = 0; a < MAP_INFO.start.length; a++) {
        const position = MAP_INFO.start[a];

        const creep = new Creep({
            column: position.column,
            line: position.line,
            health: CREEP_HEALTH,
            category: CATEGORIES.creep,
        });
        CREEPS_CONTAINER.addChild(creep);
    }

    // increase the creeps health
    CREEP_HEALTH += 15;
}

/**
 * Add a tower on click event.
 */
function addTower(event) {
    // check if we have the necessary money
    if (Main.getMoney() < Tower.COST) {
        return;
    }

    const canvasRect = Game.getCanvas()
        .getHtmlCanvasElement()
        .getBoundingClientRect();

    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;

    const column = Math.floor(x / Main.SQUARE_SIZE);
    const line = Math.floor(y / Main.SQUARE_SIZE);

    // check if the position is valid for a tower
    if (
        column >= 0 &&
        column < MAP_INFO.columns &&
        line >= 0 &&
        line < MAP_INFO.lines &&
        TOWER_GRID.isEmpty(column, line) && // check if there isn't a tower already there
        MAP_INFO.map[line][column] === 0
    ) // check if this is a position not in the creeps path
    {
        const tower = new Tower({
            column: column,
            line: line,
            bulletContainer: BULLETS_CONTAINER,
            category: CATEGORIES.tower,
            collidesWith: CATEGORIES.creep,
        });
        TOWERS_CONTAINER.addChild(tower);

        TOWER_GRID.add(tower, column, line);
    }
}

Main.setMoney = function (money) {
    MENU_MONEY.setValue(money);
};

Main.addMoney = function (money) {
    const current = MENU_MONEY.getValue();

    MENU_MONEY.setValue(current + money);
};

Main.getMoney = function () {
    return MENU_MONEY.getValue();
};

Main.setLife = function (life) {
    MENU_LIFE.setValue(life);
};

Main.addLife = function (life) {
    const current = MENU_LIFE.getValue();

    MENU_LIFE.setValue(current + life);
};

Main.getLife = function () {
    return MENU_LIFE.getValue();
};

Main.gameOver = function () {
    const life = Main.getLife();

    if (life <= 0) {
        // stop the game
        clearListeners();
        Game.stopGameLoop();

        MENU_RESTART.setActive(false);

        // show a message telling the game is over
        const container = Game.getCanvasContainer();
        const button = new Game.Html.Button({
            value: "Ok",
            callback: function (button) {
                message.clear();
                clearElements();
                Game.startGameLoop();
                MENU_RESTART.setActive(true);
                Main.start();
            },
        });
        const message = new Game.Message({
            body: "Game Over!",
            container: container,
            background: true,
            buttons: button,
        });
    }
};

function tick() {
    const towers = TOWERS_CONTAINER.getAllChildren();
    const creeps = CREEPS_CONTAINER.getAllChildren();

    // towers will attack a creep that is within its range
    for (let a = 0; a < towers.length; a++) {
        const tower = towers[a];
        const weapon = tower.weapon;

        if (weapon.isReady()) {
            for (let b = 0; b < creeps.length; b++) {
                const creep = creeps[b];

                // fire 1 bullet if the creep is within the tower's range
                if (
                    Game.CollisionDetection.circleCircle(
                        tower.x,
                        tower.y,
                        tower.range,
                        creep.x,
                        creep.y,
                        creep.getWidth() / 2,
                    )
                ) {
                    weapon.fire(creep);
                    break;
                }
            }
        }
    }
}

setTowerDefenseState({
    getNextPosition: Main.getNextPosition,
    addMoney: Main.addMoney,
    addLife: Main.addLife,
    gameOver: Main.gameOver,
});
