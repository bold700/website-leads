/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./site.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "rgb(var(--brand-green) / <alpha-value>)",
          greenDark: "rgb(var(--brand-green-dark) / <alpha-value>)",
          accent: "rgb(var(--brand-accent) / <alpha-value>)",
        },
        cream: "#F4F1E9",
        card: "#FCFBF7",
        ink: "#1F271C",
        muted: "#6E7264",
        border: "#E4DFD2",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Geist", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
