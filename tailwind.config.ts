import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        card: {
          DEFAULT: "#0d1424",
          sub: "#111a2e",
          hover: "#15223c",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
          highlight: "rgba(45, 212, 191, 0.3)",
        },
        accent: {
          teal: "#2dd4bf",
          tealDark: "#0f766e",
          amber: "#ffb84d",
          cyan: "#38bdf8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45, 212, 191, 0.15)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
