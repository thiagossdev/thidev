/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      app: 'linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)'
    },
    gridTemplateRows: {
      layout: '2rem 1fr 1.5rem',
    },
    gridTemplateColumns: {
      editor: '3.5rem 16rem 1fr'
    },
    extend: {
      colors: {
        purple: {
          500: '#201b2d',
          600: '#191622',
          700: '#13111b',
        },
        pink: {
          500: '#fd78c3'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
