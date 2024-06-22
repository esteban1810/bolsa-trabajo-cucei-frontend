module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#D87A2D'
      },
      width: {
        'custom': 'min(120rem, 95%)',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/image.png.svg')",
      },
    },
  },
  plugins: [],
}
