/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' based on your preference
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Adjust this path as needed based on your file structure
    "./components/**/*.{js,ts,jsx,tsx}" // Adjust this path as needed
  ],
  theme: {
    extend: {
      // You can extend your theme with custom colors, fonts, etc.
      colors: {
        'custom-dark': '#1a1a1a',
        'custom-light': '#ffffff'
      },
    },
  },
  plugins: [],
}
