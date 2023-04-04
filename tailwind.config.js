/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        text: "#927B7B",
        secondary: "#5F5050",
        background: "#FCF6EC",

        contactBtn: "#A8A2A2",
        contactBtnHover: "#979191",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
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
