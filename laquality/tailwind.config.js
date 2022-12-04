/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'la-bg': "url('/bg.webp')",
        'la-bgSmall': "url('/bgSmall.webp')",
      }
    },
  },
  plugins: [],
}
