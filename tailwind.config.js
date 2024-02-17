/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
      }
    },
  },
  plugins: [
    require("tailwindcss/nesting")
  ],
}

