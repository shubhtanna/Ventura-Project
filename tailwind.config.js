/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {
      
//     },
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        // Custom colors based on the image
        customGray: '#6B7280',
        customBlack: '#111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


