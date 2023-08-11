/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
      '2': '2px',
      '0': '0px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        san: ['Plus Jakarta Sans', 'sans-serif'],
        fair: ['Playfair Display', 'serif'],
      },
      colors: {
        "nb-1": "#1c3144",
        "tc-1": "#808080",
        "midd": "#f7f8f9",
      },
    },
  },
  plugins: [],
}

