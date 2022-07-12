/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        offWhite: "#f5f5f5",
        lightGray: "#dcdcdc",
        grayT: "rgb(209 213 219)",
        grayS: "rgb(55 65 81);",
        grayB: "#918e9b",
        dark: "#161619",
        darkL: "#1a1b21",
        darkL2: "#1e1f26",
        darkL3: "#23252c",
        darkBlue: "#374151",
        oceanBlue: "#5093e2",
        lightBrown: "#f3bf99",
      },
    },
  },
  plugins: [require("daisyui")],
};
