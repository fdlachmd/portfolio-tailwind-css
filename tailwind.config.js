/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      rotate: {
        '17': '17deg'
      },
      colors: {
        primary: "#139487",
        secondary: '#64748b',
        dark: "#0f172a",
      },
      screens : {
        "2xl": "1320px",
      },
      
    },
  },
  plugins: [],
};
