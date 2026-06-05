# LoopC Business Strategies — marketing site

Next.js (App Router) + TypeScript + Tailwind + [Framer Motion](https://www.framer.com/motion/) + [Embla Carousel](https://www.embla-carousel.com/). Home: local SVG hero art, scroll word reveals, Playfair Display headings, parallax, testimonial slider, partner tiles, desktop custom cursor. Pages: **Home**, **About**, **Services**, **Contact**, **Blog** (live market widgets).

## Prerequisites

- Node.js 20+ recommended
- npm

## Local development

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values as needed:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata and Open Graph (e.g. `https://www.loopc.com`). Falls back to a placeholder in code if unset. |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | [Formspree](https://formspree.io/) form id. When set, the contact form POSTs to Formspree. When unset, submit uses `mailto:` with your message prefilled. |

Company name, email, and address placeholders live in [`lib/site-config.ts`](lib/site-config.ts)—edit there or move to env later.

Typography: **Source Sans 3** (body/UI via `font-sans` on `<body>`) + **Playfair Display** on every **`h1`–`h6`** via global CSS at the end of `globals.css` (`html h1, … { font-family: var(--font-playfair), … }`), plus `font-display` on spans where needed. Fonts from `next/font/google`. Hero art: [`public/loopc-hero-art.svg`](public/loopc-hero-art.svg) (local, full colour).

## Blog “live pulse” data

[`app/api/live-market/route.ts`](app/api/live-market/route.ts) aggregates public APIs (no keys required for the defaults):

- **Gold (USD):** Binance `PAXGUSDT` last price as a practical proxy for gold in USD (not official LBMA pricing).
- **Market mood:** [Alternative.me Crypto Fear & Greed](https://alternative.me/crypto/fear-and-greed-index/) as a widely referenced risk-on / risk-off sentiment dial.
- **USD → EUR:** [Frankfurter](https://www.frankfurter.app/) ECB reference rates.

If any upstream is down, that card degrades gracefully. You can swap feeds later (e.g. paid metals API) without changing the UI.

## Production build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Push this repo to GitHub (or connect your Git provider).
2. In [Vercel](https://vercel.com), **Add New Project** and import the repository.
3. Set **Root Directory** to `site` (this app lives in the `site` folder because the parent folder name is not npm-friendly).
4. Add environment variables from `.env.example` in the Vercel project settings.
5. Deploy.

Other Node-friendly hosts work too; ensure the Node version matches Vercel defaults or your `engines` field if you add one.

## Project layout

- `app/` — routes, `layout.tsx` (global header/footer, default metadata), [`app/api/live-market`](app/api/live-market) for blog pulse.
- `components/` — `SiteHeader`, `SiteFooter`, `ContactForm`, `Logo`, `FadeIn`, `LiveMarketPulse`, `HomeHero`, `TestimonialSlider`, `CustomCursor`, `ScrollRevealWords`.
- `lib/site-config.ts` — editable company copy and URLs.

## Redirects

`/solutions` → `/services`, `/service` → `/services`, `/demo` → `/contact` (see [`next.config.ts`](next.config.ts)).

## Note on folder structure

The repository root may be `loopc website` (with a space). The Next.js app is in **`site/`** so `npm` package naming works. Open `site` as the workspace root in your editor, or set your host’s root directory to `site` as above.
