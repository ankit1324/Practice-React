/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        myblack: "#0D0D0D",
        mySign: "#12B0E8",
        myblue: "#207398",
      },
    },
  },
  plugins: [],
};
