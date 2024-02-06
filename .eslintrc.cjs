/* eslint-disable unicorn/prefer-module */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // add under other rules
    "@vue/prettier",
    "plugin:unicorn/recommended",
    "plugin:vitest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
};
