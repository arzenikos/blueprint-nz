# BluePrintNZ

Astro site for the Prostate Cancer Foundation of New Zealand. Visitors land on a RealMe-style welcome screen, choose who they are, and continue into a hub written for that audience.

Live demo: [blueprintnz.netlify.app](https://blueprintnz.netlify.app/)

## Thumbnail



## Run locally

**Requirements:** Node.js 18+, npm. Windows 10/11 or Linux.

```bash
npm install
npm run dev
```

The app runs at `http://localhost:4321`.

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## How the site is organised

```text
src/
├── data/                 JSON content (landing, hubs, resources, nav, footer)
├── content/              Article copy for stage, caregiver, and research pages
├── components/
│   ├── layout/           Header, footer, logo, theme and font controls
│   ├── ui/               Shared cards, buttons, icons, breadcrumbs
│   └── content/          Audience hubs and resource grids
├── layouts/
│   ├── Layout.astro      Site shell (header, slot, footer)
│   └── ContentLayout.astro
├── pages/
│   ├── index.astro       Welcome / audience chooser
│   ├── diagnosis/        Patient hub
│   ├── support/          Whānau / caregiver hub
│   ├── research/         Clinical / research hub
│   ├── stage-0 … stage-4
│   ├── caregiver/
│   ├── researcher/
│   └── blueprint/
└── styles/               Global theme and utilities
```

Content is hardcoded in JSON under `src/data/` for now:

- `landing.json` — welcome headline and the three hovering audience cards
- `hubs.json` — copy for the diagnosis, support, and research main pages
- `resources.json` — stage and role resource cards
- `navigation.json` / `footer.json` / `site.json` — chrome and metadata

## Visitor flow

1. **Welcome** (`/`) asks “How can we help you today?” with three hovering cards.
2. **I am navigating my own diagnosis** → `/diagnosis` (stages 0–4).
3. **I am supporting a loved one** → `/support` (caregiver guides).
4. **I am looking for clinical data or research** → `/research` (trials and tools).

Each hub card links through to the existing article pages.

## Layout and data flow

- Pages render inside `Layout.astro`, which always outputs the page `slot` plus header and footer.
- Hub pages use `AudienceHub.astro` + `ResourceGrid.astro`.
- Article pages use `MainPageHeading.astro` and content modules under `src/content/users/`.

## Colour system

Edit CSS variables in `src/styles/themes.css`. The palette is a five-step blue scale plus accent and semantic colours for light and dark themes.

## Deploy

The site deploys to Netlify via `@astrojs/netlify`. Push to the connected Git branch, or run `npm run build` and publish `dist/`.
