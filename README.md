# Northwind — Personal Finance Demo

A polished one-page personal finance dashboard built as a demo app for Soffi Orginals community.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **lucide-react** for icons
- **clsx** for class composition

## Conventions

This demo follows a few hard rules so the Sophie runtime editor can manipulate it cleanly:

### 1. Semantic tokens, not raw Tailwind values

All design values are CSS custom properties defined under `@theme` in [`src/index.css`](src/index.css):

```css
@theme {
  --color-background: oklch(0.985 0 0);
  --color-primary: oklch(0.55 0.2 285);
  --color-text-muted: oklch(0.5 0.01 280);
  --font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
  --text-display-2xl: 3rem;
  --radius-lg: 0.875rem;
  --shadow-card: 0 1px 2px rgb(15 15 30 / 0.04), 0 1px 6px rgb(15 15 30 / 0.04);
  /* … */
}
```

Components reference these via Tailwind aliases (`bg-primary`, `text-text-muted`, `rounded-(--radius-lg)`, etc.) — never raw values like `bg-blue-500` or `text-gray-500`.

### 2. Light + dark mode, browser-aware

Dark mode is the same set of tokens, redefined under `.dark`:

```css
@layer base {
  .dark {
    --color-background: oklch(0.16 0.012 285);
    --color-primary: oklch(0.72 0.18 285);
    /* … */
  }
}
```

The [`ThemeProvider`](src/lib/theme.jsx) follows `prefers-color-scheme` by default and exposes a manual toggle that persists to `localStorage`.

### 3. Flexbox-only layouts

No CSS grid, no absolute positioning for layout. Every container is `flex` with `flex-row` / `flex-col` and `gap-*`. This keeps the layout tree linear and manipulable.

### 4. Every component has variants

Components in [`src/components/ui/`](src/components/ui) ship with explicit variant + size props:

- **Button** — `primary | secondary | ghost | soft | danger` × `sm | md | lg`
- **IconButton** — `primary | secondary | ghost | soft` × `sm | md | lg`
- **Card** — `default | elevated | muted | feature | outline` × padding × radius
- **Badge** — `neutral | primary | success | warning | danger | info` × `sm | md`
- **Avatar** — `primary | accent | success | warning | neutral` × `sm | md | lg | xl`
- **ProgressBar** — `primary | success | warning | danger | info` × `sm | md | lg`

## Run it

```sh
pnpm install
pnpm dev
```

Open http://localhost:5173.

## Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css            ← semantic token definitions (@theme + .dark)
├── lib/
│   ├── cn.js            ← clsx helper
│   └── theme.jsx        ← ThemeProvider + useTheme hook
├── components/
│   ├── ui/              ← variant-driven primitives
│   └── dashboard/       ← page-specific sections
└── data/
    └── mock.js          ← sample data
```
