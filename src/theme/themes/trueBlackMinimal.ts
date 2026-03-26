"use client";

import { createTheme } from "@mui/material/styles";

// Inspired by Vercel, Linear, ChatGPT dark modes
// True black backgrounds, borderless cards, neutral grays, premium SaaS feel
const trueBlackMinimal = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#5E6AD2" },
    secondary: { main: "#4CB782" },
    background: {
      default: "#000000",
      paper: "#111111",
    },
    text: {
      primary: "#EDEDED",
      secondary: "#666666",
    },
    divider: "#222222",
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: "clamp(1.25rem, 5vw, 1.85rem)",
      letterSpacing: "-0.03em",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontWeight: 400,
      color: "#A1A1A1",
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: "#666666",
    },
    button: {
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    caption: {
      fontSize: "0.688rem",
      fontWeight: 400,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none", opacity: 0.9 },
        },
        outlined: {
          borderColor: "#222222",
          "&:hover": { borderColor: "#333333", backgroundColor: "rgba(255,255,255,0.02)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "none",
          backgroundColor: "#111111",
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 400,
          fontSize: "0.688rem",
          letterSpacing: "0.02em",
          height: 24,
        },
        outlined: {
          borderColor: "#222222",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#1A1A1A" },
      },
    },
  },
});

export default trueBlackMinimal;
