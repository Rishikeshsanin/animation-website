# MotionLab

MotionLab is a polished, visual learning website for CSS and Bootstrap motion. Instead of reading animation properties in isolation, learners can replay each effect, understand what it does, tune timing and easing, and copy ready-to-use code.

## Highlights

- 80 interactive CSS animation lessons
- 9 Bootstrap motion/component labs
- Categories for entrances, exits, attention effects, transforms, text, loaders, and backgrounds
- Live replayable previews
- Search and category filtering
- Interactive duration, easing, and iteration controls
- Copyable CSS snippets
- Dedicated animation playground
- Bootstrap carousel, fade, collapse, accordion, modal, offcanvas, toast, dropdown, and dismissible alert examples
- Local learning progress using `localStorage`
- Dark and light themes
- Responsive layout for desktop, tablet, and mobile
- `prefers-reduced-motion` accessibility support
- No login, backend, or database required

## Tech Stack

- React
- TypeScript
- Vite
- Bootstrap 5
- Lucide React
- Custom CSS animation system

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── data/
│   ├── animations.ts
│   └── bootstrapLessons.ts
├── App.tsx
├── main.tsx
└── styles.css
```

The animation library is data-driven. Each lesson stores its animation frames and learning metadata, while the UI dynamically generates previews and copyable CSS. This makes the library easy to extend without duplicating presentation logic.

## Privacy & Storage

MotionLab is frontend-only. It does not require Supabase or any other database. Learning progress and theme preference are stored locally in the browser.

## Repository

Built in: [Rishikeshsanin/animation-website](https://github.com/Rishikeshsanin/animation-website)
