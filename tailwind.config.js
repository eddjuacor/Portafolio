/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['"Fraunces"','serif'], 
        'roboto': ['"Roboto"','sans-serif'] 
       
      },
    },
  },
  plugins: [],
}

