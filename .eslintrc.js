module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['tailwindcss', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'import/no-anonymous-default-export': 'off',
  },
}
