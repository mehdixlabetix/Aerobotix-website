<div align="center">
  <img src="assets/images/brand/logo-removebg-preview.png" alt="AeRobotiX INSAT" width="180" />
  <h1>AeRobotiX INSAT</h1>
  <p><strong>Learn. Create. Innovate.</strong></p>
  <p>The official digital showcase for INSAT's robotics and aeronautics club.</p>
</div>

## About

This repository powers the AeRobotiX club website: its story, competition achievements, events, executive board, membership applications, and partnership enquiries. It is a dependency-free static frontend backed by small Vercel Functions and Supabase.

### Highlights

- Responsive, accessible pages with reduced-motion support
- Dedicated Eurobot and NXP Cup competition stories
- Filterable competition archive and optimized media build
- Membership and partnership forms with server-side validation
- Supabase tables protected by insert-only Row Level Security policies
- Production security headers and clean URLs on Vercel

## Project structure

```text
.
├── api/                  # Vercel Functions for form submissions
├── assets/
│   ├── images/           # Brand, competition, board, and memory photos
│   └── videos/           # Locally hosted video
├── public/               # Favicon, robots.txt, sitemap, and manifest
├── scripts/              # Build, local preview, and verification tools
├── src/
│   ├── pages/            # HTML pages
│   ├── scripts/          # Browser JavaScript
│   └── styles/           # Page and shared CSS
├── supabase/             # Table definitions and RLS policies
├── package.json
└── vercel.json
```

The generated `dist/` directory mirrors the production artifact and is intentionally excluded from Git.

## Local development

Requirements: Node.js 22 or newer.

```bash
git clone https://github.com/mehdixlabetix/Aerobotix-website.git
cd Aerobotix-website
npm run dev
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). The development command creates a fresh production-style build before starting the local preview server.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Build and preview locally on port 4173 |
| `npm run build` | Generate the static production artifact in `dist/` |
| `npm run check` | Build, syntax-check, and verify pages and local assets |
| `npm start` | Serve an existing `dist/` build |

## Supabase forms

Create the required tables and insert-only policies by running these files in the Supabase SQL Editor:

- `supabase/membership_applications.sql`
- `supabase/partnership_inquiries.sql`

Configure these variables in **Vercel → Project → Settings → Environment Variables**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The values belong in Vercel, never in this repository. Both browser forms submit to same-origin Vercel Functions, which validate and normalize data before sending it to Supabase. Repeated submissions reuse UUIDs to avoid duplicate rows.

| Form | Endpoint | Supabase table |
| --- | --- | --- |
| Join Us | `/api/memberships` | `membership_applications` |
| Partnerships | `/api/partnerships` | `partnership_inquiries` |

## Updating content

- Main pages: `src/pages/`
- Executive board and homepage data: `src/scripts/app.js`
- Shared visual system: `src/styles/styles.css`
- Competition media: `assets/images/competitions/`
- Executive board photos: `assets/images/executive-board/`
- Memories: `assets/images/memories/`

Board members without a photo use a branded placeholder. Add the image to the executive-board folder and set its path in `src/scripts/app.js`.

## Deployment

Pushes to the connected branch deploy automatically on Vercel. For a manual production deployment:

```bash
npm run check
npx vercel --prod
```

`vercel.json` defines the build output, clean URLs, and security headers. Keep `.vercel/`, `.env*`, and `dist/` out of Git.

## Credits

Created for AeRobotiX INSAT by Amine Bensaid.
