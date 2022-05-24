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
      mono: ['Iosevka', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      pre: '#20262a',
      ink: {
        50: '#f2f4f5',
        100: '#e6e9ec',
        200: '#c1c9cf',
        300: '#a8b4bd',
        400: '#8394a0',
        500: '#617480',
        600: '#45525b',
        700: '#323c42',
        800: '#1c2225',
        900: '#101214',
      },
      primary: colors.violet,
      purple: colors.violet,
      green: colors.emerald,
      blue: colors.sky,
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
