I wanted to rebuild my personal site with two goals: keep it simple, and use it as a place to experiment with MUI theming.

## Why MUI?

I use Material UI on other projects, so having a sandbox for theme customization just makes sense. The theming system goes deeper than most people think. You can override every component's default props, style slots, and even add custom variants.

## The Theme Switcher

The site has ten themes that show off different parts of MUI's customization. Hit the palette button in the bottom right to try them out.

### Modern dark themes

These three are inspired by the dark UIs that are everywhere right now. I researched the actual color palettes from GitHub, VS Code, Vercel, Linear, Claude, and JetBrains to get the values right.

- **Cool Neutral** - cool blue-black backgrounds pulled from GitHub Dark and VS Code, blue accents, 1px borders
- **True Black Minimal** - pure black like Vercel and Linear, borderless cards, DM Sans, ultra-clean
- **Warm Dark** - warm brown tones from Claude's UI and JetBrains Darcula, amber/terra cotta accents

### Light themes

- **Clean Modern** - single-font Inter system, weight and size create the hierarchy
- **Warm Earthy** - Playfair Display headings with Source Sans 3 body, terracotta palette
- **Corporate Pro** - IBM Plex Sans, no ripple, no elevation, muted navy tones
- **Pastel Soft** - Quicksand + Nunito, pill-shaped buttons, lavender pastels

### Stylized dark themes

- **Dark Hacker** - `palette.mode: 'dark'`, monospace fonts, scanline overlay via CssBaseline
- **Brutalist** - thick 3px borders, offset box-shadows, uppercase everything
- **Neon Cyberpunk** - gradient buttons with glow shadows, Orbitron headings, radial background

Each theme is one `createTheme()` call. Switching is just swapping which theme object gets passed to `ThemeProvider`. The selected theme is stored in a cookie so the server renders it correctly on the first load with no flash.

## What I Learned

Typography restraint matters way more than I expected. My first pass had `fontWeight: 700` on everything: headings, buttons, chips. I did some reading on type hierarchy and dropped to a 400/500 range. The whole site looked better right away.

**If everything is bold, nothing is bold.**

The other big thing was solving the theme flash on navigation. Storing the theme in localStorage meant the server always rendered the default theme first, then swapped after hydration. Moving to cookies fixed it. The server reads the cookie in `layout.tsx` and passes it to the ThemeProvider so SSR matches the client from the first byte.

## Stack

- Next.js 16 (App Router)
- MUI v7 + Emotion
- TypeScript strict mode
- Blog posts as markdown files rendered with react-markdown
- Deployed on Vercel
