import type { Config } from "tailwindcss";

const config: Config = {
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
      backgroundImage: {
        'home-mobile': "url('/assets/images/bg-lines-mobile.png')",
        'home-desktop': "url('/assets/images/bg-lines.png')",
        'dashboard-squares': "url('/assets/images/dashboard-squares.png')",
      }
    },
  },
  plugins: [],
};
export default config;
