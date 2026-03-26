I wanted to rebuild my personal site with two goals: keep it simple, and use it as a place to experiment with MUI theming.

## Why MUI?

I use Material UI on other projects, so having a sandbox for theme customization just makes sense. The theming system goes deeper than most people think. You can override every component's default props, style slots, and even add custom variants.

## The Theme Switcher

The site has seven themes that show off different parts of MUI's customization:

- **Clean Modern** - single-font system, weight and size create the hierarchy
- **Dark Hacker** - `palette.mode: 'dark'`, monospace fonts, scanline overlay
- **Warm Earthy** - serif/sans pairing (Playfair Display + Source Sans 3)
- **Corporate Pro** - no ripple, no elevation, muted tones
- **Brutalist** - thick borders, offset box-shadows, uppercase everything
- **Neon Cyberpunk** - gradient buttons, glow shadows, custom background
- **Pastel Soft** - pill-shaped buttons, extreme border-radius, pastels

Each theme is one `createTheme()` call. Switching is just swapping which theme object gets passed to `ThemeProvider`.

## What I Learned

Typography restraint matters way more than I expected. My first pass had `fontWeight: 700` on everything: headings, buttons, chips. I did some reading on type hierarchy and dropped to a 400/500/600 range. The whole site looked better right away.

**If everything is bold, nothing is bold.**

## Stack

- Next.js 16 (App Router)
- MUI v7 + Emotion
- TypeScript strict mode
- Deployed on Vercel
