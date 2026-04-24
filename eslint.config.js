import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
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
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "none",
                    caughtErrors: "none",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-wrapper-object-types": "off",
            "no-unused-vars": "off",
            "prefer-rest-params": "off",
        },
    },
);
