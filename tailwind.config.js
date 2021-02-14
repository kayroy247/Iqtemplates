module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/src/img/hero-image.png')",

      })
    },
    colors: {
      purple: {
        DEFAULT: '#4E598C'
      },
      yellow: {
        DEFAULT: '#F2994A'
      },
      gray: {
        DEFAULT: '#BDBDBD'
      },
      buttonbg: {
        DEFAULT: 'linear-gradient(180deg, #F2C94C 0%, #F2994A 100% )'
      },
      blue: {
        DEFAULT: '#2F80ED'
      },
      borderblue: {
        DEFAULT: '#4E598C'
      },
      bordergray: {
        DEFAULT: '#817E9E'
      },
      red: {
        DEFAULT: '#EB5757'
      },
      phcolor: {
        DEFAULT: '#4F4F4F'
      },
      lightblue: {
        DEFAULT: '#817E9E'
      }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
