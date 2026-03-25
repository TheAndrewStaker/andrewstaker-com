"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: Playfair Display (headings) + Source Sans 3 (body/UI)
const warmEarthy = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c1694f" },
    secondary: { main: "#7c9473" },
    background: {
      default: "#f5f0e8",
      paper: "#fdfaf4",
    },
    text: {
      primary: "#3d2c2c",
      secondary: "#6b5252",
    },
  },
  typography: {
    fontFamily: '"Source Sans 3", "Helvetica", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 5vw, 2.1rem)",
      letterSpacing: "-0.01em",
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Source Sans 3", "Helvetica", sans-serif',
      fontWeight: 600,
      fontSize: "1rem",
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
      fontWeight: 400,
      fontStyle: "italic",
    },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 24,
          paddingInline: 24,
        },
        contained: {
          boxShadow: "0 2px 8px rgba(193,105,79,0.3)",
          "&:hover": { boxShadow: "0 4px 16px rgba(193,105,79,0.4)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 2px 12px rgba(61,44,44,0.06)",
          border: "1px solid #e8dfd3",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#e8dfd3",
          color: "#3d2c2c",
          fontSize: "0.813rem",
          fontWeight: 400,
        },
      },
    },
  },
});

export default warmEarthy;
