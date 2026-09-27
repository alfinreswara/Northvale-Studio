# Northvale Studio

Portfolio website for Northvale Studio, built with Next.js and ready for deployment on Vercel.

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

Import the repository in Vercel and keep the detected Next.js defaults:

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: Next.js default
- Install Command: `npm install`

No Cloudflare Worker, Wrangler, Vinext, or custom output-directory configuration is required.
