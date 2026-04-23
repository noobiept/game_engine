import { Game } from "../shared";

export class Square extends Game.Container {
    static SIZE = 30;

    static VALUE = Game.Utilities.createEnum(
        [
            "mine",
            "blank",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
        ],
        -1,
    );

    static STATE = {
        hidden: 0,
        revealed: 1,
        question_mark: 2,
        mine_flag: 3,
    };
    value: number;
    state: number;
    background: Game.Bitmap;
    front: Game.Bitmap;

    constructor(args: Game.ContainerArgs = {}) {
        super(args);

        this.value = Square.VALUE.blank as number;
        this.state = Square.STATE.hidden;

        var hidden = Game.Preload.get("hidden");

        this.background = new Game.Bitmap({
            image: hidden,
        });
        this.front = new Game.Bitmap({
            image: hidden, // will be changed later
        });
        this.front.visible = false;

        this.addChild(this.background, this.front);
    }

    setState(state: number) {
        if (this.state === state) {
            return;
        }

        if (state === Square.STATE.hidden) {
            this.background.image = Game.Preload.get("hidden");
            this.front.visible = false;
        } else if (state === Square.STATE.revealed) {
            this.background.image = Game.Preload.get(
                Square.VALUE[this.value] as string,
            );
            this.front.visible = false;
        } else if (state === Square.STATE.question_mark) {
            this.background.image = Game.Preload.get("hidden");
            this.front.image = Game.Preload.get("question_mark");
            this.front.visible = true;
        } else if (state === Square.STATE.mine_flag) {
            this.background.image = Game.Preload.get("hidden");
            this.front.image = Game.Preload.get("mine_flag");
            this.front.visible = true;
        } else {
            throw new Error("Wrong state argument.");
        }

        this.state = state;
    }

    setMouseOver(yesNo: boolean) {
        if (yesNo === true) {
            this.background.image = Game.Preload.get("hidden_mouse_over");
        } else {
            this.background.image = Game.Preload.get("hidden");
        }
    }
}
