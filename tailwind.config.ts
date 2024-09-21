/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";

import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
      "3xl": "1680px",
    },
    extend: {
      keyframes: {
        backgroundPosition: {
          "0%": { backgroundPosition: "200% 0, 0 0" },
          "25%": { backgroundPosition: "-100% 0, 0 0" },
          "100%": { backgroundPosition: "-100% 0, 0 0" },
        },
      },
      animation: {
        backgroundMove: "backgroundPosition 6500ms linear infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi-sans)"],
        jakarta: ["var(--font-plus-jakarta-sans)"],
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      transitionDuration: {
        "2000": "2000ms",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cod-gray": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#121212",
        },
        gallery: {
          "50": "#f8f8f8",
          "100": "#ededed",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
      borderRadius: {
        "4xl": "1.75rem",
        "5xl": "2rem",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwind-scrollbar"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
