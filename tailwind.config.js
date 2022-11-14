/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "32px",
        lg: "36px",
        xl: "72px",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1320px) { ... }

      xl: "1320px",
    },
    extend: {
      colors: {
        primary01: "#6029F5",
        primary01_dark: "#895CDD",
        primary01_light: "#B79CFF",
        primary02: "#F8CC46",
        primary02_dark: "#DFB73F",
        primary02_light: "#FFE79E",
        primary03: "#79EAEE",
        primary03_dark: "#6DD2D6",
        secondary01: "#E335FF",
        secondary01_light: "#F9D1FF",
      },
    },
  },
  plugins: [],
};
