# Café Palestine — Website

A responsive Next.js website for Café Palestine (Scheme 33, near Ayoub Goth, Karachi).

## What's inside

- **Home page** with hero, story, full menu, location map, and WhatsApp ordering
- Fully responsive — works on mobile, tablet, and desktop
- Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- A tatreez (Palestinian embroidery) pattern used as a signature visual motif throughout
- Floating WhatsApp "Order Now" button, wired to **0319 3245070**
- Embedded Google Map for Scheme 33, near Ayoub Goth
- All current menu prices, editable in one file: `lib/menu.ts`

## Running it on your laptop

### 1. Install Node.js

You need **Node.js 18.17 or newer**. Download it from [nodejs.org](https://nodejs.org) if you don't already have it. To check what you have:

```bash
node -v
```

### 2. Install the project's packages

Open a terminal, go into this folder, and run:

```bash
npm install
```

This downloads everything the website needs (only needs to be done once, or after you change dependencies). **You need an internet connection for this step** — it also fetches the two Google Fonts used on the site (Reem Kufi and Work Sans) the first time you build or run the project.

### 3. Start the site

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. The site will reload automatically whenever you edit a file.

### 4. When you're ready to put it online

```bash
npm run build
npm run start
```

This creates an optimized production version. When you're ready to go live, this same project can be deployed to a host like Vercel, Netlify, or any Node.js hosting provider — just let me know when you get there and I can walk you through it.

## Editing your menu or prices

Open `lib/menu.ts`. Every dish, price, and category on the site comes from this one file — change a number there and it updates everywhere on the site automatically. No design or coding knowledge needed, just edit the numbers/text between the quotes.

## Editing contact info / address / hours

Also in `lib/menu.ts`, at the bottom, under `restaurant`. Update `whatsappNumber` (used for the WhatsApp links), `address`, and `hours` there.

## Project structure

```
app/            → pages and global styles
components/     → header, hero, menu, map, footer, WhatsApp button
lib/menu.ts     → all your menu items, prices, and contact details (edit this!)
```
