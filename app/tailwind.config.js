const colorstw = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: { ...colorstw,
      'pw-orange': '#FF7000',
      'pw-green': '#00BF89',
      'pw-blue': '#5089FF'
    },
    extend: {},
  },
  plugins: [],
}