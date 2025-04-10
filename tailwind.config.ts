/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wushu: {
          black: "#000000",
          "red-100": "#C30000",
          "red-200": "#8A0000",
          "red-300": "#C1322C",
          white: "#FFFFFF",
          "gold-100": "#B88803",
          "gold-200": "#D99F00",
          cream: "#F0E9D0",
        },
      },
      fontFamily: {
        arimo: ["var(--font-arimo)"],
        inter: ["var(--font-inter)"],
        magra: ["var(--font-magra)"],
        khula: ["var(--font-khula)"],
      },
    },
  },
  plugins: [],
};
