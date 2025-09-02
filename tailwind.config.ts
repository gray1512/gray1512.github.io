import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ""],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // if you use /src
  ],
  theme: { extend: {} },
  plugins: [require("tailwindcss-animate")],
};

export default config;
