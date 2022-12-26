/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png,jpg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mountain": "url('./assets/img/mountain.jpg')"
      }
    },
  },
  plugins: [],
}
