# AI SaaS Starter Pack — 6-in-1 Monorepo

Premium, marketplace-ready bundle with **6 AI SaaS starters**. Each app has a landing page, dark dashboard, and a demo API route so the site **deploys without any API keys**. Replace `DEMO_KEY` later with your own on Vercel.

## Routes
- `/` → Root landing (showcases all 6 apps)
- `/apps/{app}` → App landing
- `/apps/{app}/dashboard` → App dashboard
- `/api/generate` → Demo API (no external calls, always succeeds)

## Quick Start
```
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel)
- Import the repo to Vercel (no build config needed)
- (Optional for real AI calls) add env var: `OPENAI_API_KEY=YOUR_KEY`
- Deploy. ✅

## Tech Stack
Next.js 14 + Tailwind CSS

## License
MIT
