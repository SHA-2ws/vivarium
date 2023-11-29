/** @type {import('tailwindcss').Config} */

import animatePlugin from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    screens: {
      "2xl": "1400px",
      md: "768px",
      sm: "450px",
      lg: "1024px",
      xl: "1360px",
      xs: "319px"
    },
    container: {
      center: true,
      padding: "0",
      margin: "0",
      screens: {
        "2xl": "1400px",
        md: "768px",
        sm: "450px",
        lg: "1024px",
        xl: "1360px",
        xs: "319px"
      }
    },
    extend: {
      fontFamily: {
        brand: ["M PLUS Rounded 1c", "sans-serif"],
        geist: ["Geist"],
        "geist-bold": ["Geist Bold", "sans-serif"]
      },
      colors: {
        // pinky: "rgb(230 176 225)",
        // "dark-blue": "rgb(28 40 75)",
        // "grey-blue": "rgb(58 81 126)",
        // aqua: "rgb(146, 224, 202)",
        "grey-blue": {
          DEFAULT: "#3A517E",
          100: "#0c1019",
          200: "#172032",
          300: "#23304b",
          400: "#2e4065",
          500: "#3a517e",
          600: "#4e6daa",
          700: "#7991c1",
          800: "#a6b6d6",
          900: "#d2daea"
        },
        aqua: {
          DEFAULT: "#92E0CA",
          100: "#103a2e",
          200: "#21745d",
          300: "#31ae8b",
          400: "#5ad0af",
          500: "#92e0ca",
          600: "#a9e7d5",
          700: "#bfede0",
          800: "#d4f3ea",
          900: "#eaf9f5"
        },
        pinky: {
          DEFAULT: "#E6B0E1",
          100: "#3e143a",
          200: "#7c2774",
          300: "#ba3bad",
          400: "#d373c9",
          500: "#e6b0e1",
          600: "#ebc1e7",
          700: "#f0d0ed",
          800: "#f5e0f3",
          900: "#faeff9"
        },
        mandarina: {
          DEFAULT: "#f45d01",
          100: "#311300",
          200: "#612600",
          300: "#923801",
          400: "#c34b01",
          500: "#f45d01",
          600: "#fe7c2c",
          700: "#fe9d61",
          800: "#febe95",
          900: "#ffdeca"
        },
        "dark-blue": {
          DEFAULT: "#1C284B",
          100: "#06080f",
          200: "#0b101e",
          300: "#11182d",
          400: "#161f3c",
          500: "#1c284b",
          600: "#324786",
          700: "#4c68bd",
          800: "#889bd3",
          900: "#c3cde9"
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [animatePlugin]
}
