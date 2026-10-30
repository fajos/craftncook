/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        craft: {
          bg: '#f2ece0',
          'bg-soft': '#fbf8f3',
          'bg-dark': '#1e1d22',
          'bg-darker': '#0e0d12',
          'card-dark': '#2e2c33',
          gold: '#f4d699',
          'gold-hover': '#e7c57f',
          coral: '#fe7259',
          purple: '#b49ebf',
          text: '#222222',
          muted: '#686561',
          border: '#e4dcce',
          'border-dark': '#3a3842'
        }
      },
      fontFamily: {
        heading: ['"Fjalla One"', 'sans-serif'],
        serif: ['"Average"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -10px rgba(14, 13, 18, 0.12)',
        'luxury-dark': '0 20px 45px -10px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
