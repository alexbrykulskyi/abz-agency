/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4E041",
        secondary: "#00BDD3",
        background: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
