/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Ye line auto-reload ke liye sabse zaroori hai
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}