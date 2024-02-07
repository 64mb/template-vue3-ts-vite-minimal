/* eslint-disable unicorn/prefer-module */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // add under other rules
    "@vue/prettier",
    "plugin:import/recommended",
    "plugin:unicorn/recommended",
    "plugin:vitest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
};
