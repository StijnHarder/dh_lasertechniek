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
          light: '#5B84D7',
          DEFAULT: '#1E40AF', // primary color
          dark: '#1E3A8A',
        },
        secondary: {
          light: '#F6C95F',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#D1D5DB',
          dark: '#4B5563',
        },
        accent: '#EC4899', // an accent color for branding
        background: '#F9FAFB',
        surface: '#FFFFFF',
        success: '#10B981',
        danger: '#EF4444',
        warning: '#FBBF24',
        info: '#3B82F6',
      },
    },
  },
  plugins: [],
};
export default config;
