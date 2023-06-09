module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jsx-control-statements/jsx-control-statements': true,
  },
  ecmaFeatures: {
    jsx: true,
  },
  extends: ['airbnb', 'plugin:jsx-control-statements/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'jsx-control-statements'],
  rules: {
    'jsx-control-statements/jsx-choose-not-empty': 1,
    'jsx-control-statements/jsx-for-require-each': 1,
    'jsx-control-statements/jsx-for-require-of': 1,
    'jsx-control-statements/jsx-for-require-body': 1,
    'jsx-control-statements/jsx-if-require-condition': 1,
    'jsx-control-statements/jsx-otherwise-once-last': 1,
    'jsx-control-statements/jsx-use-if-tag': 1,
    'jsx-control-statements/jsx-when-require-condition': 1,
    'jsx-control-statements/jsx-jcs-no-undef': 1,
    'react/display-name': 'off',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    quotes: [2, 'single', { avoidEscape: true }],
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': 0,
    'max-len': ['error', { code: 200 }],
    'import/no-unresolved': 'off',
    'global-require': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
    }],
  },
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      },
    },
  },
};
