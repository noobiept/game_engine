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
                statements: 80,
                branches: 70,
                functions: 80,
                lines: 80,
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
