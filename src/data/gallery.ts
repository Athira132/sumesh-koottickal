export type GalleryCategory =
  | 'All'
  | 'Music'
  | 'Events'
  | 'Behind the Scenes'
  | 'Portraits'
  | 'Mentalism';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  fallbackSrc: string;
  alt: string;
  caption: string;
}

export const CANONICAL_GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Music',
  'Events',
  'Behind the Scenes',
  'Portraits',
  'Mentalism',
];

// Main photography collection (Hero image is strictly excluded to prevent reuse)
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'artist-portrait-1',
    title: 'Formal Studio Portrait',
    category: 'Portraits',
    src: '/images/artist-portrait-1.jpg',
    fallbackSrc: 'https://i.ibb.co/ZR4TCXkh/dd93e88d-f105-43d1-af6d-b5d7a29ba1c3.jpg',
    alt: 'Sumesh Koottickal formal studio portrait',
    caption: 'Official promotional portrait of Music Director & Performer Sumesh Koottickal.',
  },
  {
    id: 'artist-performance-1',
    title: 'Live Keytar Showcase',
    category: 'Music',
    src: '/images/artist-performance-1.jpg',
    fallbackSrc: 'https://i.ibb.co/MxHfnZ9q/Whats-App-Image-2026-10-24-at-4-07-12-PM.jpg',
    alt: 'Sumesh Koottickal live on stage with keytar',
    caption: 'Dynamic stage performance commanding the audience with live synth solos.',
  },
  {
    id: 'artist-portrait-2',
    title: 'Profile Headshot',
    category: 'Portraits',
    src: '/images/artist-portrait-2.jpg',
    fallbackSrc: 'https://i.ibb.co/B5hxqDpv/9c328fdb-036a-4e68-94ab-3bc3128fc66c.jpg',
    alt: 'Sumesh Koottickal promotional headshot',
    caption: 'Artist profile capture highlighting stage persona and performance focus.',
  },
  {
    id: 'artist-stage-1',
    title: 'Concert Atmosphere',
    category: 'Events',
    src: '/images/artist-stage-1.jpg',
    fallbackSrc: 'https://i.ibb.co/rfdp6DrW/Whats-App-Image-2026-10-24-at-4-07-12-PM-1.jpg',
    alt: 'Sumesh Koottickal concert lighting and live stage',
    caption: 'Immersive concert atmosphere during an arena live music showcase.',
  },
  {
    id: 'artist-performance-2',
    title: 'Stage Presence & Crowd Connection',
    category: 'Events',
    src: '/images/artist-performance-2.jpg',
    fallbackSrc: 'https://i.ibb.co/W4p7Zs9h/Whats-App-Image-2026-10-24-at-4-07-11-PM-1.jpg',
    alt: 'Sumesh Koottickal engaging with audience from stage',
    caption: 'Engaging audiences across festival stages with live musical mastery.',
  },
  {
    id: 'artist-stage-2',
    title: 'Concert Climax',
    category: 'Events',
    src: '/images/artist-stage-2.jpg',
    fallbackSrc: 'https://i.ibb.co/KzFHG66Z/Whats-App-Image-2026-10-24-at-4-07-11-PM.jpg',
    alt: 'Sumesh Koottickal live concert finale',
    caption: 'High-energy finale concluding a night of live performance artistry.',
  },
];
