const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      heading: ['Glory', 'sans-serif'],
      sans: ['Roboto Flex', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      ink: colors.zinc,
      primary: colors.indigo,
      indigo: colors.indigo,
      green: colors.emerald,
      yellow: colors.yellow,
    },
    extend: {
      spacing: {
        wrapper: '1024px',
        content: '768px',
      },
    },
  },
  plugins: [],
}
