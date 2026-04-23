const searchParams = new URLSearchParams(window.location.search);
const modulePath = searchParams.get("module");

function setExampleBase(modulePath: string) {
    const moduleUrl = new URL(modulePath, window.location.href);
    const baseHref = new URL(".", moduleUrl).href;
    let baseElement = document.head.querySelector("base");

    if (!baseElement) {
        baseElement = document.createElement("base");
        document.head.prepend(baseElement);
    }

    baseElement.href = baseHref;
}

function showError(message: string) {
    document.body.innerHTML = "";

    const pre = document.createElement("pre");

    pre.textContent = message;
    pre.style.color = "#8f1d1d";
    pre.style.fontFamily = "monospace";
    pre.style.margin = "16px";

    document.body.appendChild(pre);
}

if (!modulePath) {
    showError("Missing ?module=... query parameter.");
} else {
    try {
        setExampleBase(modulePath);
        await import(/* @vite-ignore */ modulePath);
    } catch (error) {
        console.error(error);
        showError(
            `Unable to load example module:\n${modulePath}\n\n${
                error instanceof Error
                    ? error.stack || error.message
                    : String(error)
            }`,
        );
    }
}

export {};
