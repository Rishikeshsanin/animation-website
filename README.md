# MotionLab

MotionLab is an interactive learning and reference website for CSS and Bootstrap motion. Instead of reading animation properties in isolation, you can see an effect in-place, replay it on hover, inspect its timing, tune the easing, and copy ready-to-use CSS.

## Deployment status

**Archived on Railway as of 2026-09-23.**

The application source is fully preserved in this repository. The former Railway deployment was intentionally retired after backup verification; its generated Railway URL should be treated as historical, not live.

## Highlights

- **142 interactive CSS motion lessons**
- Dedicated categories for Entrances, Exits, Attention, Transforms, Text, Hover, UI, Loaders, 3D, and Backgrounds
- Animation cards preview automatically as they enter view
- Hover/focus replays the animation directly inside the card
- Advanced animation inspector with live preview, timeline, duration, easing, iterations, motion properties, and copyable CSS
- Search by animation name, description, category, property/use-case tags
- Category counts and keyboard shortcut (`/`) for search
- Richer demo objects for buttons, cards, pills, icons, text, dots, rings, and surfaces
- Dedicated animation playground
- 9 Bootstrap motion/component labs
- Bootstrap carousel, carousel fade, collapse, accordion, modal, offcanvas, toast, dropdown, and dismissible alert examples
- Local learning progress using `localStorage`
- Dark and light themes
- Responsive desktop, tablet, and mobile layouts
- `prefers-reduced-motion` accessibility support
- No login, backend, Supabase project, or database required

## Tech Stack

- React
- TypeScript
- Vite
- Bootstrap 5
- Lucide React
- Data-driven custom CSS animation system

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Project Structure

```text
src/
├── data/
│   ├── animations.ts
│   └── bootstrapLessons.ts
├── App.tsx
├── main.tsx
├── styles.css
└── v2.css
server.mjs
```

The animation library is data-driven: each lesson stores its keyframes, defaults, complexity, preview shape, tags, and learning metadata. The interface generates the live previews, search index, inspector, and copyable CSS from that same source of truth.

## Deployment

MotionLab currently has **no active Railway deployment**.

Before retirement, it ran as its own isolated Railway project/service. The source and non-secret restore metadata were preserved before the runtime was removed.

Preserved archive branch:
`archive/pre-railway-retirement-2026-09-23`

Canonical restore documentation lives in:
`Rishikeshsanin/railway-project-hub/backups/motionlab/2026-09-23/`

If MotionLab is deployed to Railway again, it must receive a **new isolated application project**. It must never be deployed inside the governance-only `Railway Project Hub` project.

## Railway Project Hub governance

MotionLab is permanently registered as **App 01 (`motionlab`)** and is currently **archived** in the owner's Railway governance model. The canonical governance repository is **https://github.com/Rishikeshsanin/railway-project-hub**. Before any future Railway restore or infrastructure change, agents must read [`RAILWAY_HUB_RULES.md`](RAILWAY_HUB_RULES.md) and the canonical Railway Project Hub documentation. App 01 and its slug must never be reused.

## Privacy & Storage

MotionLab is frontend-only. Learning progress and theme preference stay in the user's browser through `localStorage`.

## Repository

[Rishikeshsanin/animation-website](https://github.com/Rishikeshsanin/animation-website)
