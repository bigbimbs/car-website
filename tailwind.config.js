/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      blue_1: "#2196f3",
      blue_2: "#3062b4",
      blue_3: "#3b79de",
      grey_1: "#4f4f4f",
      grey_2: "#828282",
      grey_3: "#cfcdcd",
      grey_4: "#727272",
      gold_1: "#eda01f",
      gold_2: "#fdeed6",
      gold_3: "#ffb73e",
      bg_col: "#2f3034",
      bd_col: "#C5CACE",
      bd_2_col: "#a09c9c",
    },
    fontSize: {
      20: "20px",
      36: "36px",
      60: "60px",
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
    fontFamily: {},
    lineHeight: { 24: "24px", 31.4: "31.4px", 56.62: "56.52px", 72: "72px" },
  },
  plugins: [],
};
