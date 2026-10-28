/**
 * Centralized SEO & Structured Data Configuration
 * 
 * Defines unique page titles, meta descriptions, Open Graph tags, and Schema.org JSON-LD structured data.
 * Domain-dependent values are unified here via SITE_DOMAIN.
 */

import type { VideoItem } from './videos';

export const SITE_DOMAIN = 'https://sumesh-koottickal.vercel.app';
export const DEFAULT_OG_IMAGE = `${SITE_DOMAIN}/images/hero-home-new.jpg`;

export interface PageSEO {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string[];
}

export const SEO_DATA: Record<string, PageSEO> = {
  home: {
    title: 'Sumesh Koottickal | Music Director & Keyboard Artist',
    description:
      "Explore Sumesh Koottickal's music journey, film music compositions, keyboard performances, selected film music, and popular music videos.",
    canonicalPath: '/',
    keywords: [
      'Sumesh Koottickal',
      'Music Director',
      'Keyboard Artist',
      'Music Composer',
      'Film Music Composer',
      'Music Producer',
      'Professional Keyboard Player',
      'Music Arranger',
      'Background Music Composer',
      'Malayalam Film Music',
      'Indian Keyboard Artist',
      'Kerala Musician',
      'Theevra Band'
    ],
  },
  biography: {
    title: 'Sumesh Koottickal | Music Director & Composer Biography',
    description:
      'Read the official biography of Sumesh Koottickal, Indian music director and keyboard artist known for Malayalam cinema soundtracks and 600+ compositions.',
    canonicalPath: '/biography',
    keywords: [
      'Sumesh Koottickal Biography',
      'Music Director Biography',
      'Music Director Kerala',
      'Keyboard Artist Career',
      'Malayalam Film Music Composer',
      'Chinna Dada Music Director',
      'Universal Record Forum Icon Award',
      'Classic Imperial Cruise Musician',
      'Music Portfolio'
    ],
  },
  music: {
    title: 'Sumesh Koottickal | Selected Film Music & Compositions',
    description:
      'Discover Malayalam film music scores, background music, original compositions, and music direction credits by Sumesh Koottickal.',
    canonicalPath: '/music',
    keywords: [
      'Sumesh Koottickal Music',
      'Selected Film Music',
      'Film Music Works',
      'Malayalam Film Scores',
      'Background Score Composer',
      'Original Music Composition',
      'Vishudha Pusthakam Music',
      'Mr Hacker Songs',
      'Film Song Composer'
    ],
  },
  gallery: {
    title: 'Sumesh Koottickal | Popular Music Videos & Performance Gallery',
    description:
      'Watch popular music videos, live keytar performances, and concert recordings by Indian music director and keyboard artist Sumesh Koottickal.',
    canonicalPath: '/gallery',
    keywords: [
      'Popular Music Videos',
      'Keyboard Performance Videos',
      'Keytar Performance',
      'Live Concert Videos',
      'Theevra Band Video',
      'Sumesh Koottickal YouTube',
      'Live Music Performance'
    ],
  },
  events: {
    title: 'Sumesh Koottickal | Live Music Performances & Stage Concerts',
    description:
      'Explore live stage performances, keytar fusion concerts, international events, and arena appearances featuring Sumesh Koottickal.',
    canonicalPath: '/events',
    keywords: [
      'Live Music Performance',
      'Stage Concerts Kerala',
      'Keytar Fusion Concert',
      'Arena Music Show',
      'Corporate Event Musician',
      'Live Keyboard Performance',
      'Theevra Live Stage'
    ],
  },
  mentalism: {
    title: 'Sumesh Koottickal | Psychological Mentalism & Stage Art',
    description:
      'Learn about psychological mentalism shows and mind-magic performances by multi-disciplinary artist and music director Sumesh Koottickal.',
    canonicalPath: '/mentalism',
    keywords: [
      'Sumesh Koottickal Mentalist',
      'Mentalism Show Kerala',
      'Psychological Performance Art',
      'Mind Magic Kerala',
      'Stage Illusionist Kerala'
    ],
  },
  contact: {
    title: 'Contact Sumesh Koottickal | Music Direction & Bookings',
    description:
      'Contact music director and keyboard artist Sumesh Koottickal for film music commissions, live concert bookings, and music production enquiries.',
    canonicalPath: '/contact',
    keywords: [
      'Contact Sumesh Koottickal',
      'Music Director Bookings',
      'Film Music Commission',
      'Hire Keyboard Artist',
      'Concert Enquiries Kerala',
      'Sumesh Koottickal Phone Number'
    ],
  },
};

/**
 * Generates Schema.org Person Structured Data for Sumesh Koottickal
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sumesh Koottickal',
    alternateName: ['Sumesh', 'Sumesh Koottickal Musician'],
    url: SITE_DOMAIN,
    image: DEFAULT_OG_IMAGE,
    jobTitle: [
      'Music Director',
      'Keyboard Artist',
      'Music Composer',
      'Film Music Composer',
      'Music Producer',
      'Professional Keyboard Player',
      'Music Arranger',
      'Background Music Composer',
      'Keytar Performer',
      'Mentalist'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Malayalam Cinema & Indian Contemporary Music'
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Kerala',
      addressCountry: 'India'
    },
    description:
      'Indian Music Director, Keyboard Artist, Film Music Composer, and Keytar Performer based in Kerala, India. Known for composing 600+ songs, Malayalam film soundtracks (Chinna Dada, Vishudha Pusthakam, Idukki Blasters, Mr. Hacker), and live fusion concerts.',
    sameAs: [
      'https://www.youtube.com/@Sumeshkoottickal',
      'https://www.instagram.com/sumeshkoottickal/',
      'https://www.facebook.com/share/1CE5V8tXRq/',
      'https://open.spotify.com/artist/5ZogjotJcEfvs8mdWtbA6C?si=gxeOlP6oQmuXg-GHhy58KQ',
      'https://www.vkard.pro/sumesh-koottickal',
      'https://music.apple.com/us/artist/sumesh-koottickal/1412084049'
    ],
  };
}

/**
 * Generates Schema.org WebSite Structured Data
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sumesh Koottickal | Music Director & Keyboard Artist',
    url: SITE_DOMAIN,
    description:
      'Official portfolio and website of Sumesh Koottickal — Music Director, Film Composer, Keyboard Artist, and Stage Performer.',
    publisher: {
      '@type': 'Person',
      name: 'Sumesh Koottickal'
    }
  };
}

/**
 * Generates Schema.org ProfilePage Structured Data
 */
export function getProfilePageSchema(path: string, pageName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `${pageName} — Sumesh Koottickal`,
    url: `${SITE_DOMAIN}${path}`,
    mainEntity: getPersonSchema()
  };
}

/**
 * Generates Schema.org BreadcrumbList Structured Data
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_DOMAIN}${item.path}`
    }))
  };
}

/**
 * Generates Schema.org VideoObject Structured Data for genuine embedded videos.
 * Excludes videos that only redirect or link externally (e.g. featured-2).
 */
export function getVideoObjectSchemas(videos: VideoItem[]) {
  return videos
    .filter((video) => !video.directWatchUrl)
    .map((video) => ({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: video.title,
      description: video.description,
      thumbnailUrl: video.customThumbnail
        ? `${SITE_DOMAIN}${video.customThumbnail}`
        : `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      uploadDate: '2024-01-01T00:00:00+05:30',
      embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    }));
}
