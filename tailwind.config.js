const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      pink: {
        ...colors.pink,
        200: "#fba1a0",
      },
      purple: { ...colors.purple, 700: "#2e004a" },
      yellow: {
        ...colors.yellow,
        500: "#fedf35",
      },
      orange: {
        ...colors.orange,
        500: "#fe9134",
      },
      cyan: {
        ...colors.cyan,
        200: "#d3dfe6",
        500: "#65add7",
      },
    },
    extend: {},
  },
  plugins: [],
};
