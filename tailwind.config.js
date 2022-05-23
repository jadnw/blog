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
      ink: {
        50: '#f2f4f5',
        100: '#e6e9ec',
        200: '#c1c9cf',
        300: '#9caab3',
        400: '#768a97',
        500: '#586974',
        600: '#3c474f',
        700: '#20262a',
        800: '#131619',
        900: '#0c0f10',
      },
      primary: colors.cyan,
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
