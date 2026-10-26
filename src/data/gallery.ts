export interface GalleryItem {
  id: string;
  title: string;
  category: 'Live Performances' | 'Portraits' | 'Music & Studio' | 'Behind the Scenes';
  src: string;
  fallbackSrc: string;
  alt: string;
  caption: string;
  span?: string; // For editorial asymmetric grid
}

export const GALLERY_CATEGORIES = [
  'All',
  'Live Performances',
  'Portraits'
] as const;

export type GalleryCategory = typeof GALLERY_CATEGORIES[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-keytar',
    title: 'Electric Blue Keytar Performance',
    category: 'Live Performances',
    src: '/images/hero-keytar.png',
    fallbackSrc: 'https://i.ibb.co/q3SFWrKF/Electric-Blue-Keytar-Performance.png',
    alt: 'Sumesh Koottickal performing live with custom electric blue keytar',
    caption: 'Signature live keytar performance commanding the stage with high-octane musical energy.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'artist-portrait-1',
    title: 'Editorial Artist Portrait',
    category: 'Portraits',
    src: '/images/artist-portrait-1.jpg',
    fallbackSrc: 'https://i.ibb.co/ZR4TCXkh/dd93e88d-f105-43d1-af6d-b5d7a29ba1c3.jpg',
    alt: 'Sumesh Koottickal formal studio portrait',
    caption: 'Formal promotional portrait showcasing the composer and performer.',
    span: 'col-span-1'
  },
  {
    id: 'artist-performance-1',
    title: 'Live Keytar Showcase',
    category: 'Live Performances',
    src: '/images/artist-performance-1.jpg',
    fallbackSrc: 'https://i.ibb.co/MxHfnZ9q/Whats-App-Image-2026-10-24-at-4-07-12-PM.jpg',
    alt: 'Sumesh Koottickal on stage with keytar',
    caption: 'Unbridled concert momentum during a live festival set.',
    span: 'col-span-1'
  },
  {
    id: 'artist-portrait-2',
    title: 'Close-Up Studio Headshot',
    category: 'Portraits',
    src: '/images/artist-portrait-2.jpg',
    fallbackSrc: 'https://i.ibb.co/B5hxqDpv/9c328fdb-036a-4e68-94ab-3bc3128fc66c.jpg',
    alt: 'Sumesh Koottickal close-up artist headshot',
    caption: 'Artist profile capture highlighting stage persona and mentalism artistry.',
    span: 'col-span-1'
  },
  {
    id: 'artist-stage-1',
    title: 'Concert Atmosphere',
    category: 'Live Performances',
    src: '/images/artist-stage-1.jpg',
    fallbackSrc: 'https://i.ibb.co/rfdp6DrW/Whats-App-Image-2026-10-24-at-4-07-12-PM-1.jpg',
    alt: 'Sumesh Koottickal live concert stage lighting',
    caption: 'Immersive stage lighting and performance focus during live festival showcase.',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'artist-performance-2',
    title: 'Stage Presence & Crowd Interaction',
    category: 'Live Performances',
    src: '/images/artist-performance-2.jpg',
    fallbackSrc: 'https://i.ibb.co/W4p7Zs9h/Whats-App-Image-2026-10-24-at-4-07-11-PM-1.jpg',
    alt: 'Sumesh Koottickal interacting with crowd from stage',
    caption: 'Engaging audiences across Kerala with charismatic live showmanship.',
    span: 'col-span-1'
  },
  {
    id: 'artist-stage-2',
    title: 'Concert Climax',
    category: 'Live Performances',
    src: '/images/artist-stage-2.jpg',
    fallbackSrc: 'https://i.ibb.co/KzFHG66Z/Whats-App-Image-2026-10-24-at-4-07-11-PM.jpg',
    alt: 'Sumesh Koottickal live concert finale',
    caption: 'High-energy finale concluding a night of live synth solos and stage mastery.',
    span: 'col-span-1'
  }
];
