"use client";

import { useEffect } from "react";
import { GlobalStyles, useTheme } from "@mui/material";

export default function NativeFeelStyles() {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;

  useEffect(() => {
    const meta =
      document.querySelector<HTMLMetaElement>('meta[name="theme-color"]') ??
      (() => {
        const el = document.createElement("meta");
        el.name = "theme-color";
        document.head.appendChild(el);
        return el;
      })();
    meta.content = bgColor;
  }, [bgColor]);

  return (
    <GlobalStyles
      styles={{
        "*, *::before, *::after": {
          WebkitTapHighlightColor: "transparent",
        },
        body: {
          transition: "background-color 0.3s ease, color 0.3s ease",
          WebkitFontSmoothing: "antialiased",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        },
        ".MuiCard-root, .MuiChip-root, .MuiButton-root": {
          transition:
            "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        },
      }}
    />
  );
}
