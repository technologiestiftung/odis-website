/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.{md,mdx,astro,html,js,jsx,ts,tsx}"],
  darkMode: ["class", "dark"],
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
      },
      discrete: {
        DEFAULT: "var(--gray-light)",
      },

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
    extend: {
      transitionTimingFunction: {
        "out-extreme": "cubic-bezier(.12,.98,.13,.98)",
      },
      aria: {
        //prettier-ignore
        current: "current=\"true\"",
      },
      lineClamp: {
        7: "7",
      },
      screens: {
        xs: "400px",
      },
      boxShadow: getShadows(),
      dropShadow: getShadows(),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-touch")(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-pretty": {
          "text-wrap": "pretty",
        },
        ".hyphenate": {
          "hyphenate-limit-after": "1",
          "hyphenate-limit-before": "3",
          "-webkit-hyphens": "auto",
          hyphens: "auto",
        },
      });
    }),
  ],
};

function getShadows() {
  return {
    none: "0 0 0 transparent",
    ...getColorVariants("primary"),
    ...getColorVariants("secondary"),
    ...getColorVariants("primary-inv"),
    ...getColorVariants("secondary-inv"),
  };
}

function getColorVariants(variant) {
  return {
    [`${variant}-sm`]: `4px 4px 0 var(--shadow-${variant})`,
    [`${variant}`]: `8px 8px 0 var(--shadow-${variant})`,
    [`${variant}-md`]: `12px 12px 0 var(--shadow-${variant})`,
    [`${variant}-lg`]: `16px 16px 0 var(--shadow-${variant})`,
    [`${variant}-xl`]: `18px 18px 0 var(--shadow-${variant})`,
    [`${variant}-2xl`]: `24px 24px 0 var(--shadow-${variant})`,
  };
}
