import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "19.5": "4.875rem",
        "105": "26.25rem",
        "116": "28.9375rem",
        "145": "36.25rem",
        "175": "43.75rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        grayCool: {
          1: "#27292D",
          2: "#6B6C70",
          3: "#C5C7CA",
          4: "#7F8084",
          5: "#191920",
        },
      },
    },
  },
  plugins: [],
};
export default config;
