/**
 * Centralized SEO & Metadata Configuration
 * 
 * Domain-dependent values are unified here. If a custom domain (e.g. https://sumeshkoottickal.com)
 * is connected in the future, updating SITE_DOMAIN updates all canonical URLs, Open Graph tags,
 * and JSON-LD structured data across the entire website.
 */

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
    title: 'Sumesh Koottickal | Music Director & Keytar Performer',
    description:
      'Official website of Sumesh Koottickal — Music Director, Composer, and Keytar Performer. Composed 600+ songs, Malayalam film scores, sports themes, and live stage concerts.',
    canonicalPath: '/',
    keywords: [
      'Sumesh Koottickal',
      'Sumesh Koottickal Music Director',
      'Sumesh Koottickal Composer',
      'Sumesh Koottickal Keytar Performer',
      'Malayalam Music Director',
      'Malayalam Film Music',
      'Keytar Artist',
      'Live Music Performer',
      'Music Composer Kerala',
      'Theevra band',
      'Classic Imperial Cruise'
    ],
  },
  biography: {
    title: 'About Sumesh Koottickal | Music Director & Keytar Performer Biography',
    description:
      'Biography of Sumesh Koottickal: Music director since 2006, 600+ songs, Malayalam cinema scores, Universal Record Forum Icon Award, and keytar artist.',
    canonicalPath: '/biography',
    keywords: [
      'Sumesh Koottickal biography',
      'Sumesh Koottickal Music Director',
      'Sumesh Koottickal Composer',
      'Sumesh Koottickal Keytar Performer',
      'Malayalam Film Music',
      'Chinna Dada music',
      'Vishudha Pusthakam music director',
      'Idukki Blasters music director',
      'Mr. Hacker music',
      'Universal Record Forum Icon Award'
    ],
  },
  music: {
    title: 'Sumesh Koottickal Music | Malayalam Film Music & Songs',
    description:
      'Explore music associated with Sumesh Koottickal, including Malayalam film credits, songs, musical projects and selected releases.',
    canonicalPath: '/music',
    keywords: [
      'Sumesh Koottickal Music',
      'Malayalam film songs',
      'Vishudha Pusthakam',
      'Mr. Hacker songs',
      'Manjuthulli Pole',
      'Chankinu Chanke',
      'Swargam Thurannu Nee Irangeedane',
      'Ore Oru Rajavu Messi',
      'Kalyani',
      'Amsham',
      'Nishani'
    ],
  },
  events: {
    title: 'Sumesh Koottickal | Past Performances & Events',
    description:
      'Explore selected past performance photographs and event highlights associated with Sumesh Koottickal.',
    canonicalPath: '/events',
    keywords: [
      'Sumesh Koottickal live performance',
      'Sumesh Koottickal stage performer',
      'Sumesh Koottickal musical performances',
      'Live music performer Kerala',
      'Kerala live music artist',
      'Malayalam stage performer',
      'Live keyboard performance'
    ],
  },
  mentalism: {
    title: 'Sumesh Koottickal | Mentalism',
    description:
      'Visit the official mentalism page of Sumesh Koottickal for future updates about his mentalism-related projects.',
    canonicalPath: '/mentalism',
    keywords: [
      'Sumesh Koottickal mentalist',
      'Sumesh Koottickal mentalism',
      'Mentalist in Kerala',
      'Mentalism performer Kerala',
      'Mentalism show Kerala'
    ],
  },
  gallery: {
    title: 'Sumesh Koottickal Gallery | Photos & Performance Videos',
    description:
      'Explore photographs and embedded performance videos associated with Sumesh Koottickal, including music, keyboard performances and Theevra band.',
    canonicalPath: '/gallery',
    keywords: [
      'Sumesh Koottickal Gallery',
      'Sumesh Koottickal performance videos',
      'Keytar performance video',
      'Live keyboard concert video',
      'Theevra musical band photos'
    ],
  },
  contact: {
    title: 'Contact Sumesh Koottickal | Official Website',
    description:
      'Find contact information, social media profiles and the digital visiting card for Sumesh Koottickal.',
    canonicalPath: '/contact',
    keywords: [
      'Contact Sumesh Koottickal',
      'Sumesh Koottickal bookings',
      'Sumesh Koottickal contact number',
      'Sumesh Koottickal digital visiting card',
      'Corporate event performer Kerala bookings'
    ],
  },
};

/**
 * Generates JSON-LD Structured Data for Schema.org
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
      'Keytar Performer',
      'Live Performer',
      'Mentalist'
    ],
    description:
      'Indian Music Director, Keyboard Artist, Live Performer, and Mentalist based in Kerala, India. Known for Malayalam film compositions, live fusion concerts, and Theevra band.',
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

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sumesh Koottickal Official Website',
    url: SITE_DOMAIN,
    description:
      'Official portfolio of Sumesh Koottickal — Music Director, Keyboard Artist, Performer & Mentalist.',
    publisher: {
      '@type': 'Person',
      name: 'Sumesh Koottickal'
    }
  };
}

export function getProfilePageSchema(path: string, pageName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `${pageName} — Sumesh Koottickal`,
    url: `${SITE_DOMAIN}${path}`,
    mainEntity: getPersonSchema()
  };
}

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
