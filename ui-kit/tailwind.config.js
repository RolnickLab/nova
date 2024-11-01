/** @type {import('tailwindcss').Config} */
import { CONSTANTS } from "./src/lib/constants";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    colors: CONSTANTS.COLORS,
    extend: {
      backgroundImage: CONSTANTS.GRADIENTS,
      colors: CONSTANTS.COLOR_THEME,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
