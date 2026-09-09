import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";

export default defineConfig([
  {
    ignores: ["tina/__generated__/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "desc",
          newlinesBetween: 1,
          internalPattern: ["^@/.+", "^@tina/.+"],
          groups: [
            ["value-builtin", "value-external"],
            ["type-builtin", "type-external"],

            ["value-internal", "type-internal"],

            "tina",

            ["value-parent", "value-sibling", "value-index"],
            ["type-parent", "type-sibling", "type-index"],

            "side-effect",

            "ts-equals-import",
            "unknown",
          ],
          customGroups: [
            { groupName: "tina", elementNamePattern: "^@tina/.+" },
          ],
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
        },
      ],
    },
  },
  eslintConfigPrettier,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint.config.mjs",
    ".prettierrc",
  ]),
]);
