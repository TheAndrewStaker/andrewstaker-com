"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: Quicksand (headings) + Nunito (body)
const pastelSoft = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#7c6bc4" },
    secondary: { main: "#f0a1c4" },
    background: {
      default: "#faf5ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#4a3a6b",
      secondary: "#7b6b9b",
    },
  },
  typography: {
    fontFamily: '"Nunito", "Helvetica", sans-serif',
    h1: {
      fontFamily: '"Quicksand", "Nunito", sans-serif',
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 5vw, 2rem)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Quicksand", "Nunito", sans-serif',
      fontWeight: 500,
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
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 24 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 50,
          paddingInline: 28,
          paddingBlock: 10,
        },
        contained: {
          boxShadow: "0 4px 14px rgba(124,107,196,0.25)",
          "&:hover": { boxShadow: "0 6px 20px rgba(124,107,196,0.35)" },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": { borderWidth: 2 },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 4px 20px rgba(124,107,196,0.08)",
          border: "1px solid #ede5f7",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Quicksand", sans-serif',
          borderRadius: 50,
          backgroundColor: "#ede5f7",
          color: "#5b4a8a",
          fontSize: "0.813rem",
          fontWeight: 500,
        },
      },
    },
  },
});

export default pastelSoft;
