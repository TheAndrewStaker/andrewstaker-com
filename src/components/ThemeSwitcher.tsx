"use client";

import { useState } from "react";
import {
  Fab,
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  IconButton,
  Chip,
  Stack,
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
        <Box sx={{ width: 300, p: 2, pb: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight={500}>
              Theme
            </Typography>
            <IconButton onClick={() => setOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

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
                  sx={{ borderRadius: 1, mb: 0.5, py: 1.5, flexDirection: "column", alignItems: "stretch" }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body1" fontWeight={isSelected ? 600 : 400}>
                      {option.label}
                    </Typography>
                    {isSelected && <CheckIcon color="primary" fontSize="small" />}
                  </Box>
                  <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mt: 0.75 }}>
                    {option.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{ height: 20, fontSize: "0.625rem", pointerEvents: "none" }}
                      />
                    ))}
                  </Stack>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
