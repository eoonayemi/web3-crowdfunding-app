import { primary } from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jaro: ["Jaro", "sans-serif"],
      },
      boxShadow: {
        custom: "10px 10px 20px rgba(2, 2, 2, 0.25)",
      },
    },
  },
  plugins: [],
};
