
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
