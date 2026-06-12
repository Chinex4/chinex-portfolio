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
        title: "title 1.2s cubic-bezier(.19,1,.22,1) forwards",
        "fade-in": "fade-in .9s ease-out both",
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
      keyframes: {
        title: {
          "0%": {
            opacity: 0,
            "line-height": "0%",
            transform: "scale(1.25)",
          },
          "25%": {
            opacity: 0,
            "line-height": "0%",
            transform: "scale(1.25)",
          },
          "80%": {
            opacity: 1,
            "line-height": "50%",
          },
          "100%": {
            opacity: 1,
            "line-height": "100%",
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
