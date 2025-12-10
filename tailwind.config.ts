import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ""],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // if you use /src
  ],
  theme: { extend: {
    colors: {
      primary: {
        DEFAULT: "#353744",
        foreground: "#ffffff"
      },
    }
  } },
  plugins: [require("tailwindcss-animate")],
};

export default config;
