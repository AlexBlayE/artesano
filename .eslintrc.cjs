module.exports = {
    extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
    parser: "@typescript-eslint/parser",
    plugins: [ "@typescript-eslint" ],
    root: true,
    rules: {
      "@typescript-eslint/no-unused-vars": [ "error", { "argsIgnorePattern": "^_" } ],
      "semi": [ "error", "always" ],
      "quotes": [ "error", "double" ],
      "object-curly-spacing": [ "error", "always" ],
      "space-infix-ops": "error",
      "array-bracket-spacing": [ "error", "always" ],
      "space-before-blocks": [ "error", "always" ],
      "@typescript-eslint/type-annotation-spacing": [ "error", {
        "before": false,
        "after": true
      } ],
      "indent": [ "error", 4 ],
      "linebreak-style": [ "error", "unix" ],
      "eol-last": ["error", "always"],
    }
  }