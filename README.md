# Blank

A blank new tab for Chrome. Just a blinking cursor — start writing. No ads, no buttons, no settings.

Notes autosave locally and persist across tabs and restarts.

![Blank new tab](./blank-screenshot.png)

## Install (unpacked)

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

- Notes are stored in `localStorage`, scoped to the extension — nothing leaves your machine.
- No permissions are requested in the manifest.
- Open tabs stay in sync via the browser `storage` event.

## Files

- `manifest.json` — MV3 config, overrides the new tab page
- `newtab.html` / `newtab.css` / `newtab.js` — the page
- `icons/` — toolbar/extension icons
- `fonts/` — Literata (bundled, OFL; see [Fonts](#fonts))
