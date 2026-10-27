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
    title: 'Sumesh Koottickal | Music Director, Keyboard Artist & Performer',
    description:
      'Explore the official website of Sumesh Koottickal, a music director, keyboard artist and performer associated with Malayalam cinema, live music and Theevra band.',
    canonicalPath: '/',
    keywords: [
      'Sumesh Koottickal',
      'Sumesh',
      'Sumesh Koottickal musician',
      'Sumesh Koottickal music director',
      'Sumesh Koottickal keyboard artist',
      'Sumesh Koottickal performer',
      'Sumesh Koottickal mentalist',
      'Keyboard artist in Kerala',
      'Malayalam music director',
      'Theevra band',
      'Keytar performer Kerala'
    ],
  },
  biography: {
    title: 'About Sumesh Koottickal | Musician, Performer & Music Director',
    description:
      'Discover Sumesh Koottickal\'s musical journey, Malayalam film music credits, keyboard performances, Theevra band association and career highlights.',
    canonicalPath: '/biography',
    keywords: [
      'About Sumesh Koottickal',
      'Sumesh Koottickal biography',
      'Malayalam film music director',
      'Music director in Malayalam cinema',
      'Vishudha Pusthakam music director',
      'Mr. Hacker music',
      'Theevra band',
      'Keyboard and keytar artist'
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
