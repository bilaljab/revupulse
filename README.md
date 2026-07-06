# 📊 RevuPulse

> Turn scattered customer reviews into one clear weekly report.

RevuPulse is a SaaS product concept for an AI agent that reads your customer reviews (starting with Google Reviews and Amazon) and sends you one weekly email with sentiment, your top 5 recurring complaints, and your top 5 strengths — no dashboards, no spreadsheets.

This repository currently contains **only the landing/waitlist page** used to validate demand before the actual product is built. 🚧

---

## 🧪 Project Status: Demand Validation

We are **not** building the AI agent, review-platform integrations, or analysis logic yet. The only goal right now is collecting waitlist signups to validate that the problem is worth solving. See [`CLAUDE.md`](./CLAUDE.md) for the full scope and constraints.

---

## ✨ Features

- 🌌 Dark, gradient-driven hero with bespoke SVG illustrations (no stock imagery, no icon libraries)
- 🌗 Alternating dark/light section rhythm for visual variety
- 🎬 Scroll-triggered animations via Framer Motion, with full `prefers-reduced-motion` support
- 📬 Waitlist signup form wired to [Formspree](https://formspree.io) — no backend required
- 📱 Fully responsive, from 375px mobile up to wide desktop
- ♿ Accessible by default — semantic markup, focus states, WCAG AA color contrast

---

## 🛠️ Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Forms | [Formspree](https://formspree.io) |
| Fonts | Fira Code (headings) + Fira Sans (body), via `next/font` |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- A free [Formspree](https://formspree.io) account and form ID

### Installation

```bash
git clone https://github.com/bilaljab/revupulse.git
cd revupulse
npm install
```

### Environment Variables

Copy the example file and fill in your own Formspree form ID:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Your Formspree form ID (from `https://formspree.io/f/<this-id>`) |

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Other commands

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # run ESLint
```

---

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout, fonts, SEO metadata
├── page.tsx                 # Composes the landing page sections
├── globals.css               # Design tokens, gradient & theme classes
├── lib/
│   └── motion.ts              # Shared Framer Motion variants
└── components/
    ├── HeroSection.tsx
    ├── SolutionSection.tsx
    ├── HowItWorksSection.tsx
    ├── WaitlistForm.tsx
    ├── Footer.tsx
    └── visuals/                # Bespoke SVG illustrations (GlowOrb, DotGrid, HeroVisual, SolutionVisual)
```

---

## 📦 Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new) (built by the Next.js team):

1. Import this repository into Vercel
2. Add the `NEXT_PUBLIC_FORMSPREE_FORM_ID` environment variable in the Vercel project settings
3. Deploy 🚀

---

## 📄 License

© 2026 RevuPulse. All rights reserved. This code is proprietary and not licensed for reuse.
