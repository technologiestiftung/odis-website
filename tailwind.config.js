/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{liquid,html}"],
  theme: {
    colors: {
      red: {
        500: "#E60032",
      },

      blue: {
        100: "#91A6E8",
        500: "#1E398F",
        900: "#0C163B",
      },

      cyan: {
        50: "#FDFEFF",
        100: "#EDF8FE",
      },

      grey: {
        500: "#9FA3B2",
      },
    },
    fontFamily: {
      sans: [
        "Clan",
        "ui-sans-serif",
        "Calibri",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
  },

  plugins: [],
};
