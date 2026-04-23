import { defineConfig } from "vite";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
const version = packageJson.version;

export default defineConfig({
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
