'use strict'

module.exports = {
  env: {
    es6: true,
    // jest globals
    jest: true,
    // Node.js global variables and Node.js scoping
    // http://eslint.org/docs/user-guide/configuring#specifying-environments
    node: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-prettier', '@typescript-eslint'],
}
