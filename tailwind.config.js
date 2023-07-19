/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#FFFFFFB2",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
      backgroundImage: {
        texture: "url('bg.jpg')",
      },
      spacing: {
        98: "94vh",
      },
      fontSize: {
        "7xl": [
          "8.875rem",
          {
            lineHeight: "7.7625rem",
            letterSpacing: "0.06em",
            fontWeight: "400",
          },
        ],
        "6xl": [
          "6.875rem",
          {
            lineHeight: "6.5625rem",
            letterSpacing: "0.06em",
            fontWeight: "400",
          },
        ],
        "5xl": [
          "5.3rem",
          {
            lineHeight: "5.25rem",
            letterSpacing: "0.06em",
            fontWeight: "400",
          },
        ],
        "4xl": [
          "4.2rem",
          {
            lineHeight: "5rem",
            letterSpacing: "0.06em",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "3rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.06em",
            fontWeight: "400",
          },
        ],
      },
    },
    screens: {
      xxs: "350px",
      xs: "480px",
      ss: "620px",
      sm: "855px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
