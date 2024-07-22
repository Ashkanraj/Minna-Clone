/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#f9bcac",
        orange: "#ffc73b",
        pineapple: "#f5e65b",
        lightpurple: "#f9cddd",
        limegreen: "#cce981",
        lightblue: "#b9edd6",
        darkgreen: "#004534",
        lightgray: "#ededed",
      },
    },
  },
  plugins: [],
};
