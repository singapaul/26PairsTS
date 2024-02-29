// .eslintrc.js
module.exports = {
    globals: {
      __PATH_PREFIX__: true,
    },
    extends: "react-app",
    plugins: ["simple-import-sort", "import"],
    overrides: [
      {
        "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
        "rules": {
          "simple-import-sort/imports": [
            "error",
            {
              "groups": [
                // Group 1: React and other lowercase-starting package imports
                ["^react", "^[a-z]", "^[A-Z]"],
                // Group 2: Side-effect imports (conventionally, but check tool's handling of \u0000)
                ["^\\u0000"],
                // Group 3: Scoped (@) and word-based package imports
                ["^@?\\w"],
                // Group 4: Catch-all for any remaining imports not matched by previous groups
                ["^"],
                // Group 5: Relative path imports within the project
                ["^\\."],
                // Group 6: Node.js built-in modules using the explicit node: protocol
                ["^node:"],
                // Group 7: Local style imports, specifically targeting './styles'
                ["^./styles"],
                // Group 8: Special handling for imports with side effects, using \u0000 \u0000 as a marker. Ensures types imported at bottom. 
                [
                  "^node:.*\\u0000$",
                  "^@?\\w.*\\u0000$",
                  "^[^.].*\\u0000$",
                  "^\\..*\\u0000$"
                ]
              ]
            }
          ]
        }
      }
    ],
    rules: {
      'prefer-const': 'error',
    },
    parserOptions: {
      "sourceType": "module",
      "ecmaVersion": "latest"
    }
  };