import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: "127.0.0.1",
        hmr: {
            host: "127.0.0.1",
        },
    },
    test: {
        coverage: {
            provider: "v8",
            include: ["source/**/*.ts"],
            exclude: ["source/**/*.test.ts", "source/index.ts"],
            thresholds: {
                statements: 55,
                branches: 48,
                functions: 55,
                lines: 55,
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
