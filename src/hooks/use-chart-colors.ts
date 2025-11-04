"use client";

import { useStyle } from "@/contexts/style-context";
import { useMemo } from "react";

const COLOR_SCHEMES = {
  minimal: {
    primary: ["#FF99C8", "#FCF6BD", "#D0F4DE", "#A9DEF9"],
    secondary: ["#E4C1F9", "#A9DEF9"],
    tertiary: ["#FF99C8", "#E4C1F9"],
    quaternary: ["#E4C1F9", "#FF99C8", "#A9DEF9", "#D0F4DE", "#FCF6BD"],
    single: "#A9DEF9",
  },
  neumorphism: {
    primary: ["#667EEA", "#764BA2", "#F093FB", "#8B9DF0"],
    secondary: ["#667EEA", "#764BA2"],
    tertiary: ["#667EEA", "#F093FB"],
    quaternary: ["#667EEA", "#764BA2", "#F093FB", "#8B9DF0", "#A78BFA"],
    single: "#667EEA",
  },
  neobrutalism: {
    primary: ["#FFD700", "#FF6B6B", "#4ECDC4", "#FF9F1C"],
    secondary: ["#FFD700", "#4ECDC4"],
    tertiary: ["#FF6B6B", "#FFD700"],
    quaternary: ["#FFD700", "#FF6B6B", "#4ECDC4", "#06D6A0", "#9D4EDD"],
    single: "#4ECDC4",
  },
  glassmorphism: {
    primary: ["#00D4FF", "#7C3AED", "#EC4899", "#10B981"],
    secondary: ["#00D4FF", "#7C3AED"],
    tertiary: ["#EC4899", "#10B981"],
    quaternary: ["#00D4FF", "#7C3AED", "#EC4899", "#10B981", "#F59E0B"],
    single: "#00D4FF",
  },
} as const;

export function useChartColors() {
  const { currentStyle } = useStyle();

  return useMemo(() => {
    return COLOR_SCHEMES[currentStyle] || COLOR_SCHEMES.minimal;
  }, [currentStyle]);
}
