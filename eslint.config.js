// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const globals = require('globals');

/**
 * Pragmatic ESLint config for the legacy NgModule codebase.
 */
module.exports = tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', 'e2e/**', '**/*.spec.ts'],
  },
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@angular-eslint': angular.tsPlugin,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'mifosx',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'mifosx',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
      'no-var': 'off',
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'off',
      'no-empty': 'warn',
      'no-constant-condition': 'warn',
      'no-cond-assign': 'off',
      'no-constant-binary-expression': 'off',
      'no-useless-assignment': 'off',
      'getter-return': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angular.templatePlugin,
    },
    languageOptions: {
      parser: angular.templateParser,
    },
    rules: {},
  },
);
