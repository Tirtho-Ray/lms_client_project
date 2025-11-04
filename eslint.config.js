// .eslintrc.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: "module",
    },
    rules: {
      // Remove errors for missing imports (like your route files not yet created)
      "import/no-unresolved": "off",

      // Remove unused import warnings if you want, or just warn
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

      // Optional: allow console logs in dev
      "no-console": "off",
    },
  },
]);
