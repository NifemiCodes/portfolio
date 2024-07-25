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
      navyT: "#00022b4d",
      bgDark: "#00022b",
      secBgL: "#e0e0e0",
      secBgD: "#a0a0a0",
      links: "#1e88e5",
      lightGrey: "#f5f5f5",
      grey: "#a9a9a9",
    },
    fontFamily: {
      anton: "Anton, Impact, sans-serif",
      mont: "Montserrat, sans-serif",
      raj: "Rajdhani, sans-serif",
      courier: "Courier New, sans-serif",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, "margin-top": "150px" },
          "100%": { opacity: 1, "margin-top": "0px" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadein: "fadeIn 1.5s ease-in-out",
        fade: "fade 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
