import { Element, ElementArgs } from "./element";
import * as Utilities from "@drk4/utilities";
import * as Game from "./game";

export interface TextArgs extends ElementArgs {
    text?: string;
    fontFamily?: string;
    fontSize?: number;
    timeout?: number;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
    fill?: boolean;
    color?: string;
}

/**
 * Basic Usage:
 *
 *     var text = new Game.Text({
 *             x: 10,
 *             y: 20,
 *             text: 'Hi'
 *         });
 *     Game.addElement( text );
 *
 * Examples -- `2048`, `clone`, `collision_detection`, `game_loop_callbacks`, `preload`, `snake`
 */
export class Text extends Element {
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    fill: boolean; // fill or stroke text
    color: string;

    protected _text = "";
    protected _font_family = "monospace";
    protected _font_size = 20;
    protected _font = "20px monospace"; // font_family + font_size
    protected _timeout: number | undefined;
    protected _lines: string[] = [""];

    constructor(args: TextArgs) {
        if (typeof args === "undefined") {
            args = {};
        }

        if (typeof args.text === "undefined") {
            args.text = "";
        }

        if (typeof args.fontFamily === "undefined") {
            args.fontFamily = "monospace";
        }

        if (typeof args.fontSize === "undefined") {
            args.fontSize = 20;
        }

        if (typeof args.textAlign === "undefined") {
            args.textAlign = "start";
        }

        if (typeof args.textBaseline === "undefined") {
            args.textBaseline = "top";
        }

        if (typeof args.fill === "undefined") {
            args.fill = true;
        }

        if (typeof args.color === "undefined") {
            args.color = "black";
        }

        super(args);

        this._font_size = args.fontSize;
        this.text = args.text;
        this.font_family = args.fontFamily; // this calls the set method that updates ._font as well

        this.color = args.color;
        this.textAlign = args.textAlign;
        this.textBaseline = args.textBaseline;
        this.fill = args.fill;
        this._timeout = args.timeout;

        if (Utilities.isNumber(args.timeout) && args.timeout > 0) {
            const timeout = new Utilities.Timeout();

            timeout.start(() => {
                this.remove();
            }, args.timeout * 1000);
        }
    }

    /**
     * Draw this element.
     *
     * @param ctx The canvas rendering context.
     */
    drawElement(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha *= this.opacity;
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this._rotation);

        ctx.font = this._font;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;

        const length = this._lines.length;

        // draw each line
        for (let a = 0; a < length; a++) {
            const y = a * this.font_size;

            if (this.fill) {
                ctx.fillStyle = this.color;
                ctx.fillText(this._lines[a], 0, y);
            } else {
                ctx.strokeStyle = this.color;
                ctx.strokeText(this._lines[a], 0, y);
            }
        }

        ctx.restore();
    }

    /**
     * @param value Change the text to this.
     */
    set text(value: string) {
        this._text = value;
        this._lines = this._text.split("\n");

        const ctx = Game.getCanvas().getCanvasContext();

        let line = this._lines[0];
        let highestWidth = ctx.measureText(line).width;
        let width;
        const length = this._lines.length;

        for (let a = 1; a < length; a++) {
            line = this._lines[a];

            width = ctx.measureText(line).width;

            if (width > highestWidth) {
                highestWidth = width;
            }
        }

        this._width = highestWidth;
        this._height = this.font_size * length; // 'font_size' not quite the same thing as height, but there's no way to determine the height right now so..
        this._half_width = this._width / 2;
        this._half_height = this._height / 2;
    }

    /**
     * @return The current text.
     */
    get text() {
        return this._text;
    }

    /**
     * @param font Set a new font family.
     */
    set font_family(font: string) {
        this._font_family = font;
        this._font = this._font_size + "px " + font;
    }

    /**
     * @return Current font family.
     */
    get font_family() {
        return this._font_family;
    }

    /**
     * @param size New font size.
     */
    set font_size(size: number) {
        this._font_size = size;
        this._font = size + "px " + this._font_family;
    }

    /**
     * @return Current font size.
     */
    get font_size() {
        return this._font_size;
    }

    /**
     * @return New cloned text object.
     */
    clone() {
        const element = new Text({
            x: this.x,
            y: this.y,
            text: this._text,
            fontFamily: this._font_family,
            fontSize: this._font_size,
            timeout: this._timeout,
            textAlign: this.textAlign,
            textBaseline: this.textBaseline,
            fill: this.fill,
        });
        element.opacity = this.opacity;
        element.visible = this.visible;
        element.scaleX = this.scaleX;
        element.scaleY = this.scaleY;
        element._rotation = this._rotation;

        return element;
    }
}
