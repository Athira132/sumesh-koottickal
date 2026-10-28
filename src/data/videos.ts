export interface VideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  description: string;
  customThumbnail?: string;
  directWatchUrl?: string;
}

/**
 * 6 FEATURED POPULAR MUSIC & COMPOSITION VIDEOS
 * Strictly in user's specified order:
 * 1. S01yMutUGxk
 * 2. 2dGwbDnfmu4 (Uruki Uruki Theernnidaam - redirects directly to YouTube)
 * 3. PUjf7OxZi0A
 * 4. LoM3U4wEXZE
 * 5. Ii88MEL76d0
 * 6. hYkZIQdZLsk
 */
export const FEATURED_POPULAR_VIDEOS: VideoItem[] = [
  {
    id: 'featured-1',
    youtubeId: 'S01yMutUGxk',
    youtubeUrl: 'https://www.youtube.com/embed/S01yMutUGxk',
    title: 'Sumesh Koottickal — Live Keytar Performance & Fusion Concert',
    description: 'Electrifying live keytar solo performance showcasing dynamic keyboard mastery and stage fusion artistry by Sumesh Koottickal.',
  },
  {
    id: 'featured-2',
    youtubeId: '2dGwbDnfmu4',
    youtubeUrl: 'https://www.youtube.com/embed/2dGwbDnfmu4',
    title: 'Uruki Uruki Theernnidaam — Popular Music Composition',
    description: 'Celebrated original music composition by Sumesh Koottickal with over 50 million views on YouTube.',
    customThumbnail: '/images/cover-uruki-uruki.jpg',
    directWatchUrl: 'https://youtu.be/2dGwbDnfmu4',
  },
  {
    id: 'featured-3',
    youtubeId: 'PUjf7OxZi0A',
    youtubeUrl: 'https://www.youtube.com/embed/PUjf7OxZi0A',
    title: 'Sumesh Koottickal — Instrumental Keyboard Solo & Live Improvisation',
    description: 'Live instrumental performance featuring keyboard arrangements and melodic improvisation by Indian music director Sumesh Koottickal.',
  },
  {
    id: 'featured-4',
    youtubeId: 'LoM3U4wEXZE',
    youtubeUrl: 'https://www.youtube.com/embed/LoM3U4wEXZE',
    title: 'Sumesh Koottickal — Stage Fusion & Musical Repertoire',
    description: 'Energetic live concert segment featuring synthesizers and keytar leads arranged by Sumesh Koottickal.',
  },
  {
    id: 'featured-5',
    youtubeId: 'Ii88MEL76d0',
    youtubeUrl: 'https://www.youtube.com/embed/Ii88MEL76d0',
    title: 'Sumesh Koottickal — Keytar Performance & Arena Stage Show',
    description: 'Arena performance capturing Sumesh Koottickal engaging the audience with signature keytar riffs and contemporary stage production.',
  },
  {
    id: 'featured-6',
    youtubeId: 'hYkZIQdZLsk',
    youtubeUrl: 'https://www.youtube.com/embed/hYkZIQdZLsk',
    title: 'Sumesh Koottickal — Live Concert Performance Showcase',
    description: 'Live stage performance highlighting musical compositions and synthesizer orchestrations by Sumesh Koottickal.',
  },
];

/**
 * REMAINING EXISTING GALLERY VIDEOS
 * Revealed when visitor clicks LOAD MORE
 */
export const REMAINING_GALLERY_VIDEOS: VideoItem[] = [
  {
    id: 'remaining-1',
    youtubeId: 'j2u4JqdjVng',
    youtubeUrl: 'https://www.youtube.com/embed/j2u4JqdjVng',
    title: 'Sumesh Koottickal — Concert Keyboard Solo & Live Harmonies',
    description: 'Live concert performance demonstrating intricate keyboard phrasing and harmonic arrangements.',
  },
  {
    id: 'remaining-2',
    youtubeId: 'ekw_Cr10n4Y',
    youtubeUrl: 'https://www.youtube.com/embed/ekw_Cr10n4Y',
    title: 'Sumesh Koottickal — Theevra Band Live Performance',
    description: 'Ensemble performance featuring Theevra live band with Sumesh Koottickal leading on synthesizers and keytar.',
  },
  {
    id: 'remaining-3',
    youtubeId: 'ZZ5X6iXg3Ak',
    youtubeUrl: 'https://www.youtube.com/embed/ZZ5X6iXg3Ak',
    title: 'Sumesh Koottickal — Keytar Fusion Jam Session',
    description: 'Spontaneous instrumental jam and contemporary fusion lines performed live on stage.',
  },
  {
    id: 'remaining-4',
    youtubeId: 'dg_GBq7O1-o',
    youtubeUrl: 'https://www.youtube.com/embed/dg_GBq7O1-o',
    title: 'Sumesh Koottickal — Stage Concert Recording',
    description: 'Festival stage concert highlights showcasing keytar performance and musical orchestrations.',
  },
  {
    id: 'remaining-5',
    youtubeId: 'sFRtAS0KaRw',
    youtubeUrl: 'https://www.youtube.com/embed/sFRtAS0KaRw',
    title: 'Sumesh Koottickal — Instrumental Melody Showcase',
    description: 'Lyrical keyboard performance playing evocative Malayalam and Indian cinematic melodies.',
  },
  {
    id: 'remaining-6',
    youtubeId: 'htAUAnAmxD8',
    youtubeUrl: 'https://www.youtube.com/embed/htAUAnAmxD8',
    title: 'Sumesh Koottickal — Live Stage Showcase & Keytar Riffs',
    description: 'Concert footage capturing high-energy keytar solos and audience interactions.',
  },
];

export const VIDEO_ITEMS: VideoItem[] = FEATURED_POPULAR_VIDEOS;

export const VIDEO_SECTION_CONFIG = {
  heading: 'POPULAR MUSIC & COMPOSITIONS',
  subtitle: 'FEATURED TRACKS · CONCERT RECORDINGS · REPERTOIRE',
  watchMoreLabel: 'WATCH MORE ON YOUTUBE',
  channelUrl: 'https://www.youtube.com/@SumeshKoottickal',
};
