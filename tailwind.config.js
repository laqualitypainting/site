/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#000000",
        primary: "#C7AE6A",
        secondary: "#B99A45",
        accent: "#D5C28F",
        muted: "#2A2A2A",
      },
      fontFamily: {
        heading: ["'Libre Franklin'", "sans-serif"],
        body: ["'Maitree'", "serif"],
        accent: ["'Slabo 13px'", "cursive"],
      },
      fontSize: {
        caption: "13px", // for small text / captions
      },
      lineHeight: {
        body: "1.6",
        accent: "1.4",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
      transitionProperty: {
        colors: "background-color, border-color, color",
      },
    },
  },
  plugins: [],
  darkMode: "media", // respects prefers-color-scheme
};
