/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        display: ["var(--font-satisfy)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          primary: "#2A5E73",
          hover: "#3A7C97",
          dark: "#012325",
          light: "#C1D6D9",
        },
      },
    },
  },
  plugins: [],
};
