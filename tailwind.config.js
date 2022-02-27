const colors = [
  "#d9ed92", //0
  "#b5e48c", //1
  "#99d98c", //2
  "#76c893", //3
  "#52b69a", //4
  "#34a0a4", //5
  "#168aad", //6
  "#1a759f", //7
  "#1e6091", //8
  "#184e77", //9
];

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: colors[8],
          primaryVariant: colors[9],
          secondary: colors[1],
          secondaryVariant: colors[2],
          background: colors[5],
          surface: colors[4],
          error: "#B00020",
          onPrimary: colors[0],
          onSecondary: colors[7],
          onBackground: "#000000",
          onSurface: "#000000",
          onError: "#FFFFFF",
        },
        dark: {
          primary: colors[0],
          primaryVariant: colors[1],
          onSecondary: colors[2],
          secondary: colors[5],
          secondaryVariant: colors[6],
          onPrimary: colors[6],
          surface: colors[7],
          background: colors[9],
          error: "#B00020",
          onBackground: "#000000",
          onSurface: "#000000",
          onError: "#FFFFFF",
        },
      },
      fontFamily: {
        overpass: ['"Overpass"', "sans-serif"],
      },
    },
  },
};
