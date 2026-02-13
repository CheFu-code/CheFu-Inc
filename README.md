# CheFu Inc. Website

CheFu Inc. is a modern marketing website built with React, TypeScript, Vite, and Tailwind CSS v4.  
It showcases company services across software development, AI solutions, and music production.

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- React Router 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Radix UI primitives + custom UI components
- MUI and Emotion (available in dependencies)

## Project Structure

```text
.
|- public/
|- src/
|  |- app/
|  |  |- components/
|  |  |- pages/
|  |  \- App.tsx
|  |- styles/
|  \- main.tsx
|- index.html
|- vite.config.ts
|- tailwind.config.js
\- package.json
```

## Routing

Routes are defined in `src/app/App.tsx`.

- `/` - Home
- `/about` - About
- `/services` - Services overview
- `/services/music` - Music services
- `/services/software` - Software services
- `/services/ai` - AI services
- `/portfolio` - Portfolio
- `/contact` - Contact
- `/careers` - Careers
- `/blog` - Blog/Insights
- `/faq` - FAQ
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `*` - Not Found

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm (or Bun, since `bun.lock` is present)

### Install Dependencies

Using npm:

```bash
npm install
```

Using Bun:

```bash
bun install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Styling

Global style entry is `src/styles/index.css`, which imports:

- `src/styles/fonts.css`
- `src/styles/tailwind.css`
- `src/styles/theme.css`

## Notes

- This project currently has no test script configured in `package.json`.
- The `dist/` folder contains build output.
