/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{liquid,html}"],
  theme: {
    colors: {
      // USE THESE SEMANIC COLORS
      bg: {
        DEFAULT: "var(--bg)",
        alt: "var(--bg-alt)",
        inv: "var(--bg-inv)",
      },
      text: {
        DEFAULT: "var(--text)",
        inv: "var(--text-inv)",
      },
      links: {
        DEFAULT: "var(--links)",
        inv: "var(--links-inv)",
        active: "var(--links-active)",
        "active-inv": "var(--links-active-inv)",
      },
      headlines: {
        DEFAULT: "var(--headlines)",
        inv: "var(--headlines-inv)",
      },
      line: {
        DEFAULT: "var(--line)",
        dark: "var(--line-dark)",
        inv: "var(--line-inv)",
        "dark-inv": "var(--line-dark-inv)",
      },
      shadow: {
        primary: {
          DEFAULT: "var(--shadow-primary)",
          inv: "var(--shadow-primary-inv)",
        },
        secondary: {
          DEFAULT: "var(--shadow-secondary)",
          inv: "var(--shadow-secondary-inv)",
        },
      }

      // AVOID USING PRIMITIVE COLORS DIRECTLY, RATHER USE SEMANTIC COLORS (SEE ABOVE)
      // If you still need to, use the css variable directly (eg. var(--red))
      // ...or uncomment the following lines to use with tailwind (avoid this if possible)
      // red: {
      //   DEFAULT: "var(--red)",
      //   dark: "var(--red-dark)",
      // },
      // blue: {
      //   ultralight: "var(--blue-ultralight)",
      //   light: "var(--blue-light)",
      //   medium: "var(--blue-medium)",
      //   DEFAULT: "var(--blue)",
      //   dark: "var(--blue-dark)",
      //   darker: "var(--blue-darker)",
      // },
      // grey: {
      //   light: "var(--grey-light)",
      // },
      // white: "var(--white)",
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
