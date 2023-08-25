/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{liquid,html}"],
  theme: {
    colors: {
      red: {
        DEFAULT: "#E60032",
        dark: "#C42C3A",
      },
      blue: {
        ultralight: "#EDF8FE",
        light: "#BEE4F8",
        medium: "#4C64CD",
        DEFAULT: "#20378B",
        dark: "#172763",
        darker: "#0C163B",
      },
      grey: {
        light: "#D1DBE0",
      },
      white: "#FFFFFF",
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
