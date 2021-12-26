module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
