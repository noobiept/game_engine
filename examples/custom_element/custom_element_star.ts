import { Game } from "../shared";

interface StarArgs extends Omit<Game.CircleArgs, "color" | "radius"> {
    fillColor: string;
    strokeColor: string;
    outerRadius: number;
    innerRadius: number;
    spikes: number;
}

export class Star extends Game.Circle {
    fill_color: string;
    stroke_color: string;
    outer_radius: number;
    inner_radius: number;
    spikes: number;

    constructor(args: StarArgs) {
        super({
            ...args,
            color: args.fillColor,
            radius: args.outerRadius,
        });

        this.fill_color = args.fillColor;
        this.stroke_color = args.strokeColor;
        this.outer_radius = args.outerRadius;
        this.inner_radius = args.innerRadius;
        this.spikes = args.spikes;
    }

    drawElement(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha *= this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        var step = Math.PI / this.spikes;
        var rotation = -Math.PI / 2;

        ctx.beginPath();
        ctx.moveTo(0, -this.outer_radius);

        var x, y;

        for (var a = 0; a < this.spikes; a++) {
            x = Math.cos(rotation) * this.outer_radius;
            y = Math.sin(rotation) * this.outer_radius;

            ctx.lineTo(x, y);

            rotation += step;

            x = Math.cos(rotation) * this.inner_radius;
            y = Math.sin(rotation) * this.inner_radius;

            ctx.lineTo(x, y);

            rotation += step;
        }

        ctx.closePath();

        ctx.lineWidth = 2;
        ctx.strokeStyle = this.stroke_color;
        ctx.stroke();
        ctx.fillStyle = this.fill_color;
        ctx.fill();

        ctx.restore();
    }

    clone() {
        return new Star({
            fillColor: this.fill_color,
            strokeColor: this.stroke_color,
            outerRadius: this.outer_radius,
            innerRadius: this.inner_radius,
            spikes: this.spikes,
        });
    }
}
