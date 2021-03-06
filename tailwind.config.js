module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      // font-family: 'Alfa Slab One', cursive;
      // font-family: 'Archivo Black', sans-serif;
      // font-family: 'Patua One', cursive;
      // font-family: 'Roboto Slab', serif;
      fontFamily: {
        "Alfa-Slab-One": ["Alfa Slab One", "cursive"],
        "Archivo-Black": ["Archivo Black", "sans-serif"],
        "Patua-One": ["Patua One", "cursive"],
        "Roboto-Slab": ["Roboto Slab", "serif"],
        "Space-Mono": ["Space Mono", "monospace"],
      },
      animation: {
        "scale-up-center":
          "scale-up-center 0.9s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(.8)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "active"],
    },
  },
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
