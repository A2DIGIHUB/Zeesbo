import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        royal: {
          DEFAULT: '#2C1A4D',
          light: '#3D2469',
          dark: '#1B1030',
        },
        gold: {
          DEFAULT: '#C4A962',
          light: '#D4BC7E',
          dark: '#B49646',
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          light: '#2D2D2D',
          dark: '#0B0B0B',
        },
        pearl: {
          DEFAULT: '#F5F5F5',
          light: '#FFFFFF',
          dark: '#E5E5E5',
        },
        silver: '#C0C0C0',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
