/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
      phone: "570px",
      medium: "990px",
       large: "1025px",
       
    },
      fontFamily: {
        primary: ['spacegrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
