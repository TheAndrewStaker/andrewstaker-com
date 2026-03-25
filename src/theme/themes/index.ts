import { Theme } from "@mui/material/styles";
import cleanModern from "./cleanModern";
import darkHacker from "./darkHacker";
import warmEarthy from "./warmEarthy";
import corporatePro from "./corporatePro";
import brutalist from "./brutalist";
import neonCyberpunk from "./neonCyberpunk";
import pastelSoft from "./pastelSoft";

export interface ThemeOption {
  key: string;
  label: string;
  description: string;
  theme: Theme;
}

export const themeOptions: ThemeOption[] = [
  {
    key: "cleanModern",
    label: "Clean Modern",
    description: "Crisp blues, rounded corners, airy whitespace",
    theme: cleanModern,
  },
  {
    key: "darkHacker",
    label: "Dark Hacker",
    description: "Terminal green on black, monospace, scanlines",
    theme: darkHacker,
  },
  {
    key: "warmEarthy",
    label: "Warm Earthy",
    description: "Terracotta & sage, serif type, organic shapes",
    theme: warmEarthy,
  },
  {
    key: "corporatePro",
    label: "Corporate Pro",
    description: "Navy & grey, no-nonsense, subtle shadows",
    theme: corporatePro,
  },
  {
    key: "brutalist",
    label: "Brutalist",
    description: "Bold borders, heavy shadows, raw & blocky",
    theme: brutalist,
  },
  {
    key: "neonCyberpunk",
    label: "Neon Cyberpunk",
    description: "Deep purple, neon magenta & cyan glows",
    theme: neonCyberpunk,
  },
  {
    key: "pastelSoft",
    label: "Pastel Soft",
    description: "Lavender pastels, pill shapes, friendly vibes",
    theme: pastelSoft,
  },
];
