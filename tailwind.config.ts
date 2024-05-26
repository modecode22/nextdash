import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {},
      borderRadius: {
        DEFAULT: "25px",
      },
      fontSize: {
        "7.5xl": "5.5rem",
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "14xl": "18rem",
        "16xl": "24rem",
        "20xl": "30rem",
      },

      screens: {
        xs: "380px",
        xxl: "1400px",
      },
      fontFamily: {
        // ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
        cairo: [
          'var(--font-cairo)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        inter: [
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: {
          50: "hsl(55, 90%, 95%)",
          100: "hsl(55, 88%, 90%)",
          200: "hsl(55, 86%, 85%)",
          300: "hsl(55, 84%, 80%)",
          400: "hsl(55, 82%, 75%)",
          500: "hsl(55, 80%, 70%)",
          600: "hsl(55, 78%, 65%)",
          700: "hsl(55, 76%, 60%)",
          800: "hsl(55, 74%, 55%)",
          900: "hsl(55, 72%, 50%)",
          950: "hsl(55, 70%, 45%)",
        },
        light: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 97%)",
          200: "hsl(0, 0%, 96%)",
          300: "hsl(0, 0%, 94%)",
          400: "hsl(0, 0%, 91%)",
          500: "hsl(0, 0%, 86%)",
          600: "hsl(0, 0%, 81%)",
          700: "hsl(0, 0%, 78%)",
          800: "hsl(0, 0%, 76%)",
          900: "hsl(0, 0%, 75%)",
          950: "hsl(0, 0%, 74%)",
        },
        dark: {
          50: "hsl(0, 0%, 42%)",
          100: "hsl(0, 0%, 41%)",
          200: "hsl(0, 0%, 39%)",
          300: "hsl(0, 0%, 36%)",
          400: "hsl(0, 0%, 31%)",
          500: "hsl(0, 0%, 23%)",
          600: "hsl(0, 0%, 15%)",
          700: "hsl(0, 0%, 10%)",
          800: "hsl(0, 0%, 7%)",
          900: "hsl(0, 0%, 5%)",
          950: "hsl(0, 0%, 4%)",
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'),addVariablesForColors],
} satisfies Config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 console.log(newVars)
  addBase({
    ":root": newVars,
  });
}
export default config;
