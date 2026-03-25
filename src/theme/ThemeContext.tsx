"use client";

import { createContext, useContext, useState, useCallback, useMemo, useEffect, ReactNode } from "react";
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

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [themeKey, setThemeKey] = useState(DEFAULT_KEY);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && themeOptions.some((t) => t.key === stored)) {
      setThemeKey(stored);
    }
  }, []);

  const setThemeByKey = useCallback((key: string) => {
    setThemeKey(key);
    localStorage.setItem(STORAGE_KEY, key);
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
