/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {

      '2xs': '320px',
      // min 320 max 575px
      'xs': '460px',

      'sm': '576px',
      // => @media (min-width: 576px max 767px) { ... }

      'md': '768px',
      // => @media (min-width: 768px max 991px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px max 1239px) { ... }

      'xl': '1240px',
      // => @media (min-width: 1240px 1535px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {

      backgroundImage: {
        'hero-pattern': "url('/assets/banner/banner-bg.png')",
        // 'auth-pattern' :"url('/assets/')
      },

      boxShadow: {
        'soft': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },

      colors: {
        'primary': '#01204e',
        'skyblue' : "#30bced",

        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
  
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Roboto :['Roboto','sans-serif' ]
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}