/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./site.js"],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--navy) / <alpha-value>)",
        "navy-deep": "rgb(var(--navy-deep) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        paper: "#FAF9F6",
        ink: "#1A2233",
        muted: "#6B7280",
        line: "#E7E4DC",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Geist", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
