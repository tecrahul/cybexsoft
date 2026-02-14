# CybexSoft Consultancy Services

Production-ready Next.js 16 App Router website for **CybexSoft Consultancy Services**.

## Stack

- Next.js 16 + App Router + TypeScript
- Tailwind CSS v4 + shadcn-style UI components
- Framer Motion animations
- Theme switching with dark mode default
- React Hook Form + Zod contact validation
- SEO metadata + Open Graph + JSON-LD + sitemap + robots

## Pages

- `/` Home
- `/about` About Us
- `/services` Services
- `/portfolio` Portfolio / Case Studies
- `/blog` Blog
- `/blog/[slug]` Blog details
- `/careers` Careers
- `/contact` Contact Us (form + map)

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

If dependency installation fails in restricted environments, run this when network access is available:

```bash
npm install next-themes react-hook-form zod @hookform/resolvers
```
