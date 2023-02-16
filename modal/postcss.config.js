module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      	require('postcss-import'),
        require('postcss-mixins'),
        require("stylelint"),
        require('cssnano'),
    ],


}