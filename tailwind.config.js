/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        "10%": "10%",
        "20%": "20%",
        "5%": "5%",
      },
      colors: {
        neutral_white: "#FFFCFC",
        neutral_dark: "#1C1C1C",
        secondary_yellow: "#FE9E00",
        primary_green: "#00A783",
      },
    },
  },
  plugins: [],
};
