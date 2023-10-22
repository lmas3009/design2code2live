const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-clr": "#151515",
      },
      fontFamily: {
        romance: ["Classical Romance", "sans-serif"],
      },
    },
  },
  plugins: [],
};
