import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        borderColor: {
          '0%, 100%': {
            borderColor: '#b5f6ec'
          },
          '50%': {
            borderColor: '#00beff'
          }, 
        }
      },
      animation: {
      borderColor: 'borderColor 2s infinite',
    },
    },
  },
  plugins: [],
};
export default config;
