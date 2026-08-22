/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This will watch for anything with this extension, look for tailwind classes in any of these files in the src/ folder
    "./src/**/*.{html,js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','sans-serif']
      },
      // Add grid for details page, (70-30, 70 left column, 30 right)
      gridTemplateColumns: {
        '70/30': '70% 28%', // leave a bit of room
      }
    },
  },
  plugins: [],
}