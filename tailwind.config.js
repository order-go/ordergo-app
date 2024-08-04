/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ff2a", // Color principal
        secondary: "#ffed4a", // Color secundario
        accent: "#e3342f", // Color de acento
        tertiary: "#000000",
        neutral: {
          light: "#f5f5f5",
          DEFAULT: "#d1d1d1",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
};
