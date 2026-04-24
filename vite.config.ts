import { defineConfig } from "vite";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
const version = packageJson.version;

export default defineConfig({
    test: {
        coverage: {
            provider: "v8",
            include: ["source/**/*.ts"],
            exclude: ["source/**/*.test.ts", "source/index.ts"],
            thresholds: {
                statements: 20,
                branches: 17,
                functions: 22,
                lines: 20,
            },
        },
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
