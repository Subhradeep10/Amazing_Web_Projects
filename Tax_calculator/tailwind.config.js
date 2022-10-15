/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      zIndex: ['hover'],
      filter: ['hover']
    },
  },
  plugins: [],
}
