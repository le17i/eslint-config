module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    sourceType: "module",
  },
  plugins: [
    "prettier",
    "@typescript-eslint/eslint-plugin"
  ],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "public"
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
  },
};
