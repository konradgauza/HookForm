module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        semi: 0,
        'no-undef': 'off',
        'no-shadow': 'off',
        'arrow-body-style': 0,
        'no-nested-ternary': 'error',
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-empty-interface': 1,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'jest/no-disabled-tests': 0,
      },
    },
  ],
};
