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

The site has no runtime dependencies, authentication, or custom backend. The membership form submits directly to the original joining form's Cloud Firestore project (`aerobotix-b4855`, `members` collection), retaining its field names and string values. The existing Firebase security rules govern these submissions; no administrative credentials are used. Both preview and production CSP allow this specific Firestore host. The included Node server exists only for local preview, supports clean page URLs, and applies a production-style security-header baseline.

The new form preserves answers on submission failure and only reports success after a confirmed response. Retries of unchanged answers reuse a document ID to avoid duplicate applications. Browser verification should intercept these requests with test responses, rather than insert test members into the live collection. Live delivery still needs verification with a genuine application.

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
- Partnership page and contact form: `partners.html`, `partners.css`, `partners.js`. The form sends validated requests through the `/api/partnerships` Vercel Function and stores them in the Supabase `partnership_inquiries` table without opening the visitor's email app. Configure `SUPABASE_URL` and `SUPABASE_SECRET_KEY` in Vercel.
- Team and homepage gallery data: `app.js`
- Competition interactions and simulations: `competition.js`
- Eurobot competition video: `videos/eurobot.mp4`
- Brand and homepage motion system: `styles.css`
- Competition page visual system: `competition.css`

The supplied `logo-removebg-preview.png` is the transparent logo used for site branding and icons. CSS frames its transparent margins without altering the original artwork. `logo.jpeg` includes the background and is used for the homepage sharing image. Both files are included in production builds. Public images and the optional showreel are delivered from the club's existing Cloudinary account using unsigned delivery URLs; no API secret is included.
