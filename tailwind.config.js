/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGray: "#C7C7C7",
        customDarkGray: "#1A1A1A",
        customGreen: "#D3E97A",
        customBlack: "#0A0A0A",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "custom-100": "100px",
      },
    },
  },
  plugins: [],
};
