import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,
  {
    plugins: {
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^react", "^@?\\w"], // Packages, React first
            ["^(@|components)(/.*|$)"], // Internal packages
            ["^\\u0000"], // Side effect imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Parent imports
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // Other relative imports
            ["^.+\\.?(css)$"], // Style imports
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },
];

export default eslintConfig;
