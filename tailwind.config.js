const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
  ],
  theme: {
    fontFamily: {
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
    },
    fontSize: {
      '2xs': '12px',
      xs: '13px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '30px',
      '5xl': '36px',
      '6xl': '48px',
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
      white: '#ffffff',
      black: '#000000',
             
      ink: {
        '50': '#f9fafb',
        '100': '#f1f4f6',
        '200': '#e1e8eb',
        '300': '#bdcdd4',
        '400': '#97b0bb',
        '500': '#7193a3',
        '600': '#496571',
        '700': '#344750',
        '800': '#222f35',
        '900': '#182125',
      },
      teal: colors.teal,
      red: colors.red,
    },
    extend: {
      spacing: {
        wrapper: '1024px',
        post: '720px',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
}
