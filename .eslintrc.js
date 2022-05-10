module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': [0, 'unix'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    quotes: ['warn', 'single'],
    'object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
