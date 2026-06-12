module.exports = {
  content: ["./*.html", "./js/**/*.js"],
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
