"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: Inter (single-family system — weight & size create hierarchy)
const cleanModern = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 5vw, 2rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.05rem",
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "0.938rem",
      lineHeight: 1.65,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.813rem",
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.75rem",
      letterSpacing: "0.02em",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 12 },
  shadows: [
    "none",
    "0 1px 3px rgba(0,0,0,0.08)",
    "0 2px 6px rgba(0,0,0,0.08)",
    "0 4px 12px rgba(0,0,0,0.1)",
    "0 6px 16px rgba(0,0,0,0.1)",
    "0 8px 24px rgba(0,0,0,0.12)",
    ...Array(19).fill("0 8px 24px rgba(0,0,0,0.12)"),
  ] as unknown as typeof createTheme.prototype.shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 8 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 400, fontSize: "0.813rem" },
      },
    },
  },
});

export default cleanModern;
