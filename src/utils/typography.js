import Typography from "typography";
// import lincoln from "typography-theme-lincoln";
// import fairyGates from "typography-theme-fairy-gates";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.2,
  scaleRatio: 1.8,
  headerFontFamily: [
    "Nunito Sans",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  headerWeight: "600",
  bodyFontFamily: ["Work Sans", "serif"],
  bodyWeight: "300",
  googleFonts: [
    {
      name: "Work Sans",
      styles: ["700", "600", "400", "300"]
    },
    {
      name: "Nunito Sans",
      styles: ["300", "400", "600"]
    }
  ],
  bodyGrayHue: "cool"
});

export default typography;
