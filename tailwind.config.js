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
      sans: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      mono: ['Iosevka', 'monospace'],
    },
    screens: {
      xs: '360px',
      sm: '540px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      pre: 'hsl(204, 14%, 15%)',
      ink: {
        50: 'hsl(200, 13%, 97%)',
        100: 'hsl(210, 14%, 91%)',
        200: 'hsl(206, 13%, 78%)',
        300: 'hsl(206, 14%, 70%)',
        400: 'hsl(205, 13%, 57%)',
        500: 'hsl(203, 14%, 44%)',
        600: 'hsl(205, 14%, 31%)',
        700: 'hsl(203, 14%, 23%)',
        800: 'hsl(200, 14%, 11%)',
        900: 'hsl(210, 11%, 7%)',
      },
      primary: colors.teal,
      secondary: colors.indigo,
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
