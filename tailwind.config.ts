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
        lightBgColor:"#f3f3f3",
        darkbgColor:"#c2c3c3",
        blackColor:"#464851",
        greyColor:"#464851",
        redColor:"#c5605f",
        blueColor:"#6255ed",
        lightBlackColor:"#1E201E"
      },
    },
  },
  plugins: [],
} satisfies Config;
