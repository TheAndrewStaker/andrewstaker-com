"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeContextProvider } from "@/theme/ThemeContext";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AppRouterCacheProvider>
  );
}
