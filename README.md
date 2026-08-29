# BKPA Foundation — bkpa.net (Astro + Sitepins)

A rebuild of [bkpa.net](https://bkpa.net) (previously Hugo) in [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), content-modeled for [Sitepins](https://sitepins.com) — a git-based headless CMS that reads content straight out of this repo and turns edits into commits.

## What's here

- **95 "Know Your Kidney" articles** across 11 categories (Kidney Basics, CKD, AKI, Dialysis, Renal Transplantation, Urology, Paediatric Nephrology, Renal Diet, Kidney Disease & Pregnancy, Diabetes, Others) — migrated verbatim from the original Hugo content.
- **6 Emergency Contacts pages** (Nephrology Doctors, Urology Doctors, Vascular Surgeons, Dialysis Centers, Hospitals, Blood Banks) — kept as rich text exactly as BKPA published it (see "Emergency contacts format" below for why).
- **7 Executive Body members**, with photo/phone/email where available.
- **Home, FAQ, Contact** as structured singleton pages editors can fill in from a form.
- A bilingual (Bengali / English) UI — see "How bilingual works" below.

## Getting started locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run check     # type-check the project
```

Requires Node 22+.

## Content structure (what Sitepins will read)

```
src/content.config.ts        ← collection schemas (Sitepins auto-detects these)
src/content/
  articles/<category>/<slug>.md     ← Know Your Kidney articles
  emergency-contacts/<slug>.md      ← the 6 emergency contact pages
  team/<slug>.md                    ← Executive Body members
  site/home.json                    ← homepage banners + notice board
  site/about.json                   ← Executive Body page intro
  site/faq.json                     ← FAQ questions/answers
  site/contact.json                 ← contact details
public/images/                      ← all media (175 files migrated from the Hugo site)
```

## Connecting Sitepins

1. Push this repo to GitHub (or GitLab).
2. Create a free account at [app.sitepins.com](https://app.sitepins.com).
3. Connect the repo — Sitepins auto-detects Astro's content collections from `src/content.config.ts` and suggests `public/images` as the media folder; confirm it.
4. Start editing. Every save is a real git commit to this repo, fully reversible.

No extra Sitepins config file is required — it reads the Zod schemas in `src/content.config.ts` directly to build the editing forms.

## How bilingual works

The original content itself is **not** duplicated per language — most articles were written once, in Bengali (sometimes with English medical terms mixed in), and titles are often already bilingual (e.g. "Anemia/রক্তশূন্যতা"). Rather than force a full Astro i18n route tree (`/bn/...` and `/en/...`) that would need every one of the 95 articles translated — content that doesn't exist yet — the site ships a **client-side language toggle** (বাংলা / EN, top right) that swaps the *interface chrome* (nav, buttons, labels, section headers) between Bengali and English. Article bodies render as originally authored.

If/when BKPA wants true per-article translations, that's a good phase-2: Astro's built-in i18n routing (`astro.config.mjs` → `i18n.locales`) is the right tool once there's actually a second-language version of each article to route to — Sitepins lists Bengali as one of its 12 supported CMS languages, so the CMS side is ready whenever the content is.

## Known gaps carried over from the Hugo site (see also the content inventory spreadsheet)

- **FAQ has no real content yet.** The live Hugo site's FAQ page was still theme demo Lorem-ipsum text. `src/content/site/faq.json` ships with one clearly-labeled placeholder question — replace it with real FAQs in Sitepins.
- **Emergency contacts format.** Each category (Nephrology Doctors, Hospitals, etc.) is one long freeform text block — that's how the live site has them, and it's preserved as-is rather than auto-split into individual doctor records. The Hugo repo also had orphaned duplicate files in a cleaner structured format (`name` / `specialist` / `location` / `contact_details` per doctor) that were never wired into navigation — worth considering as a real data-entry project later, since automated parsing risked mis-attributing real phone numbers across 30+ Bengali entries per page.
- **Six categories dominate the content** — CKD (32) and Renal Transplantation (28) alone are over half of all articles; Urology has zero published articles (only a menu entry).

## Design system

Colors, type, and layout follow the homepage concept reviewed earlier: deep teal-indigo (`--color-deep`) for structure/trust, a clay-red accent (`--color-accent`) for CTAs and the Emergency Contacts section, warm sand-green neutrals, Fraunces + Tiro Bangla for headings, Source Sans 3 + Hind Siliguri for body text. All tokens live in `src/styles/global.css`.
