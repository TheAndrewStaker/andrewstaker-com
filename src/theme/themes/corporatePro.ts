"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: IBM Plex Sans (body) + IBM Plex Mono (accents) — single family system
const corporatePro = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1a365d" },
    secondary: { main: "#718096" },
    background: {
      default: "#f7fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a202c",
      secondary: "#4a5568",
    },
    divider: "#e2e8f0",
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "clamp(1.2rem, 5vw, 1.85rem)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: "0.938rem",
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontSize: "0.688rem",
      letterSpacing: "0.03em",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
          fontSize: "0.813rem",
        },
        contained: {
          "&:hover": { boxShadow: "0 1px 4px rgba(26,54,93,0.2)" },
        },
        outlined: {
          borderColor: "#cbd5e0",
          color: "#1a365d",
          "&:hover": { backgroundColor: "#edf2f7", borderColor: "#a0aec0" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: "1px solid #e2e8f0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "0.688rem",
          height: 26,
        },
      },
    },
  },
});

export default corporatePro;
