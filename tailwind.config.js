/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#141414",
        background: "#E8E8E8",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/hero.png')",
        "hero-pattern2": "url('./assets/hero-panttern2.png')",
        "hero-pattern3": "url('./assets/bgsignup.png')",
        "shop-banner": "url('./assets/shop-banner.png')",
      },
    },
  },
  plugins: [],
};
