"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeContextProvider } from "@/theme/ThemeContext";

interface ThemeRegistryProps {
  children: ReactNode;
  initialTheme?: string;
}

export default function ThemeRegistry({ children, initialTheme }: ThemeRegistryProps) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeContextProvider initialTheme={initialTheme}>
        {children}
      </ThemeContextProvider>
    </AppRouterCacheProvider>
  );
}
