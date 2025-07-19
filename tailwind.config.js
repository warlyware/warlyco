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
    extend: {
      fontSize: {
        "7xl": "7rem",
        "8xl": "10rem",
        "9xl": "18rem",
      },
      keyframes: {
        'slide-up-fast': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down-fast': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'slide-up-fast': 'slide-up-fast 0.5s ease-in-out',
        'slide-down-fast': 'slide-down-fast 0.5s ease-in-out',
        'slide-up': 'slideUp 1.5s ease-out forwards',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        'mixed': 'mixed',
      }
    },
  },
  plugins: [],
};
