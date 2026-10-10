# WebForge portfolio

React + TypeScript + Vite + Tailwind CSS v4, with lucide-react and react-icons.

## Run it

```bash
npm install
cp .env.example .env.local   # then add your Formspree form ID
npm run dev
```

Restart `npm run dev` after editing `.env.local` (Vite only reads it at startup).

## Replace the placeholders

Almost all content lives in **`src/data/content.ts`**: site name/email, services, projects,
skills, social links and the three team members. Edit that file, not the JSX.

## Structure

```
src/
├── components/   reusable pieces (Navbar, Brand, ThemeToggle, SectionHeading,
│                 SocialLinks, FormField, ProjectCard, TeamCard, Footer)
├── sections/     page chapters (Hero, Services, Projects, About, Team, Contact)
├── data/         content.ts: all text/links/icons
├── hooks/        useTheme.ts: light/dark theme + localStorage
├── lib/          validateContact.ts: pure validation function
├── types/        shared TypeScript interfaces
└── index.css     design tokens (--root-* → Tailwind @theme inline)
```

## Contact form (Formspree)

1. Create a form at formspree.io and copy the ID from `https://formspree.io/f/<ID>`.
2. Put it in `.env.local` as `VITE_FORMSPREE_ID=<ID>`.

`VITE_` variables are bundled into the browser build, so never put real secrets there.
A Formspree form ID is meant to be public.

## Scripts

`npm run dev` · `npm run build` · `npm run preview` · `npm run lint`
