/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mountain": "url('./src/assets/img/mountain.jpg')"
      }
    },
  },
  plugins: [],
}
