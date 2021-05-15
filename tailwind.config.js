module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        sm: "25%",
        m: "50%",
        ml: "75%",
        l: "100%"
      }
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
    extend: {},
  },
  plugins: [],
}
