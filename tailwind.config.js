/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          strong: "#ff5a1f",
          soft: "#ffb199",
        },
        dark: "#07080d",
        card: "rgb(255 255 255 / .065)",
        muted: "#9aa4b2",
      },
      borderColor: {
        DEFAULT: "rgb(255 255 255 / .12)",
      },
      animation: {
        title: "title .85s cubic-bezier(.22,1,.36,1) both",
        "fade-in": "fade-in .9s ease-out both",
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
      keyframes: {
        title: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 115%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-18px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: ".55",
            transform: "scale(1)",
          },
          "50%": {
            opacity: ".95",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
