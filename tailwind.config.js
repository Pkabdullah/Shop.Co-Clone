// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          spinSlow: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          spinReverse: {
            "0%": { transform: "rotate(360deg)" },
            "100%": { transform: "rotate(0deg)" },
          }
        },
        animation: {
          spinSlow: "spinSlow 6s linear infinite",
          spinReverse: "spinReverse 8s linear infinite",
        },
      },
    },
    plugins: [],
  };
  