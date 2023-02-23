/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["source/_layouts/*.liquid"],
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },
  theme: {
    colors: {anna:"#9bc95b"},
    extend: {},
  },
  plugins: [],
};
