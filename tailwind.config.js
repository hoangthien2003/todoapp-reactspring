/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: {
        200: "#F6F8F9",
        300: "#E8ECEE",
        350: "#E6E9EF",
        600: "#848588",
        900: "#323338",
      },
      white: "#FFF",
      purple: "#5F48EA",
      cyan: "#08C7E0",
      red: {
        300: "#E44258",
      },
    },
  },
  plugins: [],
};
