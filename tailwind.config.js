/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'jaini-purva': ['var(--font-jaini-purva)', 'sans-serif'],
      },
      screens: {
        maxLg: "1920px",
        xlg: "1680px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
