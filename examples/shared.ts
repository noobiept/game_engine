import * as Game from "../source/index";
import "../source/css/game_engine.css";

export { Game };

export function runOnLoad(callback: () => void) {
    if (document.readyState === "complete") {
        queueMicrotask(callback);
        return;
    }

    window.addEventListener("load", callback, { once: true });
}

/**
 * Convert a mouse event into a position relative to the (first) game canvas.
 * The engine only passes the raw event to click listeners, so examples that need
 * the click position recompute it the same way the canvas does internally.
 */
export function eventPosition(event: MouseEvent) {
    const rect = Game.getCanvas()
        .getHtmlCanvasElement()
        .getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

/**
 * Create a simple clickable button (a colored rectangle with a centered label) and add it to the canvas.
 * Returns the rectangle and the label, so the caller can update them later.
 */
export function makeButton(
    x: number,
    y: number,
    label: string,
    onClick: () => void,
) {
    const rectangle = new Game.Rectangle({
        x: x,
        y: y,
        width: 170,
        height: 36,
        color: "#3a6ea5",
    });
    const text = new Game.Text({
        x: x,
        y: y,
        text: label,
        textAlign: "center",
        textBaseline: "middle",
        fontSize: 14,
        color: "white",
    });

    rectangle.addEventListener("click", onClick);
    Game.getCanvas().addChild(rectangle, text);

    return { rectangle, text };
}
