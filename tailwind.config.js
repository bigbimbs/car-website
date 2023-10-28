/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      orange: "#FF5C3D",
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
