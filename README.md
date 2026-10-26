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
  - Exact 7-link order: `HOME`, `BIOGRAPHY`, `MUSIC`, `EVENTS`, `MENTALISM`, `GALLERY`, `CONTACT`.
  - Accessible: click backdrop outside to close, press `Escape` to close, background scroll locked while open.
- **Header Social Media Icons**:
  - Small, crisp white icons for **Instagram**, **YouTube**, and **Facebook** positioned in the header on desktop and in the drawer footer.
  - Links open safely in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- **Homepage Hero**:
  - Large name removed from hero image; artist name preserved in the website header.
  - Dominant visual priority with live keytar photograph (`/images/hero-keytar.png`).
  - Small elegant line near bottom: `MUSIC DIRECTOR · PERFORMER · MENTALIST` with subtle letter spacing and subtle scroll indicator.
- **Standard Page Hero Banners**:
  - Reusable `HeroBanner` component using `/images/page-hero.jpg`.
  - Used consistently across `Biography`, `Music`, `Events`, `Gallery`, and `Contact`.
  - Black overlay for high contrast, centered bold uppercase titles.
- **Mentalism Page (Special Visual Treatment)**:
  - Custom monochrome theatrical atmosphere with overhead spotlight beam, subtle stage haze, and deep shadows.
  - **No eye icon or eye symbol**.
  - Prominent headline: `SOMETHING EXTRAORDINARY IS COMING.` followed by `MENTALISM — COMING SOON`.
- **Homepage Gallery Preview**:
  - Exactly **three** uniform 4:3 images with equal spacing.
  - Hero photograph is excluded to prevent duplication.
  - Centered `VIEW MORE` button linking to `/gallery`.
- **Gallery Page (Photography & Videos)**:
  - **Section A: Photography**: Uniform 4:3 grid, data-driven category filtering (`ALL`, `MUSIC`, `EVENTS`, `PORTRAITS`), lightbox viewer with keyboard navigation.
  - **Section B: Videos**: Reusable 16:9 `VideoCard` component, editable `src/data/videos.ts`, and minimal `VIDEOS COMING SOON` empty state when no real videos are added.
- **Events Page (Past & Upcoming)**:
  - **Section A: Past Events**: Structured event cards with venue, date, image/poster, and link.
  - **Section B: Upcoming Events**: Supports real upcoming shows, or defaults to an elegant `STAY TUNED / NEW PERFORMANCES WILL BE ANNOUNCED SOON` state.
- **Music Page**:
  - Minimal layout with standard hero `MUSIC`.
  - Clean intro describing Sumesh as music director and performer strictly from supplied records.
  - Small charcoal cards for projects (`src/data/music.ts`). No fake players or broken embeds.
- **Biography Page**:
  - Strictly verified facts only. No invented birthdate, education, family details, or fake awards.
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
│       ├── hero-keytar.png      # Homepage hero photograph
│       ├── page-hero.jpg        # Standard page hero banner (Biography, Music, Events, Gallery, Contact)
│       ├── artist-portrait-1.jpg
│       ├── artist-portrait-2.jpg
│       ├── artist-stage-1.jpg
│       ├── artist-performance-1.jpg
│       ├── artist-performance-2.jpg
│       └── artist-stage-2.jpg
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Left-side vertical navigation drawer & social media icons
│   │   ├── HeroBanner.tsx       # Standard page hero using page-hero.jpg
│   │   ├── StickyContact.tsx    # Persistent bottom-right "LET'S TALK" shortcut
│   │   ├── Footer.tsx           # Shared minimal footer
│   │   ├── SectionHeading.tsx   # Reusable section title component
│   │   ├── ProjectCard.tsx      # Minimal music project card in charcoal container
│   │   ├── EventCard.tsx        # Event schedule card supporting poster, venue, date, and links
│   │   ├── VideoCard.tsx        # Reusable 16:9 YouTube video card component
│   │   ├── GalleryGrid.tsx      # Uniform 4:3 grid with dynamic category pills
│   │   └── Lightbox.tsx         # Fullscreen keyboard-accessible image lightbox
│   ├── pages/
│   │   ├── Home.tsx             # Homepage with minimal hero & 3-image preview
│   │   ├── Biography.tsx        # Verified biography & career milestones
│   │   ├── Music.tsx            # Clean music discography & film scores
│   │   ├── Events.tsx           # Past & Upcoming events with Stay Tuned state
│   │   ├── Mentalism.tsx        # Theatrical monochrome announcement (no eye icon)
│   │   ├── Gallery.tsx          # Photography grid & video section
│   │   └── Contact.tsx          # Direct contact & enquiry form
│   ├── data/
│   │   ├── artist.ts            # Central artist profile, social links, contact info
│   │   ├── biography.ts         # Verified milestones, bio paragraphs, disciplines
│   │   ├── music.ts             # Music projects, credits, and streaming links
│   │   ├── events.ts            # Centralized events list & Stay Tuned state config
│   │   ├── gallery.ts           # Gallery photographs and categories (Hero image excluded)
│   │   ├── videos.ts            # Video archive & YouTube links config
│   │   └── references.ts        # Public source registry (Apple Music, Filmibeat, etc.)
│   ├── App.tsx                  # App root with React Router configuration
│   ├── index.css                # Tailwind directives and custom design tokens
│   └── main.tsx                 # Application entrypoint
├── vercel.json                  # Vercel SPA routing rewrites & asset caching
└── package.json
```

---

## ✏️ How to Update Content & Data Files

All project content is centralized in `src/data/`. You never need to touch complex React JSX to add or change details:

### 1. Adding or Updating Events (`src/data/events.ts`)
Open `src/data/events.ts` and add an object to `EVENTS_LIST`:
```typescript
{
  id: 'arena-concert-2026',
  title: 'Live Keytar Arena Showcase',
  date: 'November 15, 2026',
  venue: 'Jawaharlal Nehru Stadium',
  city: 'Kochi, Kerala',
  description: 'Full live concert featuring multi-tier keyboard arrangements and special guest appearances.',
  image: '/images/artist-performance-1.jpg', // optional poster image
  status: 'upcoming',                        // 'upcoming' displays in Upcoming Events; 'past' displays in Past Events
  externalLink: 'https://in.bookmyshow.com', // optional ticket or event link
}
```
- **Stay Tuned State**: If there are no items with `status: 'upcoming'`, the page automatically displays the minimal **"STAY TUNED — NEW PERFORMANCES WILL BE ANNOUNCED SOON"** announcement.

### 2. Adding YouTube Videos (`src/data/videos.ts`)
Open `src/data/videos.ts` and add your video entry to `VIDEO_ITEMS`:
```typescript
{
  id: 'live-solo-2026',
  title: 'Live Stage Keytar Solo',
  category: 'Performances',
  youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  description: 'High-voltage live performance from festival tour.'
}
```
- When `VIDEO_ITEMS` is empty, the Gallery page automatically displays the minimal **"VIDEOS COMING SOON"** section without broken embeds or fake thumbnails.

### 3. Adding Gallery Photographs (`src/data/gallery.ts`)
1. Place your new image in `public/images/`.
2. Open `src/data/gallery.ts` and add an entry:
```typescript
{
  id: 'stage-moment-3',
  title: 'Concert Spotlight',
  category: 'Events', // 'Music' | 'Events' | 'Behind the Scenes' | 'Portraits' | 'Mentalism'
  src: '/images/your-new-image.jpg',
  fallbackSrc: '/images/artist-portrait-1.jpg',
  alt: 'Sumesh Koottickal concert spotlight',
  caption: 'Live performance moment.',
}
```
- Containers remain uniformly 4:3 across all devices.
- The homepage preview automatically displays the first three valid images.

### 4. Adding Music Projects (`src/data/music.ts`)
Open `src/data/music.ts` and add an item to `MUSIC_PAGE_DATA.projects`:
```typescript
{
  id: 'new-single',
  projectTitle: 'Track Name',
  filmOrAlbum: 'Album Title',
  category: 'Single',
  year: '2026',
  musicCredits: {
    musicDirector: 'Sumesh Koottickal',
    singers: 'Singer Name',
    lyrics: 'Lyricist Name',
  },
  description: 'Track description.',
  audioUrl: 'https://music.apple.com/...', // optional streaming link
  youtubeUrl: 'https://youtube.com/...',   // optional YouTube link
  isVerified: true,
}
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

## 📦 Production Build

```bash
npm run build
```
This runs TypeScript type checking (`tsc -b`) and generates the production bundle in `dist/`.
