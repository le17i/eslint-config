module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  extends: ["./index.js", "plugin:react/recommended"],
  ignorePatterns: ["node_modules", "build", "dist", "public"],
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "react/display-name": "off",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
