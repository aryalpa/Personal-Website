import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#6E7F6A",
          dark: "#55634F",
          light: "#EEF3EC",
        },

        cream: "#FAF9F6",

        charcoal: {
          DEFAULT: "#2F3430",
          light: "#5F665E",
        },

        border: "#E5E7E2",
      },
    },
  },

  plugins: [],
};

export default config;