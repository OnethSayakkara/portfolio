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
      xmedium: "860px",
      medium: "990px",
       large: "1025px",
       xlarge: "1400px",
       
    },
      fontFamily: {
        primary: ['spacegrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
