# Sumesh Koottickal — Official Artist Website

> **Official portfolio website for Sumesh Koottickal — Music Director · Performer · Mentalist from Kerala, India.**
>
> Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Designed with a cinematic, bold monochrome visual identity inspired by high-end artist portfolios.

---

## 🌟 Key Features

- **Cinematic Monochrome Aesthetics**: Editorial black-and-white theme featuring pure blacks, charcoal surface panels, subtle borders, and bold uppercase display typography (`Oswald` & `Inter`).
- **Minimalist Hamburger Navigation**: Present on both desktop and mobile. On desktop, reveals a clean horizontal navigation bar; on mobile, provides a full-screen drawer with accessibility and Escape-to-close support.
- **Hero Priority**: Dominant first-screen impression featuring Sumesh Koottickal performing live with his signature electric blue keytar (`/images/hero-keytar.png`).
- **Exactly Seven Pages**:
  1. `/` — **Home** (Hero, Artist Intro, Selected Works, Events Preview, Mentalism Preview, Gallery Preview, Footer)
  2. `/biography` — **Biography** (Editorial Portrait, Verified History, Areas of Practice, Career Milestones, Source References)
  3. `/music` — **Music** (Landmark Compositions, Feature Film Scores, Collaborations with Dr. K.J. Yesudas, Reusable Projects, Catalog Table)
  4. `/events` — **Events** (Upcoming Calendar with graceful "UPCOMING PERFORMANCES WILL BE ANNOUNCED SOON" empty state, Booking CTA)
  5. `/mentalism` — **Mentalism** (Dedicated, intentionally minimal page with "COMING SOON" primary message)
  6. `/gallery` — **Gallery** (Asymmetric editorial grid with category filtering and full-screen lightbox modal with keyboard controls)
  7. `/contact` — **Contact** (Direct phone, email, vCard, Google Maps address link, and validated enquiry form with `mailto:` fallback)
- **Persistent Sticky Contact Shortcut**: Fixed "LET'S TALK" pill in the bottom-right corner across all pages.
- **Shared Minimalist Footer**: Global artist wordmark, descriptors, navigation, direct contact, and copyright.
- **Centralized Data Layer**: All content, images, tracks, and contact details are stored in modular TypeScript data files in `src/data/` for easy editing.
- **Production & Deployment Ready**: Optimized image assets, Vercel SPA rewrites (`vercel.json`), XML sitemap, and robots.txt.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Routing**: React Router 7
- **Motion & Micro-interactions**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Oswald & Inter)

---

## 📂 Project Structure

```text
sumesh-koottikal/
├── public/
│   ├── favicon.svg              # SK artist monogram SVG favicon
│   ├── robots.txt               # Crawler instructions
│   ├── sitemap.xml              # Search engine XML sitemap
│   └── images/                  # High-resolution downloaded artist photographs
│       ├── hero-keytar.png      # Main homepage hero photo (2.3 MB)
│       ├── artist-portrait-1.jpg
│       ├── artist-portrait-2.jpg
│       ├── artist-stage-1.jpg
│       ├── artist-performance-1.jpg
│       ├── artist-performance-2.jpg
│       └── artist-stage-2.jpg
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Minimalist hamburger header (desktop & mobile)
│   │   ├── HeroBanner.tsx       # Internal pages black hero with centered white title
│   │   ├── StickyContact.tsx    # Persistent bottom-right "LET'S TALK" shortcut
│   │   ├── Footer.tsx           # Shared minimal footer
│   │   ├── SectionHeading.tsx   # Reusable editorial section heading
│   │   ├── ProjectCard.tsx      # Music project and soundtrack card
│   │   ├── EventCard.tsx        # Event schedule card
│   │   ├── GalleryGrid.tsx      # Asymmetric responsive grid with category filters
│   │   └── Lightbox.tsx         # Keyboard-accessible image lightbox
│   ├── pages/
│   │   ├── Home.tsx             # Homepage
│   │   ├── Biography.tsx        # Biography & career timeline
│   │   ├── Music.tsx            # Music discography & film scores
│   │   ├── Events.tsx           # Events & concert schedule
│   │   ├── Mentalism.tsx        # Mentalism (Coming Soon)
│   │   ├── Gallery.tsx          # Photo archive
│   │   └── Contact.tsx          # Direct contact & enquiry form
│   ├── data/
│   │   ├── artist.ts            # Central artist profile, social links, contact info
│   │   ├── biography.ts         # Verified milestones, bio paragraphs, disciplines
│   │   ├── music.ts             # Music projects, collaborations, catalog
│   │   ├── events.ts            # Tour dates, empty state, booking info
│   │   ├── gallery.ts           # Gallery photo metadata and categories
│   │   └── references.ts        # Public source registry (Apple Music, Filmibeat, etc.)
│   ├── App.tsx                  # App root with React Router configuration
│   ├── index.css                # Tailwind directives and custom design tokens
│   └── main.tsx                 # Entrypoint
├── vercel.json                  # Vercel SPA routing rewrites & asset caching
├── PROJECT_REFERENCES.md        # Public verification references & asset source URLs
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended; developed on Node v22)
- npm (v9 or higher)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
This runs TypeScript checking (`tsc -b`) and generates the optimized production bundle in `dist/`.

---

## ✏️ How to Update Content

You do not need to edit complex JSX components to update text, tracks, or images:

| To Update | Edit File |
| :--- | :--- |
| **Artist Bio, Milestones, History** | `src/data/biography.ts` |
| **Music Projects, Credits, YouTube Embeds** | `src/data/music.ts` |
| **Tour Dates, Festivals, Events** | `src/data/events.ts` |
| **Gallery Photos & Categories** | `src/data/gallery.ts` |
| **Phone, Email, Address, Social Links** | `src/data/artist.ts` |

---

## ✉️ Connecting Form Backend (Optional)

By default, the enquiry form uses a safe, verified `mailto:` fallback that pre-populates the user's message in their default mail client. To connect an automated backend without spinning up custom servers:

1. **Formspree**:
   - Register at [formspree.io](https://formspree.io)
   - Replace the form `action` or fetch endpoint in `src/pages/Contact.tsx` with your Formspree endpoint `https://formspree.io/f/YOUR_FORM_ID`.
2. **Resend / EmailJS**:
   - Install the official SDK (`npm i resend` or `npm i @emailjs/browser`) and trigger your template in `src/pages/Contact.tsx`.

---

## 🌐 Deployment to GitHub & Vercel

### Deploying to GitHub
```bash
git init
git add .
git commit -m "Initial release: Sumesh Koottickal official artist website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sumesh-koottickal.git
git push -u origin main
```

### Deploying to Vercel
1. Install the Vercel CLI or link through [vercel.com](https://vercel.com).
2. Run:
```bash
npx vercel
```
3. `vercel.json` is already preconfigured with the SPA rewrites rule (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`), ensuring that all 7 routes work seamlessly on direct page refresh and deep links.
