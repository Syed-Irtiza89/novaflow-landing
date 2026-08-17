# NovaFlow

Marketing site for **NovaFlow**, a fictional workflow OS for agencies. Editorial, high-contrast landing page: black + electric lime, light and dark themes, fully responsive.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- framer-motion
- lucide-react

## Scripts

```bash
npm run dev      # local preview
npm run build    # typecheck + production bundle
npm run preview  # serve the build
```

## What is on the page

Sticky nav (Features, Pricing, FAQ, theme toggle, CTA), hero, logo cloud, features, how it works, pricing with monthly/annual (20% off), testimonials, FAQ accordion, lead capture, footer.

## Local storage

| Key | Purpose |
| --- | --- |
| `novaflow.theme` | `light` or `dark`. The `dark` class is applied on `document.documentElement`. |
| `novaflow.leads` | JSON array of demo leads (`name`, `email`, `company`, `createdAt`). Nothing is emailed. |

Theme also respects `prefers-color-scheme` until the visitor toggles.
