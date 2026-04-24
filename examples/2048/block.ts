import { Game } from "../shared";

interface BlockArgs extends Game.ContainerArgs {
    value: number;
}

export class Block extends Game.Container {
    static size = 70;
    static fontSize = 30;
    static colors: Record<number, string> = {
        2: "rgb(243,243,241)",
        4: "rgb(192,243,241)",
        8: "rgb(243,177,241)",
        16: "rgb(243,163,138)",
        32: "rgb(164,170,118)",
        64: "rgb(123,181,230)",
        128: "rgb(197,255,183)",
        256: "rgb(241,113,153)",
        512: "rgb(255,243,191)",
        1024: "rgb(243,150,64)",
        2048: "rgb(116,108,255)",
    };
    value: number;
    background_element: Game.Rectangle;
    value_element: Game.Text;

    constructor(args: BlockArgs) {
        super(args);

        const background = new Game.Rectangle({
            width: Block.size,
            height: Block.size,
            color: "white",
        });
        const value = new Game.Text({
            fontSize: Block.fontSize,
            textAlign: "center",
            textBaseline: "middle",
        });

        this.addChild(background, value);

        this.value = args.value;
        this.background_element = background;
        this.value_element = value;

        this.setValue(this.value);
    }

    setValue(value: number) {
        this.value = value;

        const valueStr = value.toString();
        this.value_element.text = valueStr;
        this.background_element.color = Block.colors[value];
    }
}
