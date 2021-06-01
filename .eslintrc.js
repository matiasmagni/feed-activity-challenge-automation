module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "cypress/globals": true
    },
    "extends": [
        "airbnb-base",
        "plugin:cypress/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "cypress",
        "chai-friendly"
    ],
    "rules": {
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2
    }
};
