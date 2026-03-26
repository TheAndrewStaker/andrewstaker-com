import { Theme } from "@mui/material/styles";
import coolNeutral from "./coolNeutral";
import trueBlackMinimal from "./trueBlackMinimal";
import warmDark from "./warmDark";
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
  tags: string[];
  theme: Theme;
}

export const themeOptions: ThemeOption[] = [
  {
    key: "coolNeutral",
    label: "Cool Neutral",
    tags: ["dark", "github", "vs code", "blue accents"],
    theme: coolNeutral,
  },
  {
    key: "trueBlackMinimal",
    label: "True Black Minimal",
    tags: ["dark", "vercel", "linear", "ultra-clean"],
    theme: trueBlackMinimal,
  },
  {
    key: "warmDark",
    label: "Warm Dark",
    tags: ["dark", "claude", "darcula", "amber accents"],
    theme: warmDark,
  },
  {
    key: "cleanModern",
    label: "Clean Modern",
    tags: ["light", "blue", "rounded", "airy"],
    theme: cleanModern,
  },
  {
    key: "darkHacker",
    label: "Dark Hacker",
    tags: ["dark", "terminal", "green", "monospace"],
    theme: darkHacker,
  },
  {
    key: "warmEarthy",
    label: "Warm Earthy",
    tags: ["light", "terracotta", "serif", "organic"],
    theme: warmEarthy,
  },
  {
    key: "corporatePro",
    label: "Corporate Pro",
    tags: ["light", "navy", "grey", "minimal"],
    theme: corporatePro,
  },
  {
    key: "brutalist",
    label: "Brutalist",
    tags: ["light", "bold borders", "blocky", "mono"],
    theme: brutalist,
  },
  {
    key: "neonCyberpunk",
    label: "Neon Cyberpunk",
    tags: ["dark", "neon", "magenta", "glow"],
    theme: neonCyberpunk,
  },
  {
    key: "pastelSoft",
    label: "Pastel Soft",
    tags: ["light", "lavender", "pill shapes", "friendly"],
    theme: pastelSoft,
  },
];
