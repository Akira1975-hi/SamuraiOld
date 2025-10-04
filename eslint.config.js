// ESLint 9 (flat) — React + JSX
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  // Игнор вместо .eslintignore
  { ignores: ['dist/**', 'node_modules/**', 'coverage/**'] },

  // Базовые правила JS
  js.configs.recommended,

  // React / JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    settings: { react: { version: 'detect' } },
    plugins: { react, 'react-hooks': reactHooks },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // React 17+
      'react/prop-types': 'off', // убираем, если не используешь prop-types
    },
  },

  // Для конфигов/скриптов (Node-глобалы)
  {
    files: ['vite.config.*', 'eslint.config.js'],
    languageOptions: { globals: { ...globals.node } },
  },

  // Отключаем правила, конфликтующие с Prettier
  prettier,
];
