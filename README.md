# AeRobotiX Vitrine

Standalone public showcase for AeRobotiX INSAT. It includes the club homepage and dedicated Eurobot and NXP Cup stories, with responsive motion, accessible interactions, live technical simulations, and optimized media loading.

## Run locally

```bash
cd /path/to/aerobotix_identity
npm run dev
```

Open `http://127.0.0.1:4173`.

## Validate

```bash
npm run check
```

Create the same static artifact used by production with `npm run build`. The
generated `dist/` directory is intentionally ignored by Git.

The site has no runtime dependencies or authentication. The membership and partnership forms submit to server-side Vercel Functions, which validate requests before inserting them into Supabase with its public anon key and insert-only Row Level Security policies. The included Node server exists only for local preview, supports clean page URLs, and applies a production-style security-header baseline.

The forms preserve answers on submission failure and only report success after a confirmed response. Retries of unchanged answers reuse a UUID to avoid duplicate applications. Browser verification should intercept these requests with test responses rather than insert test records into the live database.

## Deploy

The repository includes a `vercel.json` configuration with clean URLs and production security headers. After signing in and linking the correct Vercel project:

```bash
npx vercel login
npx vercel link
npm run check
npx vercel --prod
```

Use `npx vercel` without `--prod` when you want a preview URL first. Do not commit `.vercel/`; it contains the local project link.

## Content locations

- Homepage copy and sections: `index.html`
- Eurobot story: `eurobot.html`
- NXP Cup story: `nxp.html`
- Standalone joining page and animated robot: `join.html`, `join.css`, `join.js`
- Membership form: submissions pass through `/api/memberships` into the Supabase `membership_applications` table. Apply `supabase/membership_applications.sql` and configure the same public Supabase environment variables used by the partnership form.
- Partnership page and contact form: `partners.html`, `partners.css`, `partners.js`. The form sends validated requests through the `/api/partnerships` Vercel Function and stores them in the Supabase `partnership_inquiries` table without opening the visitor's email app. Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel, and apply `supabase/partnership_inquiries.sql` to grant insert-only access to the anonymous role.
- Team and homepage gallery data: `app.js`
- Competition interactions and simulations: `competition.js`
- Eurobot competition video: `videos/eurobot.mp4`
- Brand and homepage motion system: `styles.css`
- Competition page visual system: `competition.css`

The supplied `logo-removebg-preview.png` is the transparent logo used for site branding and icons. CSS frames its transparent margins without altering the original artwork. `logo.jpeg` includes the background and is used for the homepage sharing image. Both files are included in production builds. Public images and the optional showreel are delivered from the club's existing Cloudinary account using unsigned delivery URLs; no API secret is included.
