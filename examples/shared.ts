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
