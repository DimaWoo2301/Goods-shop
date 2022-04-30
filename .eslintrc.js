module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'simple-import-sort',
  ],
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'default-param-last': 0,
    'react/jsx-no-useless-fragment': 0,
  },
};
