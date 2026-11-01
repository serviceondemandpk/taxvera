# Tax Firm Website (React + Vite + Supabase)

## Setup
1. `npm install`
2. Supabase: create a project, run `supabase/schema.sql` in the SQL Editor.
3. Copy `.env.example` to `.env` and fill the two values (Project Settings > API).
4. `npm run dev`

## Customize
- Name, phone, email, address: `src/config/siteConfig.js`
- Colors, fonts, spacing: `src/styles/theme.css`
- Services, industries, FAQs, testimonials: `src/data/`

## Deploy (Vercel)
Import the repo, framework preset Vite, add the two `VITE_SUPABASE_*` env vars, deploy.
`vercel.json` handles SPA routing. View leads in Supabase > Table Editor > leads.
