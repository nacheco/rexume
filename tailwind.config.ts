import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "main": "#FFF7ED",
        'primary': '#FE0196',
        'secondary': '#FB8C3E',
        'dark': '##1A1A1A',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, rgba(254,1,150,1) 0%, rgba(251,140,62,1) 100%)',
        'gradient-primary-moz': '-moz-linear-gradient(180deg, rgba(254,1,150,1) 0%, rgba(251,140,62,1) 100%)',
        'gradient-primary-webkit': '-webkit-linear-gradient(180deg, rgba(254,1,150,1) 0%, rgba(251,140,62,1) 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },  
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        'dark': '#1A1A1A',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        gilda: ["var(--font-gilda-display)"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar'),
  ],
} satisfies Config

export default config