"use client";

import { createTheme } from "@mui/material/styles";

// Inspired by GitHub Dark, VS Code Dark+, JetBrains New UI Dark
// Cool blue-black backgrounds, blue accents, developer tools aesthetic
const coolNeutral = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#58A6FF" },
    secondary: { main: "#3FB950" },
    background: {
      default: "#0D1117",
      paper: "#161B22",
    },
    text: {
      primary: "#E6EDF3",
      secondary: "#8B949E",
    },
    divider: "#30363D",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: "clamp(1.25rem, 5vw, 2rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.05rem",
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
    },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
        },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        outlined: {
          borderColor: "#30363D",
          "&:hover": { borderColor: "#58A6FF", backgroundColor: "rgba(88,166,255,0.06)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: "1px solid #30363D",
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
          fontSize: "0.75rem",
        },
        outlined: {
          borderColor: "#30363D",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#30363D" },
      },
    },
  },
});

export default coolNeutral;
