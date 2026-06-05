/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#6c63ff',
        'accent-light': '#f0eeff',
        'accent-border': '#dbd8ff',
      },
    },
  },
  plugins: [],
}
