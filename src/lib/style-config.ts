// Style utility to dynamically load Tailwind config based on selected style

export type StyleType = "minimal" | "neumorphism" | "neobrutalism" | "glassmorphism";

export const STYLE_CONFIGS = {
  minimal: {
    name: "Minimal",
    description: "Clean and simple design with soft pastel colors",
    colors: {
      primary: "#FF99C8",
      secondary: "#A9DEF9",
      accent: "#E4C1F9",
      background: "#FFFFFF",
    },
  },
  neumorphism: {
    name: "Neumorphism",
    description: "Soft UI design with subtle shadows and depth",
    colors: {
      primary: "#667EEA",
      secondary: "#764BA2",
      accent: "#F093FB",
      background: "#E0E5EC",
    },
  },
  neobrutalism: {
    name: "Neobrutalism",
    description: "Bold design with thick borders and vibrant colors",
    colors: {
      primary: "#FFD700",
      secondary: "#FF6B6B",
      accent: "#4ECDC4",
      background: "#FFFFFF",
    },
  },
  glassmorphism: {
    name: "Glassmorphism",
    description: "Frosted glass effect with vibrant gradient colors",
    colors: {
      primary: "#00D4FF",
      secondary: "#7C3AED",
      accent: "#EC4899",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  },
} as const;

export function getStyleConfig(style: StyleType) {
  return STYLE_CONFIGS[style] || STYLE_CONFIGS.minimal;
}
