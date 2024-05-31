/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      },
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
      }
    },
    fontFamily:{
      Poppins:["Poppins", 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}