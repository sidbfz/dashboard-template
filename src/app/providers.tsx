"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { StyleProvider } from "@/contexts/style-context";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <StyleProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </StyleProvider>
    </ThemeProvider>
  );
}
