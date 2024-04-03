/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray-light': '#C0A18F',
        'custom-gray-dark': '#A68A7C',
        'custom-brown-light': '#B85902',
        'custom-brown-dark': '#8C5D33',
        'custom-brown-light': '#B85902',
        'custom-white-light': '#F4E9E1',	
        'custom-plum-light': '#9D5783',
        'custom-plum-dark': '#560737',
        'custom-purple-dark': '#c18eda',
        'custom-redpurple-dark': '#db93ac',







      },
      fontFamily: {
        'sans': ['Exatatica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}