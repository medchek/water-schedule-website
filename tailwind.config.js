module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "wave-lines": "url('/imgs/wave-lines.svg')",
      },
      screens: {
        xl: "1360px",
      },
      colors: {
        appBlue: "#145DFF",
        appDarkBlue: "#111A47",
        appDarkPurple: "#1D2D78",
        applightBlue: "#4D84FF",
        appGrey: "#F3F5FC",
        appLightGray: "#F4F6FC",
        appPurpleGrey: "#F1F5FF",
        headerLink: "#E5E9FF",
        // dark theme colors
        darkAppHero: "#091342",
        darkAppBg: "#00072A",
        darkAppDlBg: "#111A47",
      },
      minHeight: {
        16: "4rem",
      },
      height: {
        130: "27.2rem",
        150: "33rem",
        155: "34.6rem",
        200: "52.5rem",
      },
      width: {
        100: "28.9rem",
        160: "37.7rem",
      },
      fontSize: {
        "7xl-plus": "5.4rem",
      },
    },
  },
  plugins: [],
};
