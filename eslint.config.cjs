module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 150,
        "singleQuote": true,
        "semi": false,
        "trailingComma": "es5"
      }
    ],
    "eqeqeq": [
      "error",
      "always"
    ]
  }
}
