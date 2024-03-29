module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    indent: 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
        ],
        pathGroups: [{ pattern: "#/**", group: "sibling", position: "after" }],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        map: [["#", "./src"]],
      },
    },
  },
};
