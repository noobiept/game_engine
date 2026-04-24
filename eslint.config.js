import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: ["build/", "docs/", "node_modules/", "release/", "coverage/"],
    },
    ...[js.configs.recommended, ...tseslint.configs.recommended].map(
        (config) => ({
            ...config,
            files: [
                "source/**/*.ts",
                "tests/**/*.ts",
                "examples/**/*.ts",
                "vite.config.ts",
            ],
        }),
    ),
    {
        files: [
            "source/**/*.ts",
            "tests/**/*.ts",
            "examples/**/*.ts",
            "vite.config.ts",
        ],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
        },
    },
]);
