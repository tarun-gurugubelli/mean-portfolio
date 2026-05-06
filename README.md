# MEAN Stack Portfolio

A modern portfolio web application for Tarun Gurugubelli, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents professional experience, technical skills, sample projects, testimonials, resume download, and a contact form in a responsive single-page layout.

Although the portfolio content highlights MEAN stack experience, this web application itself is a static Next.js frontend that can be deployed to any static hosting provider.

## Web App Summary

This portfolio includes:

- Responsive landing page with hero, profile image, and quick contact links.
- Sticky navigation with smooth section links and mobile menu.
- Light/dark theme support.
- Animated loading screen, scroll progress indicator, typing text, and particle background.
- About, skills, projects, experience, testimonials, and contact sections.
- Skills proficiency cards grouped by frontend, backend, database, and tools.
- Contact form with client-side validation and simulated submission.
- Static export configuration for simple deployment.

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theme Handling:** next-themes
- **Icons:** lucide-react
- **UI Primitives:** Radix UI Slot and Separator
- **Utility Libraries:** clsx, class-variance-authority, tailwind-merge
- **Build Output:** Static export through `next.config.mjs`

## Main Modules And Components

- `app/page.tsx` - App Router page entry that renders the portfolio.
- `app/layout.tsx` - Root layout, metadata, and theme provider setup.
- `portfolio.tsx` - Main single-page portfolio experience and page sections.
- `components/contact-form.tsx` - Contact form, validation, status messages, and submit handling.
- `components/skills-proficiency.tsx` - Animated skill proficiency cards.
- `components/testimonials.tsx` - Testimonial carousel.
- `components/theme-toggle.tsx` - Light/dark/system theme toggle.
- `components/particle-background.tsx` - Animated canvas background.
- `components/loading-screen.tsx` - Initial loading animation.
- `components/scroll-progress.tsx` - Page scroll progress indicator.
- `components/typing-animation.tsx` - Typing text animation used in the hero section.
- `components/ui/*` - Reusable UI primitives such as buttons, cards, inputs, badges, alerts, and separators.
- `hooks/use-intersection-observer.tsx` - Custom hook for scroll-triggered animations.
- `public/*` - Static assets including profile images, placeholders, resume, and custom domain file.

## Prerequisites

Install the following before running the project:

- Node.js 20 or newer
- npm, pnpm, or another compatible Node package manager

## Install Packages

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

The repository includes both `package-lock.json` and `pnpm-lock.yaml`. Use one package manager consistently for local development.

## Run Locally

Start the development server:

```bash
npm run dev
```

Or with pnpm:

```bash
pnpm dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Type Check

The `lint` script runs TypeScript without emitting files:

```bash
npm run lint
```

Or:

```bash
pnpm lint
```

## Build

Create a production build:

```bash
npm run build
```

Or:

```bash
pnpm build
```

Because `next.config.mjs` uses `output: 'export'`, the production build is exported as static files in the `out/` directory.

## Run Production Build Locally

For a standard Next.js server build, the project includes:

```bash
npm run start
```

However, this project is configured for static export. After building, the most reliable way to preview the exported site is to serve the `out/` folder with any static file server, for example:

```bash
npx serve out
```

## Deployment

Build the static site:

```bash
npm run build
```

Deploy the generated `out/` directory to any static hosting service.

Common deployment options:

- **GitHub Pages:** Publish the `out/` directory. The `public/CNAME` file is copied into the export for custom domain support.
- **Netlify:** Set the build command to `npm run build` and the publish directory to `out`.
- **Vercel:** Import the repository and use the Next.js defaults. The static export configuration will generate static assets.
- **Static server/CDN:** Upload the contents of `out/` to your server, object storage bucket, or CDN.

## Project Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Builds and exports the static production site. |
| `npm run start` | Starts the Next.js production server. |
| `npm run lint` | Runs TypeScript checks with `tsc --noEmit`. |
| `npm run export` | Alias for `next build`, also generating the static export. |

## Notes

- The contact form currently validates input on the client and simulates a successful submission. For production use, connect it to a service such as Formspree, Netlify Forms, EmailJS, or a custom API.
- Images are configured as unoptimized in `next.config.mjs` so they work with static export.
- The app uses path aliases through `@/*`, configured in `tsconfig.json`.
