import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for casino theme - adjusted for uniqueness
        gold: {
          50: "#FFFBF0", // Slightly different
          100: "#FDF3D0", // Slightly different
          200: "#FCE790", // Slightly different
          300: "#FBD555", // Slightly different
          400: "#FBBF2E", // Slightly different
          450: "#FBC238", // New shade, slightly different
          500: "#F6A215", // Slightly different
          600: "#DA7B0A", // Slightly different
          700: "#B5570D", // Slightly different
          800: "#934412", // Slightly different
          900: "#793813", // Slightly different
          950: "#461D06", // Slightly different
        },
        emerald: {
          50: "#F0FDF5", // Slightly different
          100: "#DCFCE8", // Slightly different
          200: "#BBF7D2", // Slightly different
          300: "#86EFB0", // Slightly different
          400: "#4ADE85", // Slightly different
          500: "#12C085", // More vibrant
          600: "#069A6D", // More vibrant
          700: "#057C5B", // More vibrant
          800: "#07624A", // More vibrant
          900: "#07513F", // More vibrant
          950: "#032F25", // Slightly different
        },
        amber: {
          50: "#FFFBF0", // Slightly different
          100: "#FEF3D0", // Slightly different
          200: "#FDE790", // Slightly different
          300: "#FBD555", // Slightly different
          400: "#FBBF2E", // Slightly different
          450: "#FBC238", // New shade, slightly different
          500: "#F6A215", // Slightly different
          550: "#EBB70C", // New shade, slightly different
          600: "#DA7B0A", // Slightly different
          700: "#B5570D", // Slightly different
          800: "#934412", // Slightly different
          900: "#793813", // Slightly different
          950: "#461D06", // Slightly different
        },
        zinc: {
          50: "#FAFAFB", // Slightly different
          100: "#F4F4F6", // Slightly different
          200: "#E4E4E8", // Slightly different
          300: "#D4D4D9", // Slightly different
          350: "#C8C8CD", // New shade, slightly different
          400: "#A2A2AB", // Slightly different
          450: "#8F8F94", // New shade, slightly different
          500: "#72727B", // Slightly different
          550: "#646467", // New shade, slightly different
          600: "#53535C", // Slightly different
          650: "#49494B", // New shade, slightly different
          700: "#404047", // Slightly different
          750: "#3B3B3E", // New shade, slightly different
          800: "#28282B", // Slightly different
          850: "#222225", // New shade, slightly different
          900: "#19191C", // Slightly different
          950: "#0A0A0C", // Slightly different
        },
        gray: {
          150: "#F1F1F1", // Slightly different
          250: "#DDDDDD", // Slightly different
          550: "#8B8B8B", // Slightly different
          650: "#6C6C6C", // Slightly different
          750: "#4B4B4B", // Slightly different
          850: "#2B2B2B", // Slightly different
        },
        slate: {
          750: "#344256", // Slightly different
        },
        yellow: {
          550: "#FBD018", // Slightly different
        },
        red: {
          // Adding a red color based on user's previous code
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#C8102E", // User's specified red
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
      },
      boxShadow: {
        "xl-custom": "0 22px 28px -6px rgba(0, 0, 0, 0.25), 0 12px 12px -6px rgba(0, 0, 0, 0.12)", // Slightly adjusted
        "sm-custom": "0 1.5px 2.5px 0 rgba(0, 0, 0, 0.1)", // Slightly adjusted
        "md-custom": "0 5px 7px -1.5px rgba(0, 0, 0, 0.15), 0 2.5px 5px -1.5px rgba(0, 0, 0, 0.08)", // Slightly adjusted
      },
      animation: {
        "glow-strong": "glow 2.2s infinite alternate", // Slightly adjusted duration
        "glow-subtle": "glow-subtle 3.3s infinite alternate", // Slightly adjusted duration
        "blink-fast": "blink 0.9s infinite alternate", // Slightly adjusted duration
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(255, 180, 0, 0.8)" }, // Slightly adjusted color/intensity
          "50%": { boxShadow: "0 0 28px rgba(255, 180, 0, 1.1)" }, // Slightly adjusted color/intensity
        },
        "glow-subtle": {
          "0%, 100%": { boxShadow: "0 0 6px rgba(255, 180, 0, 0.6)" }, // Slightly adjusted color/intensity
          "50%": { boxShadow: "0 0 18px rgba(255, 180, 0, 0.9)" }, // Slightly adjusted color/intensity
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" }, // Slightly adjusted opacity
        },
      },
      maxWidth: {
        "sm-custom": "27rem", // Slightly adjusted
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
