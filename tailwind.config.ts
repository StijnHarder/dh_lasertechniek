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
          light: '#5B84D7', // still to set
          DEFAULT: '#1E40AF', // still to set
          dark: '#454A63', // primary text blue
        },
        secondary: {
          light: '#F6C95F', // still to set
          DEFAULT: '#F59E0B', // still to set
          dark: '#D97706', // still to set
        },
        neutral: {
          light: '#FBFBFC', // primary bg light grey with blue
          DEFAULT: '#D1D5DB', // still to set
          dark: '#4B5563', // still to set
        },
        accent: '#EC4899', // still to set
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
