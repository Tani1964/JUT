/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1a3a2a',
          gold: '#b8960c',
          light: '#f5f3ef',
        },
      },
    },
  },
  plugins: [],
}

