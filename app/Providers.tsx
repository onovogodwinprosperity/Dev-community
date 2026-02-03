"use client";

import { ThemeProvider } from "next-theme";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnchange>
      {children}
    </ThemeProvider>
  );
}
