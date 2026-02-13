// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <- your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-animate-css"), // if using this plugin
  ],
};
