module.exports = {
  content: ["./public/index.html", "./src/components/*.js"],
  theme: {

    fontFamily: {

      display: ['Raleway'],
      body: ['Graphik']

    },

    extend: {},
  },
  plugins: [
  
    /// ...
  
    require('@tailwindcss/forms')
  ],
}