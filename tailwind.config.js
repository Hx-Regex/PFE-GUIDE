/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      // => @media (min-width: 640px) { ... }
      'smmax': {'max' : '640px'},
      'navmax': {'max' : '710px'},
      'md': {'max': '840px'},
      // => @media (min-width: 768px) { ... }
      'dn': '844px',
      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'textround': { 'max' : '710px'},
      'textroundsm': { 'max' : '480px'},
      'lgm': '1350px',
      'lgmax': {'max':'1350px'},
      'lapmax': {'max':'1030px'}
    },

    extend: {},
  },
  plugins: [],
}

