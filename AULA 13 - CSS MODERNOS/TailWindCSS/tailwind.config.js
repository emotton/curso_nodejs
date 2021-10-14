module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: theme => ({
        "highlander": "url(highlander.jpeg)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
