/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "selector",
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      primary: {
        light: "#edeff7",
        "light-hover": "#e4e7f2",
        "light-active": "#c7cde5",
        normal: "#4b5eaa",
        "normal-hover": "#445599",
        "normal-active": "#3c4b88",
        dark: "#384780",
        "dark-hover": "#2d3866",
        "dark-active": "#222a4c",
        darker: "#1a213b",
      },
      secondary: {
        light: "#fffaea",
        "light-hover": "#fff7df",
        "light-active": "#ffeebc",
        normal: "#ffc928",
        "normal-hover": "#e6b524",
        "normal-active": "#cca120",
        dark: "#bf971e",
        "dark-hover": "#997918",
        "dark-active": "#735a12",
        darker: "#59460e",
      },
      dark: {
        lighter: "#b2bbc6",
        "light-hover": "#a3adbb",
        "light-active": "#909dad",
        "normal-hover": "#47586e",
        "normal-active": "#3d4c5e",
        dark: "#1d242d",
        "dark-hover": "#151a20",
        "dark-active": "#090b0e",
      },
      cyan: {
        light: "#eef9fa",
        "light-hover": "#e6f6f8",
        "light-active": "#cbedf0",
        normal: "#56c5d0",
        "normal-hover": "#4db1bb",
        "normal-active": "#459ea6",
        dark: "#41949c",
        "dark-hover": "#34767d",
        "dark-active": "#27595e",
        darker: "#1e4549",
      },
      surface: {
        white: "#ffffff",
        "white-hover": "#fdfdfe",
        "white-active": "#f8f9fb",
        light: "#fdfdfe",
        "light-hover": "#f8f9fb",
        "light-active": "#f4f6f9",
        normal: "#fafcfc",
        "normal-hover": "#f5f7f9",
        "normal-active": "#eff3f6",
        dark: "#f8fafb",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
