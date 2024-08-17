/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      backdropBlur: {
        '4xl': "72px",
        '5xl': "80px",
        '6xl': "92px",
        '7xl': "100px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
  darkMode: 'class',
}
