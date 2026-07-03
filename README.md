# Blank

A blank new tab for Chrome. Just a blinking cursor — start writing. No ads, no buttons, no settings.

Every new tab starts blank. You drive the journey.

![Blank new tab](./blank-screenshot.png)

## Install

Get it from the official **[Chrome Web Store](https://chromewebstore.google.com/detail/blank/jlplehalogfbnkpcdoclogohoinhalja)** — one click, auto-updating.

### Install (unpacked)

Prefer to run it from source? Load the folder directly:

1. Open `chrome://extensions`
2. Toggle **Developer mode** (top-right)
3. Click **Load unpacked** and select this folder
4. Open a new tab and start typing

## Fonts

Blank renders notes in **[Literata](https://github.com/googlefonts/literata)**
— a warm book serif tuned for on-screen reading — and falls back to Georgia. The
font is bundled in `fonts/` and ships under the
[SIL Open Font License 1.1](fonts/OFL.txt), so it's free to use and redistribute.
No setup needed.

## How it works

- Nothing is stored — each new tab starts fresh, so notes never leave the page.
- No permissions are requested in the manifest.
- Bold survives (Cmd/Ctrl+B and on paste); all other pasted styling is stripped.

## Files

- `manifest.json` — MV3 config, overrides the new tab page
- `newtab.html` / `newtab.css` / `newtab.js` — the page
- `icons/` — toolbar/extension icons
- `fonts/` — Literata (bundled, OFL; see [Fonts](#fonts))
