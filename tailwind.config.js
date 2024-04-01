/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outlines: ['Outlines', 'sans-serif'],
      },
      colors: {
        navbar: '#5AD593',
        banner: '#C6FDAD',
        hitam: '#1A282B',
        elipse: '#5FD395'
      }, 
      fontSize: {
        besar: '51.6px',
        medium: '20px'
      }
    },
  },
  plugins: [],
}
