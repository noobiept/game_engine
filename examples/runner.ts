const searchParams = new URLSearchParams(window.location.search);
const modulePath = searchParams.get("module");
const LOG_LIMIT = 100;

type ConsoleMethod = "log" | "info" | "warn" | "error";

function getLogDocument() {
    try {
        if (window.parent && window.parent !== window) {
            return window.parent.document;
        }
    } catch {
        // If the example is ever embedded cross-origin, fall back to itself.
    }

    return document;
}

function formatLogValue(value: unknown) {
    if (typeof value === "string") {
        return value;
    }

    if (value instanceof Error) {
        return value.stack || value.message;
    }

    if (value instanceof Element) {
        const id = value.id ? `#${value.id}` : "";
        const className =
            typeof value.className === "string" && value.className
                ? "." + value.className.trim().replace(/\s+/g, ".")
                : "";

        return `<${value.tagName.toLowerCase()}${id}${className}>`;
    }

    if (typeof value === "function") {
        return value.name ? `[Function ${value.name}]` : "[Function]";
    }

    if (typeof value === "object" && value !== null) {
        try {
            return JSON.stringify(value);
        } catch {
            return String(value);
        }
    }

    return String(value);
}

function createExampleLog() {
    const targetDocument = getLogDocument();
    const style = targetDocument.createElement("style");

    style.dataset.exampleLog = "true";

    style.textContent = `
        .ExampleLog {
            background: rgba(17, 24, 30, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            bottom: 10px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.34);
            color: #f4f7f8;
            display: flex;
            flex-direction: column;
            font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            max-height: min(220px, 42vh);
            max-width: calc(100vw - 20px);
            min-width: min(360px, calc(100vw - 20px));
            overflow: hidden;
            position: fixed;
            right: 10px;
            text-align: left;
            z-index: 2147483647;
        }

        .ExampleLog[data-collapsed="true"] {
            min-width: 0;
        }

        .ExampleLog-header {
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
            display: flex;
            flex: 0 0 auto;
            gap: 8px;
            justify-content: space-between;
            padding: 6px 8px;
        }

        .ExampleLog-title {
            font-weight: 700;
        }

        .ExampleLog-actions {
            display: flex;
            gap: 4px;
        }

        .ExampleLog button {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.28);
            border-radius: 4px;
            color: inherit;
            cursor: pointer;
            font: inherit;
            padding: 2px 6px;
        }

        .ExampleLog button:hover {
            background: rgba(255, 255, 255, 0.12);
        }

        .ExampleLog-messages {
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            gap: 2px;
            min-height: 0;
            overflow-y: auto;
            padding: 6px 8px 8px;
        }

        .ExampleLog[data-collapsed="true"] .ExampleLog-messages,
        .ExampleLog[data-collapsed="true"] .ExampleLog-clear {
            display: none;
        }

        .ExampleLog-message {
            border-left: 3px solid rgba(255, 255, 255, 0.24);
            padding-left: 6px;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .ExampleLog-message[data-method="info"] {
            border-left-color: #75b9ff;
        }

        .ExampleLog-message[data-method="warn"] {
            border-left-color: #ffd166;
            color: #ffe8a3;
        }

        .ExampleLog-message[data-method="error"] {
            border-left-color: #ff6b6b;
            color: #ffb4b4;
        }

        .ExampleLog-time {
            color: #9fb0b8;
            margin-right: 6px;
        }
    `;

    const root = targetDocument.createElement("section");
    root.className = "ExampleLog";
    root.setAttribute("aria-label", "Example log");

    const header = targetDocument.createElement("div");
    header.className = "ExampleLog-header";

    const title = targetDocument.createElement("div");
    title.className = "ExampleLog-title";
    title.textContent = "Log";

    const actions = targetDocument.createElement("div");
    actions.className = "ExampleLog-actions";

    const clearButton = targetDocument.createElement("button");
    clearButton.className = "ExampleLog-clear";
    clearButton.type = "button";
    clearButton.textContent = "Clear";

    const toggleButton = targetDocument.createElement("button");
    toggleButton.type = "button";
    toggleButton.textContent = "Hide";

    const messages = targetDocument.createElement("div");
    messages.className = "ExampleLog-messages";

    clearButton.addEventListener("click", function () {
        messages.replaceChildren();
    });
    toggleButton.addEventListener("click", function () {
        const collapsed = root.dataset.collapsed === "true";

        root.dataset.collapsed = collapsed ? "false" : "true";
        toggleButton.textContent = collapsed ? "Hide" : "Show";
    });

    actions.append(clearButton, toggleButton);
    header.append(title, actions);
    root.append(header, messages);
    targetDocument.head.appendChild(style);
    targetDocument.body.appendChild(root);

    return {
        add(method: ConsoleMethod, values: unknown[]) {
            const message = targetDocument.createElement("div");
            const time = targetDocument.createElement("span");
            const content = targetDocument.createElement("span");

            message.className = "ExampleLog-message";
            message.dataset.method = method;
            time.className = "ExampleLog-time";
            time.textContent = new Date().toLocaleTimeString();
            content.textContent = values.map(formatLogValue).join(" ");

            message.append(time, content);
            messages.appendChild(message);

            while (messages.children.length > LOG_LIMIT) {
                messages.firstElementChild?.remove();
            }

            messages.scrollTop = messages.scrollHeight;
        },
        clear() {
            messages.replaceChildren();
        },
    };
}

function removeExampleLog() {
    const targetDocument = getLogDocument();

    targetDocument.querySelector(".ExampleLog")?.remove();
    targetDocument.querySelector("style[data-example-log]")?.remove();
}

function mirrorConsoleToUi() {
    let log: ReturnType<typeof createExampleLog> | null = null;
    const original = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
        clear: console.clear.bind(console),
    };

    for (const method of ["log", "info", "warn", "error"] as const) {
        console[method] = function (...values: unknown[]) {
            original[method](...values);

            if (!log) {
                log = createExampleLog();
            }

            log.add(method, values);
        };
    }

    console.clear = function () {
        original.clear();
        log?.clear();
    };

    removeExampleLog();
}

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

mirrorConsoleToUi();

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
