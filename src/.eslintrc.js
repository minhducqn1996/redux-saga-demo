module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // extend: [
  //     "eslint: recommended",
  //     "plugin: react/recommended"
  // ],
  rules: {
    // semi: 1,
    // quotes: [1, 'single'],
    'react/prop-types': 1,
    'prettier/prettier': ['error'],
  },
  plugins: ['prettier'],
  env: {
      "es6": true,
      "browser": true,
      "node": true
  }
};
