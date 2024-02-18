/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
      },
      screens: {
        'xs': '414px',
        'sm': '600px'
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting")
  ],
}

