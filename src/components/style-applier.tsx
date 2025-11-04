"use client";

import { useStyle } from "@/contexts/style-context";
import { useEffect } from "react";

// Component to apply dynamic background based on selected style
export function StyleApplier() {
  const { currentStyle } = useStyle();

  useEffect(() => {
    const root = document.documentElement;
    
    if (currentStyle === "neumorphism") {
      // Apply neumorphism colors
      root.style.setProperty("--color-primary", "#667EEA");
      root.style.setProperty("--color-background", "#E0E5EC");
    } else if (currentStyle === "neobrutalism") {
      // Apply neobrutalism colors
      root.style.setProperty("--color-primary", "#FFD700");
      root.style.setProperty("--color-background", "#FFFFFF");
    } else {
      // Apply minimal colors
      root.style.setProperty("--color-primary", "#FF99C8");
      root.style.setProperty("--color-background", "#FFFFFF");
    }
  }, [currentStyle]);

  return null;
}
