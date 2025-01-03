import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class", // This enables dark mode using class strategy
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        green: {
          DEFAULT: "var(--color-green)",
        },
        yellow: {
          DEFAULT: "var(--color-yellow)",
        },
        gray: {
          DEFAULT: "var(--color-gray)",
        },
        background: {
          DEFAULT: "var(--color-background)",
          paper: "var(--color-background-paper)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
        },
      },
      backgroundImage: {
        'diagonal-pattern': `repeating-linear-gradient(45deg, transparent, transparent 5px, #aaaaff 6px, #aaaaff 15px, transparent 16px, transparent 20px)`,
      },
    },
  },
  plugins: [],
} satisfies Config;
