/** @type {import('tailwindcss').Config} */
import { COLORS, COLOR_THEME, GRADIENTS } from "./src/lib/constants";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    colors: COLORS,
    extend: {
      backgroundImage: GRADIENTS,
      colors: COLOR_THEME,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
