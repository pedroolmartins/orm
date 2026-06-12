const path = require('path');
module.exports = {
  content: [
    path.join(__dirname, '*.html'),
    path.join(__dirname, 'js', '**', '*.js')
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#B00B0B',
          500: '#8A0505',
          600: '#3A0505',
        },
        dark: {
          900: '#0A0A0A',
          800: '#141414',
          700: '#222222',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
