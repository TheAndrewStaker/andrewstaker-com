"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: JetBrains Mono (body) + Space Mono (headings/UI)
const darkHacker = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00ff41" },
    secondary: { main: "#00d4ff" },
    background: {
      default: "#0a0a0a",
      paper: "#141414",
    },
    text: {
      primary: "#00ff41",
      secondary: "#00d4ffcc",
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    h1: {
      fontFamily: '"Space Mono", "JetBrains Mono", monospace',
      fontWeight: 500,
      fontSize: "clamp(1.15rem, 5vw, 1.85rem)",
      letterSpacing: "0.04em",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Space Mono", "JetBrains Mono", monospace',
      fontWeight: 400,
      fontSize: "0.95rem",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
      fontWeight: 400,
    },
    body2: {
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
      fontSize: "0.688rem",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "1px solid #00ff41",
        },
        contained: {
          backgroundColor: "#00ff41",
          color: "#0a0a0a",
          "&:hover": { backgroundColor: "#00cc33" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "1px solid #00ff4133",
          backgroundColor: "#141414",
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "1px solid #00ff4155",
          fontSize: "0.688rem",
          fontWeight: 400,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)",
        },
      },
    },
  },
});

export default darkHacker;
