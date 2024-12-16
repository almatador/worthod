/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        mainColor: "#D01025",
        secoundColor: "#fff",
        thirdColor: "#6B6B6B",
        AddText:"#5E5E5E",
      },
      backgroundColor: {
        mainBgColor: "#7E7D7D",
        secoundBgColor: "#cccccc",
        thirdBgColor: "#f6f6f6",
        AddButton:"#ffffff",
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "740px",
        xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};