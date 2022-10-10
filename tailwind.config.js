/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        project: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(217, 12%, 63%)",
          300: "hsl(216, 12%, 54%)",
          400: "hsl(213, 19%, 18%)",
          500: "hsl(214, 20%, 10%)",
          600: "hsl(216, 12%, 7%)",
          700: "hsl(25, 97%, 53%)",
        },
      },
      fontFamily: {
        overpass: ["'Overpass'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
