/* eslint-disable unicorn/prefer-module */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "plugin:unicorn/recommended",
    "standard-with-typescript",
    "prettier",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["vue", "vitest"],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: ["tsconfig.json"],
    parser: {
      ts: '@typescript-eslint/parser',
    },
  },
  rules: {
    "no-extra-boolean-cast": "off",
    "vue/no-v-html": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: false,
          prop: false,
          attrs: false,
          params: false,
          req: false,
          res: false,
          dev: false,
          src: false,
        },
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*", "lodash.*"],
      },
    ],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "require-await": "error",
  },
}