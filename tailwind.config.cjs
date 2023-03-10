/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      md: { max: "1350px" },
      sm: { max: "1024px" },
      xs: { max: "768px" },
    },
    extend: {
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
  },
  plugins: [],
};
