# wonderingsolutions.com

Felipe Cabral's site. Astro, static output, no client-side JavaScript. The only motion is CSS (the mark drawing itself on the home page, the flag landing on /serenata, the clock filling a segment on /agent-day), and all of it is skipped under `prefers-reduced-motion`.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then writes the site to dist/
npm run preview   # serves dist/
```

Node 22 or newer.

## Where things are

| Path | What |
| --- | --- |
| `src/config.ts` | Email, LinkedIn, the Serenata repo link, the "Notify me" form endpoint, nav |
| `src/styles/tokens.css` | Design tokens from the Wondering Solutions design system, Day and Night themes |
| `src/styles/global.css` | Fonts (self-hosted via Fontsource), base type, links, focus, buttons |
| `src/layouts/Base.astro` | Head, header, footer |
| `src/components/Mark.astro` | The switchback W with the cloudberry dot |
| `src/components/SampleRecord.astro` | The flagged procurement record on /serenata |
| `src/components/CirclePlan.astro` | The circle plan drawing and the three principles on /estaleiro |
| `src/components/Notify.astro` | Email capture |
| `src/components/Clock.astro` | The segmented incident clock on /agent-day |
| `src/pages/agent-day.astro` | Agent Day offer page. Unlisted: linked from nowhere, not in the nav |
| `src/content/notes/` | Notes as Markdown files |

## Writing a note

Add `src/content/notes/some-slug.md`:

```md
---
title: First week of ingestion
date: 2026-10-01
summary: One sentence for the list page.
draft: false
---

Text here.
```

It shows up at `/notes/some-slug/` and on the Notes index.

## Before launch

- `src/config.ts`: confirm the LinkedIn URL.
- `src/config.ts`: set `notifyAction` to a real form endpoint (Buttondown, Formspree or similar). Until then "Notify me" opens an email to captain@wonderingsolutions.com.
- `src/config.ts`: set `bookingUrl` (Cal.com or similar). Until then the /agent-day booking buttons open an email.
- `src/pages/agent-day.astro`: invoicing entity, payment terms and public dates for open seats are still TODO.
- `src/components/SampleRecord.astro`: replace the illustrative values with a real TED notice and drop the "Illustrative" caption.
- `src/pages/serenata.astro`: keep the milestone table in step with the Serenata README.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages on every push to `main` (or by hand from the Actions tab). In the repo's Settings > Pages, "Source" has to be "GitHub Actions". If it's left on "Deploy from a branch", GitHub runs Jekyll over the Astro sources and the build fails.

The custom domain lives in `public/CNAME`, which Astro copies into `dist/`.
