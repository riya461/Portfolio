/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['New Amsterdam', 'sans-serif'],   // Primary font for headings
        head: ['VT323', 'monospace'],  // Secondary font for body text
        body: ['Gupter', 'serif'],  // Secondary font for body text
      },
      colors: {
        primary: '#6A704C',
        secondary: 'white',
        accent: '#412e27',
        background: '#ede1d1',
      },
    },
  },
  plugins: [],
}