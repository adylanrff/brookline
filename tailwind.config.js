/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.html", "./ecommerce/*.html", "./assets/**/*.js"
  ],
  theme: {
    screens: {
      'xs': {'max': '300px'},
      ...defaultTheme.screens,
    },
    fontFamily: {
      'title': ["Grand Hotel", 'cursive'],
      'body': ["Nunito", 'cursive']
    },
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
      }
    },
  },
  plugins: [require("tailgrids/plugin")],
}
