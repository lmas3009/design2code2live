/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily:{
        'inria':['Inria Sans', sans-serif],
        'poppins':['Poppins', sans-serif]
      },
    },
  },
  
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

