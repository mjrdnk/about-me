module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "rgb(73, 221, 129)",
        brightGray: "rgb(241, 246, 249)",
      },
      borderRadius: {
        lg: "1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
