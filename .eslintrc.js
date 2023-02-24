module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jsx-control-statements/jsx-control-statements": true
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-control-statements/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", "jsx-control-statements"
    ],
    "rules": {
        "jsx-control-statements/jsx-choose-not-empty": 1,
        "jsx-control-statements/jsx-for-require-each": 1,
        "jsx-control-statements/jsx-for-require-of": 1,
        "jsx-control-statements/jsx-for-require-body": 1,
        "jsx-control-statements/jsx-if-require-condition": 1,
        "jsx-control-statements/jsx-otherwise-once-last": 1,
        "jsx-control-statements/jsx-use-if-tag": 1,
        "jsx-control-statements/jsx-when-require-condition": 1,
        "jsx-control-statements/jsx-jcs-no-undef": 1,
        "react/display-name": "off",
        "react/jsx-no-undef": [ 2, { "allowGlobals": true }]
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
          "modules": true,
          "experimentalObjectRestSpread": true
        }
    }
}
