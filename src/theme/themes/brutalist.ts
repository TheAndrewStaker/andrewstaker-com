"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: Space Grotesk (headings/body) + Space Mono (UI accents)
const brutalist = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#000000" },
    secondary: { main: "#ff3d00" },
    background: {
      default: "#f5f5f0",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 5vw, 2.2rem)",
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      lineHeight: 1,
    },
    h2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    body1: {
      fontSize: "0.938rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Space Mono", monospace',
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 400,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
    },
    caption: {
      fontFamily: '"Space Mono", monospace',
      fontSize: "0.688rem",
      textTransform: "uppercase" as const,
      letterSpacing: "0.1em",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "3px solid #000",
          boxShadow: "4px 4px 0 #000",
          "&:hover": {
            boxShadow: "2px 2px 0 #000",
            transform: "translate(2px, 2px)",
          },
          "&:active": {
            boxShadow: "0 0 0 #000",
            transform: "translate(4px, 4px)",
          },
        },
        contained: {
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": { backgroundColor: "#222" },
        },
        outlined: {
          backgroundColor: "#fff",
          "&:hover": { backgroundColor: "#f5f5f0" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "3px solid #000",
          boxShadow: "6px 6px 0 #000",
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Mono", monospace',
          borderRadius: 0,
          border: "2px solid #000",
          textTransform: "uppercase",
          fontSize: "0.625rem",
          letterSpacing: "0.05em",
          fontWeight: 400,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#000", borderWidth: 2 },
      },
    },
  },
});

export default brutalist;
