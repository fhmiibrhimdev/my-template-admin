module.exports = {
  content: ["./resources/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter, sans-serif"],
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
