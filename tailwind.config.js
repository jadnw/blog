const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      heading: ['Josefin Sans', 'sans-serif'],
      sans: ['Vazirmatn', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      ink: colors.zinc,
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
