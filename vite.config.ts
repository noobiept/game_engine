import { defineConfig } from "vite";

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
        outDir: "dist",
    },
});
