/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'], // Use `data-theme` for dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}