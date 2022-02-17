const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

const config = {
  // mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      // colors,
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      fontSize: {
        '10xl': '10rem'
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        90: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

module.exports = config;
