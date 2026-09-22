# Portfolio — Vishal

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before you deploy

Open `lib/data.ts` — every placeholder is marked `[ADD: ...]`. That's:

- Your email, GitHub, LinkedIn, and resume link
- 1–2 sentences on each role at RayMach / PM Publishers / PieCodes
- The real detail on the StatMach FlightOps Dashboard project (modules you
  owned, scale, the hardest problem you solved) — this is your strongest
  differentiator, so give it more than a summary
- A second project

Don't fill in metrics you can't stand behind — a vague-but-true line beats a
specific-but-invented one on something a recruiter can ask you about.

## Deploy

Easiest path is [Vercel](https://vercel.com/new) — connect the repo (or drag
this folder into a new project) and it deploys with zero config. Netlify and
Cloudflare Pages also work with their Next.js presets.

## Structure

- `app/` — root layout, global styles, the single page (`page.tsx`)
- `components/` — Nav, Hero, Experience, Projects, Stack, Contact
- `lib/data.ts` — all content lives here, edit this file first
- `tailwind.config.ts` — color tokens (ink, paper, amber, steel) and fonts
