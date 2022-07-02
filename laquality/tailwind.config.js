/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'la-bg': "url('/bg.jpg')",
        'la-bg-two': "url('/bg2.jpg')",
      }
    },
  },
  plugins: [],
}
