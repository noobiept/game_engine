import { defineConfig } from "vite";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
const version = packageJson.version;

function examplesHtmlPlugin() {
    return {
        name: "game-engine-examples-html",
        transformIndexHtml: {
            order: "pre" as const,
            handler(html: string, context: { path: string }) {
                if (!context.path.startsWith("/examples/")) {
                    return html;
                }

                var scripts: string[] = [];
                var transformed = html.replace(
                    /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>\s*<\/script>/gi,
                    function (tag, src) {
                        if (src.indexOf("build/game_engine.js") >= 0) {
                            return "";
                        }

                        scripts.push(src);
                        return "";
                    },
                );

                if (scripts.length === 0) {
                    return transformed;
                }

                var loader = `
        <script type="module">
          import * as Game from "/source/index.ts";

          window.Game = Game;

          for (const src of ${JSON.stringify(scripts)}) {
            await new Promise((resolve, reject) => {
              const script = document.createElement("script");
              script.src = new URL(src, window.location.href).href;
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            });
          }
        </script>`;

                return transformed.replace("</head>", loader + "\n</head>");
            },
        },
    };
}

export default defineConfig({
    plugins: [examplesHtmlPlugin()],
    resolve: {
        extensions: [".ts", ".mjs", ".js", ".mts", ".jsx", ".tsx", ".json"],
    },
    build: {
        lib: {
            entry: "source/index.ts",
            name: "Game",
            fileName: "game_engine",
            formats: ["es"],
        },
        outDir: `release/${version}`,
    },
});
