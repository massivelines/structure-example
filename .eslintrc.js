module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 2018,
      jsx: true,
    },
  },
};
