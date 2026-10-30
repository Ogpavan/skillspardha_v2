# skillspardha_v2

SkillSpardha's public website, built with React, Vinext, Vite and Nitro.

## Run locally

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

### Lead enquiry email

Copy `.env.example` to `.env.local` for local development and set the SMTP credentials there. Configure the same variables as server-side environment secrets in production. The lead form posts JSON to `POST /api/leads`; `name`, `phone`, `email`, `interest`, and `consent` are required, while `city` and `message` are optional. A successful request sends a plain-text email to `admin@skillspardha.com` and `pawantwp@gmail.com`, with replies directed to the submitter. The route returns `200` on success, `400` for invalid input, `413` for an oversized request, `502` if the mail relay fails, and `503` if SMTP is not configured.

Create a production build with `npm run build`; preview it locally with `npm run start`.

## Deploy to Vercel

Import this GitHub repository into Vercel and keep the detected Vite/Nitro build settings. Nitro selects Vercel's deployment preset in Vercel's build environment.

## Project structure

- `app/` contains the page routes and shared styles.
- `components/` contains reusable page sections and UI.
- `data/` contains site content.
- `public/` contains static assets.
