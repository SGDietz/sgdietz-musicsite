# sgdietz.com

Static artist site for SG Dietz, replacing the Bandzoogle host.

## Stack
- Plain HTML / CSS / vanilla JS — no build step
- Hosted on Vercel (free tier)
- Two serverless API routes (Resend) for email signup and contact form
- Full SEO + AEO: JSON-LD (MusicGroup, Person, ContactPage, FAQPage, BreadcrumbList), Open Graph, Twitter Cards, sitemap.xml, robots.txt, llms.txt

## Local dev
```
npm i -g vercel
vercel dev
```

Or for HTML-only preview without API routes:
```
npx serve .
```

## Required Vercel env vars
| Var | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Resend API key for signup + contact mail |
| `RESEND_AUDIENCE_ID` | Audience UUID for email signup list |
| `CONTACT_FROM` | Verified sender, e.g. `SG Dietz <noreply@sgdietz.com>` |
| `CONTACT_TO` | Inbox to receive contact-form submissions, e.g. `SGDietz@pm.me` |

## Deploy
```
git push origin main
```
Vercel auto-deploys on push. First time: connect the repo at vercel.com.

## Domain flip checklist (when ready to leave Bandzoogle)
1. Confirm Vercel preview is fully working at the `*.vercel.app` URL.
2. Export Bandzoogle subscribers → CSV → import to Resend audience.
3. In Vercel: add custom domain `sgdietz.com` + `www.sgdietz.com`. Vercel shows DNS records.
4. At domain registrar: point DNS at Vercel (A record `76.76.21.21` for apex; CNAME `cname.vercel-dns.com` for `www`).
5. Wait for HTTPS cert to issue (a few minutes after DNS propagates).
6. Cancel Bandzoogle subscription.

## File map
```
sgdietz-site/
├── index.html        Home — songs, video, streaming, FAQ, signup
├── who-is.html       About / bio
├── contact.html      Direct contact + form + signup
├── styles.css        Single stylesheet
├── script.js         Form handlers + footer year
├── robots.txt        Crawler rules (AI bots explicitly allowed)
├── sitemap.xml       URL list for search engines
├── llms.txt          AEO summary for AI engines
├── vercel.json       Routing, headers, redirects
├── package.json      For `vercel dev` only
├── api/
│   ├── subscribe.js  POST → Resend audience add
│   └── contact.js    POST → Resend email send
└── public/
    └── art/          Album covers + banner (downloaded from old site)
```
