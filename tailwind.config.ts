import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define your color palette
      colors: {
        primary: {
          dark: '#454A63', // primary text blue
        },
        neutral: {
          light: '#FBFBFC', // primary bg light grey with blue
        },
        background: '#FBFBFC',
        border_gray: '#E8E8E8',
        button_yellow: '#FFD157',
        icon_purple: '#C113EB',
        icon_blue: '#3413EB',
        icon_light_blue: '#137BEB',
      },
    },
  },
  plugins: [],
};
export default config;
