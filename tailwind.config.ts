import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d12",
        bg2: "#0f1218",
        text: "#E7EAF0",
        muted: "#A7AFBE",
        card: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        ring: "rgba(122,162,255,0.35)",
        accent: "#7AA2FF",
      },
      boxShadow: {
        ring: "0 0 0 6px rgba(122,162,255,0.35)",
      },
      borderRadius: {
        xl2: "14px",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "var(--font-opensans)", "var(--font-montserrat)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
