module.exports = {
  content: ["./views/**/*.{html,js}", "./public/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
}
