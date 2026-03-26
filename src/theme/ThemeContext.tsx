"use client";

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeOptions, ThemeOption } from "@/theme/themes";
import NativeFeelStyles from "@/theme/NativeFeelStyles";

interface ThemeContextValue {
  currentTheme: ThemeOption;
  setThemeByKey: (key: string) => void;
  themeOptions: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "andrewstaker-theme";
const DEFAULT_KEY = themeOptions[0].key;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function resolveInitialKey(initialTheme?: string): string {
  if (initialTheme && themeOptions.some((t) => t.key === initialTheme)) {
    return initialTheme;
  }
  return DEFAULT_KEY;
}

interface ThemeContextProviderProps {
  children: ReactNode;
  initialTheme?: string;
}

export function ThemeContextProvider({ children, initialTheme }: ThemeContextProviderProps) {
  const [themeKey, setThemeKey] = useState(() => resolveInitialKey(initialTheme));

  const setThemeByKey = useCallback((key: string) => {
    setThemeKey(key);
    localStorage.setItem(STORAGE_KEY, key);
    document.cookie = `${STORAGE_KEY}=${key};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
  }, []);

  const currentTheme = useMemo(
    () => themeOptions.find((t) => t.key === themeKey) ?? themeOptions[0],
    [themeKey],
  );

  const value = useMemo(
    () => ({ currentTheme, setThemeByKey, themeOptions }),
    [currentTheme, setThemeByKey],
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme.theme}>
        <CssBaseline />
        <NativeFeelStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeContextProvider");
  return ctx;
}
