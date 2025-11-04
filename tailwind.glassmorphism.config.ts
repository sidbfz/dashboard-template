import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#1C2434",
        "glass-cyan": "#00D4FF",
        "glass-purple": "#7C3AED",
        "glass-pink": "#EC4899",
        "glass-green": "#10B981",
        "glass-orange": "#F59E0B",
        body: "rgba(255, 255, 255, 0.75)",
        dark: "rgba(255, 255, 255, 0.95)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.1)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.2)",
        "glass-inset": "inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "glass-radial":
          "radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
