# MotionLab

MotionLab is an interactive learning and reference website for CSS and Bootstrap motion. Instead of reading animation properties in isolation, you can see an effect in-place, replay it on hover, inspect its timing, tune the easing, and copy ready-to-use CSS.

## Live

**https://motionlab-production-2310.up.railway.app**

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

MotionLab is deployed as its own isolated Railway project and service from this repository's `main` branch. It does not share a database or runtime with the owner's other projects.

## Railway Project Hub governance

MotionLab is registered as **App 01 (`motionlab`)** in the owner's Railway governance model. The canonical governance repository is **https://github.com/Rishikeshsanin/railway-project-hub**. Before any Railway infrastructure change, agents must read [`RAILWAY_HUB_RULES.md`](RAILWAY_HUB_RULES.md) and the canonical Railway Project Hub documentation. MotionLab must remain isolated in its own Railway project; unrelated applications are out of scope.

## Privacy & Storage

MotionLab is frontend-only. Learning progress and theme preference stay in the user's browser through `localStorage`.

## Repository

[Rishikeshsanin/animation-website](https://github.com/Rishikeshsanin/animation-website)
