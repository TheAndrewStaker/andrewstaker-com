"use client";

import { useState } from "react";
import {
  Fab,
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useThemeContext } from "@/theme/ThemeContext";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { currentTheme, setThemeByKey, themeOptions } = useThemeContext();

  return (
    <>
      <Fab
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1300 }}
        aria-label="Change theme"
        size="large"
      >
        <PaletteIcon />
      </Fab>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="h6" fontWeight={700}>
              Switch Theme
            </Typography>
            <IconButton onClick={() => setOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Pick a theme to see how MUI components can be styled.
          </Typography>

          <List disablePadding>
            {themeOptions.map((option) => {
              const isSelected = option.key === currentTheme.key;
              return (
                <ListItemButton
                  key={option.key}
                  selected={isSelected}
                  onClick={() => {
                    setThemeByKey(option.key);
                    setOpen(false);
                  }}
                  sx={{ borderRadius: 1, mb: 0.5 }}
                >
                  <ListItemText
                    primary={option.label}
                    secondary={option.description}
                    primaryTypographyProps={{ fontWeight: isSelected ? 700 : 500 }}
                  />
                  {isSelected && <CheckIcon color="primary" sx={{ ml: 1 }} />}
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
