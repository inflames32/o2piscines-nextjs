const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "Calibri"],
    },
    backgroundColor: {
      ciment: "#f3f3f3",
    },
    textColor: {
      f0f: "#f0f",
      ciment: "#f3f3f3",
    },
    extend: {},
  },
  variants: {
    extend: {
      height: ["hover"],
      width: ["hover"],
    },
  },
  plugins: [],
};
