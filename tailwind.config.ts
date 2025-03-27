import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet:"#654cdc",
        white:"#ffffff",
        black:"#191919",
        lightColor:"#1a1d1c"
      },
    },
  },
  plugins: [],
} satisfies Config;
