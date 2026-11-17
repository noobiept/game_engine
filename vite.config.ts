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
            // `testing` is a separate entry (so its helpers aren't in a game's bundle), but it shares the engine's
            // modules with the main one (its `resetGame()` resets the engine that the game uses)
            entry: {
                game_engine: "source/index.ts",
                testing: "source/testing.ts",
            },
            fileName: (_format, entryName) => `${entryName}.js`,
            formats: ["es"],
        },
        outDir: "dist",
        rollupOptions: {
            output: {
                // the engine's modules go in one file, which both entries use
                manualChunks: (id) =>
                    /source[\\/](index|testing)\.ts$/.test(id)
                        ? undefined
                        : "engine",
                chunkFileNames: "[name].js",
            },
        },
    },
});
