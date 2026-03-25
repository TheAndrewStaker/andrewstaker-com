"use client";

import { createTheme } from "@mui/material/styles";

// Pairing: Orbitron (headings/UI) + Exo 2 (body)
const neonCyberpunk = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff00ff" },
    secondary: { main: "#00ffff" },
    background: {
      default: "#0d0221",
      paper: "#1a0a3e",
    },
    text: {
      primary: "#e0e0ff",
      secondary: "#b0b0d0",
    },
  },
  typography: {
    fontFamily: '"Exo 2", "Rajdhani", sans-serif',
    h1: {
      fontFamily: '"Orbitron", "Exo 2", sans-serif',
      fontWeight: 500,
      fontSize: "clamp(1.1rem, 5vw, 1.85rem)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Orbitron", "Exo 2", sans-serif',
      fontWeight: 400,
      fontSize: "0.875rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "0.938rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.813rem",
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
    },
    caption: {
      fontFamily: '"Exo 2", sans-serif',
      fontSize: "0.688rem",
      letterSpacing: "0.05em",
      fontWeight: 400,
    },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
        contained: {
          background: "linear-gradient(135deg, #ff00ff 0%, #7b2fbe 100%)",
          boxShadow: "0 0 20px rgba(255,0,255,0.4), 0 0 40px rgba(255,0,255,0.2)",
          "&:hover": {
            background: "linear-gradient(135deg, #ff33ff 0%, #9b4fde 100%)",
            boxShadow: "0 0 30px rgba(255,0,255,0.6), 0 0 60px rgba(255,0,255,0.3)",
          },
        },
        outlined: {
          borderColor: "#00ffff",
          color: "#00ffff",
          boxShadow: "0 0 10px rgba(0,255,255,0.2)",
          "&:hover": {
            borderColor: "#00ffff",
            backgroundColor: "rgba(0,255,255,0.08)",
            boxShadow: "0 0 20px rgba(0,255,255,0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: "1px solid rgba(255,0,255,0.2)",
          backgroundColor: "#1a0a3e",
          backgroundImage: "none",
          boxShadow: "0 0 15px rgba(255,0,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Orbitron", sans-serif',
          borderRadius: 2,
          border: "1px solid rgba(0,255,255,0.3)",
          color: "#00ffff",
          fontSize: "0.625rem",
          letterSpacing: "0.03em",
          fontWeight: 400,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(123,47,190,0.15) 0%, transparent 60%)",
        },
      },
    },
  },
});

export default neonCyberpunk;
