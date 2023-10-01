/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width: { navWidth: "912px", navWidthExpanded: "932px" },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      // Add your custom z-index values here
      50: 50,
      100: 100,
    },
    extend: {},
  },
  plugins: [],
};
