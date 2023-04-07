/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        primary: "#FAFAFA",
        highlight: "#927B7B",
        secondary: "#5F5050",
        background: "#FCF6EC",

        contactBtn: "#A8A2A2",
        contactBtnHover: "#979191",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      scale: {
        80: "0.8",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "right 0% top 0%",
        "pos-100": "right 100% top 100%",
      },
      animation: {
        bounceLeft: "bounceLeft 1.5s infinite",
        bounceRight: "bounceRight 1.5s infinite",
      },
      keyframes: {
        bounceLeft: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            opacity: 0.25,
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            opacity: 0.6,
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(25%)",
            opacity: 0.25,
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-25%)",
            opacity: 0.6,
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
    plugins: [],
  },
};
