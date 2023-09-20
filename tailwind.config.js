/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bosta: "#e30613",
        grayish: "#4f5665",
        white: "#ffffff",
      },
    },
    fontFamily: {
      sans: ["Cairo", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
