# Copilot instructions

React 19 + Vite single-page self-introduction site for "플래시" (Korean UI, `lang="ko"`). No test framework is configured.

## Commands

```sh
npm install
npm run dev       # Vite dev server (http://localhost:5173)
npm run lint      # oxlint (config: .oxlintrc.json; react hooks rules = error)
npm run build     # outputs to dist/
```

On Windows PowerShell with a restrictive execution policy, use `npm.cmd` instead of `npm`.

## Architecture

- The whole site is one component in `src/App.jsx`: header nav, then sections (`#home`, `#interests`, `#skills`, `#activities`, `#goal`), then footer. Navigation is plain in-page anchors; there is no router.
- Styles are in `src/App.css` (theme variables such as `--leaf`, `--forest`, `--soil` at the top); `src/index.css` holds global base styles and `--green`/`--line`.
- Hobby cards are rendered from the `hobbies` array at the top of `App.jsx`.

## Conventions

- Keep UI text in Korean. Source files are UTF-8; garbled text in a Windows console is a display issue, not file corruption.
- Do not add real name, phone, address, or birth date; the site uses the nickname 플래시. Do not invent facts about the user — leave placeholders (e.g. `.photo-slot`) until they provide details.
- Keep accessibility patterns: `aria-labelledby` on sections, `aria-hidden` on decorative elements, reduced-motion media query for animations.
