import { Bitmap, BitmapArgs } from "./bitmap";
import { hasReached, timePast } from "./time";

/**
 * Keep a position within `0` and `size` (going past one end continues from the other, keeping the remainder).
 */
function wrap(position: number, size: number) {
    if (!(size > 0)) {
        return 0;
    }

    return ((position % size) + size) % size;
}

export interface ScrollingBitmapArgs extends BitmapArgs {
    direction: ScrollingBitmapArgs.Direction;
    step: number;
    interval?: number;
}

export namespace ScrollingBitmapArgs {
    export enum Direction {
        left,
        right,
        top,
        bottom,
    }
}

/**
 * Basic Usage:
 *
 *     const image = new Game.ScrollingBitmap({
 *             image: Game.Preload.requireImage( 'imageId' ),
 *             direction: Game.ScrollingBitmapArgs.Direction.left,
 *             step: 1,
 *             interval: 0.2
 *         });
 *     Game.addElement( image );
 *
 * Examples -- `clone`, `parallax_scrolling`
 */
export class ScrollingBitmap extends Bitmap {
    protected _count: number; // interval counter
    protected _interval = 0; // time between the scroll movement
    protected _step: number; // how many pixels it moves per scroll movement
    protected _ref_position: number; // the current image division point position
    protected _direction = ScrollingBitmapArgs.Direction.left; // the scrolling direction
    protected _scroll: () => void = this.scroll_left;

    constructor(args: ScrollingBitmapArgs) {
        super(args);

        this._count = 0;
        this._ref_position = 0;
        this._step = args.step;

        this.setDirection(args.direction);

        // scroll the image automatically at the given interval
        if (typeof args.interval !== "undefined") {
            this.setInterval(args.interval);
        }
    }

    /**
     * Set the direction of the scrolling.
     */
    setDirection(direction: ScrollingBitmapArgs.Direction) {
        this._direction = direction;

        switch (direction) {
            case ScrollingBitmapArgs.Direction.left:
                this._scroll = this.scroll_left;
                this.drawElement = this._draw_horizontal;
                break;

            case ScrollingBitmapArgs.Direction.right:
                this._scroll = this.scroll_right;
                this.drawElement = this._draw_horizontal;
                break;

            case ScrollingBitmapArgs.Direction.top:
                this._scroll = this.scroll_top;
                this.drawElement = this._draw_vertical;
                break;

            case ScrollingBitmapArgs.Direction.bottom:
                this._scroll = this.scroll_bottom;
                this.drawElement = this._draw_vertical;
                break;
        }
    }

    /**
     * Change the step of the animation (how much it scrolls per update).
     */
    setStep(step: number) {
        this._step = step;
    }

    /**
     * Set an interval between the scroll movements.
     */
    setInterval(interval: number) {
        this._count = 0;
        this._interval = interval;
        this._has_logic = true;
    }

    /**
     * Stop the animation.
     */
    clearInterval() {
        this._has_logic = false;
    }

    /**
     * Scroll to the left.
     */
    scroll_left() {
        this._ref_position = wrap(this._ref_position + this._step, this._width);
    }

    /**
     * Scroll to the right.
     */
    scroll_right() {
        this._ref_position = wrap(this._ref_position - this._step, this._width);
    }

    /**
     * Scroll to the top.
     */
    scroll_top() {
        this._ref_position = wrap(
            this._ref_position + this._step,
            this._height,
        );
    }

    /**
     * Scroll to the bottom.
     */
    scroll_bottom() {
        this._ref_position = wrap(
            this._ref_position - this._step,
            this._height,
        );
    }

    /**
     * Used for the horizontal movement (left or right).
     */
    protected _draw_horizontal(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        this._applyTransform(ctx);

        const firstWidth = this._width - this._ref_position;
        const secondWidth = this._ref_position;

        if (firstWidth > 0) {
            ctx.drawImage(
                this._image,
                this._source_x + this._ref_position,
                this._source_y,
                firstWidth,
                this._height,
                -this._half_width,
                -this._half_height,
                this._width - this._ref_position,
                this._height,
            );
        }

        if (secondWidth > 0) {
            ctx.drawImage(
                this._image,
                this._source_x,
                this._source_y,
                secondWidth,
                this._height,
                this._half_width - this._ref_position,
                -this._half_height,
                this._ref_position,
                this._height,
            );
        }

        ctx.restore();
    }

    /**
     * Used for the vertical movement (top or bottom).
     */
    protected _draw_vertical(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        this._applyTransform(ctx);

        const firstHeight = this._height - this._ref_position;
        const secondHeight = this._ref_position;

        if (firstHeight > 0) {
            ctx.drawImage(
                this._image,
                this._source_x,
                this._source_y + this._ref_position,
                this._width,
                firstHeight,
                -this._half_width,
                -this._half_height,
                this._width,
                this._height - this._ref_position,
            );
        }

        if (secondHeight > 0) {
            ctx.drawImage(
                this._image,
                this._source_x,
                this._source_y,
                this._width,
                secondHeight,
                -this._half_width,
                this._half_height - this._ref_position,
                this._width,
                this._ref_position,
            );
        }

        ctx.restore();
    }

    /**
     * Scroll the image at the given interval.
     */
    override logic(deltaTime: number) {
        this._count += deltaTime;

        if (hasReached(this._count, this._interval)) {
            // keep the time past the interval (so it doesn't drift), but scroll at most once per update
            const past = Math.max(this._count - this._interval, 0);

            this._count =
                this._interval > 0 ? timePast(past, this._interval) : 0;
            this._scroll();
        }
    }

    /**
     * Get a copy of this object.
     */
    override clone() {
        const element = new ScrollingBitmap({
            x: this.x,
            y: this.y,
            image: this._image,
            direction: this._direction,
            step: this._step,
            interval: this._interval,
        });
        this._copyPropertiesTo(element);
        element._count = this._count;
        element._ref_position = this._ref_position;

        return element;
    }
}
