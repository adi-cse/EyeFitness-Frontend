# NainTaara Frontend (EyeFitness-Frontend)

This workspace contains a React + Vite frontend built with Tailwind CSS and Framer Motion components for the NainTaara landing/demo site.

Quick start

```bash
cd EyeFitness-Frontend
npm install
npm run dev
```

Dev server URL: http://localhost:5173 (Vite may pick a different port if 5173 is in use)

Notes
- Tailwind is configured in `tailwind.config.cjs` and `postcss.config.cjs`.
- Demo API endpoints are available from the backend at `/api/demo/*` (no auth required).
- Primary page: `src/pages/Home.jsx` which composes multiple section components in `src/components`.

Accessibility & testing
- Basic a11y attributes and alt text are included. Use Lighthouse or axe to run deeper checks.

Design
- Dark, glassmorphism-first UI and soft glowing gradients.

***


