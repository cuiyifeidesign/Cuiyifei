/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', "system-ui", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.625", // 已在布局中使用，如不需要可移除
      },
    },
  },
  plugins: [],
};
