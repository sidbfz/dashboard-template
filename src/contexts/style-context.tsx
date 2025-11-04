"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type StyleType = "minimal" | "neumorphism" | "neobrutalism" | "glassmorphism";

interface StyleContextType {
  currentStyle: StyleType;
  setStyle: (style: StyleType) => void;
}

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [currentStyle, setCurrentStyle] = useState<StyleType>("minimal");

  useEffect(() => {
    // Load saved style from localStorage
    const savedStyle = localStorage.getItem("dashboard-style") as StyleType;
    if (savedStyle && (savedStyle === "minimal" || savedStyle === "neumorphism" || savedStyle === "neobrutalism" || savedStyle === "glassmorphism")) {
      setCurrentStyle(savedStyle);
    }
  }, []);

  useEffect(() => {
    // Apply style class to document
    document.documentElement.setAttribute("data-style", currentStyle);
    // Save to localStorage
    localStorage.setItem("dashboard-style", currentStyle);
  }, [currentStyle]);

  const setStyle = (style: StyleType) => {
    setCurrentStyle(style);
  };

  return (
    <StyleContext.Provider value={{ currentStyle, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
}
