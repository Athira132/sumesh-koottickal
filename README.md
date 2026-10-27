# Sumesh Koottickal — Official Artist Website

> **Official portfolio website for Sumesh Koottickal — Music Director · Performer · Mentalist from Kerala, India.**
>
> Built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Designed with a cinematic, monochrome visual identity inspired by high-end artist portfolios.

---

## 🌟 Key Architecture & Features

- **Cinematic Monochrome Aesthetics**: Editorial black-and-white theme featuring pure blacks, charcoal surfaces, subtle borders, and bold uppercase typography.
- **Left-Side Vertical Navigation Drawer**:
  - Hamburger toggle in header (desktop & mobile) with animated transition to close icon.
  - Opens a vertical drawer on the **LEFT** side of the screen.
  - Plain text links without numeric prefixes: `HOME`, `BIOGRAPHY`, `MUSIC`, `EVENTS`, `MENTALISM`, `GALLERY`, `CONTACT`.
  - Accessible: click backdrop outside to close, press `Escape` to close, background scroll locked while open.
- **Header Social Media Icons**:
  - Small, crisp white icons for **Instagram**, **YouTube**, and **Facebook** positioned in the header on desktop and in the drawer footer.
  - Links open safely in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- **Homepage Hero**:
  - Main hero photograph from official concert visual (`/images/hero-home-new.jpg`).
  - Artist name preserved in the website header wordmark; no large name or excessive text covering the hero.
  - Subtle tagline near bottom: `MUSIC DIRECTOR · PERFORMER · MENTALIST` with letter spacing and scroll indicator.
  - Homepage content focused strictly on: Hero, brief introduction, three-image gallery preview (without captions), and centered "VIEW MORE" button linking to `/gallery`.
- **Contact Page & Digital Visiting Card**:
  - Prominent **DIGITAL VISITING CARD** button linking directly to [https://www.vkard.pro/sumesh-koottickal](https://www.vkard.pro/sumesh-koottickal) in a new browser tab.
  - Complete direct contact details: Phone (+91 8113070209), Email, Studio Address in Ernakulam, Google Maps link, and validated booking enquiry form.
- **Gallery Page (Photography & Videos)**:
  - **Section A: Photography**: Clean, image-focused uniform 4:3 grid **without any captions, descriptions, or text overlays**. Includes fullscreen image lightbox without text.
  - **Section B: Videos**: Six embedded YouTube performances in uniform 16:9 responsive video players, followed by a centered **WATCH MORE** button opening the official YouTube channel (`https://www.youtube.com/@SumeshKoottickal`).
- **Events Page (Past & Upcoming)**:
  - **Section A: Past Events**: 14 verified past concert and stage photographs arranged in a uniform 4:3 grid with fullscreen view, followed by the elegant **AND MORE...** notice.
  - **Section B: Upcoming Events**: Separate section presenting the minimal **STAY TUNED — NEW PERFORMANCES WILL BE ANNOUNCED SOON** state.
- **Mentalism Page (Special Visual Treatment)**:
  - Custom monochrome theatrical atmosphere with overhead spotlight beam, subtle stage haze, and deep shadows.
  - Retains the special banner visual and displays only:
    `SOMETHING EXTRAORDINARY IS COMING.`
    `MENTALISM — COMING SOON.`
- **Standard Page Hero Banners**:
  - Reusable `HeroBanner` component using `/images/page-hero.jpg` across `Biography`, `Music`, `Events`, `Gallery`, and `Contact`.
- **Sticky Contact Shortcut**:
  - Fixed "LET'S TALK" pill in bottom-right corner across pages (hidden on `/contact` page).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript (strict mode, `verbatimModuleSyntax`)
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Routing**: React Router 7
- **Motion**: Framer Motion
- **Icons**: Lucide React + custom inline SVGs for official social media brand icons
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
│       ├── hero-home-new.jpg    # Homepage hero photograph
│       ├── page-hero.jpg        # Standard page hero banner (Biography, Music, Events, Gallery, Contact)
│       ├── artist-portrait-1.jpg
│       ├── artist-portrait-2.jpg
│       ├── artist-stage-1.jpg
│       ├── artist-performance-1.jpg
│       ├── artist-performance-2.jpg
│       ├── artist-stage-2.jpg
│       └── events/              # 14 verified past event concert photographs
│           ├── event-01.jpg ... event-14.jpg
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Left-side vertical navigation drawer & social media icons
│   │   ├── HeroBanner.tsx       # Standard page hero using page-hero.jpg
│   │   ├── StickyContact.tsx    # Persistent bottom-right "LET'S TALK" shortcut
│   │   ├── Footer.tsx           # Shared minimal footer
│   │   ├── SectionHeading.tsx   # Reusable section title component
│   │   ├── ProjectCard.tsx      # Minimal music project card in charcoal container
│   │   ├── VideoCard.tsx        # Reusable 16:9 YouTube video card component
│   │   ├── GalleryGrid.tsx      # Clean uniform 4:3 grid without captions or overlays
│   │   └── Lightbox.tsx         # Fullscreen keyboard-accessible image lightbox
│   ├── pages/
│   │   ├── Home.tsx             # Homepage with hero, intro, 3-image preview, VIEW MORE button
│   │   ├── Biography.tsx        # Verified biography & career milestones
│   │   ├── Music.tsx            # Clean music discography & film scores
│   │   ├── Events.tsx           # 14 past event photos, AND MORE..., and Stay Tuned state
│   │   ├── Mentalism.tsx        # Theatrical monochrome announcement (no eye icon)
│   │   ├── Gallery.tsx          # Photography grid & 6 YouTube videos with WATCH MORE button
│   │   └── Contact.tsx          # Direct contact, DIGITAL VISITING CARD, & enquiry form
│   ├── data/
│   │   ├── artist.ts            # Central artist profile, social links, contact info
│   │   ├── biography.ts         # Verified milestones, bio paragraphs, disciplines
│   │   ├── music.ts             # Music projects, credits, and streaming links
│   │   ├── events.ts            # 14 past event images & upcoming events config
│   │   ├── gallery.ts           # Gallery photographs (Hero image excluded)
│   │   ├── videos.ts            # 6 YouTube video IDs and channel link
│   │   └── references.ts        # Public source registry (Apple Music, Filmibeat, etc.)
│   ├── App.tsx                  # App root with React Router configuration
│   ├── index.css                # Tailwind directives and custom design tokens
│   └── main.tsx                 # Application entrypoint
├── vercel.json                  # Vercel SPA routing rewrites & asset caching
└── package.json
```

---

## ✏️ How to Update Content & Data Files

All project content is centralized in `src/data/`:

### 1. Managing Events (`src/data/events.ts`)
- **Past Events**: Add/replace items in `PAST_EVENT_IMAGES`:
```typescript
{
  id: 'past-event-15',
  src: '/images/events/event-15.jpg',
  fallbackSrc: 'https://...',
  alt: 'Sumesh Koottickal live concert performance archive',
}
```
- **Upcoming Events**: Add items to `UPCOMING_EVENTS`. When empty, the page automatically presents the minimal **"STAY TUNED — NEW PERFORMANCES WILL BE ANNOUNCED SOON"** notice.

### 2. Managing YouTube Videos (`src/data/videos.ts`)
Add or update video entries in `VIDEO_ITEMS`:
```typescript
{
  id: 'video-7',
  youtubeId: 'YOUR_YOUTUBE_VIDEO_ID',
  youtubeUrl: 'https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID',
}
```

### 3. Managing Gallery Photographs (`src/data/gallery.ts`)
Place new images in `public/images/` and add to `GALLERY_ITEMS`:
```typescript
{
  id: 'stage-moment-4',
  title: 'Concert Moment',
  category: 'Events',
  src: '/images/your-image.jpg',
  fallbackSrc: 'https://...',
  alt: 'Sumesh Koottickal live performance',
  caption: 'Live performance moment.',
}
```

---

## 🚀 Running Locally & Building

```bash
# Start Vite development server
npm run dev

# Build for production
npm run build
```
