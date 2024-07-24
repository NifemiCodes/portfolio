/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{tsx, ts, js, html}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      blackT: "rgba(0, 0, 0, 0.5)",
      whiteT: "rgba(255, 255, 255, 0.5)",
      hoverGrey: "#f5f5f5",
      lightGrey: "#d3d3d3",
      grey: "#a9a9a9",
      links: "#072ac8",
      red: "#ff0000",
      navy: "#00022b",
      navyT: "#00022b4d",
      cyan: "cyan",
    },
    fontFamily: {
      anton: "Anton, Impact, sans-serif",
      mont: "Montserrat, sans-serif",
      roboto: "Roboto Condensed, sans-serif",
      julius: "Julius Sans One, Roboto Sans Open, sans-serif",
      raj: "Rajdhani, sans-serif",
      courier: "Courier New, sans-serif",
    },
    extend: {
      keyframes: {
        scroll: {
          "100%": { translate: "-100%" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        fade: "fade 1s linear",
      },
    },
  },
  plugins: [],
};
