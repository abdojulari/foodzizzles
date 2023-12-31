/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'Verdana', 'Roboto', 'Helvetica']
      },
      colors: {
        'lemon': '#84BD00',
        'lemon-200': '#C4D600',
        'lemon-dark': '#509E2F'
      },
      width: {
        '101': '28rem',
      }, 
      backgroundImage: {
        'recipe': "url('https://m.media-amazon.com/images/I/715oG1b53NL.jpg')"
      }
    },
  },
  plugins: [],
}

