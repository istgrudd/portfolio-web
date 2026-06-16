/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Sodium-amber signal — the detection / traffic-light accent
        signal: {
          300: "#FBCB6B",
          400: "#F8B84A",
          500: "#F5A623",
          600: "#A8650B", // deep amber — AA-legible as text on the pale (light-mode) bg
          700: "#8A5207",
        },
        // Blue-slate "night CCTV" darks
        ink: {
          600: "#3A4655",
          700: "#28323F",
          800: "#1B232E",
          850: "#141B24",
          900: "#0E131A",
          950: "#090C11",
        },
        // Cool blue-grey of low-visibility footage — muted text & rules
        fog: {
          200: "#D5DBE3",
          300: "#B4BDC9",
          400: "#8C97A6",
          500: "#6A7585",
        },
        // Light-mode "fog" surfaces
        paper: {
          DEFAULT: "#F1F3F6",
          raised: "#FFFFFF",
          line: "#DCE1E9",
        },
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widestest: "0.28em",
      },
      boxShadow: {
        signal: "0 0 0 1px rgba(245,166,35,0.35), 0 8px 30px -10px rgba(245,166,35,0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
