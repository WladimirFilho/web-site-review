/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        100: "1000px",
        50: "800px",
        cardHeight: "450px",
      },
      width: {
        cardWidth: "226px",
      },
    },
  },

  plugins: [],
};
