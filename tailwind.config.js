module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": {
            transform: "translateY(80%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            transform: "translateX(120%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        moveIn: {
          "0%": {
            transform: "translateX(-20%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        moveOut: {
          "0%": {
            transform: "translateX(-20%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "wave-handing": "wave 1s linear ",
        fadeIn: "fadeIn 1s linear",
        "move-in": "moveIn 0.8s linear",
        "move-out": "moveOut 0.1s linear",
      },
    },    
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
