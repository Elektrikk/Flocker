/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'text': '#201023',
        'background': '#ebdeed',
        'primary': '#fb1099',
        'secondary': '#d3f8e2',
        'accent': '#a830b5'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans'],
        serif: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
  
}

