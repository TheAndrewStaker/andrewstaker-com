"use client";

import { createTheme } from "@mui/material/styles";

// Inspired by Claude UI dark mode and JetBrains Darcula
// Warm brown-toned backgrounds, terra cotta/amber accents, cozy evening feel
const warmDark = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#CC7832" },
    secondary: { main: "#C15F3C" },
    background: {
      default: "#1C1714",
      paper: "#252019",
    },
    text: {
      primary: "#E8E0D5",
      secondary: "#A89F94",
    },
    divider: "#3A3228",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: "clamp(1.25rem, 5vw, 2rem)",
      letterSpacing: "-0.015em",
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
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
        },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        outlined: {
          borderColor: "#3A3228",
          "&:hover": { borderColor: "#CC7832", backgroundColor: "rgba(204,120,50,0.06)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: "1px solid #3A3228",
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 400,
          fontSize: "0.75rem",
        },
        outlined: {
          borderColor: "#3A3228",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#3A3228" },
      },
    },
  },
});

export default warmDark;
