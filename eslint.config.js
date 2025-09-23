import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins:{
      react,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      semi: ["error", "always"],
      indent: ["error", 2, {"SwitchCase": 1}],
      "object-curly-newline": ["error", {
        ObjectPattern: { multiline: true, minProperties: 1 }, // 👈 affects destructuring
        ObjectExpression: { multiline: true, consistent: true }, // affects objects
        ImportDeclaration: { multiline: true, consistent: true }, // affects imports
      }],
      "object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }],
      "function-paren-newline": ["error", "multiline"],
      "function-call-argument-newline": ["error", "always"],
      "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "array-element-newline": ["error", "always"],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
